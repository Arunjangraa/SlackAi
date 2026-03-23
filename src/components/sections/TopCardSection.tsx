import { TrendingUp, TrendingDown } from 'lucide-react';
import { TrendLine } from '@components';
import type { TopCardData } from '@services';

interface Props {
  title: string;
  data: TopCardData;
}

export const TopCardSection = ({ title, data }: Props) => {
  const isPositive = data.trend >= 0;
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;
  const trendColor = isPositive ? 'text-emerald-600' : 'text-red-500';
  const trendBg = isPositive ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100';
  const chartColor = isPositive ? '#10b981' : '#ef4444';

  return (
    <div className="bg-bg-card rounded-2xl border border-border-light shadow-sm p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-base font-semibold text-text-heading">{title}</h3>
        <span className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${trendBg} ${trendColor}`}>
          <TrendIcon size={12} strokeWidth={2.5} />
          {data.trend > 0 ? '+' : ''}{data.trend}%
        </span>
      </div>

      <div className="flex items-end justify-between">
        <span className="text-4xl font-bold text-text-heading leading-none">
          {data.value}%
        </span>
        <div className="w-32 h-14">
          <TrendLine
            data={data.data}
            color={chartColor}
            gradientId={`topcard-${title.replace(/\s+/g, '-')}`}
          />
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-1">vs. previous period</p>
    </div>
  );
};
