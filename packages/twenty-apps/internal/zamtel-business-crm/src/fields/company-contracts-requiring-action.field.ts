import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';

export const COMPANY_CONTRACTS_REQUIRING_ACTION_FIELD_ID =
  '7a100072-0012-4000-8000-000000000012';

export default defineField({
  universalIdentifier: COMPANY_CONTRACTS_REQUIRING_ACTION_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.NUMBER,
  name: 'contractsRequiringAction',
  label: 'Contracts requiring action',
  description: 'Contracts with an actionable or overdue renewal state',
  icon: 'IconAlertTriangle',
  isNullable: true,
});
