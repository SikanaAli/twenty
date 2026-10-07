import {
  defineField,
  FieldType,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { CONTRACT_UNIVERSAL_IDENTIFIER } from '../objects/contract.object';
import {
  CONTRACT_OPPORTUNITY_FIELD_ID,
  OPPORTUNITY_CONTRACTS_FIELD_ID,
} from './contract-opportunity.field';

export default defineField({
  universalIdentifier: OPPORTUNITY_CONTRACTS_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier,
  type: FieldType.RELATION,
  name: 'contracts',
  label: 'Contracts',
  icon: 'IconFileContract',
  relationTargetObjectMetadataUniversalIdentifier:
    CONTRACT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier: CONTRACT_OPPORTUNITY_FIELD_ID,
  universalSettings: { relationType: RelationType.ONE_TO_MANY },
});
