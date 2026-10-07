import { defineObject, FieldType } from 'twenty-sdk/define';

export const SALES_TARGET_UNIVERSAL_IDENTIFIER = '7a100100-0004-4000-8000-000000000004';
export const SALES_TARGET_NAME_FIELD_ID = '7a100304-0001-4000-8000-000000000001';
export const SALES_TARGET_VALUE_FIELD_ID = '7a100304-0003-4000-8000-000000000003';

export default defineObject({
  universalIdentifier: SALES_TARGET_UNIVERSAL_IDENTIFIER,
  nameSingular: 'salesTarget',
  namePlural: 'salesTargets',
  labelSingular: 'Sales target',
  labelPlural: 'Sales targets',
  description: 'A configurable monthly Zamtel Business sales target',
  icon: 'IconTarget',
  labelIdentifierFieldMetadataUniversalIdentifier: SALES_TARGET_NAME_FIELD_ID,
  fields: [
    { universalIdentifier: SALES_TARGET_NAME_FIELD_ID, type: FieldType.TEXT, name: 'name', label: 'Target name', icon: 'IconTarget' },
    { universalIdentifier: '7a100304-0002-4000-8000-000000000002', type: FieldType.DATE, name: 'targetMonth', label: 'Target month', icon: 'IconCalendarMonth' },
    { universalIdentifier: SALES_TARGET_VALUE_FIELD_ID, type: FieldType.CURRENCY, name: 'targetValue', label: 'Target value', icon: 'IconCoins', defaultValue: { amountMicros: null, currencyCode: "'ZMW'" }, isNullable: true },
    { universalIdentifier: '7a100304-0004-4000-8000-000000000004', type: FieldType.SELECT, name: 'currencyCode', label: 'Currency', icon: 'IconCurrencyDollar', options: [{ id: '7a100204-0004-4000-8000-000000000004', value: 'ZMW', label: 'ZMW — Zambian Kwacha', position: 0, color: 'green' as const }], defaultValue: "'ZMW'" },
  ],
});
