import { ChevronDown, ListFilter, PanelLeft } from 'lucide-react';
import type { DashboardData } from '@types';
import { Button, Dropdown, Tooltip } from '@components';

interface HeaderProps {
  data?: DashboardData;
}

export const Header = ({ data }: HeaderProps) => {
  return (
    <header className="bg-white px-4 md:px-6 py-4 flex flex-wrap lg:flex-nowrap items-center justify-between border-b border-gray-100 sticky top-0 z-40 gap-4 lg:gap-0">
      <div className="flex items-center gap-4">
        <Tooltip label="Coming soon" align="left">
          <button className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
            <PanelLeft size={18} strokeWidth={1.5} />
          </button>
        </Tooltip>
        <div className="h-8 w-px bg-border-light bg-opacity-70"></div>
        <div className="flex flex-col ml-1">
          <h1 className="text-[18px] font-semibold text-text-heading leading-tight tracking-tight">
            {data?.title || 'Category Analysis'}
          </h1>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-[11px] text-text-secondary">
              {data?.subtitle || 'Health Supplements +3'}
            </span>
            <span className="text-[10px] font-medium text-brand-blue bg-brand-blue-muted px-2.5 py-0.5 rounded-[6px]">
              Total Products: {data?.totalProducts || 120}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-wrap sm:flex-nowrap gap-3 w-full lg:w-auto">
        {/* Date Controls */}
        <Tooltip label="Coming soon" align="center">
          <div className="flex flex-col border border-gray-200 rounded-xl px-4 pt-[7px] pb-[9px] cursor-pointer hover:bg-gray-50 transition-colors mr-1 h-auto min-h-[44px]">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="bg-slate-100 text-slate-600 text-[11px] font-bold px-2 py-[2px] rounded-md tracking-wide leading-none flex items-center h-5">Sun - Sat</span>
                <span className="text-[13px] font-bold text-gray-800 leading-none">1 Jun - 7 Jun 2025</span>
              </div>
              <ChevronDown size={14} className="text-gray-500" />
            </div>
            <span className="text-[11px] text-gray-400 mt-[3px] whitespace-nowrap text-left leading-none tracking-tight">Compare: 25 May - 31 May 2025</span>
          </div>
        </Tooltip>

        {/* Amazon Dropdown */}
        <Tooltip label="Coming soon" align="center">
          <Dropdown label="Amazon" className="h-11 !px-5 rounded-xl text-[14px] mx-1" comingSoon={false} />
        </Tooltip>

        {/* Filters Button */}
        <Tooltip label="Coming soon" align="right">
          <Button variant="filter" className="h-11 !px-5 rounded-xl text-[14px] ml-1">
            <ListFilter size={16} className="text-gray-600" /> Filters
            <span className="bg-white text-sky-600 text-[13px] font-semibold w-6 h-6 rounded-full flex items-center justify-center shadow-sm">5</span>
          </Button>
        </Tooltip>
      </div>
    </header>
  );
};
