import { defineField, FieldType, RelationType } from 'twenty-sdk/define';
import { PLANNED_VISIT_SITE_FIELD_ID, CUSTOMER_SITE_VISITS_FIELD_ID } from './planned-visit-site.field';
import { CUSTOMER_SITE_UNIVERSAL_IDENTIFIER } from '../objects/customer-site.object';
import { PLANNED_VISIT_UNIVERSAL_IDENTIFIER } from '../objects/planned-visit.object';
export default defineField({ universalIdentifier: CUSTOMER_SITE_VISITS_FIELD_ID, objectUniversalIdentifier: CUSTOMER_SITE_UNIVERSAL_IDENTIFIER, type: FieldType.RELATION, name: 'plannedVisits', label: 'Planned visits', icon: 'IconRoute', relationTargetObjectMetadataUniversalIdentifier: PLANNED_VISIT_UNIVERSAL_IDENTIFIER, relationTargetFieldMetadataUniversalIdentifier: PLANNED_VISIT_SITE_FIELD_ID, universalSettings: { relationType: RelationType.ONE_TO_MANY } });
