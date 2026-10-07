import {
  defineView,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
  ViewFilterOperand,
  ViewType,
} from 'twenty-sdk/define';
import { COMPANY_ACCOUNT_MANAGER_FIELD_ID } from '../fields/company-account-manager.field';
import { COMPANY_BUSINESS_SEGMENT_FIELD_ID } from '../fields/company-business-segment.field';
import { COMPANY_OWNERSHIP_TYPE_FIELD_ID } from '../fields/company-ownership-type.field';
import { COMPANY_SALES_REGION_FIELD_ID } from '../fields/company-sales-region.field';

export const ACCOUNTS_VIEW_ID = '7a100040-0001-4000-8000-000000000001';

const companyFields = STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.fields;

export default defineView({
  universalIdentifier: ACCOUNTS_VIEW_ID,
  name: 'Accounts',
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: ViewType.TABLE,
  icon: 'IconBuildingSkyscraper',
  position: 0,
  fields: [
    {
      universalIdentifier: '7a100041-0001-4000-8000-000000000001',
      fieldMetadataUniversalIdentifier: companyFields.name.universalIdentifier,
      position: 0,
      isVisible: true,
      size: 220,
    },
    {
      universalIdentifier: '7a100041-0002-4000-8000-000000000002',
      fieldMetadataUniversalIdentifier: COMPANY_BUSINESS_SEGMENT_FIELD_ID,
      position: 1,
      isVisible: true,
      size: 140,
    },
    {
      universalIdentifier: '7a100041-0003-4000-8000-000000000003',
      fieldMetadataUniversalIdentifier: COMPANY_OWNERSHIP_TYPE_FIELD_ID,
      position: 2,
      isVisible: true,
      size: 130,
    },
    {
      universalIdentifier: '7a100041-0004-4000-8000-000000000004',
      fieldMetadataUniversalIdentifier: COMPANY_SALES_REGION_FIELD_ID,
      position: 3,
      isVisible: true,
      size: 130,
    },
    {
      universalIdentifier: '7a100041-0005-4000-8000-000000000005',
      fieldMetadataUniversalIdentifier: COMPANY_ACCOUNT_MANAGER_FIELD_ID,
      position: 4,
      isVisible: true,
      size: 170,
    },
    {
      universalIdentifier: '7a100041-0006-4000-8000-000000000006',
      fieldMetadataUniversalIdentifier:
        companyFields.annualRevenue.universalIdentifier,
      position: 5,
      isVisible: true,
      size: 150,
    },
    {
      universalIdentifier: '7a100041-0007-4000-8000-000000000007',
      fieldMetadataUniversalIdentifier:
        companyFields.address.universalIdentifier,
      position: 6,
      isVisible: true,
      size: 190,
    },
  ],
  filters: [
    {
      universalIdentifier: '7a100045-0001-4000-8000-000000000001',
      fieldMetadataUniversalIdentifier: COMPANY_ACCOUNT_MANAGER_FIELD_ID,
      operand: ViewFilterOperand.IS_NOT_EMPTY,
      value: '',
    },
  ],
});
