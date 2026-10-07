import {
  defineField,
  FieldType,
  OnDeleteAction,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { CONTRACT_UNIVERSAL_IDENTIFIER } from '../objects/contract.object';

export const CONTRACT_ACCOUNT_FIELD_ID = '7a100072-0001-4000-8000-000000000001';
export const COMPANY_CONTRACTS_FIELD_ID =
  '7a100072-0002-4000-8000-000000000002';

export default defineField({
  universalIdentifier: CONTRACT_ACCOUNT_FIELD_ID,
  objectUniversalIdentifier: CONTRACT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'account',
  label: 'Account',
  icon: 'IconBuildingSkyscraper',
  relationTargetObjectMetadataUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: COMPANY_CONTRACTS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'accountId',
  },
});
