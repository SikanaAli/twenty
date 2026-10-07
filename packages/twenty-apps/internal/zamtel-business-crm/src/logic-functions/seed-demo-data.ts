import { CoreApiClient } from 'twenty-client-sdk/core';
import {
  DEMO_ACCOUNTS,
  DEMO_CONTACTS,
  DEMO_CONTRACTS,
  DEMO_OPPORTUNITIES,
} from './demo-data';
import { calculateContractRenewalDetails } from '../utils/contract-intelligence';
import {
  DEMO_CUSTOMER_SITES,
  DEMO_MANAGER_LOCATIONS,
  DEMO_PLANNED_VISITS,
  FIELD_SALES_DEMO_DATE,
} from './field-sales-demo-data';

type NamedRecord = { id: string; name: string };
type ContactRecord = {
  id: string;
  emails?: { primaryEmail?: string | null } | null;
};
type ContractRecord = { id: string; contractNumber: string };

const zmw = (amount: number) => ({
  amountMicros: amount * 1_000_000,
  currencyCode: 'ZMW',
});

const readAccounts = async (client: CoreApiClient): Promise<NamedRecord[]> => {
  const result = (await client.query({
    companies: {
      __args: {
        filter: { name: { in: DEMO_ACCOUNTS.map(({ name }) => name) } },
        first: DEMO_ACCOUNTS.length,
      },
      edges: { node: { id: true, name: true } },
    },
  } as never)) as { companies?: { edges?: { node: NamedRecord }[] } };

  return result.companies?.edges?.map(({ node }) => node) ?? [];
};

const readContacts = async (
  client: CoreApiClient,
): Promise<ContactRecord[]> => {
  const result = (await client.query({
    people: {
      __args: {
        filter: {
          emails: {
            primaryEmail: {
              in: DEMO_CONTACTS.map(({ email }) => email),
            },
          },
        },
        first: DEMO_CONTACTS.length,
      },
      edges: {
        node: {
          id: true,
          emails: { primaryEmail: true },
        },
      },
    },
  } as never)) as { people?: { edges?: { node: ContactRecord }[] } };

  return result.people?.edges?.map(({ node }) => node) ?? [];
};

const readOpportunities = async (
  client: CoreApiClient,
): Promise<NamedRecord[]> => {
  const result = (await client.query({
    opportunities: {
      __args: {
        filter: {
          name: { in: DEMO_OPPORTUNITIES.map(({ name }) => name) },
        },
        first: DEMO_OPPORTUNITIES.length,
      },
      edges: { node: { id: true, name: true } },
    },
  } as never)) as { opportunities?: { edges?: { node: NamedRecord }[] } };

  return result.opportunities?.edges?.map(({ node }) => node) ?? [];
};

const readContracts = async (
  client: CoreApiClient,
): Promise<ContractRecord[]> => {
  const result = (await client.query({
    contracts: {
      __args: {
        filter: {
          contractNumber: {
            in: DEMO_CONTRACTS.map(({ contractNumber }) => contractNumber),
          },
        },
        first: DEMO_CONTRACTS.length,
      },
      edges: { node: { id: true, contractNumber: true } },
    },
  } as never)) as { contracts?: { edges?: { node: ContractRecord }[] } };

  return result.contracts?.edges?.map(({ node }) => node) ?? [];
};

const requireMappedId = (recordIds: Map<string, string>, key: string) => {
  const id = recordIds.get(key);

  if (!id) {
    throw new Error(`Missing seeded record for ${key}`);
  }

  return id;
};

