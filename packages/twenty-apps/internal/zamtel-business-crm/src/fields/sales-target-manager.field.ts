import { defineField, FieldType, OnDeleteAction, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { SALES_TARGET_UNIVERSAL_IDENTIFIER } from '../objects/sales-target.object';
import { WORKSPACE_MEMBER_SALES_TARGETS_FIELD_ID } from './workspace-member-sales-targets.field';
export const SALES_TARGET_MANAGER_FIELD_ID = '7a100113-0001-4000-8000-000000000001';
export default defineField({ universalIdentifier: SALES_TARGET_MANAGER_FIELD_ID, objectUniversalIdentifier: SALES_TARGET_UNIVERSAL_IDENTIFIER, type: FieldType.RELATION, name: 'accountManager', label: 'Account manager', icon: 'IconUserDollar', relationTargetObjectMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier, relationTargetFieldMetadataUniversalIdentifier: WORKSPACE_MEMBER_SALES_TARGETS_FIELD_ID, universalSettings: { relationType: RelationType.MANY_TO_ONE, onDelete: OnDeleteAction.SET_NULL, joinColumnName: 'accountManagerId' } });
