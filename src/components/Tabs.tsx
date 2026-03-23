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
      <div className="flex items-center gap-2 text-[14px] text-gray-500 mb-5 px-1 font-medium">
        <span className="hover:text-gray-900 cursor-pointer">Breadcrumb</span>
        <ChevronRight size={14} className="text-gray-400" strokeWidth={2.5} />
        <span className="hover:text-gray-900 cursor-pointer">Breadcrumb</span>
        <ChevronRight size={14} className="text-gray-400" strokeWidth={2.5} />
        <span className="text-gray-800">Breadcrumb</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        {/* Tab pill group */}
        <div className="flex items-center gap-1 bg-[#F4F5F7] p-1 rounded-lg">
          {tabs.map(tab => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'primary' : 'ghost'}
              onClick={() => onTabChange(tab)}
              className={`!rounded-md ${activeTab === tab ? '' : '!text-gray-500'}`}
            >
              {tab}
            </Button>
          ))}
          <button className="px-3 py-1.5 text-[13px] font-medium bg-transparent text-[#2051E5] hover:text-blue-800 flex items-center gap-1.5 transition-colors rounded-md cursor-pointer">
            <Sparkles size={14} strokeWidth={2.5} /> AI Insights
          </button>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white text-[14px] font-medium h-10">
            <button className="px-5 h-full text-[#0070A6] hover:bg-blue-50 transition-colors cursor-pointer">MRP</button>
            <div className="w-[1px] h-5 bg-gray-200"></div>
            <button className="px-5 h-full text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">SP</button>
          </div>
          <Dropdown label="By Value" comingSoon tooltipAlign="left" className="h-10 !py-0 rounded-xl text-[14px] !px-4" />
        </div>
      </div>
    </div>
  );
};
