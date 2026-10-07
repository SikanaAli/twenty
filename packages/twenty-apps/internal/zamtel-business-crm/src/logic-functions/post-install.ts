import { definePostInstallLogicFunction } from 'twenty-sdk/define';
import { configureCrm } from './configure-crm';
import { seedDemoData } from './seed-demo-data';

const handler = async () => {
  await configureCrm();
  const result = await seedDemoData();

  console.log(
    `Zamtel Business CRM ready: created ${result.accountsCreated} accounts, ${result.contactsCreated} contacts and ${result.opportunitiesCreated} opportunities.`,
  );

  return result;
};

export default definePostInstallLogicFunction({
  universalIdentifier: '7a100060-0001-4000-8000-000000000001',
  name: 'post-install',
  description:
    'Applies Zamtel CRM terminology and safely seeds fictional demonstration data.',
  timeoutSeconds: 120,
  shouldRunSynchronously: true,
  handler,
});
