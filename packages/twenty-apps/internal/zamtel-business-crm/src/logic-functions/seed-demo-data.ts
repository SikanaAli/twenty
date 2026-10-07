import { CoreApiClient } from 'twenty-client-sdk/core';
import { DEMO_ACCOUNTS, DEMO_CONTACTS, DEMO_OPPORTUNITIES } from './demo-data';

type NamedRecord = { id: string; name: string };
type ContactRecord = {
  id: string;
  emails?: { primaryEmail?: string | null } | null;
};

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

  return {
    accountsCreated: accountResult.createCompanies?.length ?? 0,
    contactsCreated: contactResult.createPeople?.length ?? 0,
    opportunitiesCreated: opportunityResult.createOpportunities?.length ?? 0,
  };
};
