import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { ACCOUNT_MANAGER_OPTIONS } from '../constants/crm-options';

export const COMPANY_ACCOUNT_MANAGER_FIELD_ID =
  '7a100020-0004-4000-8000-000000000004';

export default defineField({
  universalIdentifier: COMPANY_ACCOUNT_MANAGER_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.SELECT,
  name: 'accountManager',
  label: 'Account manager',
  description: 'Commercial owner for this account',
  icon: 'IconUserStar',
  isNullable: true,
  options: ACCOUNT_MANAGER_OPTIONS,
});
