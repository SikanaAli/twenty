export type RouteStop = { id: string; latitude: number; longitude: number; sequence: number };

export type RouteResult = {
  coordinates: [number, number][];
  distanceKm: number;
};

export type VisitStatus = 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED' | 'MISSED' | 'CANCELLED' | 'EXCEPTION';

export type VisitSummary = {
  total: number;
  completed: number;
  outstanding: number;
  missed: number;
  exceptions: number;
};

const toRadians = (value: number) => (value * Math.PI) / 180;

const distanceKm = (first: RouteStop, second: RouteStop) => {
  const latitudeDelta = toRadians(second.latitude - first.latitude);
  const longitudeDelta = toRadians(second.longitude - first.longitude);
  const a = Math.sin(latitudeDelta / 2) ** 2 + Math.cos(toRadians(first.latitude)) * Math.cos(toRadians(second.latitude)) * Math.sin(longitudeDelta / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

export class SimpleRouteProvider {
  getRoute(stops: RouteStop[]): RouteResult {
    const orderedStops = [...stops].sort((first, second) => first.sequence - second.sequence);
    return {
      coordinates: orderedStops.map(({ longitude, latitude }) => [longitude, latitude]),
      distanceKm: orderedStops.slice(1).reduce((total, stop, index) => total + distanceKm(orderedStops[index], stop), 0),
    };
  }
}

export const summarizeVisitStatuses = (statuses: VisitStatus[]): VisitSummary => ({
  total: statuses.length,
  completed: statuses.filter((status) => status === 'COMPLETED').length,
  outstanding: statuses.filter((status) => ['PLANNED', 'IN_PROGRESS'].includes(status)).length,
  missed: statuses.filter((status) => status === 'MISSED').length,
  exceptions: statuses.filter((status) => status === 'EXCEPTION').length,
});

export const calculatePipelineCoverage = (pipelineValue: number, targetValue: number) => (targetValue > 0 ? pipelineValue / targetValue : 0);

