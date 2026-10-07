import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { LOSS_REASON_OPTIONS } from '../constants/crm-options';

export const OPPORTUNITY_LOSS_REASON_FIELD_ID =
  '7a100021-0006-4000-8000-000000000006';

export default defineField({
  universalIdentifier: OPPORTUNITY_LOSS_REASON_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier,
  type: FieldType.SELECT,
  name: 'lossReason',
  label: 'Loss reason',
  description: 'Primary reason an opportunity did not progress',
  icon: 'IconAlertTriangle',
  isNullable: true,
  options: LOSS_REASON_OPTIONS,
});
