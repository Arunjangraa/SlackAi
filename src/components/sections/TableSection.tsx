import { TrendingUp, TrendingDown } from 'lucide-react';
import type { TableRow } from '@services';

interface Props {
  title: string;
  data: TableRow[];
}

export const TableSection = ({ title, data }: Props) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800">{title}</h3>
        <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 rounded-lg px-3 py-1">
          {data.length} Products
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-gray-400 border-b border-gray-100">
              <th className="pb-3 pr-4 font-medium">#</th>
              <th className="pb-3 pr-4 font-medium">Product</th>
              <th className="pb-3 pr-4 font-medium">Category</th>
              <th className="pb-3 pr-4 font-medium text-right">Revenue</th>
              <th className="pb-3 pr-4 font-medium text-right">Units</th>
              <th className="pb-3 font-medium text-right">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data.map((row) => {
              const isPos = row.trend >= 0;
              return (
                <tr key={row.rank} className="hover:bg-gray-50/60 transition-colors">
                  <td className="py-3 pr-4 text-gray-400 font-medium">{row.rank}</td>
                  <td className="py-3 pr-4 font-medium text-gray-800">{row.product}</td>
                  <td className="py-3 pr-4">
                    <span className="bg-indigo-50 text-indigo-600 text-xs font-medium px-2 py-0.5 rounded-full border border-indigo-100">
                      {row.category}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-right text-gray-700 font-medium">
                    ₹{row.revenue.toLocaleString()}
                  </td>
                  <td className="py-3 pr-4 text-right text-gray-500">{row.units.toLocaleString()}</td>
                  <td className="py-3 text-right">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${isPos
                          ? 'text-emerald-600 bg-emerald-50 border-emerald-100'
                          : 'text-red-500 bg-red-50 border-red-100'
                        }`}
                    >
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
