import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { BUSINESS_SEGMENT_OPTIONS } from '../constants/crm-options';

export const OPPORTUNITY_BUSINESS_SEGMENT_FIELD_ID =
  '7a100021-0002-4000-8000-000000000002';

export default defineField({
  universalIdentifier: OPPORTUNITY_BUSINESS_SEGMENT_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier,
  type: FieldType.SELECT,
  name: 'businessSegment',
  label: 'Business segment',
  description: 'Commercial segment for this opportunity',
  icon: 'IconCategory',
  isNullable: true,
  options: BUSINESS_SEGMENT_OPTIONS,
});
