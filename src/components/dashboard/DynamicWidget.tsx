import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Eye, Radio, BarChart2, ShoppingCart, Truck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { AppDispatch, RootState } from '@store';
import { loadWidgetData } from '@store';
import type { DashboardSectionConfig } from '@config';
import { SparklineCard, DetailCard, SparklineSkeleton, DetailCardSkeleton } from '@components';

interface DynamicWidgetProps {
  config: DashboardSectionConfig;
}

const getIconForTitle = (title: string): LucideIcon => {
  const t = title.toLowerCase();
  if (t.includes('traffic')) return Eye;
  if (t.includes('conversion')) return ShoppingCart;
  if (t.includes('operations')) return Truck;
  if (t.includes('device')) return Radio;
  return BarChart2; // Default
};

export const DynamicWidget: React.FC<DynamicWidgetProps> = ({ config }) => {
  const dispatch = useDispatch<AppDispatch>();
  const widgetState = useSelector((state: RootState) => state.dashboard.widgetData[config.dataSource]);

  useEffect(() => {
    if (!widgetState || widgetState.status === 'idle') {
      dispatch(loadWidgetData(config.dataSource));
    }
  }, [dispatch, config.dataSource, widgetState]);

  if (!widgetState || widgetState.status === 'loading') {
    if (config.type === 'topCard' || config.type === 'chart') {
      return <SparklineSkeleton />;
    }
    if (config.type === 'table') {
      return <DetailCardSkeleton />;
    }
    return (
      <div className="bg-white p-5 rounded-[14px] border border-gray-100 shadow-sm flex items-center justify-center animate-pulse min-h-[150px]">
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  if (widgetState.status === 'failed') {
    return (
      <div className="bg-red-50 p-5 rounded-[14px] border border-red-100 flex items-center justify-center min-h-[150px]">
        <span className="text-red-500 font-medium">Failed to load {config.title}</span>
      </div>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = widgetState.data as any;

  // Guard against missing data
  if (!data) return null;

  switch (config.type) {
    case 'topCard':
    case 'chart':
      return (
        <SparklineCard
          title={config.title}
          value={data.value}
          trend={data.trend}
          data={data.data}
        />
      );
    case 'table':
      return (
        <DetailCard
          icon={getIconForTitle(config.title)}
          title={config.title}
          status={data.status || 'Good'}
          metrics={data.metrics || []}
          laggardsTitle={data.laggardsTitle || 'Laggards'}
          laggards={data.laggards || []}
        />
      );
    default:
      return null;
  }
};
