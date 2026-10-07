import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { EXPIRING_CONTRACTS_VIEW_ID } from '../views/expiring-contracts.view';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';

export default defineNavigationMenuItem({
  universalIdentifier: '7a100050-0012-4000-8000-000000000012',
  position: 2,
  type: NavigationMenuItemType.VIEW,
  name: 'Expiring Contracts',
  icon: 'IconCalendarDue',
  folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID,
  viewUniversalIdentifier: EXPIRING_CONTRACTS_VIEW_ID,
});