export const seedDemoData = async () => {
  const client = new CoreApiClient();

  const existingAccounts = await readAccounts(client);
  const accountNames = new Set(existingAccounts.map(({ name }) => name));
  const missingAccounts = DEMO_ACCOUNTS.filter(
    ({ name }) => !accountNames.has(name),
  );

  const accountResult =
    missingAccounts.length === 0
      ? {}
      : ((await client.mutation({
          createCompanies: {
            __args: {
              data: missingAccounts.map((account) => ({
                name: account.name,
                domainName: {
                  primaryLinkUrl: `https://${account.domain}`,
                  primaryLinkLabel: account.domain,
                },
                address: {
                  addressStreet1: account.street,
                  addressCity: account.city,
                  addressCountry: 'Zambia',
                },
                annualRevenue: zmw(account.annualRevenue),
                businessSegment: account.businessSegment,
                ownershipType: account.ownershipType,
                salesRegion: account.salesRegion,
                accountManager: account.accountManager,
              })),
            },
            id: true,
            name: true,
          },
        } as never)) as { createCompanies?: NamedRecord[] });

  const allAccounts = [
    ...existingAccounts,
    ...(accountResult.createCompanies ?? []),
  ];
  const accountIds = new Map(
    allAccounts.map(({ name, id }) => [name, id] as const),
  );

  const existingContacts = await readContacts(client);
  const contactEmails = new Set(
    existingContacts.flatMap(({ emails }) =>
      emails?.primaryEmail ? [emails.primaryEmail] : [],
    ),
  );
  const missingContacts = DEMO_CONTACTS.filter(
    ({ email }) => !contactEmails.has(email),
  );

  const contactResult =
    missingContacts.length === 0
      ? {}
      : ((await client.mutation({
          createPeople: {
            __args: {
              data: missingContacts.map((contact) => ({
                name: {
                  firstName: contact.firstName,
                  lastName: contact.lastName,
                },
                emails: { primaryEmail: contact.email },
                phones: {
                  primaryPhoneNumber: contact.phone,
                  primaryPhoneCallingCode: '+260',
                  primaryPhoneCountryCode: 'ZM',
                },
                jobTitle: contact.jobTitle,
                companyId: requireMappedId(accountIds, contact.accountName),
              })),
            },
            id: true,
            emails: { primaryEmail: true },
          },
        } as never)) as { createPeople?: ContactRecord[] });

  const allContacts = [
    ...existingContacts,
    ...(contactResult.createPeople ?? []),
  ];
  const contactIds = new Map(
    allContacts.flatMap(({ id, emails }) =>
      emails?.primaryEmail ? [[emails.primaryEmail, id] as const] : [],
    ),
  );

  const existingOpportunities = await readOpportunities(client);
  const opportunityNames = new Set(
    existingOpportunities.map(({ name }) => name),
  );
  const missingOpportunities = DEMO_OPPORTUNITIES.filter(
    ({ name }) => !opportunityNames.has(name),
  );

  const opportunityResult =
    missingOpportunities.length === 0
      ? {}
      : ((await client.mutation({
          createOpportunities: {
            __args: {
              data: missingOpportunities.map((opportunity) => ({
                name: opportunity.name,
                stage: opportunity.stage,
                amount: zmw(opportunity.amount),
                closeDate: `${opportunity.closeDate}T00:00:00.000Z`,
                companyId: requireMappedId(accountIds, opportunity.accountName),
                pointOfContactId: requireMappedId(
                  contactIds,
                  opportunity.contactEmail,
                ),
                probabilityOfClosure: opportunity.probabilityOfClosure,
                businessSegment: opportunity.businessSegment,
                productService: opportunity.productService,
                accountManager: opportunity.accountManager,
                salesManager: opportunity.salesManager,
                competitor: opportunity.competitor,
                lossReason: opportunity.lossReason,
              })),
            },
            id: true,
            name: true,
          },
        } as never)) as { createOpportunities?: NamedRecord[] });

  const existingContracts = await readContracts(client);
  const contractNumbers = new Set(
    existingContracts.map(({ contractNumber }) => contractNumber),
  );
  const missingContracts = DEMO_CONTRACTS.filter(
    ({ contractNumber }) => !contractNumbers.has(contractNumber),
  );
  const contractResult =
    missingContracts.length === 0
      ? {}
      : ((await client.mutation({
          createContracts: {
            __args: {
              data: missingContracts.map((contract) => {
                const renewal = calculateContractRenewalDetails({
                  expiryDate: contract.expiryDate,
                  noticePeriodDays: contract.noticePeriodDays,
                  referenceDate: '2026-10-07',
                  status: contract.status as never,
                });

                return {
                  name: contract.name,
                  contractNumber: contract.contractNumber,
                  accountId: requireMappedId(accountIds, contract.accountName),
                  primaryContactId: requireMappedId(
                    contactIds,
                    contract.contactEmail,
                  ),
                  opportunityId: requireMappedId(
                    new Map(
                      [
                        ...existingOpportunities,
                        ...(opportunityResult.createOpportunities ?? []),
                      ].map(({ name, id }) => [name, id] as const),
                    ),
                    contract.opportunityName,
                  ),
                  accountManager: contract.accountManager,
                  salesManager: contract.salesManager,
                  contractType: contract.contractType,
                  description: { markdown: contract.description },
                  contractValue: zmw(contract.value),
                  currencyCode: 'ZMW',
                  effectiveDate: contract.effectiveDate,
                  expiryDate: contract.expiryDate,
                  noticePeriodDays: contract.noticePeriodDays,
                  renewalType: contract.renewalType,
                  autoRenewal: contract.autoRenewal,
                  billingFrequency: contract.billingFrequency,
                  slaServiceTier: contract.slaServiceTier,
                  status: contract.status,
                  renewalActionDate: renewal.renewalActionDate,
                  daysUntilExpiry: renewal.daysUntilExpiry,
                  renewalState: renewal.renewalState,
                  renewalInsight: renewal.renewalInsight,
                };
              }),
            },
            id: true,
            contractNumber: true,
          },
        } as never)) as { createContracts?: ContractRecord[] });

  const contractsForSummary = DEMO_CONTRACTS.map((contract) => ({
    ...contract,
    renewal: calculateContractRenewalDetails({
      expiryDate: contract.expiryDate,
      noticePeriodDays: contract.noticePeriodDays,
      referenceDate: '2026-10-07',
      status: contract.status as never,
    }),
  }));

  for (const account of DEMO_ACCOUNTS) {
    const accountContracts = contractsForSummary.filter(
      ({ accountName }) => accountName === account.name,
    );
    const activeContracts = accountContracts.filter(({ status }) =>
      ['ACTIVE', 'EXPIRING', 'RENEWAL_IN_PROGRESS', 'RENEWED'].includes(status),
    );
    const nearestExpiry = accountContracts
      .filter(({ status }) => status !== 'TERMINATED')
      .map(({ expiryDate }) => expiryDate)
      .sort()[0];
    const contractsRequiringAction = accountContracts.filter(({ renewal }) =>
      ['ACTION_REQUIRED', 'OVERDUE'].includes(renewal.renewalState),
    ).length;

    await client.mutation({
      updateCompanies: {
        __args: {
          filter: { id: { in: [requireMappedId(accountIds, account.name)] } },
          data: {
            activeContractsCount: activeContracts.length,
            totalContractValue: zmw(
              activeContracts.reduce((total, { value }) => total + value, 0),
            ),
            nearestContractExpiry: nearestExpiry,
            contractsRequiringAction,
          },
        },
        id: true,
      },
    } as never);
  }

  const memberResult = (await client.query({
    workspaceMembers: {
      __args: { first: 100 },
      edges: { node: { id: true, name: { firstName: true, lastName: true } } },
    },
  } as never)) as { workspaceMembers?: { edges?: { node: { id: string; name?: { firstName?: string | null; lastName?: string | null } | null } }[] } };
  const memberIds = new Map(
    (memberResult.workspaceMembers?.edges ?? []).map(({ node }) => [
      [node.name?.firstName, node.name?.lastName].filter(Boolean).join(' '),
      node.id,
    ] as const),
  );

  const siteResult = (await client.query({
    customerSites: { __args: { first: 100 }, edges: { node: { id: true, name: true } } },
  } as never)) as { customerSites?: { edges?: { node: NamedRecord }[] } };
  const existingSiteNames = new Set((siteResult.customerSites?.edges ?? []).map(({ node }) => node.name));
  const missingSites = DEMO_CUSTOMER_SITES.filter(({ name }) => !existingSiteNames.has(name));
  const siteCreateResult = missingSites.length === 0 ? {} : ((await client.mutation({
    createCustomerSites: {
      __args: { data: missingSites.map((site) => ({ name: site.name, siteType: site.siteType, siteAddress: site.address, province: site.province, district: site.district, latitude: site.latitude, longitude: site.longitude, active: true, accountId: requireMappedId(accountIds, site.accountName), ...(contactIds.get(site.contactEmail) ? { primaryContactId: contactIds.get(site.contactEmail) } : {}) })) },
      id: true,
      name: true,
    },
  } as never)) as { createCustomerSites?: NamedRecord[] });
  const allSites = [...(siteResult.customerSites?.edges ?? []).map(({ node }) => node), ...(siteCreateResult.createCustomerSites ?? [])];
  const siteIds = new Map(allSites.map(({ name, id }) => [name, id] as const));

  const locationResult = (await client.query({
    accountManagerLocations: { __args: { first: 100 }, edges: { node: { id: true, name: true } } },
  } as never)) as { accountManagerLocations?: { edges?: { node: NamedRecord }[] } };
  const existingLocationNames = new Set((locationResult.accountManagerLocations?.edges ?? []).map(({ node }) => node.name));
  const missingLocations = DEMO_MANAGER_LOCATIONS.filter(({ name }) => !existingLocationNames.has(name));
  const locationCreateResult = missingLocations.length === 0 ? {} : ((await client.mutation({
    createAccountManagerLocations: {
      __args: { data: missingLocations.map((location) => ({ name: location.name, managerName: location.managerName, latitude: location.latitude, longitude: location.longitude, accuracy: location.accuracy, recordedAt: location.recordedAt, source: location.source, context: location.context, ...(memberIds.get(location.managerName) ? { accountManagerId: memberIds.get(location.managerName) } : {}) })) },
      id: true,
      name: true,
    },
  } as never)) as { createAccountManagerLocations?: NamedRecord[] });

  const visitResult = (await client.query({
    plannedVisits: { __args: { first: 100 }, edges: { node: { id: true, name: true } } },
  } as never)) as { plannedVisits?: { edges?: { node: NamedRecord }[] } };
  const existingVisitNames = new Set((visitResult.plannedVisits?.edges ?? []).map(({ node }) => node.name));
  const missingVisits = DEMO_PLANNED_VISITS.filter(({ name }) => !existingVisitNames.has(name));
  const siteIdByName = new Map(siteIds);
  const visitCreateResult = missingVisits.length === 0 ? {} : ((await client.mutation({
    createPlannedVisits: {
      __args: { data: missingVisits.map((visit) => ({ name: visit.name, managerName: visit.managerName, plannedDate: `${FIELD_SALES_DEMO_DATE}T00:00:00.000Z`, plannedStartTime: visit.plannedStartTime, plannedEndTime: visit.plannedEndTime, sequence: visit.sequence, purpose: visit.purpose, status: visit.status, accountId: requireMappedId(accountIds, visit.accountName), customerSiteId: requireMappedId(siteIdByName, visit.siteName), ...(memberIds.get(visit.managerName) ? { accountManagerId: memberIds.get(visit.managerName) } : {}) })) },
      id: true,
      name: true,
    },
  } as never)) as { createPlannedVisits?: NamedRecord[] });

  const targetResult = (await client.query({
    salesTargets: { __args: { filter: { name: { eq: 'October 2026 Field Sales Target' } }, first: 1 }, edges: { node: { id: true, name: true } } },
  } as never)) as { salesTargets?: { edges?: { node: NamedRecord }[] } };
  const targetCreateResult = (targetResult.salesTargets?.edges?.length ?? 0) > 0 ? {} : ((await client.mutation({
    createSalesTargets: { __args: { data: [{ name: 'October 2026 Field Sales Target', targetMonth: `${FIELD_SALES_DEMO_DATE}T00:00:00.000Z`, targetValue: zmw(8000000), currencyCode: 'ZMW' }] }, id: true, name: true },
  } as never)) as { createSalesTargets?: NamedRecord[] });

  return {
    accountsCreated: accountResult.createCompanies?.length ?? 0,
    contactsCreated: contactResult.createPeople?.length ?? 0,
    opportunitiesCreated: opportunityResult.createOpportunities?.length ?? 0,
    contractsCreated: contractResult.createContracts?.length ?? 0,
    customerSitesCreated: siteCreateResult.createCustomerSites?.length ?? 0,
    managerLocationsCreated: locationCreateResult.createAccountManagerLocations?.length ?? 0,
    plannedVisitsCreated: visitCreateResult.createPlannedVisits?.length ?? 0,
    salesTargetsCreated: targetCreateResult.createSalesTargets?.length ?? 0,
  };
};
