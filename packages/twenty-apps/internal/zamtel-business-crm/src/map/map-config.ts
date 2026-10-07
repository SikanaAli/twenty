export type MapConfig = { pmTilesUrl?: string; vectorSourceLayer?: string };

const DEFAULT_MAP_CONFIG: MapConfig = {
  pmTilesUrl: '/maps/zambia.pmtiles',
  vectorSourceLayer: 'roads',
};

export const getMapConfig = (): MapConfig => {
  if (typeof window === 'undefined') return DEFAULT_MAP_CONFIG;
  const configured = (window as Window & { __ZAMTEL_MAP_CONFIG__?: MapConfig }).__ZAMTEL_MAP_CONFIG__;
  return { ...DEFAULT_MAP_CONFIG, ...configured };
};
