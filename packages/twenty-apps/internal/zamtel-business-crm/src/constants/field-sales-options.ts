export const CUSTOMER_SITE_TYPES = [
  { id: '7a100201-0001-4000-8000-000000000001', value: 'HEAD_OFFICE', label: 'Head office', position: 0, color: 'blue' as const },
  { id: '7a100201-0002-4000-8000-000000000002', value: 'BRANCH', label: 'Branch', position: 1, color: 'green' as const },
  { id: '7a100201-0003-4000-8000-000000000003', value: 'WAREHOUSE', label: 'Warehouse', position: 2, color: 'orange' as const },
  { id: '7a100201-0004-4000-8000-000000000004', value: 'PLANT', label: 'Plant', position: 3, color: 'purple' as const },
  { id: '7a100201-0005-4000-8000-000000000005', value: 'SERVICE_POINT', label: 'Service point', position: 4, color: 'yellow' as const },
] as const;

export const VISIT_STATUSES = [
  { id: '7a100202-0001-4000-8000-000000000001', value: 'PLANNED', label: 'Planned', position: 0, color: 'blue' as const },
  { id: '7a100202-0002-4000-8000-000000000002', value: 'IN_PROGRESS', label: 'In progress', position: 1, color: 'orange' as const },
  { id: '7a100202-0003-4000-8000-000000000003', value: 'COMPLETED', label: 'Completed', position: 2, color: 'green' as const },
  { id: '7a100202-0004-4000-8000-000000000004', value: 'MISSED', label: 'Missed', position: 3, color: 'red' as const },
  { id: '7a100202-0005-4000-8000-000000000005', value: 'CANCELLED', label: 'Cancelled', position: 4, color: 'gray' as const },
  { id: '7a100202-0006-4000-8000-000000000006', value: 'EXCEPTION', label: 'Exception', position: 5, color: 'red' as const },
] as const;

export const VISIT_PURPOSES = [
  { id: '7a100203-0001-4000-8000-000000000001', value: 'PROSPECTING', label: 'Prospecting', position: 0, color: 'blue' as const },
  { id: '7a100203-0002-4000-8000-000000000002', value: 'CONTRACT_RENEWAL', label: 'Contract renewal', position: 1, color: 'purple' as const },
  { id: '7a100203-0003-4000-8000-000000000003', value: 'ACCOUNT_REVIEW', label: 'Account review', position: 2, color: 'green' as const },
  { id: '7a100203-0004-4000-8000-000000000004', value: 'COLLECTIONS_FOLLOW_UP', label: 'Collections follow-up', position: 3, color: 'orange' as const },
  { id: '7a100203-0005-4000-8000-000000000005', value: 'SERVICE_REVIEW', label: 'Service review', position: 4, color: 'cyan' as const },
  { id: '7a100203-0006-4000-8000-000000000006', value: 'UPSELL_CROSS_SELL', label: 'Upsell / cross-sell', position: 5, color: 'yellow' as const },
  { id: '7a100203-0007-4000-8000-000000000007', value: 'CUSTOMER_SUPPORT_FOLLOW_UP', label: 'Customer support follow-up', position: 6, color: 'pink' as const },
] as const;

export const LOCATION_SOURCES = [
  { id: '7a100204-0001-4000-8000-000000000001', value: 'MOBILE_SAMPLE', label: 'Mobile sample', position: 0, color: 'blue' as const },
  { id: '7a100204-0002-4000-8000-000000000002', value: 'FIELD_CHECK_IN', label: 'Field check-in', position: 1, color: 'green' as const },
  { id: '7a100204-0003-4000-8000-000000000003', value: 'IMPORTED', label: 'Imported', position: 2, color: 'gray' as const },
] as const;
