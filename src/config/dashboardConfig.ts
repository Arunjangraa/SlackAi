export type SectionType = 'topCard' | 'chart' | 'table';

export interface DashboardSectionConfig {
  id: string;
  type: SectionType;
  title: string;
  dataSource: string; // mock API endpoint key
  iconName?: string;  // lucide-react icon name
  gridSpan?: string;  // tailwind grid span class (e.g., 'md:col-span-2')
  isTrendUp?: boolean; // configuration for trend indicators
  customProps?: Record<string, any>; // catch-all for component specific overrides
}

export interface DashboardConfig {
  OverviewTab: DashboardSectionConfig[];
  TrafficTab: DashboardSectionConfig[];
  ConversionTab: DashboardSectionConfig[];
  OperationsTab: DashboardSectionConfig[];
}

const createSections = (prefix: string): DashboardSectionConfig[] => [
  {
    id: `${prefix}-1`,
    type: 'topCard',
    title: 'Market Share',
    dataSource: `/api/${prefix}/marketShare`,
    iconName: 'PieChart',
    gridSpan: 'col-span-1'
  },
  {
    id: `${prefix}-2`,
    type: 'topCard',
    title: 'Overall SOV%',
    dataSource: `/api/${prefix}/overallSov`,
    iconName: 'BarChart2',
    gridSpan: 'col-span-1'
  },
  {
    id: `${prefix}-3`,
    type: 'topCard',
    title: 'Wt. Availability%',
    dataSource: `/api/${prefix}/wtAvailability`,
    iconName: 'CheckCircle',
    gridSpan: 'col-span-1'
  },
  {
    id: `${prefix}-4`,
    type: 'table',
    title: 'Traffic',
    dataSource: `/api/${prefix}/traffic`,
    iconName: 'Eye',
    gridSpan: 'md:col-span-2 xl:col-span-1'
  },
  {
    id: `${prefix}-5`,
    type: 'table',
    title: 'Conversion',
    dataSource: `/api/${prefix}/conversion`,
    iconName: 'ShoppingCart',
    gridSpan: 'md:col-span-2 xl:col-span-1'
  },
  {
    id: `${prefix}-6`,
    type: 'table',
    title: 'Operations',
    dataSource: `/api/${prefix}/operations`,
    iconName: 'Truck',
    gridSpan: 'md:col-span-2 xl:col-span-1'
  },
];

export const dashboardConfig: DashboardConfig = {
  OverviewTab: createSections('overview'),
  TrafficTab: createSections('traffic'),
  ConversionTab: createSections('conversion'),
  OperationsTab: createSections('operations'),
};
