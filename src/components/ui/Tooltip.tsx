import type { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  label: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
}

const positionBase = {
  top: 'bottom-full mb-4',
  bottom: 'top-full mt-4',
  left: 'right-full mr-3',
  right: 'left-full ml-3',
};

const tailBase = {
  top: 'before:bottom-[-4px] before:left-1/2 before:-translate-x-1/2 before:border-t-4 before:border-t-gray-900 before:border-x-4 before:border-x-transparent',
  bottom: 'before:top-[-4px] before:left-1/2 before:-translate-x-1/2 before:border-b-4 before:border-b-gray-900 before:border-x-4 before:border-x-transparent',
  left: 'before:right-[-4px] before:top-1/2 before:-translate-y-1/2 before:border-l-4 before:border-l-gray-900 before:border-y-4 before:border-y-transparent',
  right: 'before:left-[-4px] before:top-1/2 before:-translate-y-1/2 before:border-r-4 before:border-r-gray-900 before:border-y-4 before:border-y-transparent',
};

const alignmentStyles = {
  center: {
    top: 'left-1/2 -translate-x-1/2',
    bottom: 'left-1/2 -translate-x-1/2',
    left: 'top-1/2 -translate-y-1/2',
    right: 'top-1/2 -translate-y-1/2',
  },
  start: {
    top: 'left-0 before:left-4 before:translate-x-0',
    bottom: 'left-0 before:left-4 before:translate-x-0',
    left: 'top-0 before:top-3 before:translate-y-0',
    right: 'top-0 before:top-3 before:translate-y-0',
  },
  end: {
    top: 'right-0 before:right-4 before:left-auto before:translate-x-0',
    bottom: 'right-0 before:right-4 before:left-auto before:translate-x-0',
    left: 'bottom-0 before:bottom-3 before:top-auto before:translate-y-0',
    right: 'bottom-0 before:bottom-3 before:top-auto before:translate-y-0',
  },
};

export const Tooltip = ({ children, label, position = 'bottom', align = 'center' }: TooltipProps) => {
  const isTop = position === 'top';
  const isBottom = position === 'bottom';

  return (
    <div className="relative group/tooltip inline-block">
      {children}
      <div
        className={`absolute px-2.5 py-1.5 bg-gray-900 text-white text-[11px] font-medium rounded-md opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 whitespace-nowrap shadow-lg pointer-events-none before:content-[''] before:absolute z-[100] 
        ${positionBase[position]} ${tailBase[position]} ${alignmentStyles[align][position]}
        ${isTop ? 'group-hover/tooltip:-translate-y-1' : ''}
        ${isBottom ? 'group-hover/tooltip:translate-y-1' : ''}`}
      >
        {label}
      </div>
    </div>
  );
};
