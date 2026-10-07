import {
  defineField,
  FieldType,
  OnDeleteAction,
  RelationType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { CONTRACT_UNIVERSAL_IDENTIFIER } from '../objects/contract.object';

export const CONTRACT_PRIMARY_CONTACT_FIELD_ID =
  '7a100072-0005-4000-8000-000000000005';
export const PERSON_CONTRACTS_FIELD_ID = '7a100072-0006-4000-8000-000000000006';

export default defineField({
  universalIdentifier: CONTRACT_PRIMARY_CONTACT_FIELD_ID,
  objectUniversalIdentifier: CONTRACT_UNIVERSAL_IDENTIFIER,
  type: FieldType.RELATION,
  name: 'primaryContact',
  label: 'Primary contact',
  icon: 'IconUser',
  relationTargetObjectMetadataUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: PERSON_CONTRACTS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'primaryContactId',
  },
});
