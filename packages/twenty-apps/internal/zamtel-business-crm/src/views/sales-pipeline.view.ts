import {
  defineView,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
  ViewFilterOperand,
  ViewType,
} from 'twenty-sdk/define';
import { SALES_PIPELINE_OPTIONS } from '../constants/crm-options';
import { OPPORTUNITY_ACCOUNT_MANAGER_FIELD_ID } from '../fields/opportunity-account-manager.field';
import { OPPORTUNITY_PROBABILITY_FIELD_ID } from '../fields/opportunity-probability.field';
import { OPPORTUNITY_PRODUCT_SERVICE_FIELD_ID } from '../fields/opportunity-product-service.field';

export const SALES_PIPELINE_VIEW_ID = '7a100040-0003-4000-8000-000000000003';

const opportunityFields =
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.fields;

const GROUP_IDS = [
  '7a100043-0001-4000-8000-000000000001',
  '7a100043-0002-4000-8000-000000000002',
  '7a100043-0003-4000-8000-000000000003',
  '7a100043-0004-4000-8000-000000000004',
  '7a100043-0005-4000-8000-000000000005',
  '7a100043-0006-4000-8000-000000000006',
  '7a100043-0007-4000-8000-000000000007',
  '7a100043-0008-4000-8000-000000000008',
];

export default defineView({
  universalIdentifier: SALES_PIPELINE_VIEW_ID,
  name: 'Sales Pipeline',
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier,
  type: ViewType.KANBAN,
  icon: 'IconLayoutKanban',
  position: 2,
  mainGroupByFieldMetadataUniversalIdentifier:
    opportunityFields.stage.universalIdentifier,
  fields: [
    {
      universalIdentifier: '7a100044-0001-4000-8000-000000000001',
      fieldMetadataUniversalIdentifier:
        opportunityFields.name.universalIdentifier,
      position: 0,
      isVisible: true,
      size: 220,
    },
    {
      universalIdentifier: '7a100044-0002-4000-8000-000000000002',
      fieldMetadataUniversalIdentifier:
        opportunityFields.company.universalIdentifier,
      position: 1,
      isVisible: true,
      size: 190,
    },
    {
      universalIdentifier: '7a100044-0003-4000-8000-000000000003',
      fieldMetadataUniversalIdentifier:
        opportunityFields.amount.universalIdentifier,
      position: 2,
      isVisible: true,
      size: 150,
    },
    {
      universalIdentifier: '7a100044-0004-4000-8000-000000000004',
      fieldMetadataUniversalIdentifier: OPPORTUNITY_PROBABILITY_FIELD_ID,
      position: 3,
      isVisible: true,
      size: 130,
    },
    {
      universalIdentifier: '7a100044-0005-4000-8000-000000000005',
      fieldMetadataUniversalIdentifier: OPPORTUNITY_PRODUCT_SERVICE_FIELD_ID,
      position: 4,
      isVisible: true,
      size: 180,
    },
    {
      universalIdentifier: '7a100044-0006-4000-8000-000000000006',
      fieldMetadataUniversalIdentifier: OPPORTUNITY_ACCOUNT_MANAGER_FIELD_ID,
      position: 5,
      isVisible: true,
      size: 170,
    },
    {
      universalIdentifier: '7a100044-0007-4000-8000-000000000007',
      fieldMetadataUniversalIdentifier:
        opportunityFields.closeDate.universalIdentifier,
      position: 6,
      isVisible: true,
      size: 150,
    },
  ],
  groups: SALES_PIPELINE_OPTIONS.map((option, index) => ({
    universalIdentifier: GROUP_IDS[index],
    fieldValue: option.value,
    position: index,
    isVisible: true,
  })),
  filters: [
    {
      universalIdentifier: '7a100045-0003-4000-8000-000000000003',
      fieldMetadataUniversalIdentifier: OPPORTUNITY_ACCOUNT_MANAGER_FIELD_ID,
      operand: ViewFilterOperand.IS_NOT_EMPTY,
      value: '',
    },
  ],
});
