import {
  defineField,
  FieldType,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk/define';
import { OWNERSHIP_TYPE_OPTIONS } from '../constants/crm-options';

export const COMPANY_OWNERSHIP_TYPE_FIELD_ID =
  '7a100020-0002-4000-8000-000000000002';

export default defineField({
  universalIdentifier: COMPANY_OWNERSHIP_TYPE_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.SELECT,
  name: 'ownershipType',
  label: 'Ownership type',
  description: 'Public or private account classification',
  icon: 'IconBuildingCommunity',
  isNullable: true,
  options: OWNERSHIP_TYPE_OPTIONS,
});
