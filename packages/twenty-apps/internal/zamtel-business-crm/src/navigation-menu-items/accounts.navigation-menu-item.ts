import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';
import { ACCOUNTS_VIEW_ID } from '../views/accounts.view';

export default defineNavigationMenuItem({
  universalIdentifier: '7a100050-0002-4000-8000-000000000002',
  type: NavigationMenuItemType.VIEW,
  name: 'Accounts',
  icon: 'IconBuildingSkyscraper',
  position: 0,
  folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID,
  viewUniversalIdentifier: ACCOUNTS_VIEW_ID,
});
