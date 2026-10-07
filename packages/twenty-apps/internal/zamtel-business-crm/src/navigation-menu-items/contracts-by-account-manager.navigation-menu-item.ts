import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { CONTRACTS_BY_ACCOUNT_MANAGER_VIEW_ID } from '../views/contracts-by-account-manager.view';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';

export default defineNavigationMenuItem({
  universalIdentifier: '7a100050-0015-4000-8000-000000000015',
  position: 5,
  type: NavigationMenuItemType.VIEW,
  name: 'Contracts by Account Manager',
  icon: 'IconUsersGroup',
  folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID,
  viewUniversalIdentifier: CONTRACTS_BY_ACCOUNT_MANAGER_VIEW_ID,
});
