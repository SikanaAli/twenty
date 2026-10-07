import { useEffect, useState } from 'react';
import { CoreApiClient } from 'twenty-client-sdk/core';
import { defineFrontComponent } from 'twenty-sdk/define';

export const SUPERVISOR_OVERVIEW_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER = '7a100120-0003-4000-8000-000000000003';

const SupervisorOverview = () => {
  const [counts, setCounts] = useState({ accounts: 0, opportunities: 0, contracts: 0, visits: 0, attention: 0 });
  useEffect(() => {
    new CoreApiClient().query({ companies: { __args: { first: 100 }, edges: { node: { id: true } } }, opportunities: { __args: { first: 100 }, edges: { node: { id: true } } }, contracts: { __args: { first: 100 }, edges: { node: { id: true, status: true } } }, plannedVisits: { __args: { first: 100 }, edges: { node: { id: true, status: true } } } } as never).then((result) => { const data = result as { companies?: { edges?: unknown[] }; opportunities?: { edges?: unknown[] }; contracts?: { edges?: { node: { status?: string | null } }[] }; plannedVisits?: { edges?: { node: { status?: string | null } }[] } }; const visits = data.plannedVisits?.edges?.map(({ node }) => node) ?? []; setCounts({ accounts: data.companies?.edges?.length ?? 0, opportunities: data.opportunities?.edges?.length ?? 0, contracts: data.contracts?.edges?.length ?? 0, visits: visits.length, attention: visits.filter(({ status }) => ['MISSED', 'EXCEPTION'].includes(status ?? '')).length }); }).catch(() => undefined);
  }, []);
  const cards = [['Active accounts', counts.accounts], ['Pipeline opportunities', counts.opportunities], ['Contracts', counts.contracts], ['Visits today', counts.visits], ['Needs attention', counts.attention]] as const;
  return <div style={{ minHeight: 620, padding: 28, background: '#f8fafc', fontFamily: 'Inter, system-ui, sans-serif', color: '#0f172a' }}><div style={{ textTransform: 'uppercase', color: '#0f766e', fontSize: 12, fontWeight: 700, letterSpacing: 1.4 }}>Zamtel Business CRM</div><h1 style={{ margin: '6px 0' }}>Supervisor overview</h1><p style={{ color: '#64748b' }}>Pipeline, contracts and field execution in one view.</p><div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 12, marginTop: 24 }}>{cards.map(([label, value]) => <div key={label} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 18 }}><div style={{ fontSize: 28, fontWeight: 750 }}>{value}</div><div style={{ color: '#64748b', fontSize: 12, marginTop: 5 }}>{label}</div></div>)}</div><div style={{ marginTop: 18, padding: 18, borderRadius: 12, background: counts.attention > 0 ? '#fff7ed' : '#ecfdf5', color: counts.attention > 0 ? '#c2410c' : '#047857' }}><strong>Requires attention:</strong> {counts.attention} missed or exception visits are in the current plan.</div></div>;
};

export default defineFrontComponent({
  universalIdentifier: SUPERVISOR_OVERVIEW_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER,
  name: 'zamtel-supervisor-overview',
  description: 'Supervisor dashboard for pipeline, contracts and field execution',
  component: SupervisorOverview,
});
