import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchDashboardData } from '@services';
import { Header, BreadcrumbAndTabs, OverviewTab, TrafficTab, ConversionTab, OperationsTab, DashboardSkeleton } from '@components';
import type { TabType } from '@constants';

export const Dashboard = () => {
  const { data, isLoading } = useQuery({ queryKey: ['dashboard'], queryFn: fetchDashboardData });
  const [activeTab, setActiveTab] = useState<TabType>('Overview');

  const TAB_COMPONENTS = {
    Overview: OverviewTab,
    Traffic: TrafficTab,
    Conversion: ConversionTab,
    Operations: OperationsTab,
  } as const;

  const ActiveComponent = TAB_COMPONENTS[activeTab];

  return (
    <div className="flex flex-col min-h-full relative bg-bg-main">
      <Header data={data} />

      <main className="px-6 py-4 max-w-[2500px] w-full mx-auto">
        <BreadcrumbAndTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {isLoading ? (
          <div className="flex flex-col gap-4 bg-bg-card border border-border-light p-6 rounded-2xl shadow-sm">
            <DashboardSkeleton />
          </div>
        ) : data ? (
          <div className="flex flex-col gap-4 bg-bg-card border border-border-light p-6 rounded-2xl shadow-sm">
            {ActiveComponent && <ActiveComponent />}
          </div>
        ) : (
          <div className="text-red-500 font-medium">Failed to load data</div>
        )}
      </main>
    </div>
  );
};