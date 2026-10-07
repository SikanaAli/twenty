import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';

export const OPPORTUNITY_COMPETITOR_FIELD_ID =
  '7a100021-0007-4000-8000-000000000007';

export default defineField({
  universalIdentifier: OPPORTUNITY_COMPETITOR_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier,
  type: FieldType.TEXT,
  name: 'competitor',
  label: 'Competitor',
  description: 'Competitor active in this opportunity',
  icon: 'IconBuildingStore',
  isNullable: true,
});
