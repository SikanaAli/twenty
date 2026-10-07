import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { SALES_REGION_OPTIONS } from '../constants/crm-options';

export const COMPANY_SALES_REGION_FIELD_ID =
  '7a100020-0003-4000-8000-000000000003';

export default defineField({
  universalIdentifier: COMPANY_SALES_REGION_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.SELECT,
  name: 'salesRegion',
  label: 'Sales region',
  description: 'Zamtel Business sales territory',
  icon: 'IconMapPin',
  isNullable: true,
  options: SALES_REGION_OPTIONS,
});
