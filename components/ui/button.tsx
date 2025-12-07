'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center gap-2 font-medium',
      'rounded-lg transition-all duration-200',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      'active:scale-[0.98]'
    );

    const variants = {
      primary: cn(
        'bg-primary-500 text-white',
        'hover:bg-primary-600',
        'focus-visible:ring-primary-500',
        'shadow-md hover:shadow-lg hover:shadow-primary-500/25'
      ),
      secondary: cn(
        'bg-gray-800 text-gray-100',
        'hover:bg-gray-700',
        'focus-visible:ring-gray-500',
        'border border-gray-700'
      ),
      outline: cn(
        'bg-transparent text-primary-400',
        'border border-primary-500/50',
        'hover:bg-primary-500/10 hover:border-primary-500',
        'focus-visible:ring-primary-500'
      ),
      ghost: cn(
        'bg-transparent text-gray-300',
        'hover:bg-gray-800 hover:text-gray-100',
        'focus-visible:ring-gray-500'
      ),
      danger: cn(
        'bg-red-600 text-white',
        'hover:bg-red-700',
        'focus-visible:ring-red-500',
        'shadow-md hover:shadow-lg hover:shadow-red-500/25'
      ),
    };

    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
