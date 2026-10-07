import { MetadataApiClient } from 'twenty-client-sdk/metadata';
import { SALES_PIPELINE_OPTIONS } from '../constants/crm-options';
import { STANDARD_CRM_METADATA } from '../constants/standard-crm-metadata';

type MetadataField = {
  id: string;
  universalIdentifier: string;
};

type MetadataObject = {
  id: string;
  universalIdentifier: string;
  fieldsList: MetadataField[];
};

const findMetadataObject = async (
  client: MetadataApiClient,
  universalIdentifier: string,
): Promise<MetadataObject> => {
  const result = (await client.query({
    objects: {
      __args: {
        filter: {},
        paging: { first: 500 },
      },
      edges: {
        node: {
          id: true,
          universalIdentifier: true,
          fieldsList: { id: true, universalIdentifier: true },
        },
      },
    },
  })) as {
    objects?: { edges?: { node?: MetadataObject }[] };
  };

  const objectMetadata = result.objects?.edges
    ?.map(({ node }) => node)
    .find((object) => object?.universalIdentifier === universalIdentifier);

  if (!objectMetadata) {
    throw new Error(`Unable to find object metadata ${universalIdentifier}`);
  }

  return objectMetadata;
};

const findFieldId = (
  objectMetadata: MetadataObject,
  universalIdentifier: string,
) => {
  const fieldMetadata = objectMetadata.fieldsList.find(
    (field) => field.universalIdentifier === universalIdentifier,
  );

  if (!fieldMetadata) {
    throw new Error(`Unable to find field metadata ${universalIdentifier}`);
  }

  return fieldMetadata.id;
};

export const configureCrm = async () => {
  const client = new MetadataApiClient();

  const [company, person, opportunity] = await Promise.all([
    findMetadataObject(
      client,
      STANDARD_CRM_METADATA.company.universalIdentifier,
    ),
    findMetadataObject(
      client,
      STANDARD_CRM_METADATA.person.universalIdentifier,
    ),
    findMetadataObject(
      client,
      STANDARD_CRM_METADATA.opportunity.universalIdentifier,
    ),
  ]);

  await client.mutation({
    updateOneObject: {
      __args: {
        input: {
          id: company.id,
          update: {
            labelSingular: 'Account',
            labelPlural: 'Accounts',
            description: 'A Zamtel Business customer or prospect account',
            icon: 'IconBuildingSkyscraper',
          },
        },
      },
      id: true,
    },
  });

  const fieldUpdates = [
    {
      id: findFieldId(person, STANDARD_CRM_METADATA.person.fields.company),
      update: { label: 'Account', description: 'The related account' },
    },
    {
      id: findFieldId(
        opportunity,
        STANDARD_CRM_METADATA.opportunity.fields.company,
      ),
      update: { label: 'Account', description: 'The related account' },
    },
    {
      id: findFieldId(
        opportunity,
        STANDARD_CRM_METADATA.opportunity.fields.amount,
      ),
      update: {
        label: 'Expected revenue',
        description: 'Expected opportunity revenue in Zambian Kwacha',
        icon: 'IconCoins',
        defaultValue: { amountMicros: null, currencyCode: "'ZMW'" },
      },
    },
    {
      id: findFieldId(
        company,
        STANDARD_CRM_METADATA.company.fields.annualRevenue,
      ),
      update: {
        defaultValue: { amountMicros: null, currencyCode: "'ZMW'" },
      },
    },
    {
      id: findFieldId(
        opportunity,
        STANDARD_CRM_METADATA.opportunity.fields.closeDate,
      ),
      update: {
        label: 'Expected close date',
        description: 'Expected commercial closure date',
      },
    },
    {
      id: findFieldId(
        opportunity,
        STANDARD_CRM_METADATA.opportunity.fields.stage,
      ),
      update: {
        label: 'Sales stage',
        description: 'Zamtel Business opportunity stage',
        defaultValue: "'PROSPECTING'",
        options: SALES_PIPELINE_OPTIONS,
      },
    },
  ];

  for (const fieldUpdate of fieldUpdates) {
    await client.mutation({
      updateOneField: {
        __args: { input: fieldUpdate as never },
        id: true,
      },
    });
  }
};
