export const RENEWAL_STATE = {
  NOT_DUE: 'NOT_DUE',
  DUE_SOON: 'DUE_SOON',
  ACTION_REQUIRED: 'ACTION_REQUIRED',
  OVERDUE: 'OVERDUE',
  EXPIRED: 'EXPIRED',
} as const;

export type RenewalState = (typeof RENEWAL_STATE)[keyof typeof RENEWAL_STATE];

type ContractLifecycleStatus =
  | 'DRAFT'
  | 'UNDER_REVIEW'
  | 'PENDING_APPROVAL'
  | 'ACTIVE'
  | 'EXPIRING'
  | 'RENEWAL_IN_PROGRESS'
  | 'RENEWED'
  | 'EXPIRED'
  | 'TERMINATED';

export type ContractRenewalDetails = {
  daysUntilExpiry: number;
  renewalActionDate: string;
  renewalState: RenewalState;
  renewalInsight: string;
};

const MILLISECONDS_PER_DAY = 86_400_000;

const toUtcDate = (value: string | Date): Date => {
  if (value instanceof Date) {
    return new Date(
      Date.UTC(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate()),
    );
  }

  const [year, month, day] = value.split('-').map(Number);

  return new Date(Date.UTC(year, month - 1, day));
};

const formatDate = (date: Date): string => date.toISOString().slice(0, 10);

export const getDaysUntilExpiry = (
  expiryDate: string | Date,
  referenceDate: string | Date,
): number =>
  Math.round(
    (toUtcDate(expiryDate).getTime() - toUtcDate(referenceDate).getTime()) /
      MILLISECONDS_PER_DAY,
  );

export const getRenewalActionDate = (
  expiryDate: string | Date,
  noticePeriodDays: number,
): string => {
  const actionDate = toUtcDate(expiryDate);
  actionDate.setUTCDate(actionDate.getUTCDate() - noticePeriodDays);

  return formatDate(actionDate);
};

const isClosedLifecycleStatus = (status: ContractLifecycleStatus): boolean =>
  status === 'RENEWED' || status === 'TERMINATED';

export const getRenewalState = ({
  expiryDate,
  renewalActionDate,
  referenceDate,
  status,
}: {
  expiryDate: string | Date;
  renewalActionDate: string | Date;
  referenceDate: string | Date;
  status: ContractLifecycleStatus;
}): RenewalState => {
  if (isClosedLifecycleStatus(status)) {
    return RENEWAL_STATE.NOT_DUE;
  }

  if (
    status === 'EXPIRED' ||
    getDaysUntilExpiry(expiryDate, referenceDate) < 0
  ) {
    return RENEWAL_STATE.EXPIRED;
  }

  if (status === 'RENEWAL_IN_PROGRESS') {
    return RENEWAL_STATE.ACTION_REQUIRED;
  }

  const actionDays = getDaysUntilExpiry(renewalActionDate, referenceDate);
  const expiryDays = getDaysUntilExpiry(expiryDate, referenceDate);

  if (actionDays < 0) {
    return RENEWAL_STATE.OVERDUE;
  }

  if (actionDays <= 14 || expiryDays <= 14) {
    return RENEWAL_STATE.ACTION_REQUIRED;
  }

  if (expiryDays <= 90) {
    return RENEWAL_STATE.DUE_SOON;
  }

  return RENEWAL_STATE.NOT_DUE;
};

export const getRenewalInsight = ({
  daysUntilExpiry,
  renewalActionDate,
  renewalState,
  referenceDate,
}: {
  daysUntilExpiry: number;
  renewalActionDate: string;
  renewalState: RenewalState;
  referenceDate: string | Date;
}): string => {
  if (renewalState === RENEWAL_STATE.EXPIRED) {
    return `Contract expired ${Math.abs(daysUntilExpiry)} days ago.`;
  }

  const actionDays = getDaysUntilExpiry(renewalActionDate, referenceDate);

  if (renewalState === RENEWAL_STATE.OVERDUE) {
    return `Renewal action is overdue by ${Math.abs(actionDays)} days.`;
  }

  if (renewalState === RENEWAL_STATE.ACTION_REQUIRED && actionDays <= 0) {
    return 'Renewal action is required now.';
  }

  if (renewalState === RENEWAL_STATE.ACTION_REQUIRED) {
    return `Renewal action is required within ${actionDays} days.`;
  }

  if (renewalState === RENEWAL_STATE.DUE_SOON) {
    return `Contract expires in ${daysUntilExpiry} days.`;
  }

  return `Contract is not due for ${daysUntilExpiry} days.`;
};

export const calculateContractRenewalDetails = ({
  expiryDate,
  noticePeriodDays,
  referenceDate,
  status,
}: {
  expiryDate: string | Date;
  noticePeriodDays: number;
  referenceDate: string | Date;
  status: ContractLifecycleStatus;
}): ContractRenewalDetails => {
  const renewalActionDate = getRenewalActionDate(expiryDate, noticePeriodDays);
  const daysUntilExpiry = getDaysUntilExpiry(expiryDate, referenceDate);
  const renewalState = getRenewalState({
    expiryDate,
    renewalActionDate,
    referenceDate,
    status,
  });

  return {
    daysUntilExpiry,
    renewalActionDate,
    renewalState,
    renewalInsight: getRenewalInsight({
      daysUntilExpiry,
      renewalActionDate,
      renewalState,
      referenceDate,
    }),
  };
};
