import { defineNavigationMenuItem, NavigationMenuItemType } from 'twenty-sdk/define';
import { PLANNED_VISIT_UNIVERSAL_IDENTIFIER } from '../objects/planned-visit.object';
import { CRM_NAVIGATION_FOLDER_ID } from './crm.navigation-menu-item';
export default defineNavigationMenuItem({ universalIdentifier: '7a100140-0004-4000-8000-000000000004', name: 'Planned Visits', icon: 'IconRoute', position: 3, type: NavigationMenuItemType.OBJECT, targetObjectUniversalIdentifier: PLANNED_VISIT_UNIVERSAL_IDENTIFIER, folderUniversalIdentifier: CRM_NAVIGATION_FOLDER_ID });
