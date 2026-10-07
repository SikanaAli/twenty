export type DemoCustomerSite = {
  name: string;
  accountName: string;
  siteType: string;
  address: string;
  province: string;
  district: string;
  latitude: number;
  longitude: number;
  contactEmail: string;
};

export type DemoManagerLocation = {
  name: string;
  managerName: string;
  latitude: number;
  longitude: number;
  accuracy: number;
  recordedAt: string;
  source: string;
  context: string;
};

export type DemoPlannedVisit = {
  name: string;
  managerName: string;
  accountName: string;
  siteName: string;
  plannedStartTime: string;
  plannedEndTime: string;
  sequence: number;
  purpose: string;
  status: string;
};

export const FIELD_SALES_DEMO_DATE = '2026-10-07';

export const DEMO_CUSTOMER_SITES: DemoCustomerSite[] = [
  { name: 'Kafue Horizon — Lusaka Office', accountName: 'Kafue Horizon Manufacturing', siteType: 'HEAD_OFFICE', address: '18 Industrial Way, Lusaka', province: 'Lusaka', district: 'Lusaka', latitude: -15.4167, longitude: 28.2833, contactEmail: 'luyando.tembo@kafue-horizon.example' },
  { name: 'Kafue Horizon — Production Plant', accountName: 'Kafue Horizon Manufacturing', siteType: 'PLANT', address: 'Mungule Road, Kafue', province: 'Lusaka', district: 'Kafue', latitude: -15.769, longitude: 28.181, contactEmail: 'luyando.tembo@kafue-horizon.example' },
  { name: 'Copper Trail — Ndola Depot', accountName: 'Copper Trail Logistics', siteType: 'WAREHOUSE', address: '42 Freedom Park Road, Ndola', province: 'Copperbelt', district: 'Ndola', latitude: -12.968, longitude: 28.636, contactEmail: 'twaambo.banda@copper-trail.example' },
  { name: 'Mukwa Agro — Choma Mill', accountName: 'Mukwa Agro Processing', siteType: 'PLANT', address: '7 Market Link, Choma', province: 'Southern', district: 'Choma', latitude: -16.809, longitude: 26.978, contactEmail: 'nasilele.moyo@mukwa-agro.example' },
  { name: 'Northern Star — Solwezi HQ', accountName: 'Northern Star Mining Services', siteType: 'HEAD_OFFICE', address: '11 Kansanshi Crescent, Solwezi', province: 'North-Western', district: 'Solwezi', latitude: -12.168, longitude: 26.394, contactEmail: 'chanda.mulenga@northern-star.example' },
  { name: 'Lusaka Civic — Independence Avenue', accountName: 'Lusaka Civic Technologies', siteType: 'HEAD_OFFICE', address: '25 Independence Avenue, Lusaka', province: 'Lusaka', district: 'Lusaka', latitude: -15.421, longitude: 28.297, contactEmail: 'mubanga.silozi@lusaka-civic.example' },
  { name: 'Meridian Health — Kabulonga', accountName: 'Meridian Health Supplies', siteType: 'BRANCH', address: '33 Kabulonga Road, Lusaka', province: 'Lusaka', district: 'Lusaka', latitude: -15.438, longitude: 28.344, contactEmail: 'chipo.tembo@meridian-health.example' },
  { name: 'Capital Retail — Cairo Road', accountName: 'Capital Retail Cooperative', siteType: 'SERVICE_POINT', address: '61 Cairo Road, Lusaka', province: 'Lusaka', district: 'Lusaka', latitude: -15.417, longitude: 28.282, contactEmail: 'mulenga.kunda@capital-retail.example' },
  { name: 'Capital Retail — Chelstone', accountName: 'Capital Retail Cooperative', siteType: 'BRANCH', address: 'Great East Road, Chelstone', province: 'Lusaka', district: 'Lusaka', latitude: -15.391, longitude: 28.373, contactEmail: 'mulenga.kunda@capital-retail.example' },
  { name: 'Southern Cross — Riverside', accountName: 'Southern Cross Hospitality', siteType: 'HEAD_OFFICE', address: '3 Riverside Drive, Livingstone', province: 'Southern', district: 'Livingstone', latitude: -17.842, longitude: 25.856, contactEmail: 'tandiwe.phiri@southern-cross.example' },
  { name: 'Zambezi Fresh — Lusaka Cold Store', accountName: 'Zambezi Fresh Foods', siteType: 'WAREHOUSE', address: 'Makeni Road, Lusaka', province: 'Lusaka', district: 'Lusaka', latitude: -15.482, longitude: 28.291, contactEmail: 'mumba.lungu@zambezi-fresh.example' },
  { name: 'Luangwa Education — Chipata Campus', accountName: 'Luangwa Education Network', siteType: 'SERVICE_POINT', address: '14 Great East Road, Chipata', province: 'Eastern', district: 'Chipata', latitude: -13.632, longitude: 32.646, contactEmail: 'ruth.mwewa@luangwa-education.example' },
];

