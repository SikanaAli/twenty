import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { EXPIRED_CONTRACTS_VIEW_ID } from '../views/expired-contracts.view';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';

export default defineNavigationMenuItem({
  universalIdentifier: '7a100050-0014-4000-8000-000000000014',
  position: 4,
  type: NavigationMenuItemType.VIEW,
  name: 'Expired Contracts',
  icon: 'IconFileOff',
  folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID,
  viewUniversalIdentifier: EXPIRED_CONTRACTS_VIEW_ID,
});
