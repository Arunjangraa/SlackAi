import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'icon' | 'filter';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#0070A6] text-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#005d8a]',
  secondary:
    'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm',
  ghost:
    'bg-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50',
  icon:
    'w-7 h-7 flex items-center justify-center bg-[#F6F7F9] hover:bg-gray-200 rounded-md text-gray-700',
  filter:
    'bg-slate-100 text-gray-700 hover:bg-slate-200',
};

export const Button = ({ variant = 'secondary', className = '', children, ...rest }: ButtonProps) => {
  const base = 'inline-flex items-center gap-2 font-medium transition-colors cursor-pointer rounded-lg px-3 py-1.5 text-[13px]';
  return (
    <button
      className={`${base} ${variantStyles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
