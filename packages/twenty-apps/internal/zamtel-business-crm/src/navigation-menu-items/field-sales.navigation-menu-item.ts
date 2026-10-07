import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { FIELD_SALES_PAGE_LAYOUT_ID } from '../page-layouts/field-sales.page-layout';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';
export default defineNavigationMenuItem({ universalIdentifier: '7a100140-0001-4000-8000-000000000001', name: 'Field Sales', icon: 'IconRoute', position: 1, type: NavigationMenuItemType.PAGE_LAYOUT, pageLayoutUniversalIdentifier: FIELD_SALES_PAGE_LAYOUT_ID, folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID });
