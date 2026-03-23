import { useSelector } from 'react-redux';
import { DynamicWidget } from '@components';
import type { RootState } from '@store';

export const OperationsTab = () => {
  const config = useSelector((state: RootState) => state.dashboard.config?.OperationsTab || []);
  
  const topCards = config.filter(c => c.type === 'topCard' || c.type === 'chart');
  const details = config.filter(c => c.type === 'table');

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">Operations Lifecycle</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6 mb-1">
        {topCards.map(c => (
          <DynamicWidget key={c.id} config={c} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6">
        {details.map(c => (
          <DynamicWidget key={c.id} config={c} />
        ))}
      </div>
    </div>
  );
};
