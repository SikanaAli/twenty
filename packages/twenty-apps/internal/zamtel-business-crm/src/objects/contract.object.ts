import { defineObject, FieldType } from 'twenty-sdk/define';
import {
  BILLING_FREQUENCIES,
  CONTRACT_STATUSES,
  CONTRACT_TYPES,
  RENEWAL_STATES,
  RENEWAL_TYPES,
  SLA_SERVICE_TIERS,
} from '../constants/contract-options';

export const CONTRACT_UNIVERSAL_IDENTIFIER =
  '7a100070-0001-4000-8000-000000000001';
export const CONTRACT_NAME_FIELD_ID = '7a100071-0001-4000-8000-000000000001';
export const CONTRACT_NUMBER_FIELD_ID = '7a100071-0002-4000-8000-000000000002';
export const CONTRACT_VALUE_FIELD_ID = '7a100071-0007-4000-8000-000000000007';
export const CONTRACT_ACCOUNT_MANAGER_FIELD_ID =
  '7a100071-0005-4000-8000-000000000005';
export const CONTRACT_SALES_MANAGER_FIELD_ID =
  '7a100071-0006-4000-8000-000000000006';
export const CONTRACT_EXPIRY_DATE_FIELD_ID =
  '7a100071-0010-4000-8000-000000000010';
export const CONTRACT_STATUS_FIELD_ID = '7a100071-0014-4000-8000-000000000014';
export const CONTRACT_RENEWAL_ACTION_DATE_FIELD_ID =
  '7a100071-0018-4000-8000-000000000018';
export const CONTRACT_DAYS_UNTIL_EXPIRY_FIELD_ID =
  '7a100071-0019-4000-8000-000000000019';
export const CONTRACT_RENEWAL_STATE_FIELD_ID =
  '7a100071-0020-4000-8000-000000000020';
export const CONTRACT_RENEWAL_INSIGHT_FIELD_ID =
  '7a100071-0021-4000-8000-000000000021';

