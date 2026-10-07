import { defineField, FieldType, OnDeleteAction, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { PLANNED_VISIT_UNIVERSAL_IDENTIFIER } from '../objects/planned-visit.object';
import { COMPANY_PLANNED_VISITS_FIELD_ID } from './company-planned-visits.field';
export const PLANNED_VISIT_ACCOUNT_FIELD_ID = '7a100112-0002-4000-8000-000000000002';
export default defineField({ universalIdentifier: PLANNED_VISIT_ACCOUNT_FIELD_ID, objectUniversalIdentifier: PLANNED_VISIT_UNIVERSAL_IDENTIFIER, type: FieldType.RELATION, name: 'account', label: 'Account', icon: 'IconBuildingSkyscraper', relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier, relationTargetFieldMetadataUniversalIdentifier: COMPANY_PLANNED_VISITS_FIELD_ID, universalSettings: { relationType: RelationType.MANY_TO_ONE, onDelete: OnDeleteAction.SET_NULL, joinColumnName: 'accountId' } });
