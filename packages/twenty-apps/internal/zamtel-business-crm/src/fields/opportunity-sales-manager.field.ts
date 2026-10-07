import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { SALES_MANAGER_OPTIONS } from '../constants/crm-options';

export const OPPORTUNITY_SALES_MANAGER_FIELD_ID =
  '7a100021-0005-4000-8000-000000000005';

export default defineField({
  universalIdentifier: OPPORTUNITY_SALES_MANAGER_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier,
  type: FieldType.SELECT,
  name: 'salesManager',
  label: 'Sales manager',
  description: 'Sales leader responsible for this opportunity',
  icon: 'IconUsersGroup',
  isNullable: true,
  options: SALES_MANAGER_OPTIONS,
});
