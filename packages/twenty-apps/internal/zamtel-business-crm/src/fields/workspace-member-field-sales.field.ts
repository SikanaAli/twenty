import { defineField, FieldType, RelationType, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { ACCOUNT_MANAGER_LOCATION_MANAGER_FIELD_ID } from './account-manager-location-manager.field';
import { ACCOUNT_MANAGER_LOCATION_UNIVERSAL_IDENTIFIER } from '../objects/account-manager-location.object';

export const WORKSPACE_MEMBER_LOCATION_SAMPLES_FIELD_ID = '7a100113-0002-4000-8000-000000000002';

export default defineField({ universalIdentifier: WORKSPACE_MEMBER_LOCATION_SAMPLES_FIELD_ID, objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.workspaceMember.universalIdentifier, type: FieldType.RELATION, name: 'locationSamples', label: 'Location samples', icon: 'IconLocation', relationTargetObjectMetadataUniversalIdentifier: ACCOUNT_MANAGER_LOCATION_UNIVERSAL_IDENTIFIER, relationTargetFieldMetadataUniversalIdentifier: ACCOUNT_MANAGER_LOCATION_MANAGER_FIELD_ID, universalSettings: { relationType: RelationType.ONE_TO_MANY } });
