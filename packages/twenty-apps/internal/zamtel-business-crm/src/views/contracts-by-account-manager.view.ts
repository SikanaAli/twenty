import { defineView, ViewType } from 'twenty-sdk/define';
import {
  CONTRACT_ACCOUNT_MANAGER_FIELD_ID,
  CONTRACT_UNIVERSAL_IDENTIFIER,
} from '../objects/contract.object';
import { getContractViewFields } from './contracts.view';

export const CONTRACTS_BY_ACCOUNT_MANAGER_VIEW_ID =
  '7a100090-0006-4000-8000-000000000006';

export default defineView({
  universalIdentifier: CONTRACTS_BY_ACCOUNT_MANAGER_VIEW_ID,
  name: 'Contracts by Account Manager',
  objectUniversalIdentifier: CONTRACT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconUsersGroup',
  position: 5,
  mainGroupByFieldMetadataUniversalIdentifier:
    CONTRACT_ACCOUNT_MANAGER_FIELD_ID,
  fields: getContractViewFields([
    '7a100105-0001-4000-8000-000000000001',
    '7a100105-0002-4000-8000-000000000002',
    '7a100105-0003-4000-8000-000000000003',
    '7a100105-0004-4000-8000-000000000004',
    '7a100105-0005-4000-8000-000000000005',
    '7a100105-0006-4000-8000-000000000006',
    '7a100105-0007-4000-8000-000000000007',
    '7a100105-0008-4000-8000-000000000008',
    '7a100105-0009-4000-8000-000000000009',
    '7a100105-0010-4000-8000-000000000010',
    '7a100105-0011-4000-8000-000000000011',
  ]),
});
