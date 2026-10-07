import { defineObject, FieldType } from 'twenty-sdk/define';
import { VISIT_PURPOSES, VISIT_STATUSES } from '../constants/field-sales-options';

export const PLANNED_VISIT_UNIVERSAL_IDENTIFIER = '7a100100-0003-4000-8000-000000000003';
export const PLANNED_VISIT_NAME_FIELD_ID = '7a100303-0001-4000-8000-000000000001';
export const PLANNED_VISIT_STATUS_FIELD_ID = '7a100303-0007-4000-8000-000000000007';

export default defineObject({
  universalIdentifier: PLANNED_VISIT_UNIVERSAL_IDENTIFIER,
  nameSingular: 'plannedVisit',
  namePlural: 'plannedVisits',
  labelSingular: 'Planned visit',
  labelPlural: 'Planned visits',
  description: 'A planned field visit to a Zamtel Business customer site',
  icon: 'IconRoute',
  labelIdentifierFieldMetadataUniversalIdentifier: PLANNED_VISIT_NAME_FIELD_ID,
  fields: [
    { universalIdentifier: PLANNED_VISIT_NAME_FIELD_ID, type: FieldType.TEXT, name: 'name', label: 'Visit name', icon: 'IconRoute' },
    { universalIdentifier: '7a100303-0009-4000-8000-000000000009', type: FieldType.TEXT, name: 'managerName', label: 'Account manager name', icon: 'IconUserDollar' },
    { universalIdentifier: '7a100303-0002-4000-8000-000000000002', type: FieldType.DATE_TIME, name: 'plannedDate', label: 'Planned date', icon: 'IconCalendarEvent' },
    { universalIdentifier: '7a100303-0003-4000-8000-000000000003', type: FieldType.DATE_TIME, name: 'plannedStartTime', label: 'Planned start', icon: 'IconClock' },
    { universalIdentifier: '7a100303-0004-4000-8000-000000000004', type: FieldType.DATE_TIME, name: 'plannedEndTime', label: 'Planned end', icon: 'IconClockStop', isNullable: true },
    { universalIdentifier: '7a100303-0005-4000-8000-000000000005', type: FieldType.NUMBER, name: 'sequence', label: 'Route sequence', icon: 'IconListNumbers' },
    { universalIdentifier: '7a100303-0006-4000-8000-000000000006', type: FieldType.SELECT, name: 'purpose', label: 'Purpose', icon: 'IconTargetArrow', options: [...VISIT_PURPOSES], isNullable: true },
    { universalIdentifier: PLANNED_VISIT_STATUS_FIELD_ID, type: FieldType.SELECT, name: 'status', label: 'Status', icon: 'IconProgress', options: [...VISIT_STATUSES], defaultValue: "'PLANNED'" },
    { universalIdentifier: '7a100303-0008-4000-8000-000000000008', type: FieldType.TEXT, name: 'notes', label: 'Notes', icon: 'IconNotes', isNullable: true },
  ],
});
