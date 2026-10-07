import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';
import { SALES_PIPELINE_VIEW_ID } from '../views/sales-pipeline.view';

export default defineNavigationMenuItem({
  universalIdentifier: '7a100050-0004-4000-8000-000000000004',
  type: NavigationMenuItemType.VIEW,
  name: 'Sales Pipeline',
  icon: 'IconLayoutKanban',
  position: 2,
  folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID,
  viewUniversalIdentifier: SALES_PIPELINE_VIEW_ID,
});
