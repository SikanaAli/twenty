import { defineObject, FieldType } from 'twenty-sdk/define';
import { LOCATION_SOURCES } from '../constants/field-sales-options';

export const ACCOUNT_MANAGER_LOCATION_UNIVERSAL_IDENTIFIER = '7a100100-0002-4000-8000-000000000002';
export const ACCOUNT_MANAGER_LOCATION_NAME_FIELD_ID = '7a100302-0001-4000-8000-000000000001';

export default defineObject({
  universalIdentifier: ACCOUNT_MANAGER_LOCATION_UNIVERSAL_IDENTIFIER,
  nameSingular: 'accountManagerLocation',
  namePlural: 'accountManagerLocations',
  labelSingular: 'Account manager location',
  labelPlural: 'Account manager locations',
  description: 'A point-in-time field location sample for an account manager',
  icon: 'IconLocation',
  labelIdentifierFieldMetadataUniversalIdentifier: ACCOUNT_MANAGER_LOCATION_NAME_FIELD_ID,
  fields: [
    { universalIdentifier: ACCOUNT_MANAGER_LOCATION_NAME_FIELD_ID, type: FieldType.TEXT, name: 'name', label: 'Location label', icon: 'IconMapPin' },
    { universalIdentifier: '7a100302-0008-4000-8000-000000000008', type: FieldType.TEXT, name: 'managerName', label: 'Account manager name', icon: 'IconUserDollar' },
    { universalIdentifier: '7a100302-0002-4000-8000-000000000002', type: FieldType.NUMBER, name: 'latitude', label: 'Latitude', icon: 'IconWorldLatitude' },
    { universalIdentifier: '7a100302-0003-4000-8000-000000000003', type: FieldType.NUMBER, name: 'longitude', label: 'Longitude', icon: 'IconWorldLongitude' },
    { universalIdentifier: '7a100302-0004-4000-8000-000000000004', type: FieldType.NUMBER, name: 'accuracy', label: 'Accuracy (m)', icon: 'IconRadar', isNullable: true },
    { universalIdentifier: '7a100302-0005-4000-8000-000000000005', type: FieldType.DATE_TIME, name: 'recordedAt', label: 'Recorded at', icon: 'IconClock' },
    { universalIdentifier: '7a100302-0006-4000-8000-000000000006', type: FieldType.SELECT, name: 'source', label: 'Source', icon: 'IconDeviceMobile', options: [...LOCATION_SOURCES], isNullable: true },
    { universalIdentifier: '7a100302-0007-4000-8000-000000000007', type: FieldType.TEXT, name: 'context', label: 'Context', icon: 'IconNotes', isNullable: true },
  ],
});
