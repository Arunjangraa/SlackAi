import type { DashboardData } from '@types';

export const initialDashboardData: DashboardData = {
  title: 'Category Analysis',
  subtitle: 'Health Supplements +3',
  totalProducts: 120,
  performance: {
    overview: {
      marketShare: { value: 23.5, trend: 32.5, data: [15, 20, 18, 25, 23, 28, 26, 30, 28, 12, 12, 20, 100] },
      overallSOV: { value: 21.3, trend: -6.5, data: [28, 26, 27, 25, 22, 24, 21, 19, 17, 18, 15, 12, 10] },
      weightAvailability: { value: 23.5, trend: 22.2, data: [12, 15, 14, 18, 16, 20, 19, 22, 20, 25, 23, 28, 26] },
    },
    traffic: {
      status: 'Good',
      metrics: [
        { label: 'Organic SOV', current: 23.5, trend: 32.5 },
        { label: 'Paid SOV', current: 23.5, trend: -32.5 },
        { label: 'Branded Search', current: 23.5, trend: 32.5 },
      ],
      laggardsTitle: 'Overall SOV',
      laggards: [
        { name: 'Sub Cat1', current: 23.5, trend: 32.5 },
        { name: 'Sub Cat2', current: 23.5, trend: -32.5 },
        { name: 'Sub Cat3', current: 23.5, trend: 32.5 },
      ],
    },
    conversion: {
      status: 'Medium',
      metrics: [
        { label: 'RPI', current: 89, trend: 32.5 },
        { label: 'Rating', current: 56, trend: -32.5 },
        { label: 'Content Score', current: 32, trend: 32.5 },
      ],
      laggardsTitle: 'RPI',
      laggards: [
        { name: 'Sub Cat1', current: 23.5, trend: 32.5 },
        { name: 'Sub Cat2', current: 23.5, trend: -32.5 },
        { name: 'Sub Cat3', current: 23.5, trend: 32.5 },
      ],
    },
    operations: {
      status: 'Poor',
      metrics: [
        { label: 'Listing Status', current: 23.5, trend: 32.5 },
        { label: 'Fill Rate', current: 23.5, trend: -32.5 },
        { label: 'Stock in Hand', current: 23.5, trend: 32.5 },
      ],
      laggardsTitle: 'Wt. Availability',
      laggards: [
        { name: 'Sub Cat1', current: 23.5, trend: 32.5 },
        { name: 'Sub Cat2', current: 23.5, trend: -32.5 },
        { name: 'Sub Cat3', current: 23.5, trend: 32.5 },
      ],
    },
  },
};
