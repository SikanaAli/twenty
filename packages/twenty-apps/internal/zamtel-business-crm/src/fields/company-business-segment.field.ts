import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { BUSINESS_SEGMENT_OPTIONS } from '../constants/crm-options';

export const COMPANY_BUSINESS_SEGMENT_FIELD_ID =
  '7a100020-0001-4000-8000-000000000001';

export default defineField({
  universalIdentifier: COMPANY_BUSINESS_SEGMENT_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.SELECT,
  name: 'businessSegment',
  label: 'Business segment',
  description: 'Commercial segment for this account',
  icon: 'IconCategory',
  isNullable: true,
  options: BUSINESS_SEGMENT_OPTIONS,
});