export default defineObject({
  universalIdentifier: CONTRACT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'contract',
  namePlural: 'contracts',
  labelSingular: 'Contract',
  labelPlural: 'Contracts',
  description: 'A Zamtel Business customer contract and its renewal lifecycle',
  icon: 'IconFileContract',
  labelIdentifierFieldMetadataUniversalIdentifier: CONTRACT_NAME_FIELD_ID,
  fields: [
    {
      universalIdentifier: CONTRACT_NAME_FIELD_ID,
      type: FieldType.TEXT,
      name: 'name',
      label: 'Contract name',
      icon: 'IconFileDescription',
    },
    {
      universalIdentifier: CONTRACT_NUMBER_FIELD_ID,
      type: FieldType.TEXT,
      name: 'contractNumber',
      label: 'Contract number',
      description: 'Stable business identifier, for example ZBC-CTR-000001',
      icon: 'IconHash',
    },
    {
      universalIdentifier: '7a100071-0003-4000-8000-000000000003',
      type: FieldType.SELECT,
      name: 'contractType',
      label: 'Contract type',
      icon: 'IconCategory',
      options: CONTRACT_TYPES,
      isNullable: true,
    },
    {
      universalIdentifier: '7a100071-0004-4000-8000-000000000004',
      type: FieldType.RICH_TEXT,
      name: 'description',
      label: 'Description',
      icon: 'IconNotes',
      isNullable: true,
    },
    {
      universalIdentifier: CONTRACT_ACCOUNT_MANAGER_FIELD_ID,
      type: FieldType.SELECT,
      name: 'accountManager',
      label: 'Account manager',
      icon: 'IconUserDollar',
      options: [
        {
          id: '7a100087-0001-4000-8000-000000000001',
          value: 'CHILESHE_MWILA',
          label: 'Chileshe Mwila',
          position: 0,
          color: 'blue' as const,
        },
        {
          id: '7a100087-0002-4000-8000-000000000002',
          value: 'BUPE_BANDA',
          label: 'Bupe Banda',
          position: 1,
          color: 'green' as const,
        },
        {
          id: '7a100087-0003-4000-8000-000000000003',
          value: 'THANDIWE_ZULU',
          label: 'Thandiwe Zulu',
          position: 2,
          color: 'purple' as const,
        },
        {
          id: '7a100087-0004-4000-8000-000000000004',
          value: 'MUTINTA_PHIRI',
          label: 'Mutinta Phiri',
          position: 3,
          color: 'orange' as const,
        },
      ],
      isNullable: true,
    },
    {
      universalIdentifier: CONTRACT_SALES_MANAGER_FIELD_ID,
      type: FieldType.SELECT,
      name: 'salesManager',
      label: 'Sales manager',
      icon: 'IconUserStar',
      options: [
        {
          id: '7a100088-0001-4000-8000-000000000001',
          value: 'MWAPE_SAKALA',
          label: 'Mwape Sakala',
          position: 0,
          color: 'blue' as const,
        },
        {
          id: '7a100088-0002-4000-8000-000000000002',
          value: 'NATASHA_MBEWE',
          label: 'Natasha Mbewe',
          position: 1,
          color: 'purple' as const,
        },
      ],
      isNullable: true,
    },
    {
      universalIdentifier: '7a100071-0007-4000-8000-000000000007',
      type: FieldType.CURRENCY,
      name: 'contractValue',
      label: 'Contract value',
      icon: 'IconCoins',
      defaultValue: { amountMicros: null, currencyCode: "'ZMW'" },
      isNullable: true,
    },
    {
      universalIdentifier: '7a100071-0009-4000-8000-000000000009',
      type: FieldType.SELECT,
      name: 'currencyCode',
      label: 'Currency',
      icon: 'IconCurrencyDollar',
      options: [
        {
          id: '7a100089-0001-4000-8000-000000000001',
          value: 'ZMW',
          label: 'ZMW — Zambian Kwacha',
          position: 0,
          color: 'green' as const,
        },
      ],
      defaultValue: "'ZMW'",
    },
    {
      universalIdentifier: '7a100071-0011-4000-8000-000000000011',
      type: FieldType.DATE,
      name: 'effectiveDate',
      label: 'Effective date',
      icon: 'IconCalendarEvent',
      isNullable: true,
    },
    {
      universalIdentifier: CONTRACT_EXPIRY_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: 'expiryDate',
      label: 'Expiry date',
      icon: 'IconCalendarDue',
      isNullable: true,
    },
    {
      universalIdentifier: '7a100071-0012-4000-8000-000000000012',
      type: FieldType.NUMBER,
      name: 'noticePeriodDays',
      label: 'Notice period (days)',
      icon: 'IconClock',
      defaultValue: 30,
    },
    {
      universalIdentifier: '7a100071-0013-4000-8000-000000000013',
      type: FieldType.SELECT,
      name: 'renewalType',
      label: 'Renewal type',
      icon: 'IconRefresh',
      options: RENEWAL_TYPES,
      isNullable: true,
    },
    {
      universalIdentifier: '7a100071-0015-4000-8000-000000000015',
      type: FieldType.BOOLEAN,
      name: 'autoRenewal',
      label: 'Auto renewal',
      icon: 'IconRepeat',
      defaultValue: false,
    },
    {
      universalIdentifier: '7a100071-0016-4000-8000-000000000016',
      type: FieldType.SELECT,
      name: 'billingFrequency',
      label: 'Billing frequency',
      icon: 'IconReceipt',
      options: BILLING_FREQUENCIES,
      isNullable: true,
    },
    {
      universalIdentifier: '7a100071-0017-4000-8000-000000000017',
      type: FieldType.SELECT,
      name: 'slaServiceTier',
      label: 'SLA / service tier',
      icon: 'IconShieldCheck',
      options: SLA_SERVICE_TIERS,
      isNullable: true,
    },
    {
      universalIdentifier: CONTRACT_STATUS_FIELD_ID,
      type: FieldType.SELECT,
      name: 'status',
      label: 'Status',
      icon: 'IconProgress',
      options: CONTRACT_STATUSES,
      defaultValue: "'DRAFT'",
    },
    {
      universalIdentifier: CONTRACT_RENEWAL_ACTION_DATE_FIELD_ID,
      type: FieldType.DATE,
      name: 'renewalActionDate',
      label: 'Renewal action date',
      description: 'Expiry date minus the notice period',
      icon: 'IconCalendarDue',
      isNullable: true,
    },
    {
      universalIdentifier: CONTRACT_DAYS_UNTIL_EXPIRY_FIELD_ID,
      type: FieldType.NUMBER,
      name: 'daysUntilExpiry',
      label: 'Days until expiry',
      icon: 'IconHourglass',
      isNullable: true,
    },
    {
      universalIdentifier: CONTRACT_RENEWAL_STATE_FIELD_ID,
      type: FieldType.SELECT,
      name: 'renewalState',
      label: 'Renewal state',
      icon: 'IconAlertTriangle',
      options: RENEWAL_STATES,
      defaultValue: "'NOT_DUE'",
    },
    {
      universalIdentifier: CONTRACT_RENEWAL_INSIGHT_FIELD_ID,
      type: FieldType.TEXT,
      name: 'renewalInsight',
      label: 'Renewal insight',
      description: 'Deterministic action guidance for the account team',
      icon: 'IconBulb',
      isNullable: true,
    },
  ],
});
