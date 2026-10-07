import { definePageLayout, PageLayoutTabLayoutMode } from 'twenty-sdk/define';
import { FIELD_SALES_MAP_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER } from '../front-components/field-sales-map.front-component';

export const FIELD_SALES_PAGE_LAYOUT_ID = '7a100130-0001-4000-8000-000000000001';

export default definePageLayout({
  universalIdentifier: FIELD_SALES_PAGE_LAYOUT_ID,
  name: 'Field Sales',
  type: 'STANDALONE_PAGE',
  tabs: [{ universalIdentifier: '7a100131-0001-4000-8000-000000000001', title: 'Route control tower', position: 0, icon: 'IconRoute', layoutMode: PageLayoutTabLayoutMode.CANVAS, widgets: [{ universalIdentifier: '7a100132-0001-4000-8000-000000000001', title: 'Field sales map', type: 'FRONT_COMPONENT', configuration: { configurationType: 'FRONT_COMPONENT', frontComponentUniversalIdentifier: FIELD_SALES_MAP_FRONT_COMPONENT_UNIVERSAL_IDENTIFIER } }] }],
});
