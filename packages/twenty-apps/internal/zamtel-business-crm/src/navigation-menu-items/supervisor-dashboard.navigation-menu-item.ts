import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { SUPERVISOR_DASHBOARD_PAGE_LAYOUT_ID } from '../page-layouts/supervisor-dashboard.page-layout';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';
export default defineNavigationMenuItem({ universalIdentifier: '7a100140-0002-4000-8000-000000000002', name: 'Supervisor Overview', icon: 'IconChartBar', position: 0, type: NavigationMenuItemType.PAGE_LAYOUT, pageLayoutUniversalIdentifier: SUPERVISOR_DASHBOARD_PAGE_LAYOUT_ID, folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID });
