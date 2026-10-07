import { defineObject, FieldType } from 'twenty-sdk/define';
import { CUSTOMER_SITE_TYPES } from '../constants/field-sales-options';

export const CUSTOMER_SITE_UNIVERSAL_IDENTIFIER = '7a100100-0001-4000-8000-000000000001';
export const CUSTOMER_SITE_NAME_FIELD_ID = '7a100301-0001-4000-8000-000000000001';
export const CUSTOMER_SITE_LATITUDE_FIELD_ID = '7a100301-0007-4000-8000-000000000007';
export const CUSTOMER_SITE_LONGITUDE_FIELD_ID = '7a100301-0008-4000-8000-000000000008';

export default defineObject({
  universalIdentifier: CUSTOMER_SITE_UNIVERSAL_IDENTIFIER,
  nameSingular: 'customerSite',
  namePlural: 'customerSites',
  labelSingular: 'Customer site',
  labelPlural: 'Customer sites',
  description: 'A mapped customer location used for field sales visits',
  icon: 'IconMapPin',
  labelIdentifierFieldMetadataUniversalIdentifier: CUSTOMER_SITE_NAME_FIELD_ID,
  fields: [
    { universalIdentifier: CUSTOMER_SITE_NAME_FIELD_ID, type: FieldType.TEXT, name: 'name', label: 'Site name', icon: 'IconMapPin' },
    { universalIdentifier: '7a100301-0002-4000-8000-000000000002', type: FieldType.SELECT, name: 'siteType', label: 'Site type', icon: 'IconCategory', options: [...CUSTOMER_SITE_TYPES], isNullable: true },
    { universalIdentifier: '7a100301-0003-4000-8000-000000000003', type: FieldType.TEXT, name: 'siteAddress', label: 'Address', icon: 'IconHome', isNullable: true },
    { universalIdentifier: '7a100301-0004-4000-8000-000000000004', type: FieldType.TEXT, name: 'province', label: 'Province', icon: 'IconMap', isNullable: true },
    { universalIdentifier: '7a100301-0005-4000-8000-000000000005', type: FieldType.TEXT, name: 'district', label: 'District', icon: 'IconMap2', isNullable: true },
    { universalIdentifier: CUSTOMER_SITE_LATITUDE_FIELD_ID, type: FieldType.NUMBER, name: 'latitude', label: 'Latitude', icon: 'IconWorldLatitude', isNullable: true },
    { universalIdentifier: CUSTOMER_SITE_LONGITUDE_FIELD_ID, type: FieldType.NUMBER, name: 'longitude', label: 'Longitude', icon: 'IconWorldLongitude', isNullable: true },
    { universalIdentifier: '7a100301-0009-4000-8000-000000000009', type: FieldType.BOOLEAN, name: 'active', label: 'Active', icon: 'IconCheck', defaultValue: true },
  ],
});
