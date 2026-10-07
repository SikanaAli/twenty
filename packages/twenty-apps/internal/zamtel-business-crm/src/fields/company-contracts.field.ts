import {
  defineField,
  FieldType,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { CONTRACT_UNIVERSAL_IDENTIFIER } from '../objects/contract.object';
import {
  COMPANY_CONTRACTS_FIELD_ID,
  CONTRACT_ACCOUNT_FIELD_ID,
} from './contract-account.field';

export default defineField({
  universalIdentifier: COMPANY_CONTRACTS_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.RELATION,
  name: 'contracts',
  label: 'Contracts',
  icon: 'IconFileContract',
  relationTargetObjectMetadataUniversalIdentifier:
    CONTRACT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: CONTRACT_ACCOUNT_FIELD_ID,
  universalSettings: { relationType: RelationType.ONE_TO_MANY },
});
