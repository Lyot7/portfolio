"use client";

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

// Types de base
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

// Configuration des variantes
const buttonVariants = {
  primary: [
    'bg-primary text-primary-foreground shadow hover:bg-primary/90',
    'hover:shadow-lg active:shadow-md'
  ],
  secondary: [
    'border-2 border-primary bg-transparent text-primary',
    'hover:bg-primary/10 hover:shadow-md',
    'active:bg-primary/20'
  ],
  destructive: [
    'bg-destructive text-destructive-foreground shadow hover:bg-destructive/90',
    'hover:shadow-lg active:shadow-md'
  ],
  ghost: [
    'hover:bg-accent hover:text-accent-foreground',
    'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground'
  ],
  link: [
    'text-primary underline-offset-4 hover:underline',
    'h-auto p-0 font-normal'
  ]
} as const;

// Configuration des tailles
const buttonSizes = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 py-2 text-sm',
  lg: 'h-12 px-8 text-base'
} as const;

// Composant Button principal
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false, 
    disabled, 
    children, 
    leftIcon,
    rightIcon,
    ...props 
  }, ref) => {
    const baseClasses = [
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md',
      'font-medium transition-all duration-200 ease-in-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50'
    ];

    return (
      <button
        className={cn(
          baseClasses,
          buttonVariants[variant],
          variant !== 'link' && buttonSizes[size],
          isLoading && 'cursor-not-allowed',
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {!isLoading && leftIcon && (
          <span className="flex-shrink-0">{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span className="flex-shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants, buttonSizes };
export type { ButtonProps };
