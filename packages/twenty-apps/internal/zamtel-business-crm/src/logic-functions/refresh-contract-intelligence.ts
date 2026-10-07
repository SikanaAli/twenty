import { CoreApiClient } from 'twenty-client-sdk/core';
import { defineLogicFunction } from 'twenty-sdk/define';
import { calculateContractRenewalDetails } from '../utils/contract-intelligence';

type ContractSnapshot = {
  id: string;
  expiryDate?: string | null;
  noticePeriodDays?: number | null;
  status?: string | null;
};

const handler = async () => {
  const client = new CoreApiClient();
  const result = (await client.query({
    contracts: {
      __args: { filter: {}, first: 500 },
      edges: {
        node: {
          id: true,
          expiryDate: true,
          noticePeriodDays: true,
          status: true,
        },
      },
    },
  } as never)) as { contracts?: { edges?: { node: ContractSnapshot }[] } };

  const referenceDate = new Date().toISOString().slice(0, 10);
  let refreshed = 0;

  for (const contract of result.contracts?.edges?.map(({ node }) => node) ??
    []) {
    if (!contract.expiryDate) {
      continue;
    }

    const renewal = calculateContractRenewalDetails({
      expiryDate: contract.expiryDate,
      noticePeriodDays: contract.noticePeriodDays ?? 30,
      referenceDate,
      status: (contract.status ?? 'ACTIVE') as never,
    });

    await client.mutation({
      updateContracts: {
        __args: {
          filter: { id: { in: [contract.id] } },
          data: {
            renewalActionDate: renewal.renewalActionDate,
            daysUntilExpiry: renewal.daysUntilExpiry,
            renewalState: renewal.renewalState,
            renewalInsight: renewal.renewalInsight,
          },
        },
        id: true,
      },
    } as never);
    refreshed += 1;
  }

  console.log(`Refreshed renewal intelligence for ${refreshed} contracts.`);

  return { refreshed };
};

export default defineLogicFunction({
  universalIdentifier: '7a100060-0002-4000-8000-000000000002',
  name: 'refresh-contract-intelligence',
  description:
    'Recalculates contract expiry and renewal action insights each day.',
  timeoutSeconds: 120,
  cronTriggerSettings: { pattern: '0 3 * * *' },
  handler,
});
