import { defineView, ViewFilterOperand, ViewType } from 'twenty-sdk/define';
import {
  CONTRACT_RENEWAL_STATE_FIELD_ID,
  CONTRACT_UNIVERSAL_IDENTIFIER,
} from '../objects/contract.object';
import { getContractViewFields } from './contracts.view';

export const EXPIRING_CONTRACTS_VIEW_ID =
  '7a100090-0003-4000-8000-000000000003';

export default defineView({
  universalIdentifier: EXPIRING_CONTRACTS_VIEW_ID,
  name: 'Expiring Contracts',
  objectUniversalIdentifier: CONTRACT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconCalendarDue',
  position: 2,
  fields: getContractViewFields([
    '7a100102-0001-4000-8000-000000000001',
    '7a100102-0002-4000-8000-000000000002',
    '7a100102-0003-4000-8000-000000000003',
    '7a100102-0004-4000-8000-000000000004',
    '7a100102-0005-4000-8000-000000000005',
    '7a100102-0006-4000-8000-000000000006',
    '7a100102-0007-4000-8000-000000000007',
    '7a100102-0008-4000-8000-000000000008',
    '7a100102-0009-4000-8000-000000000009',
    '7a100102-0010-4000-8000-000000000010',
    '7a100102-0011-4000-8000-000000000011',
  ]),
  filters: [
    {
      universalIdentifier: '7a100093-0001-4000-8000-000000000001',
      fieldMetadataUniversalIdentifier: CONTRACT_RENEWAL_STATE_FIELD_ID,
      operand: ViewFilterOperand.IS,
      value: ['DUE_SOON', 'ACTION_REQUIRED', 'OVERDUE'],
    },
  ],
});
