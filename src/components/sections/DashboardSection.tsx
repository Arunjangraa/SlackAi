import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import type { DashboardSectionConfig } from '@config';
import {
  fetchSectionData,
  type TopCardData,
  type ChartDataPoint,
  type TableRow,
} from '@services';
import { TopCardSection, ChartSection, TableSection } from '@components';

interface Props {
  config: DashboardSectionConfig;
}

export const DashboardSection = ({ config }: Props) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['section', config.id, config.dataSource],
    queryFn: () => fetchSectionData(config.dataSource),
  });

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center justify-center h-36">
        <Loader2 size={24} className="animate-spin text-indigo-400" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-6 flex items-center justify-center h-36">
        <p className="text-sm text-red-400 font-medium">Failed to load "{config.title}"</p>
      </div>
    );
  }

  switch (config.type) {
    case 'topCard':
      return <TopCardSection title={config.title} data={data as TopCardData} />;
    case 'chart':
      return <ChartSection title={config.title} data={data as ChartDataPoint[]} />;
    case 'table':
      return <TableSection title={config.title} data={data as TableRow[]} />;
    default:
      return null;
  }
};
