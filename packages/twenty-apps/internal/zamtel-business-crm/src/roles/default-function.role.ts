import { defineApplicationRole, SystemPermissionFlag } from 'twenty-sdk/define';
import { DEFAULT_FUNCTION_ROLE_UNIVERSAL_IDENTIFIER } from '../constants/application-identifiers';

export default defineApplicationRole({
  universalIdentifier: DEFAULT_FUNCTION_ROLE_UNIVERSAL_IDENTIFIER,
  label: 'Zamtel Business CRM setup role',
  description: 'Configures CRM metadata and safely loads demonstration records',
  canReadAllObjectRecords: true,
  canUpdateAllObjectRecords: true,
  canSoftDeleteAllObjectRecords: false,
  canDestroyAllObjectRecords: false,
  canUpdateAllSettings: false,
  canBeAssignedToAgents: false,
  canBeAssignedToUsers: false,
  canBeAssignedToApiKeys: false,
  permissionFlagUniversalIdentifiers: [
    SystemPermissionFlag.DATA_MODEL,
    SystemPermissionFlag.WORKSPACE,
  ],
});
