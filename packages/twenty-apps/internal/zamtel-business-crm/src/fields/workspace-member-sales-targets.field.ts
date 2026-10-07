import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { SALES_TARGET_MANAGER_FIELD_ID } from './sales-target-manager.field';
import { SALES_TARGET_UNIVERSAL_IDENTIFIER } from '../objects/sales-target.object';
export const WORKSPACE_MEMBER_SALES_TARGETS_FIELD_ID = '7a100113-0004-4000-8000-000000000004';
export default defineField({ universalIdentifier: WORKSPACE_MEMBER_SALES_TARGETS_FIELD_ID, objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier, type: FieldType.RELATION, name: 'salesTargets', label: 'Sales targets', icon: 'IconTarget', relationTargetObjectMetadataUniversalIdentifier: SALES_TARGET_UNIVERSAL_IDENTIFIER, relationTargetFieldMetadataUniversalIdentifier: SALES_TARGET_MANAGER_FIELD_ID, universalSettings: { relationType: RelationType.ONE_TO_MANY } });
