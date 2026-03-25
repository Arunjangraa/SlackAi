
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
  const chartColor = isPositive ? '#10b981' : '#ef4444';
  const trendBorder = isPositive
    ? 'border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
    : 'border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400';

  const randomDropdownValue = DROPDOWN_OPTIONS[title.length % DROPDOWN_OPTIONS.length];

  return (
    <div className="bg-bg-card p-5 rounded-[14px] border border-border-light flex flex-col justify-between h-[150px] relative overflow-hidden group transition-all duration-300">
      <div className="z-10 relative">
        <div className="flex justify-between items-start mb-0.5">
          <h3 className="text-text-heading font-semibold text-[15px] tracking-tight">{title}</h3>
          <div className={`flex items-center gap-1.5 text-[12px] font-bold px-2 py-0.5 rounded-[8px] border ${trendBorder}`}>
            <TrendIcon size={12} strokeWidth={3} />
            {Math.abs(trend)}%
          </div>
        </div>

        <Dropdown
          label={randomDropdownValue}
          comingSoon
          tooltipAlign="center"
          tooltipPosition="top"
          className="!border-0 !bg-transparent !px-0 !py-0 !rounded-none text-text-secondary hover:!bg-transparent hover:text-text-heading !gap-1 !text-[12px] font-medium opacity-80"
        />
      </div>

      <div className="flex items-end justify-between z-10 w-full relative">
        <span className="text-[32px] font-bold text-text-heading leading-none tracking-tighter">
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
