import { defineField, FieldType, OnDeleteAction, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { CUSTOMER_SITE_UNIVERSAL_IDENTIFIER } from '../objects/customer-site.object';
export const PERSON_CUSTOMER_SITES_FIELD_ID = '7a100110-0004-4000-8000-000000000004';
export const CUSTOMER_SITE_PRIMARY_CONTACT_FIELD_ID = '7a100110-0003-4000-8000-000000000003';
export default defineField({ universalIdentifier: CUSTOMER_SITE_PRIMARY_CONTACT_FIELD_ID, objectUniversalIdentifier: CUSTOMER_SITE_UNIVERSAL_IDENTIFIER, type: FieldType.RELATION, name: 'primaryContact', label: 'Primary contact', icon: 'IconUser', relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier, relationTargetFieldMetadataUniversalIdentifier: PERSON_CUSTOMER_SITES_FIELD_ID, universalSettings: { relationType: RelationType.MANY_TO_ONE, onDelete: OnDeleteAction.SET_NULL, joinColumnName: 'primaryContactId' } });
