import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { CUSTOMER_SITE_UNIVERSAL_IDENTIFIER } from '../objects/customer-site.object';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';
export default defineNavigationMenuItem({ universalIdentifier: '7a100140-0003-4000-8000-000000000003', name: 'Customer Sites', icon: 'IconMapPin', position: 2, type: NavigationMenuItemType.OBJECT, targetObjectUniversalIdentifier: CUSTOMER_SITE_UNIVERSAL_IDENTIFIER, folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID });
