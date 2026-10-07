import { defineView, ViewFilterOperand, ViewType } from 'twenty-sdk/define';
import {
  CONTRACT_STATUS_FIELD_ID,
  CONTRACT_UNIVERSAL_IDENTIFIER,
} from '../objects/contract.object';
import { getContractViewFields } from './contracts.view';

export const ACTIVE_CONTRACTS_VIEW_ID = '7a100090-0002-4000-8000-000000000002';

export default defineView({
  universalIdentifier: ACTIVE_CONTRACTS_VIEW_ID,
  name: 'Active Contracts',
  objectUniversalIdentifier: CONTRACT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconFileCheck',
  position: 1,
  fields: getContractViewFields([
    '7a100101-0001-4000-8000-000000000001',
    '7a100101-0002-4000-8000-000000000002',
    '7a100101-0003-4000-8000-000000000003',
    '7a100101-0004-4000-8000-000000000004',
    '7a100101-0005-4000-8000-000000000005',
    '7a100101-0006-4000-8000-000000000006',
    '7a100101-0007-4000-8000-000000000007',
    '7a100101-0008-4000-8000-000000000008',
    '7a100101-0009-4000-8000-000000000009',
    '7a100101-0010-4000-8000-000000000010',
    '7a100101-0011-4000-8000-000000000011',
  ]),
  filters: [
    {
      universalIdentifier: '7a100092-0001-4000-8000-000000000001',
      fieldMetadataUniversalIdentifier: CONTRACT_STATUS_FIELD_ID,
      operand: ViewFilterOperand.IS,
      value: ['ACTIVE', 'EXPIRING', 'RENEWAL_IN_PROGRESS'],
    },
  ],
});
