import { defineField, FieldType, OnDeleteAction, RelationType } from 'twenty-sdk/define';
import { PLANNED_VISIT_UNIVERSAL_IDENTIFIER } from '../objects/planned-visit.object';
import { CUSTOMER_SITE_UNIVERSAL_IDENTIFIER } from '../objects/customer-site.object';
export const PLANNED_VISIT_SITE_FIELD_ID = '7a100112-0003-4000-8000-000000000003';
export const CUSTOMER_SITE_VISITS_FIELD_ID = '7a100112-0004-4000-8000-000000000004';
export default defineField({ universalIdentifier: PLANNED_VISIT_SITE_FIELD_ID, objectUniversalIdentifier: PLANNED_VISIT_UNIVERSAL_IDENTIFIER, type: FieldType.RELATION, name: 'customerSite', label: 'Customer site', icon: 'IconMapPin', relationTargetObjectMetadataUniversalIdentifier: CUSTOMER_SITE_UNIVERSAL_IDENTIFIER, relationTargetFieldMetadataUniversalIdentifier: CUSTOMER_SITE_VISITS_FIELD_ID, universalSettings: { relationType: RelationType.MANY_TO_ONE, onDelete: OnDeleteAction.SET_NULL, joinColumnName: 'customerSiteId' } });
