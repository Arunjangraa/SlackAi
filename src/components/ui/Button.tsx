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
    'border border-border-light bg-bg-card text-text-heading hover:bg-bg-hover shadow-sm',
  ghost:
    'bg-transparent text-text-secondary hover:text-text-heading hover:bg-bg-hover',
  icon:
    'w-7 h-7 flex items-center justify-center bg-bg-stripe hover:bg-bg-hover rounded-md text-text-heading',
  filter:
    'bg-bg-stripe text-text-heading hover:bg-bg-hover border border-border-light',
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
