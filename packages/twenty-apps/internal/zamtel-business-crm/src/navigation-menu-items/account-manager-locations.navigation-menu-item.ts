import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { ACCOUNT_MANAGER_LOCATION_UNIVERSAL_IDENTIFIER } from '../objects/account-manager-location.object';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';
export default defineNavigationMenuItem({ universalIdentifier: '7a100140-0005-4000-8000-000000000005', name: 'Manager Locations', icon: 'IconLocation', position: 4, type: NavigationMenuItemType.OBJECT, targetObjectUniversalIdentifier: ACCOUNT_MANAGER_LOCATION_UNIVERSAL_IDENTIFIER, folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID });
