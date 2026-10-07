import { defineView, ViewType } from 'twenty-sdk/define';
import {
  CONTRACT_DAYS_UNTIL_EXPIRY_FIELD_ID,
  CONTRACT_EXPIRY_DATE_FIELD_ID,
  CONTRACT_NAME_FIELD_ID,
  CONTRACT_NUMBER_FIELD_ID,
  CONTRACT_RENEWAL_ACTION_DATE_FIELD_ID,
  CONTRACT_RENEWAL_INSIGHT_FIELD_ID,
  CONTRACT_RENEWAL_STATE_FIELD_ID,
  CONTRACT_STATUS_FIELD_ID,
  CONTRACT_UNIVERSAL_IDENTIFIER,
  CONTRACT_VALUE_FIELD_ID,
} from '../objects/contract.object';
import { CONTRACT_ACCOUNT_FIELD_ID } from '../fields/contract-account.field';
import { CONTRACT_PRIMARY_CONTACT_FIELD_ID } from '../fields/contract-primary-contact.field';

export const CONTRACTS_VIEW_ID = '7a100090-0001-4000-8000-000000000001';

export const CONTRACT_VIEW_FIELDS = [
  {
    universalIdentifier: '7a100091-0001-4000-8000-000000000001',
    fieldMetadataUniversalIdentifier: CONTRACT_NAME_FIELD_ID,
    position: 0,
    isVisible: true,
    size: 230,
  },
  {
    universalIdentifier: '7a100091-0002-4000-8000-000000000002',
    fieldMetadataUniversalIdentifier: CONTRACT_NUMBER_FIELD_ID,
    position: 1,
    isVisible: true,
    size: 155,
  },
  {
    universalIdentifier: '7a100091-0003-4000-8000-000000000003',
    fieldMetadataUniversalIdentifier: CONTRACT_ACCOUNT_FIELD_ID,
    position: 2,
    isVisible: true,
    size: 210,
  },
  {
    universalIdentifier: '7a100091-0004-4000-8000-000000000004',
    fieldMetadataUniversalIdentifier: CONTRACT_VALUE_FIELD_ID,
    position: 3,
    isVisible: true,
    size: 155,
  },
  {
    universalIdentifier: '7a100091-0005-4000-8000-000000000005',
    fieldMetadataUniversalIdentifier: CONTRACT_STATUS_FIELD_ID,
    position: 4,
    isVisible: true,
    size: 165,
  },
  {
    universalIdentifier: '7a100091-0006-4000-8000-000000000006',
    fieldMetadataUniversalIdentifier: CONTRACT_EXPIRY_DATE_FIELD_ID,
    position: 5,
    isVisible: true,
    size: 145,
  },
  {
    universalIdentifier: '7a100091-0007-4000-8000-000000000007',
    fieldMetadataUniversalIdentifier: CONTRACT_RENEWAL_STATE_FIELD_ID,
    position: 6,
    isVisible: true,
    size: 155,
  },
  {
    universalIdentifier: '7a100091-0008-4000-8000-000000000008',
    fieldMetadataUniversalIdentifier: CONTRACT_RENEWAL_ACTION_DATE_FIELD_ID,
    position: 7,
    isVisible: true,
    size: 165,
  },
  {
    universalIdentifier: '7a100091-0009-4000-8000-000000000009',
    fieldMetadataUniversalIdentifier: CONTRACT_DAYS_UNTIL_EXPIRY_FIELD_ID,
    position: 8,
    isVisible: true,
    size: 120,
  },
  {
    universalIdentifier: '7a100091-0010-4000-8000-000000000010',
    fieldMetadataUniversalIdentifier: CONTRACT_PRIMARY_CONTACT_FIELD_ID,
    position: 9,
    isVisible: true,
    size: 190,
  },
  {
    universalIdentifier: '7a100091-0011-4000-8000-000000000011',
    fieldMetadataUniversalIdentifier: CONTRACT_RENEWAL_INSIGHT_FIELD_ID,
    position: 10,
    isVisible: true,
    size: 300,
  },
];

export const getContractViewFields = (universalIdentifiers: string[]) =>
  CONTRACT_VIEW_FIELDS.map((field, index) => ({
    ...field,
    universalIdentifier: universalIdentifiers[index],
  }));

export default defineView({
  universalIdentifier: CONTRACTS_VIEW_ID,
  name: 'All Contracts',
  objectUniversalIdentifier: CONTRACT_UNIVERSAL_IDENTIFIER,
  type: ViewType.TABLE,
  icon: 'IconFileContract',
  position: 0,
  fields: CONTRACT_VIEW_FIELDS,
});
