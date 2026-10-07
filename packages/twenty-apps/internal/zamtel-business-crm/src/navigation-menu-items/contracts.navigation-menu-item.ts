import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { CONTRACT_UNIVERSAL_IDENTIFIER } from '../objects/contract.object';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';

export default defineNavigationMenuItem({
  universalIdentifier: '7a100050-0005-4000-8000-000000000005',
  position: 3,
  type: NavigationMenuItemType.OBJECT,
  targetObjectUniversalIdentifier: CONTRACT_UNIVERSAL_IDENTIFIER,
  folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID,
});
