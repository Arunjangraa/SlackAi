import type { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  label: ReactNode;
  comingSoon?: boolean;
  className?: string;
  tooltipAlign?: 'left' | 'center' | 'right';
}

const alignStyles = {
  left: 'left-0 before:left-3',
  center: 'left-1/2 -translate-x-1/2 before:left-1/2 before:-translate-x-1/2',
  right: 'right-0 before:right-3',
};

export const Dropdown = ({
  label,
  comingSoon = false,
  className = '',
  tooltipAlign = 'center',
}: DropdownProps) => {
  return (
    <div
      className={`relative group inline-flex items-center gap-1.5 cursor-pointer px-3 py-1.5 text-[13px] font-medium text-gray-700 border border-gray-200 bg-white rounded-lg hover:bg-gray-50 transition-colors ${className}`}
    >
      {label}
      <ChevronDown size={13} className="text-gray-400" />

      {comingSoon && (
        <div
          className={`absolute top-full mt-2 px-2 py-1 bg-gray-900 text-white text-[11px] font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-md pointer-events-none before:content-[''] before:absolute before:bottom-full before:border-b-4 before:border-b-gray-900 before:border-x-4 before:border-x-transparent z-[100] ${alignStyles[tooltipAlign]}`}
        >
          Coming soon
        </div>
      )}
    </div>
  );
};
