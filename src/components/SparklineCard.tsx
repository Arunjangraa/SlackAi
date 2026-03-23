
import { TrendingUp, TrendingDown } from 'lucide-react';
import { TrendLine, Dropdown } from '@components';

export interface SparklineCardProps {
  title: string;
  subtitle?: string;
  value: number | string;
  trend: number;
  data: number[];
}

const DROPDOWN_OPTIONS = ['By Value', 'By Volume', 'Monthly', 'Weekly', 'Yearly'];

export const SparklineCard = ({ title, value, trend, data }: SparklineCardProps) => {
  const isPositive = trend >= 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  const trendColor = isPositive ? 'text-[#10b981]' : 'text-[#ef4444]';
  const chartColor = isPositive ? '#10b981' : '#ef4444';
  const trendBorder = isPositive ? 'border-emerald-100 bg-emerald-50/50' : 'border-red-100 bg-red-50/50';

  const randomDropdownValue = DROPDOWN_OPTIONS[title.length % DROPDOWN_OPTIONS.length];

  return (
    <div className="bg-white p-5 rounded-[14px] border border-gray-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] flex flex-col justify-between h-[150px] overflow-hidden relative">
      <div className="z-10 relative">
        <div className="flex justify-between items-start mb-0.5">
          <h3 className="text-[#0B0A11] font-medium text-[16px] tracking-tight">{title}</h3>
          <div className={`flex items-center gap-1.5 text-[13px] font-medium px-2 py-0.5 rounded-[6px] border ${trendBorder} ${trendColor}`}>
            <TrendIcon size={14} strokeWidth={2.5} />
            {Math.abs(trend)}%
          </div>
        </div>

        <Dropdown
          label={randomDropdownValue}
          comingSoon
          tooltipAlign="left"
          className="!border-0 !bg-transparent !px-0 !py-0 !rounded-none text-gray-500 hover:!bg-transparent hover:text-gray-700 !gap-1"
        />
      </div>

      <div className="flex items-end justify-between z-10 w-full relative">
        <span className="text-[34px] font-semibold text-[#0B0A11] leading-none tracking-tight">
          {typeof value === 'number' && title.includes('Share') ? `${value}%` : value}
        </span>
      </div>

      {/* Background Chart Area */}
      <div className="absolute bottom-4 right-4 w-[55%] h-[50%] opacity-100 pointer-events-none z-0">
        <TrendLine data={data} color={chartColor} gradientId={`sparkline-${title.replace(/\s+/g, '-')}`} />
      </div>
    </div>
  );
};
