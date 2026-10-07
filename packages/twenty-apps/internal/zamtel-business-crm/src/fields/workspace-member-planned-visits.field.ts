import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { PLANNED_VISIT_ACCOUNT_MANAGER_FIELD_ID } from './planned-visit-account-manager.field';
import { PLANNED_VISIT_UNIVERSAL_IDENTIFIER } from '../objects/planned-visit.object';
export const WORKSPACE_MEMBER_PLANNED_VISITS_FIELD_ID = '7a100113-0003-4000-8000-000000000003';
export default defineField({ universalIdentifier: WORKSPACE_MEMBER_PLANNED_VISITS_FIELD_ID, objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier, type: FieldType.RELATION, name: 'plannedVisits', label: 'Planned visits', icon: 'IconRoute', relationTargetObjectMetadataUniversalIdentifier: PLANNED_VISIT_UNIVERSAL_IDENTIFIER, relationTargetFieldMetadataUniversalIdentifier: PLANNED_VISIT_ACCOUNT_MANAGER_FIELD_ID, universalSettings: { relationType: RelationType.ONE_TO_MANY } });
