import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { ChartDataPoint } from '@services';

interface Props {
  title: string;
  data: ChartDataPoint[];
}

const formatINR = (value: number) =>
  value >= 1000 ? `₹${(value / 1000).toFixed(0)}k` : `₹${value}`;

export const ChartSection = ({ title, data }: Props) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-gray-800">{title}</h3>
        <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 rounded-lg px-3 py-1">
          Last 12 Months
        </span>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barSize={22} margin={{ top: 4, right: 8, left: -8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: '#9ca3af' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={formatINR}
            tick={{ fontSize: 11, fill: '#9ca3af' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(val) => [`₹${Number(val).toLocaleString()}`, 'Sales']}
            contentStyle={{
              borderRadius: '10px',
              border: '1px solid #e5e7eb',
              fontSize: 13,
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            }}
            cursor={{ fill: '#f9fafb' }}
          />
          <Bar dataKey="sales" fill="#6366f1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
