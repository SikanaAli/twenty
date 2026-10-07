import { AggregateOperations, definePageLayout, PageLayoutTabLayoutMode, STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS } from 'twenty-sdk/define';
import { SUPERVISOR_OVERVIEW_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER } from '../front-components/supervisor-overview.front-component';
import { CONTRACT_STATUS_FIELD_ID, CONTRACT_UNIVERSAL_IDENTIFIER } from '../objects/contract.object';
import { PLANNED_VISIT_NAME_FIELD_ID, PLANNED_VISIT_STATUS_FIELD_ID, PLANNED_VISIT_UNIVERSAL_IDENTIFIER } from '../objects/planned-visit.object';

export const SUPERVISOR_DASHBOARD_PAGE_LAYOUT_ID = '7a100130-0002-4000-8000-000000000002';
const BAR = { layout: 'VERTICAL', primaryAxisOrderBy: 'VALUE_DESC', axisNameDisplay: 'NONE', color: 'auto', timezone: 'UTC', firstDayOfTheWeek: 1 } as const;

export default definePageLayout({
  universalIdentifier: SUPERVISOR_DASHBOARD_PAGE_LAYOUT_ID,
  name: 'Supervisor Overview',
  type: 'STANDALONE_PAGE',
  tabs: [{ universalIdentifier: '7a100131-0002-4000-8000-000000000002', title: 'Overview', position: 0, icon: 'IconChartBar', layoutMode: PageLayoutTabLayoutMode.GRID, widgets: ([
    { universalIdentifier: '7a100132-0002-4000-8000-000000000002', title: 'Supervisor KPIs', type: 'FRONT_COMPONENT', position: { layoutMode: PageLayoutTabLayoutMode.GRID, row: 0, column: 0, rowSpan: 8, columnSpan: 12 }, configuration: { configurationType: 'FRONT_COMPONENT', frontComponentUniversalIdentifier: SUPERVISOR_OVERVIEW_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER } },
    { universalIdentifier: '7a100132-0003-4000-8000-000000000003', title: 'Contracts by status', type: 'GRAPH', objectUniversalIdentifier: CONTRACT_UNIVERSAL_IDENTIFIER, position: { layoutMode: PageLayoutTabLayoutMode.GRID, row: 8, column: 0, rowSpan: 5, columnSpan: 6 }, configuration: { configurationType: 'PIE_CHART', aggregateFieldMetadataUniversalIdentifier: CONTRACT_STATUS_FIELD_ID, aggregateOperation: AggregateOperations.COUNT, groupByFieldMetadataUniversalIdentifier: CONTRACT_STATUS_FIELD_ID, displayLegend: true, timezone: 'UTC', firstDayOfTheWeek: 1 } },
    { universalIdentifier: '7a100132-0004-4000-8000-000000000004', title: 'Visits by status', type: 'GRAPH', objectUniversalIdentifier: PLANNED_VISIT_UNIVERSAL_IDENTIFIER, position: { layoutMode: PageLayoutTabLayoutMode.GRID, row: 8, column: 6, rowSpan: 5, columnSpan: 6 }, configuration: { configurationType: 'BAR_CHART', aggregateFieldMetadataUniversalIdentifier: PLANNED_VISIT_NAME_FIELD_ID, aggregateOperation: AggregateOperations.COUNT, primaryAxisGroupByFieldMetadataUniversalIdentifier: PLANNED_VISIT_STATUS_FIELD_ID, ...BAR } },
    { universalIdentifier: '7a100132-0005-4000-8000-000000000005', title: 'Pipeline by stage', type: 'GRAPH', objectUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.universalIdentifier, position: { layoutMode: PageLayoutTabLayoutMode.GRID, row: 13, column: 0, rowSpan: 5, columnSpan: 12 }, configuration: { configurationType: 'AGGREGATE_CHART', aggregateFieldMetadataUniversalIdentifier: STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.opportunity.fields.amount.universalIdentifier, aggregateOperation: AggregateOperations.SUM, displayDataLabel: true, timezone: 'UTC', firstDayOfTheWeek: 1 } },
  ] as never) }],
});
