import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';

export const COMPANY_TOTAL_CONTRACT_VALUE_FIELD_ID =
  '7a100072-0010-4000-8000-000000000010';

export default defineField({
  universalIdentifier: COMPANY_TOTAL_CONTRACT_VALUE_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.CURRENCY,
  name: 'totalContractValue',
  label: 'Total contract value',
  description: 'Total value of the account contracts in ZMW',
  icon: 'IconCoins',
  defaultValue: { amountMicros: null, currencyCode: "'ZMW'" },
  isNullable: true,
});
