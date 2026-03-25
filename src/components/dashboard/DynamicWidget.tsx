import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Icons from 'lucide-react';
import type { AppDispatch, RootState } from '@store';
import { loadWidgetData } from '@store';
import type { DashboardSectionConfig } from '@config';
import { SparklineCard, DetailCard, SparklineSkeleton, DetailCardSkeleton } from '@components';

interface DynamicWidgetProps {
  config: DashboardSectionConfig;
}

export const DynamicWidget: React.FC<DynamicWidgetProps> = ({ config }) => {
  const dispatch = useDispatch<AppDispatch>();
  const widgetState = useSelector((state: RootState) => state.dashboard.widgetData[config.dataSource]);

  useEffect(() => {
    if (!widgetState || widgetState.status === 'idle') {
      dispatch(loadWidgetData(config.dataSource));
    }
  }, [dispatch, config.dataSource, widgetState]);

  // Dynamically resolve the icon
  const IconComponent = (config.iconName && (Icons as any)[config.iconName]) || Icons.BarChart2;

  if (!widgetState || widgetState.status === 'loading') {
    return (
      <div className={config.gridSpan}>
        {config.type === 'table' ? <DetailCardSkeleton /> : <SparklineSkeleton />}
      </div>
    );
  }

  if (widgetState.status === 'failed') {
    return (
      <div className={`${config.gridSpan} bg-red-50 p-5 rounded-[14px] border border-red-100 flex items-center justify-center min-h-[150px]`}>
        <span className="text-red-500 font-medium">Failed to load {config.title}</span>
      </div>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = widgetState.data as any;

  // Guard against missing data
  if (!data) return null;

  const renderWidget = () => {
    switch (config.type) {
      case 'topCard':
      case 'chart':
        return (
          <SparklineCard
            title={config.title}
            value={data.value}
            trend={data.trend}
            data={data.data}
            {...config.customProps}
          />
        );
      case 'table':
        return (
          <DetailCard
            icon={IconComponent}
            title={config.title}
            status={data.status || 'Good'}
            metrics={data.metrics || []}
            laggardsTitle={data.laggardsTitle || 'Laggards'}
            laggards={data.laggards || []}
            {...config.customProps}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={config.gridSpan}>
      {renderWidget()}
    </div>
  );
};
