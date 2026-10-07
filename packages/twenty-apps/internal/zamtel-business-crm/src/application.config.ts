import { defineApplication } from 'twenty-sdk/define';
import {
  APPLICATION_UNIVERSAL_IDENTIFIER,
  DEFAULT_FUNCTION_ROLE_UNIVERSAL_IDENTIFIER,
} from './constants/application-identifiers';

export default defineApplication({
  universalIdentifier: APPLICATION_UNIVERSAL_IDENTIFIER,
  displayName: 'Zamtel Business CRM',
  description:
    'Zamtel Business sales foundation for accounts, contacts and opportunities',
  author: 'Zamtel',
  category: 'Sales',
  defaultRoleUniversalIdentifier: DEFAULT_FUNCTION_ROLE_UNIVERSAL_IDENTIFIER,
});
