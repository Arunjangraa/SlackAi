import { ChevronRight, Sparkles } from 'lucide-react';
import { Button, Dropdown } from '@components';
import { tabs, type TabType } from '@constants';

interface BreadcrumbAndTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const BreadcrumbAndTabs = ({ activeTab, onTabChange }: BreadcrumbAndTabsProps) => {
  return (
    <div className="flex flex-col mb-2 mt-1">
      <div className="flex items-center gap-2 text-[14px] text-text-secondary mb-5 px-1 font-medium">
        <span className="hover:text-text-heading cursor-pointer">Breadcrumb</span>
        <ChevronRight size={14} className="text-text-secondary opacity-50" strokeWidth={2.5} />
        <span className="hover:text-text-heading cursor-pointer">Breadcrumb</span>
        <ChevronRight size={14} className="text-text-secondary opacity-50" strokeWidth={2.5} />
        <span className="text-text-heading">Breadcrumb</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        {/* Tab pill group */}
        <div className="flex items-center gap-1 bg-bg-stripe p-1 rounded-lg">
          {tabs.map(tab => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'primary' : 'ghost'}
              onClick={() => onTabChange(tab)}
              className={`!rounded-md ${activeTab === tab ? '' : '!text-text-secondary hover:!text-text-heading'}`}
            >
              {tab}
            </Button>
          ))}
          <button className="px-3 py-1.5 text-[13px] font-medium bg-transparent text-[#2051E5] dark:text-sky-400 hover:text-blue-800 dark:hover:text-sky-300 flex items-center gap-1.5 transition-colors rounded-md cursor-pointer">
            <Sparkles size={14} strokeWidth={2.5} /> AI Insights
          </button>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-border-light rounded-xl overflow-hidden bg-bg-card text-[14px] font-medium h-10">
            <button className="px-5 h-full text-brand-blue hover:bg-bg-hover transition-colors cursor-pointer">MRP</button>
            <div className="w-[1px] h-5 bg-border-light"></div>
            <button className="px-5 h-full text-text-secondary hover:bg-bg-hover transition-colors cursor-pointer">SP</button>
          </div>
          <Dropdown label="By Value" comingSoon tooltipAlign="left" className="h-10 !py-0 rounded-xl text-[14px] !px-4" />
        </div>
      </div>
    </div>
  );
};
