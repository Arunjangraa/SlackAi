export interface MetricTrend {
  value: number;
  trend: number;
  data: number[]; // For sparklines
}

export interface OverviewData {
  marketShare: MetricTrend;
  overallSOV: MetricTrend;
  weightAvailability: MetricTrend;
}

export interface TopLaggard {
  name: string;
  current: number;
  trend: number;
}

export interface DetailSection {
  status: 'Good' | 'Medium' | 'Poor';
  metrics: {
    label: string;
    current: number;
    trend: number;
  }[];
  laggardsTitle: string;
  laggards: TopLaggard[];
}

export interface PerformanceData {
  overview: OverviewData;
  traffic: DetailSection;
  conversion: DetailSection;
  operations: DetailSection;
}





export interface DashboardData {
  title: string;
  subtitle: string;
  totalProducts: number;
  performance: PerformanceData;
}
