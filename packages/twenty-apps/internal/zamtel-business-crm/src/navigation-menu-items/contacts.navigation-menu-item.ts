import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';
import { CONTACTS_VIEW_ID } from '../views/contacts.view';

export default defineNavigationMenuItem({
  universalIdentifier: '7a100050-0003-4000-8000-000000000003',
  type: NavigationMenuItemType.VIEW,
  name: 'Contacts',
  icon: 'IconAddressBook',
  position: 1,
  folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID,
  viewUniversalIdentifier: CONTACTS_VIEW_ID,
});
