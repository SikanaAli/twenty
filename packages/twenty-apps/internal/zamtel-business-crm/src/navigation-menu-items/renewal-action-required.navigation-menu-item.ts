import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { RENEWAL_ACTION_REQUIRED_VIEW_ID } from '../views/renewal-action-required.view';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';

export default defineNavigationMenuItem({
  universalIdentifier: '7a100050-0013-4000-8000-000000000013',
  position: 3,
  type: NavigationMenuItemType.VIEW,
  name: 'Renewal Action Required',
  icon: 'IconAlertTriangle',
  folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID,
  viewUniversalIdentifier: RENEWAL_ACTION_REQUIRED_VIEW_ID,
});