export const DEMO_MANAGER_LOCATIONS: DemoManagerLocation[] = [
  { name: 'Chileshe Mwila — latest sample', managerName: 'Chileshe Mwila', latitude: -15.416, longitude: 28.291, accuracy: 18, recordedAt: '2026-10-07T07:45:00.000Z', source: 'MOBILE_SAMPLE', context: 'Morning route start' },
  { name: 'Bupe Banda — latest sample', managerName: 'Bupe Banda', latitude: -15.431, longitude: 28.312, accuracy: 24, recordedAt: '2026-10-07T07:52:00.000Z', source: 'FIELD_CHECK_IN', context: 'Customer check-in' },
  { name: 'Thandiwe Zulu — latest sample', managerName: 'Thandiwe Zulu', latitude: -15.469, longitude: 28.303, accuracy: 15, recordedAt: '2026-10-07T07:40:00.000Z', source: 'MOBILE_SAMPLE', context: 'Route start' },
  { name: 'Mutinta Phiri — latest sample', managerName: 'Mutinta Phiri', latitude: -15.389, longitude: 28.349, accuracy: 21, recordedAt: '2026-10-07T07:58:00.000Z', source: 'FIELD_CHECK_IN', context: 'Account review' },
];

const visit = (sequence: number, managerName: string, accountName: string, siteName: string, start: string, purpose: string, status: string): DemoPlannedVisit => ({ name: `${FIELD_SALES_DEMO_DATE} · ${String(sequence).padStart(2, '0')} · ${siteName}`, managerName, accountName, siteName, plannedStartTime: `${FIELD_SALES_DEMO_DATE}T${start}:00.000Z`, plannedEndTime: `${FIELD_SALES_DEMO_DATE}T${String(Number(start.slice(0, 2)) + 1).padStart(2, '0')}:${start.slice(3)}:00.000Z`, sequence, purpose, status });

export const DEMO_PLANNED_VISITS: DemoPlannedVisit[] = [
  visit(1, 'Chileshe Mwila', 'Lusaka Civic Technologies', 'Lusaka Civic — Independence Avenue', '08:00', 'ACCOUNT_REVIEW', 'COMPLETED'),
  visit(2, 'Chileshe Mwila', 'Capital Retail Cooperative', 'Capital Retail — Cairo Road', '10:00', 'UPSELL_CROSS_SELL', 'IN_PROGRESS'),
  visit(3, 'Chileshe Mwila', 'Kafue Horizon Manufacturing', 'Kafue Horizon — Lusaka Office', '13:00', 'SERVICE_REVIEW', 'PLANNED'),
  visit(4, 'Chileshe Mwila', 'Meridian Health Supplies', 'Meridian Health — Kabulonga', '15:00', 'CONTRACT_RENEWAL', 'MISSED'),
  visit(1, 'Bupe Banda', 'Capital Retail Cooperative', 'Capital Retail — Chelstone', '08:30', 'PROSPECTING', 'COMPLETED'),
  visit(2, 'Bupe Banda', 'Copper Trail Logistics', 'Copper Trail — Ndola Depot', '11:00', 'ACCOUNT_REVIEW', 'PLANNED'),
  visit(3, 'Bupe Banda', 'Kafue Horizon Manufacturing', 'Kafue Horizon — Production Plant', '14:30', 'COLLECTIONS_FOLLOW_UP', 'EXCEPTION'),
  visit(1, 'Thandiwe Zulu', 'Zambezi Fresh Foods', 'Zambezi Fresh — Lusaka Cold Store', '08:15', 'SERVICE_REVIEW', 'COMPLETED'),
  visit(2, 'Thandiwe Zulu', 'Southern Cross Hospitality', 'Southern Cross — Riverside', '11:30', 'ACCOUNT_REVIEW', 'PLANNED'),
  visit(3, 'Thandiwe Zulu', 'Mukwa Agro Processing', 'Mukwa Agro — Choma Mill', '15:00', 'UPSELL_CROSS_SELL', 'CANCELLED'),
  visit(1, 'Mutinta Phiri', 'Meridian Health Supplies', 'Meridian Health — Kabulonga', '08:45', 'PROSPECTING', 'COMPLETED'),
  visit(2, 'Mutinta Phiri', 'Capital Retail Cooperative', 'Capital Retail — Chelstone', '10:30', 'CONTRACT_RENEWAL', 'PLANNED'),
  visit(3, 'Mutinta Phiri', 'Northern Star Mining Services', 'Northern Star — Solwezi HQ', '14:00', 'SERVICE_REVIEW', 'MISSED'),
  visit(4, 'Mutinta Phiri', 'Luangwa Education Network', 'Luangwa Education — Chipata Campus', '16:00', 'CUSTOMER_SUPPORT_FOLLOW_UP', 'PLANNED'),
];
