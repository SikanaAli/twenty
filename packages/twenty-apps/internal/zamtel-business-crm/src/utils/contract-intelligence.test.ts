import { describe, expect, it } from 'vitest';
import {
  calculateContractRenewalDetails,
  getDaysUntilExpiry,
  getRenewalActionDate,
  getRenewalState,
  RENEWAL_STATE,
} from './contract-intelligence';

const REFERENCE_DATE = '2026-10-07';

describe('contract intelligence', () => {
  it('calculates calendar days until expiry without using the machine clock', () => {
    expect(getDaysUntilExpiry('2026-11-23', REFERENCE_DATE)).toBe(47);
    expect(getDaysUntilExpiry('2026-10-07', REFERENCE_DATE)).toBe(0);
    expect(getDaysUntilExpiry('2026-10-02', REFERENCE_DATE)).toBe(-5);
  });

  it('calculates a renewal action date from the notice period', () => {
    expect(getRenewalActionDate('2026-11-30', 30)).toBe('2026-10-31');
    expect(getRenewalActionDate('2027-01-01', 14)).toBe('2026-12-18');
  });

  it('classifies a non-due active contract', () => {
    expect(
      getRenewalState({
        expiryDate: '2027-04-30',
        renewalActionDate: '2027-03-31',
        referenceDate: REFERENCE_DATE,
        status: 'ACTIVE',
      }),
    ).toBe(RENEWAL_STATE.NOT_DUE);
  });

  it('classifies due-soon contracts at the 90-day boundary', () => {
    expect(
      getRenewalState({
        expiryDate: '2027-01-05',
        renewalActionDate: '2026-12-06',
        referenceDate: REFERENCE_DATE,
        status: 'ACTIVE',
      }),
    ).toBe(RENEWAL_STATE.DUE_SOON);
  });

  it('classifies action-required and overdue renewal deadlines', () => {
    expect(
      getRenewalState({
        expiryDate: '2026-12-01',
        renewalActionDate: '2026-10-21',
        referenceDate: REFERENCE_DATE,
        status: 'ACTIVE',
      }),
    ).toBe(RENEWAL_STATE.ACTION_REQUIRED);

    expect(
      getRenewalState({
        expiryDate: '2026-11-30',
        renewalActionDate: '2026-09-30',
        referenceDate: REFERENCE_DATE,
        status: 'ACTIVE',
      }),
    ).toBe(RENEWAL_STATE.OVERDUE);
  });

  it('classifies expired contracts and reports the expiry insight', () => {
    const details = calculateContractRenewalDetails({
      expiryDate: '2026-10-02',
      noticePeriodDays: 30,
      referenceDate: REFERENCE_DATE,
      status: 'EXPIRED',
    });

    expect(details.renewalState).toBe(RENEWAL_STATE.EXPIRED);
    expect(details.renewalInsight).toBe('Contract expired 5 days ago.');
  });

  it('does not flag renewed or terminated contracts as actionable', () => {
    expect(
      getRenewalState({
        expiryDate: '2026-10-01',
        renewalActionDate: '2026-09-01',
        referenceDate: REFERENCE_DATE,
        status: 'RENEWED',
      }),
    ).toBe(RENEWAL_STATE.NOT_DUE);
    expect(
      getRenewalState({
        expiryDate: '2026-10-01',
        renewalActionDate: '2026-09-01',
        referenceDate: REFERENCE_DATE,
        status: 'TERMINATED',
      }),
    ).toBe(RENEWAL_STATE.NOT_DUE);
  });
});
