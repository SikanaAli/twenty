import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { PRODUCT_SERVICE_OPTIONS } from '../constants/crm-options';

export const OPPORTUNITY_PRODUCT_SERVICE_FIELD_ID =
  '7a100021-0003-4000-8000-000000000003';

export default defineField({
  universalIdentifier: OPPORTUNITY_PRODUCT_SERVICE_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier,
  type: FieldType.SELECT,
  name: 'productService',
  label: 'Product / Service',
  description: 'Primary Zamtel Business solution',
  icon: 'IconPackage',
  isNullable: true,
  options: PRODUCT_SERVICE_OPTIONS,
});
