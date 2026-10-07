export const CONTRACT_STATUSES = [
  {
    id: '7a100081-0001-4000-8000-000000000001',
    value: 'DRAFT',
    label: 'Draft',
    position: 0,
    color: 'gray' as const,
  },
  {
    id: '7a100081-0002-4000-8000-000000000002',
    value: 'UNDER_REVIEW',
    label: 'Under review',
    position: 1,
    color: 'blue' as const,
  },
  {
    id: '7a100081-0003-4000-8000-000000000003',
    value: 'PENDING_APPROVAL',
    label: 'Pending approval',
    position: 2,
    color: 'orange' as const,
  },
  {
    id: '7a100081-0004-4000-8000-000000000004',
    value: 'ACTIVE',
    label: 'Active',
    position: 3,
    color: 'green' as const,
  },
  {
    id: '7a100081-0005-4000-8000-000000000005',
    value: 'EXPIRING',
    label: 'Expiring',
    position: 4,
    color: 'yellow' as const,
  },
  {
    id: '7a100081-0006-4000-8000-000000000006',
    value: 'RENEWAL_IN_PROGRESS',
    label: 'Renewal in progress',
    position: 5,
    color: 'purple' as const,
  },
  {
    id: '7a100081-0007-4000-8000-000000000007',
    value: 'RENEWED',
    label: 'Renewed',
    position: 6,
    color: 'blue' as const,
  },
  {
    id: '7a100081-0008-4000-8000-000000000008',
    value: 'EXPIRED',
    label: 'Expired',
    position: 7,
    color: 'red' as const,
  },
  {
    id: '7a100081-0009-4000-8000-000000000009',
    value: 'TERMINATED',
    label: 'Terminated',
    position: 8,
    color: 'gray' as const,
  },
];

export const CONTRACT_TYPES = [
  {
    id: '7a100082-0001-4000-8000-000000000001',
    value: 'SERVICE_AGREEMENT',
    label: 'Service agreement',
    position: 0,
    color: 'blue' as const,
  },
  {
    id: '7a100082-0002-4000-8000-000000000002',
    value: 'MANAGED_SERVICES',
    label: 'Managed services',
    position: 1,
    color: 'purple' as const,
  },
  {
    id: '7a100082-0003-4000-8000-000000000003',
    value: 'CONNECTIVITY',
    label: 'Connectivity',
    position: 2,
    color: 'green' as const,
  },
  {
    id: '7a100082-0004-4000-8000-000000000004',
    value: 'FRAMEWORK_AGREEMENT',
    label: 'Framework agreement',
    position: 3,
    color: 'orange' as const,
  },
];

export const RENEWAL_TYPES = [
  {
    id: '7a100083-0001-4000-8000-000000000001',
    value: 'MANUAL',
    label: 'Manual renewal',
    position: 0,
    color: 'gray' as const,
  },
  {
    id: '7a100083-0002-4000-8000-000000000002',
    value: 'AUTO_RENEWAL',
    label: 'Auto renewal',
    position: 1,
    color: 'green' as const,
  },
  {
    id: '7a100083-0003-4000-8000-000000000003',
    value: 'RENEGOTIATION',
    label: 'Renegotiation',
    position: 2,
    color: 'orange' as const,
  },
];

export const BILLING_FREQUENCIES = [
  {
    id: '7a100084-0001-4000-8000-000000000001',
    value: 'MONTHLY',
    label: 'Monthly',
    position: 0,
    color: 'blue' as const,
  },
  {
    id: '7a100084-0002-4000-8000-000000000002',
    value: 'QUARTERLY',
    label: 'Quarterly',
    position: 1,
    color: 'purple' as const,
  },
  {
    id: '7a100084-0003-4000-8000-000000000003',
    value: 'ANNUALLY',
    label: 'Annually',
    position: 2,
    color: 'green' as const,
  },
  {
    id: '7a100084-0004-4000-8000-000000000004',
    value: 'ONE_TIME',
    label: 'One time',
    position: 3,
    color: 'gray' as const,
  },
];

export const SLA_SERVICE_TIERS = [
  {
    id: '7a100085-0001-4000-8000-000000000001',
    value: 'STANDARD',
    label: 'Standard',
    position: 0,
    color: 'gray' as const,
  },
  {
    id: '7a100085-0002-4000-8000-000000000002',
    value: 'PRIORITY',
    label: 'Priority',
    position: 1,
    color: 'blue' as const,
  },
  {
    id: '7a100085-0003-4000-8000-000000000003',
    value: 'MISSION_CRITICAL',
    label: 'Mission critical',
    position: 2,
    color: 'red' as const,
  },
];

export const RENEWAL_STATES = [
  {
    id: '7a100086-0001-4000-8000-000000000001',
    value: 'NOT_DUE',
    label: 'Not due',
    position: 0,
    color: 'green' as const,
  },
  {
    id: '7a100086-0002-4000-8000-000000000002',
    value: 'DUE_SOON',
    label: 'Due soon',
    position: 1,
    color: 'yellow' as const,
  },
  {
    id: '7a100086-0003-4000-8000-000000000003',
    value: 'ACTION_REQUIRED',
    label: 'Action required',
    position: 2,
    color: 'orange' as const,
  },
  {
    id: '7a100086-0004-4000-8000-000000000004',
    value: 'OVERDUE',
    label: 'Overdue',
    position: 3,
    color: 'red' as const,
  },
  {
    id: '7a100086-0005-4000-8000-000000000005',
    value: 'EXPIRED',
    label: 'Expired',
    position: 4,
    color: 'gray' as const,
  },
];

export const CONTRACT_STATUS_VALUES = CONTRACT_STATUSES.map(
  ({ value }) => value,
);
export const RENEWAL_STATE_VALUES = RENEWAL_STATES.map(({ value }) => value);
