import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';

export const COMPANY_ACTIVE_CONTRACTS_COUNT_FIELD_ID =
  '7a100072-0009-4000-8000-000000000009';

export default defineField({
  universalIdentifier: COMPANY_ACTIVE_CONTRACTS_COUNT_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.NUMBER,
  name: 'activeContractsCount',
  label: 'Active contracts',
  description: 'Number of active Zamtel Business contracts',
  icon: 'IconFileCheck',
  isNullable: true,
});
