import {
  defineNavigationMenuItem,
  NavigationMenuItemType,
} from 'twenty-sdk/define';

export const CRM_NAVIGATION_FOLDER_ID = '7a100050-0001-4000-8000-000000000001';

export default defineNavigationMenuItem({
  universalIdentifier: CRM_NAVIGATION_FOLDER_ID,
  type: NavigationMenuItemType.FOLDER,
  name: 'Zamtel Business CRM',
  icon: 'IconBriefcase',
  position: 0,
});
