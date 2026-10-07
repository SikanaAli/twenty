import {
  defineField,
  FieldType,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { CONTRACT_UNIVERSAL_IDENTIFIER } from '../objects/contract.object';
import {
  CONTRACT_PRIMARY_CONTACT_FIELD_ID,
  PERSON_CONTRACTS_FIELD_ID,
} from './contract-primary-contact.field';

export default defineField({
  universalIdentifier: PERSON_CONTRACTS_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'contracts',
  label: 'Contracts',
  icon: 'IconFileContract',
  relationTargetObjectMetadataUniversalIdentifier:
    CONTRACT_UNIVERSAL_IDENTIFIER,
  relationTargetFieldMetadataUniversalIdentifier:
    CONTRACT_PRIMARY_CONTACT_FIELD_ID,
  universalSettings: { relationType: RelationType.ONE_TO_MANY },
});
