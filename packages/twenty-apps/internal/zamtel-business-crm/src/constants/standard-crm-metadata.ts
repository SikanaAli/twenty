export const STANDARD_CRM_METADATA = {
  company: {
    universalIdentifier: '20202020-b374-4779-a561-80086cb2e17f',
    fields: {
      annualRevenue: '60f533b7-2166-4071-a767-ceb0286822fd',
    },
  },
  person: {
    universalIdentifier: '20202020-e674-48e5-a542-72570eee7213',
    fields: {
      company: '20202020-e2f3-448e-b34c-2d625f0025fd',
    },
  },
  opportunity: {
    universalIdentifier: '20202020-9549-49dd-b2b2-883999db8938',
    fields: {
      amount: '20202020-583e-4642-8533-db761d5fa82f',
      closeDate: '20202020-527e-44d6-b1ac-c4158d307b97',
      company: '20202020-cbac-457e-b565-adece5fc815f',
      stage: '20202020-6f76-477d-8551-28cd65b2b4b9',
    },
  },
} as const;
