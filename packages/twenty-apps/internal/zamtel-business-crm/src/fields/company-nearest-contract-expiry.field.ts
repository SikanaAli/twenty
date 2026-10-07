import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';

export const COMPANY_NEAREST_CONTRACT_EXPIRY_FIELD_ID =
  '7a100072-0011-4000-8000-000000000011';

export default defineField({
  universalIdentifier: COMPANY_NEAREST_CONTRACT_EXPIRY_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.DATE,
  name: 'nearestContractExpiry',
  label: 'Nearest contract expiry',
  description: 'Soonest expiry date among the account contracts',
  icon: 'IconCalendarDue',
  isNullable: true,
});
