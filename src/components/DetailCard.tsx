import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button, Dropdown } from '@components';

interface MetricRowProps {
  label: string;
  current: string | number;
  trend: number;
  isLaggardRow?: boolean;
  index: number;
}

const MetricRow = ({ label, current, trend, isLaggardRow, index }: MetricRowProps) => {
  const isPositive = trend >= 0;
  const TrendIcon = isPositive ? ArrowUpRight : ArrowDownRight;
  const trendColor = isPositive ? 'text-[#10b981]' : 'text-[#ef4444]';
  const isEven = index % 2 === 0;
  const bgClass = isEven ? 'bg-bg-stripe' : 'bg-bg-card';

  return (
    <div className={`flex justify-between items-center py-2.5 px-5 -mx-5 ${bgClass}`}>
      <span className={`text-[13px] ${isLaggardRow ? 'text-brand-blue font-medium' : 'text-text-secondary font-medium'}`}>{label}</span>
      <div className="flex items-center text-[13px]">
        <span className="font-semibold text-text-heading w-16 text-right mr-4">{current}</span>
        <span className={`font-medium flex items-center justify-end w-16 ${trendColor}`}>
          <TrendIcon size={14} className="mr-0.5" strokeWidth={2.5} />
          {Math.abs(trend)}%
        </span>
      </div>
    </div>
  );
};

export interface DetailCardProps {
  icon: React.ElementType;
  title: string;
  status: 'Good' | 'Medium' | 'Poor';
  metrics: { label: string; current: number | string; trend: number }[];
  laggardsTitle: string;
  laggards: { name: string; current: number; trend: number }[];
}

export const DetailCard = ({ icon: Icon, title, status, metrics, laggardsTitle, laggards }: DetailCardProps) => {
  const statusStyles = {
    'Good': 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
    'Medium': 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20',
    'Poor': 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20',
  };

  return (
    <div className="bg-bg-card rounded-2xl border border-border-light shadow-sm flex flex-col p-5 pb-3 transition-shadow duration-300">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-3 text-text-heading font-semibold text-[15px]">
          <div className="w-8 h-8 rounded-[10px] border border-border-light flex items-center justify-center bg-bg-card transition-colors">
            <Icon size={16} className="text-brand-blue opacity-80" strokeWidth={2.5} />
          </div>
          {title}
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-[8px] text-[11px] font-bold uppercase tracking-wider ${statusStyles[status]}`}>
            {status}
          </span>
          <Button variant="icon" className="!px-0 !py-0 !rounded-md !text-text-secondary hover:!text-text-heading hover:!bg-bg-hover">
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-0 border-b border-border-light pb-2 mb-3">
        {metrics.map((m, i) => (
          <MetricRow
            key={i}
            index={i}
            label={m.label}
            current={typeof m.current === 'number' && m.current < 100 ? `${m.current}%` : m.current}
            trend={m.trend}
          />
        ))}
      </div>

      <div className="flex justify-between items-center mb-3 mt-1">
        <span className="text-[13px] font-bold text-text-heading">Top Laggards</span>
        <Dropdown label={laggardsTitle} comingSoon tooltipAlign="end" tooltipPosition="top" />
      </div>

      <div className="flex flex-col gap-0">
        {laggards.map((l, i) => (
          <MetricRow key={i} index={i} label={l.name} current={`${l.current}%`} trend={l.trend} isLaggardRow />
        ))}
      </div>
    </div>
  );
};
