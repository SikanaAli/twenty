import {
  defineView,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
  ViewFilterOperand,
  ViewType,
} from 'twenty-sdk/define';

export const CONTACTS_VIEW_ID = '7a100040-0002-4000-8000-000000000002';

const personFields = STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.fields;

export default defineView({
  universalIdentifier: CONTACTS_VIEW_ID,
  name: 'Contacts',
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: ViewType.TABLE,
  icon: 'IconAddressBook',
  position: 1,
  fields: [
    {
      universalIdentifier: '7a100042-0001-4000-8000-000000000001',
      fieldMetadataUniversalIdentifier: personFields.name.universalIdentifier,
      position: 0,
      isVisible: true,
      size: 200,
    },
    {
      universalIdentifier: '7a100042-0002-4000-8000-000000000002',
      fieldMetadataUniversalIdentifier:
        personFields.jobTitle.universalIdentifier,
      position: 1,
      isVisible: true,
      size: 180,
    },
    {
      universalIdentifier: '7a100042-0003-4000-8000-000000000003',
      fieldMetadataUniversalIdentifier:
        personFields.company.universalIdentifier,
      position: 2,
      isVisible: true,
      size: 200,
    },
    {
      universalIdentifier: '7a100042-0004-4000-8000-000000000004',
      fieldMetadataUniversalIdentifier: personFields.emails.universalIdentifier,
      position: 3,
      isVisible: true,
      size: 220,
    },
    {
      universalIdentifier: '7a100042-0005-4000-8000-000000000005',
      fieldMetadataUniversalIdentifier: personFields.phones.universalIdentifier,
      position: 4,
      isVisible: true,
      size: 170,
    },
  ],
  filters: [
    {
      universalIdentifier: '7a100045-0002-4000-8000-000000000002',
      fieldMetadataUniversalIdentifier: personFields.emails.universalIdentifier,
      operand: ViewFilterOperand.CONTAINS,
      value: '.example',
      subFieldName: 'primaryEmail',
    },
  ],
});
