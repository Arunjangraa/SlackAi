import { useState } from 'react';
import { Header, BreadcrumbAndTabs, OverviewTab, TrafficTab, ConversionTab, OperationsTab } from '@components';
import type { TabType } from '@constants';

export const Dashboard = () => {
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
      <Header
        title="Category Analysis"
        subtitle="Health Supplements +3"
        totalProducts={120}
        showFilters={true}
        showDateRange={true}
        showPlatform={true}
      />

      <main className="px-6 py-4 max-w-[2500px] w-full mx-auto">
        <BreadcrumbAndTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex flex-col gap-4 bg-bg-card border border-border-light p-6 rounded-2xl shadow-sm">
          {ActiveComponent && <ActiveComponent />}
        </div>
      </main>
    </div>
  );
};