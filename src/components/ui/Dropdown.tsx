import type { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface DropdownProps {
  label: ReactNode;
  comingSoon?: boolean;
  className?: string;
  tooltipAlign?: 'start' | 'center' | 'end';
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
}

export const Dropdown = ({
  label,
  comingSoon = false,
  className = '',
  tooltipAlign = 'center',
  tooltipPosition = 'bottom',
}: DropdownProps) => {
  const dropdown = (
    <div
      className={`relative group inline-flex items-center gap-1.5 cursor-pointer px-3 py-1.5 text-[13px] font-medium text-text-secondary hover:text-text-heading border border-border-light bg-bg-card rounded-lg hover:bg-bg-hover transition-colors ${className}`}
    >
      {label}
      <ChevronDown size={13} className="text-text-secondary" />
    </div>
  );

  if (comingSoon) {
    return <Tooltip label="Coming soon" position={tooltipPosition} align={tooltipAlign}>{dropdown}</Tooltip>;
  }

  return dropdown;
};
