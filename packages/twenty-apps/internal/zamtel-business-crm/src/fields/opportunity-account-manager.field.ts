import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { ACCOUNT_MANAGER_OPTIONS } from '../constants/crm-options';

export const OPPORTUNITY_ACCOUNT_MANAGER_FIELD_ID =
  '7a100021-0004-4000-8000-000000000004';

export default defineField({
  universalIdentifier: OPPORTUNITY_ACCOUNT_MANAGER_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier,
  type: FieldType.SELECT,
  name: 'accountManager',
  label: 'Account manager',
  description: 'Commercial owner for this opportunity',
  icon: 'IconUserStar',
  isNullable: true,
  options: ACCOUNT_MANAGER_OPTIONS,
});
