export type SectionType = 'topCard' | 'chart' | 'table';

export interface DashboardSectionConfig {
  id: string;
  type: SectionType;
  title: string;
  dataSource: string; // mock API endpoint key
}

export interface DashboardConfig {
  OverviewTab: DashboardSectionConfig[];
  TrafficTab: DashboardSectionConfig[];
  ConversionTab: DashboardSectionConfig[];
  OperationsTab: DashboardSectionConfig[];
}

const createSections = (prefix: string): DashboardSectionConfig[] => [
  { id: '1', type: 'topCard', title: 'Market Share', dataSource: `/api/${prefix}/marketShare` },
  { id: '2', type: 'topCard', title: 'Overall SOV%', dataSource: `/api/${prefix}/overallSov` },
  { id: '3', type: 'topCard', title: 'Wt. Availability%', dataSource: `/api/${prefix}/wtAvailability` },
  { id: '4', type: 'table', title: 'Traffic', dataSource: `/api/${prefix}/traffic` },
  { id: '5', type: 'table', title: 'Conversion', dataSource: `/api/${prefix}/conversion` },
  { id: '6', type: 'table', title: 'Operations', dataSource: `/api/${prefix}/operations` },
];

export const dashboardConfig: DashboardConfig = {
  OverviewTab: createSections('overview'),
  TrafficTab: createSections('traffic'),
  ConversionTab: createSections('conversion'),
  OperationsTab: createSections('operations'),
};
