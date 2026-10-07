import { describe, expect, it } from 'vitest';
import { calculatePipelineCoverage, SimpleRouteProvider, summarizeVisitStatuses } from './field-sales';

describe('field sales utilities', () => {
  it('orders route stops and calculates straight-line distance', () => {
    const route = new SimpleRouteProvider().getRoute([
      { id: 'two', latitude: -15.42, longitude: 28.3, sequence: 2 },
      { id: 'one', latitude: -15.4, longitude: 28.28, sequence: 1 },
    ]);
    expect(route.coordinates).toEqual([[28.28, -15.4], [28.3, -15.42]]);
    expect(route.distanceKm).toBeGreaterThan(0);
  });

  it('summarizes today visit states', () => {
    expect(summarizeVisitStatuses(['COMPLETED', 'PLANNED', 'MISSED', 'EXCEPTION'])).toEqual({ total: 4, completed: 1, outstanding: 1, missed: 1, exceptions: 1 });
  });

  it('returns a safe zero coverage when target is empty', () => {
    expect(calculatePipelineCoverage(100, 0)).toBe(0);
    expect(calculatePipelineCoverage(900, 300)).toBe(3);
  });
});
