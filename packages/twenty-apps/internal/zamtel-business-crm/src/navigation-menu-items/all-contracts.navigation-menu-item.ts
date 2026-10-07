import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { CONTRACTS_VIEW_ID } from '../views/contracts.view';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';

export default defineNavigationMenuItem({
  universalIdentifier: '7a100050-0010-4000-8000-000000000010',
  position: 0,
  type: NavigationMenuItemType.VIEW,
  name: 'All Contracts',
  icon: 'IconFileContract',
  folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID,
  viewUniversalIdentifier: CONTRACTS_VIEW_ID,
});
