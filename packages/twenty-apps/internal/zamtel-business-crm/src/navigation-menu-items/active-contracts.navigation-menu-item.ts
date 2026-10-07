import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { ACTIVE_CONTRACTS_VIEW_ID } from '../views/active-contracts.view';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';

export default defineNavigationMenuItem({
  universalIdentifier: '7a100050-0011-4000-8000-000000000011',
  position: 1,
  type: NavigationMenuItemType.VIEW,
  name: 'Active Contracts',
  icon: 'IconFileCheck',
  folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID,
  viewUniversalIdentifier: ACTIVE_CONTRACTS_VIEW_ID,
});
