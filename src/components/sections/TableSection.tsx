import { TrendingUp, TrendingDown } from 'lucide-react';
import type { TableRow } from '@services';

interface Props {
  title: string;
  data: TableRow[];
}

export const TableSection = ({ title, data }: Props) => {
  return (
    <div className="bg-bg-card rounded-2xl border border-border-light shadow-sm p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-text-heading">{title}</h3>
        <span className="text-xs text-text-secondary bg-bg-main border border-border-light rounded-lg px-3 py-1">
          {data.length} Products
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-text-secondary border-b border-border-light">
              <th className="pb-3 pr-4 font-medium">#</th>
              <th className="pb-3 pr-4 font-medium">Product</th>
              <th className="pb-3 pr-4 font-medium">Category</th>
              <th className="pb-3 pr-4 font-medium text-right">Revenue</th>
              <th className="pb-3 pr-4 font-medium text-right">Units</th>
              <th className="pb-3 font-medium text-right">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light/30">
            {data.map((row) => {
              const isPos = row.trend >= 0;
              const trendStyles = isPos
                ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                : 'text-red-500 dark:text-red-400 bg-red-500/10 border-red-500/20';

              return (
                <tr key={row.rank} className="hover:bg-bg-hover transition-colors text-text-heading font-medium">
                  <td className="py-3 pr-4 text-text-secondary font-medium">{row.rank}</td>
                  <td className="py-3 pr-4 font-medium text-text-heading">{row.product}</td>
                  <td className="py-3 pr-4">
                    <span className="bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-medium px-2 py-0.5 rounded-full border border-indigo-500/20">
                      {row.category}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-right text-text-heading font-medium">
                    ₹{row.revenue.toLocaleString()}
                  </td>
                  <td className="py-3 pr-4 text-right text-text-secondary">{row.units.toLocaleString()}</td>
                  <td className="py-3 text-right">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${trendStyles}`}>
                      {isPos ? <TrendingUp size={11} strokeWidth={2.5} /> : <TrendingDown size={11} strokeWidth={2.5} />}
                      {isPos ? '+' : ''}{row.trend}%
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
