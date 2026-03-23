// Helper to generate jittered mock data based on the prefix mapping
const multipliers: Record<string, number> = {
  overview: 1.0,
  traffic: 1.5,
  conversion: 0.8,
  operations: 1.2,
};

const topCardsSpecs = {
  marketShare: { value: 23.5, trend: 32.5, isPercentage: true, data: [10, 20, 15, 30, 25, 40, 35, 50, 45, 60] },
  overallSov: { value: 21.3, trend: -6.5, isPercentage: true, data: [60, 45, 50, 35, 40, 25, 30, 15, 20, 10] },
  wtAvailability: { value: 23.5, trend: 22.2, isPercentage: true, data: [15, 25, 20, 35, 30, 45, 40, 55, 50, 65] },
} as const;

const tableSpecs = {
  traffic: {
    status: 'Good',
    metrics: [
      { label: 'Organic SOV', current: 23.5, trend: 32.5, isPercentage: true },
      { label: 'Paid SOV', current: 23.5, trend: -32.5, isPercentage: true },
      { label: 'Branded Search', current: 23.5, trend: 32.5, isPercentage: true },
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
      { label: 'RPI', current: 89, trend: 32.5, isPercentage: false },
      { label: 'Rating', current: 56, trend: -32.5, isPercentage: false },
      { label: 'Content Score', current: 32, trend: 32.5, isPercentage: false },
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
      { label: 'Listing Status', current: 23.5, trend: 32.5, isPercentage: true },
      { label: 'Fill Rate', current: 23.5, trend: -32.5, isPercentage: true },
      { label: 'Stock in Hand', current: 23.5, trend: 32.5, isPercentage: true },
    ],
    laggardsTitle: 'Wt. Availability',
    laggards: [
      { name: 'Sub Cat1', current: 23.5, trend: 32.5 },
      { name: 'Sub Cat2', current: 23.5, trend: -32.5 },
      { name: 'Sub Cat3', current: 23.5, trend: 32.5 },
    ],
  },
} as const;

export const fetchWidgetData = async (dataSource: string): Promise<unknown> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const parts = dataSource.split('/');
  // expected structure: /api/{prefix}/{widgetName}
  const prefix = parts[2] || 'overview';
  const widgetId = (parts[3] || 'marketShare') as keyof typeof topCardsSpecs | keyof typeof tableSpecs;

  const m = multipliers[prefix] || 1.0;

  // Handle Top Cards
  if (widgetId in topCardsSpecs) {
    const spec = topCardsSpecs[widgetId as keyof typeof topCardsSpecs];
    return {
      value: spec.isPercentage ? `${(spec.value * m).toFixed(1)}%` : Math.round(spec.value * m),
      trend: Number((spec.trend * m).toFixed(1)),
      data: spec.data.map((v) => v * m),
    };
  }

  // Handle Detail Card Tables
  if (widgetId in tableSpecs) {
    const spec = tableSpecs[widgetId as keyof typeof tableSpecs];
    return {
      status: spec.status,
      metrics: spec.metrics.map((metric) => ({
        label: metric.label,
        current: metric.isPercentage ? `${(metric.current * m).toFixed(1)}%` : Math.round(metric.current * m),
        trend: Number((metric.trend * m).toFixed(1)),
      })),
      laggardsTitle: spec.laggardsTitle,
      laggards: spec.laggards.map((lag) => ({
        name: lag.name,
        current: Number((lag.current * m).toFixed(1)),
        trend: Number((lag.trend * m).toFixed(1)),
      })),
    };
  }

  throw new Error(`Data source not found: ${dataSource}`);
};
