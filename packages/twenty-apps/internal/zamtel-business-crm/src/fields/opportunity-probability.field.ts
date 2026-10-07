import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';

export const OPPORTUNITY_PROBABILITY_FIELD_ID =
  '7a100021-0001-4000-8000-000000000001';

export default defineField({
  universalIdentifier: OPPORTUNITY_PROBABILITY_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier,
  type: FieldType.NUMBER,
  name: 'probabilityOfClosure',
  label: 'Probability of closure',
  description: 'Estimated likelihood of closure as a percentage',
  icon: 'IconPercentage',
  isNullable: true,
});
