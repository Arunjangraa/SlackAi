import { Radio, TrendingUp } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Button, DynamicWidget } from '@components';
import type { RootState } from '@store';

export const OverviewTab = () => {
  const config = useSelector((state: RootState) => state.dashboard.config?.OverviewTab || []);

  const topCards = config.filter(c => c.type === 'topCard' || c.type === 'chart');
  const details = config.filter(c => c.type === 'table');

  return (
    <>
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">Performance Overview</h2>
        <div className="flex gap-3">
          <Button variant="secondary" className="border-sky-200 text-sky-600 hover:bg-sky-50">
            <Radio size={16} /> Beacon
          </Button>
          <Button variant="secondary">
            <TrendingUp size={16} className="text-gray-500" /> Trends
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6 mb-1">
        {(topCards ?? []).map(c => (
          <DynamicWidget key={c.id} config={c} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6">
        {(details ?? []).map(c => (
          <DynamicWidget key={c.id} config={c} />
        ))}
      </div>
    </>
  );
};
