import { useEffect, useMemo, useRef, useState } from 'react';
import { CoreApiClient } from 'twenty-client-sdk/core';
import { defineFrontComponent } from 'twenty-sdk/define';
import maplibregl from 'maplibre-gl';
import { Protocol } from 'pmtiles';
import { getMapConfig } from '../map/map-config';
import { RouteStop, SimpleRouteProvider, summarizeVisitStatuses } from '../utils/field-sales';

export const FIELD_SALES_MAP_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER = '7a100120-0001-4000-8000-000000000001';

type Site = { id: string; name: string; siteAddress?: string | null; latitude: number; longitude: number; account?: { name?: string | null } | null };
type Location = { id: string; managerName: string; latitude: number; longitude: number; recordedAt?: string | null };
type Visit = { id: string; name: string; managerName: string; sequence: number; purpose: string; status: string; plannedStartTime?: string | null; customerSite?: Site | null };

const colors: Record<string, string> = { COMPLETED: '#16a34a', IN_PROGRESS: '#f59e0b', PLANNED: '#2563eb', MISSED: '#dc2626', EXCEPTION: '#be123c', CANCELLED: '#64748b' };

const FieldSalesMap = () => {
  const mapElement = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | undefined>(undefined);
  const [sites, setSites] = useState<Site[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [visits, setVisits] = useState<Visit[]>([]);
  const [selectedManager, setSelectedManager] = useState<string>();
  const [selectedVisit, setSelectedVisit] = useState<Visit>();
  const [baseMapStatus, setBaseMapStatus] = useState('CRM overlay fallback');
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    const client = new CoreApiClient();
    client.query({
      customerSites: { __args: { first: 100 }, edges: { node: { id: true, name: true, siteAddress: true, latitude: true, longitude: true, account: { name: true } } } },
      accountManagerLocations: { __args: { first: 100 }, edges: { node: { id: true, managerName: true, latitude: true, longitude: true, recordedAt: true } } },
      plannedVisits: { __args: { first: 100 }, edges: { node: { id: true, name: true, managerName: true, sequence: true, purpose: true, status: true, plannedStartTime: true, customerSite: { id: true, name: true, latitude: true, longitude: true, account: { name: true } } } } },
    } as never).then((result) => {
      const data = result as { customerSites?: { edges?: { node: Site }[] }; accountManagerLocations?: { edges?: { node: Location }[] }; plannedVisits?: { edges?: { node: Visit }[] } };
      setSites(data.customerSites?.edges?.map(({ node }) => node) ?? []);
      setLocations(data.accountManagerLocations?.edges?.map(({ node }) => node) ?? []);
      setVisits(data.plannedVisits?.edges?.map(({ node }) => node) ?? []);
    }).catch(() => undefined);
  }, []);

  const managers = useMemo(() => [...new Set([...locations.map(({ managerName }) => managerName), ...visits.map(({ managerName }) => managerName)])].filter(Boolean), [locations, visits]);
  const visibleVisits = selectedManager ? visits.filter(({ managerName }) => managerName === selectedManager) : visits;
  const summary = summarizeVisitStatuses(visibleVisits.map(({ status }) => status as never));

  useEffect(() => {
    if (!mapElement.current || mapRef.current) return;
    try {
      const config = getMapConfig();
      const protocol = new Protocol();
      maplibregl.addProtocol('pmtiles', protocol.tile);
      const map = new maplibregl.Map({ container: mapElement.current, center: [28.3, -15.42], zoom: 10, style: { version: 8, sources: {}, layers: [{ id: 'background', type: 'background', paint: { 'background-color': '#eef3f8' } }] } });
      mapRef.current = map;
      map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
      map.on('load', () => {
        if (config.pmTilesUrl) {
          fetch(config.pmTilesUrl, { method: 'HEAD' }).then((response) => {
            if (!response.ok) return;
            map.addSource('pmtiles-base', { type: 'vector', url: `pmtiles://${config.pmTilesUrl}` });
            map.addLayer({ id: 'pmtiles-roads', type: 'line', source: 'pmtiles-base', 'source-layer': config.vectorSourceLayer ?? 'roads', paint: { 'line-color': '#cbd5e1', 'line-width': 1.5 } });
            setBaseMapStatus('PMTiles base map');
          }).catch(() => undefined);
        }
      });
      return () => { map.remove(); maplibregl.removeProtocol('pmtiles'); mapRef.current = undefined; };
    } catch {
      setMapError(true);
      setBaseMapStatus('CRM overlay fallback · canvas unavailable');
      return undefined;
    }
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !map.isStyleLoaded()) return;
    const siteFeatures = sites.filter(({ latitude, longitude }) => Number.isFinite(latitude) && Number.isFinite(longitude)).map((site) => ({ type: 'Feature' as const, properties: { id: site.id, name: site.name }, geometry: { type: 'Point' as const, coordinates: [site.longitude, site.latitude] } }));
    const managerFeatures = locations.map((location) => ({ type: 'Feature' as const, properties: { id: location.id, managerName: location.managerName }, geometry: { type: 'Point' as const, coordinates: [location.longitude, location.latitude] } }));
    const routeStops: RouteStop[] = visibleVisits.flatMap((visit) => visit.customerSite ? [{ id: visit.id, latitude: visit.customerSite.latitude, longitude: visit.customerSite.longitude, sequence: visit.sequence }] : []);
    const route = new SimpleRouteProvider().getRoute(routeStops);
    const visitFeatures = visibleVisits.flatMap((visit) => visit.customerSite ? [{ type: 'Feature' as const, properties: { id: visit.id, status: visit.status, name: visit.name }, geometry: { type: 'Point' as const, coordinates: [visit.customerSite.longitude, visit.customerSite.latitude] } }] : []);
    const routeFeature = { type: 'Feature' as const, properties: {}, geometry: { type: 'LineString' as const, coordinates: route.coordinates } };
    const setSource = (id: string, data: unknown) => {
      const source = map.getSource(id) as maplibregl.GeoJSONSource | undefined;
      if (source) source.setData(data as never); else map.addSource(id, { type: 'geojson', data: data as never });
    };
    setSource('customer-sites', { type: 'FeatureCollection', features: siteFeatures });
    setSource('manager-locations', { type: 'FeatureCollection', features: managerFeatures });
    setSource('today-visits', { type: 'FeatureCollection', features: visitFeatures });
    setSource('manager-route', { type: 'FeatureCollection', features: route.coordinates.length > 1 ? [routeFeature] : [] });
    if (!map.getLayer('customer-sites-layer')) map.addLayer({ id: 'customer-sites-layer', type: 'circle', source: 'customer-sites', paint: { 'circle-radius': 6, 'circle-color': '#0f766e', 'circle-stroke-color': '#ffffff', 'circle-stroke-width': 2 } });
    if (!map.getLayer('manager-locations-layer')) map.addLayer({ id: 'manager-locations-layer', type: 'circle', source: 'manager-locations', paint: { 'circle-radius': 8, 'circle-color': '#f97316', 'circle-stroke-color': '#ffffff', 'circle-stroke-width': 2 } });
    if (!map.getLayer('today-visits-layer')) map.addLayer({ id: 'today-visits-layer', type: 'circle', source: 'today-visits', paint: { 'circle-radius': 9, 'circle-color': ['match', ['get', 'status'], 'COMPLETED', colors.COMPLETED, 'MISSED', colors.MISSED, 'EXCEPTION', colors.EXCEPTION, colors.PLANNED], 'circle-stroke-color': '#ffffff', 'circle-stroke-width': 2 } });
    if (!map.getLayer('manager-route-layer')) map.addLayer({ id: 'manager-route-layer', type: 'line', source: 'manager-route', paint: { 'line-color': '#f97316', 'line-width': 3, 'line-dasharray': [1, 1] } });
    map.on('click', 'today-visits-layer', (event: maplibregl.MapLayerMouseEvent) => { const id = event.features?.[0]?.properties?.id; setSelectedVisit(visits.find((visit) => visit.id === id)); });
    map.on('mouseenter', 'today-visits-layer', () => { map.getCanvas().style.cursor = 'pointer'; });
    map.on('mouseleave', 'today-visits-layer', () => { map.getCanvas().style.cursor = ''; });
  }, [locations, sites, visits, visibleVisits]);

  return <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 340px', minHeight: 620, height: 'calc(100vh - 170px)', fontFamily: 'Inter, system-ui, sans-serif', color: '#0f172a', background: '#f8fafc' }}>
    <div style={{ position: 'relative', minHeight: 620 }}>{mapError ? <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: 'linear-gradient(135deg, #e0f2fe, #f8fafc 52%, #dcfce7)' }}><svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}><polyline points={visibleVisits.map((_, index) => `${20 + ((index * 29) % 62)},${28 + ((index * 19) % 52)}`).join(' ')} fill="none" stroke="#f97316" strokeWidth="0.8" strokeDasharray="2 1" /></svg>{sites.map((site, index) => <button key={site.id} type="button" aria-label={site.name} onClick={() => setSelectedVisit(visits.find((visit) => visit.customerSite?.id === site.id))} style={{ position: 'absolute', left: `${14 + ((index * 31) % 74)}%`, top: `${18 + ((index * 47) % 65)}%`, width: 16, height: 16, borderRadius: '50%', border: '2px solid #fff', background: '#0f766e', boxShadow: '0 2px 7px #0f172a44', cursor: 'pointer' }} />)}{locations.map((location, index) => <span key={location.id} title={location.managerName} style={{ position: 'absolute', left: `${18 + ((index * 43) % 68)}%`, top: `${12 + ((index * 37) % 70)}%`, width: 13, height: 13, borderRadius: '50%', border: '2px solid #fff', background: '#f97316', boxShadow: '0 2px 7px #0f172a44' }} />)}</div> : <div ref={mapElement} style={{ position: 'absolute', inset: 0 }} />}<div style={{ position: 'absolute', top: 16, left: 16, padding: '8px 12px', borderRadius: 8, background: '#ffffffee', boxShadow: '0 2px 10px #0f172a22', fontSize: 12, fontWeight: 600 }}>{baseMapStatus} · {sites.length} sites</div></div>
    <aside style={{ overflow: 'auto', padding: 20, borderLeft: '1px solid #e2e8f0', background: '#ffffff' }}>
      <div style={{ marginBottom: 20 }}><div style={{ fontSize: 12, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1 }}>Zamtel Business</div><h1 style={{ margin: '6px 0 4px', fontSize: 22 }}>Field sales</h1><p style={{ margin: 0, color: '#64748b', fontSize: 13 }}>Today’s route control tower</p></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 20 }}>{[['Visits', summary.total], ['Done', summary.completed], ['Attention', summary.missed + summary.exceptions]].map(([label, value]) => <div key={label} style={{ padding: 10, borderRadius: 10, background: '#f1f5f9' }}><div style={{ fontSize: 20, fontWeight: 700 }}>{value}</div><div style={{ fontSize: 11, color: '#64748b' }}>{label}</div></div>)}</div>
      <h2 style={{ fontSize: 13, margin: '0 0 8px' }}>Account managers</h2>
      {managers.map((manager) => { const managerVisits = visits.filter(({ managerName }) => managerName === manager); const managerLocation = locations.find(({ managerName }) => managerName === manager); return <button key={manager} type="button" onClick={() => setSelectedManager(selectedManager === manager ? undefined : manager)} style={{ width: '100%', textAlign: 'left', border: selectedManager === manager ? '2px solid #0f766e' : '1px solid #e2e8f0', background: '#fff', borderRadius: 10, padding: 10, marginBottom: 8, cursor: 'pointer' }}><div style={{ fontWeight: 650, fontSize: 13 }}>{manager}</div><div style={{ color: '#64748b', fontSize: 11 }}>{managerVisits.length} visits · latest {managerLocation ? new Date(managerLocation.recordedAt ?? '').toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'not sampled'}</div></button>; })}
      <h2 style={{ fontSize: 13, margin: '20px 0 8px' }}>Today’s visits {selectedManager ? `· ${selectedManager}` : ''}</h2>
      {visibleVisits.sort((first, second) => first.sequence - second.sequence).map((visit) => <button key={visit.id} type="button" onClick={() => setSelectedVisit(visit)} style={{ width: '100%', textAlign: 'left', border: selectedVisit?.id === visit.id ? '2px solid #2563eb' : '1px solid #e2e8f0', background: '#fff', borderRadius: 10, padding: 10, marginBottom: 8, cursor: 'pointer' }}><div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}><span style={{ fontWeight: 650, fontSize: 12 }}>{visit.sequence}. {visit.customerSite?.name ?? visit.name}</span><span style={{ color: colors[visit.status] ?? '#64748b', fontSize: 10, fontWeight: 700 }}>{visit.status}</span></div><div style={{ color: '#64748b', fontSize: 11, marginTop: 4 }}>{visit.purpose.split('_').join(' ')} · {visit.managerName}</div></button>)}
      {selectedVisit && <div style={{ marginTop: 16, padding: 12, borderRadius: 10, background: '#ecfeff', border: '1px solid #a5f3fc' }}><div style={{ fontSize: 11, color: '#0e7490', fontWeight: 700 }}>SELECTED VISIT</div><div style={{ fontWeight: 700, marginTop: 4 }}>{selectedVisit.customerSite?.name}</div><div style={{ fontSize: 12, color: '#475569', marginTop: 4 }}>{selectedVisit.customerSite?.account?.name}</div><div style={{ fontSize: 12, color: '#475569' }}>{selectedVisit.customerSite?.siteAddress}</div></div>}
    </aside>
  </div>;
};

export default defineFrontComponent({ universalIdentifier: FIELD_SALES_MAP_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER, name: 'zamtel-field-sales-map', description: 'Map and route control tower for field sales', component: FieldSalesMap });
