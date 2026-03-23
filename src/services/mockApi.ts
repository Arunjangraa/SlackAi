// ─── Types ────────────────────────────────────────────────────────────────────

export interface TopCardData {
  value: number;
  trend: number;
  data: number[];
}

export interface ChartDataPoint {
  month: string;
  sales: number;
}

export interface TableRow {
  rank: number;
  product: string;
  category: string;
  revenue: number;
  units: number;
  trend: number;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const MOCK_MARKET_SHARE: TopCardData = {
  value: 23.5,
  trend: 32.5,
  data: [15, 20, 18, 25, 23, 28, 26, 30, 28, 12, 12, 20, 100],
};

const MOCK_MONTHLY_SALES: ChartDataPoint[] = [
  { month: 'Jan', sales: 42000 },
  { month: 'Feb', sales: 53000 },
  { month: 'Mar', sales: 48000 },
  { month: 'Apr', sales: 61000 },
  { month: 'May', sales: 55000 },
  { month: 'Jun', sales: 67000 },
  { month: 'Jul', sales: 72000 },
  { month: 'Aug', sales: 69000 },
  { month: 'Sep', sales: 78000 },
  { month: 'Oct', sales: 83000 },
  { month: 'Nov', sales: 91000 },
  { month: 'Dec', sales: 105000 },
];

const MOCK_TOP_PRODUCTS: TableRow[] = [
  { rank: 1, product: 'Protein Whey Gold', category: 'Protein', revenue: 124500, units: 2890, trend: 18.5 },
  { rank: 2, product: 'Omega-3 Fish Oil', category: 'Vitamins', revenue: 98200, units: 4100, trend: 12.3 },
  { rank: 3, product: 'Multivitamin Daily', category: 'Vitamins', revenue: 87600, units: 3750, trend: -4.2 },
  { rank: 4, product: 'Creatine Monohydrate', category: 'Performance', revenue: 76400, units: 2100, trend: 22.1 },
  { rank: 5, product: 'Collagen Peptides', category: 'Wellness', revenue: 65300, units: 1980, trend: 9.8 },
];

// ─── Helper ───────────────────────────────────────────────────────────────────

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// ─── API Registry ─────────────────────────────────────────────────────────────

type ApiResult = TopCardData | ChartDataPoint[] | TableRow[];

const API_REGISTRY: Record<string, () => Promise<ApiResult>> = {
  '/api/metrics/marketShare': async () => {
    await delay(400);
    return MOCK_MARKET_SHARE;
  },
  '/api/sales/monthly': async () => {
    await delay(500);
    return MOCK_MONTHLY_SALES;
  },
  '/api/products/top': async () => {
    await delay(450);
    return MOCK_TOP_PRODUCTS;
  },
};

export const fetchSectionData = async (dataSource: string): Promise<ApiResult> => {
  const handler = API_REGISTRY[dataSource];
  if (!handler) throw new Error(`No mock API found for: ${dataSource}`);
  return handler();
};
