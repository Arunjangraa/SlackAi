import { useSelector } from 'react-redux';
import { DynamicWidget } from '@components';
import type { RootState } from '@store';

export const OperationsTab = () => {
  const config = useSelector((state: RootState) => state.dashboard.config?.OperationsTab || []);
  

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-text-heading tracking-tight">Operations Lifecycle</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 5xl:grid-cols-5 gap-6">
        {(config ?? []).map(c => (
          <DynamicWidget key={c.id} config={c} />
        ))}
      </div>
    </div>
  );
};
