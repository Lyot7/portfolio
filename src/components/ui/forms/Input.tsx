"use client";

import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'error' | 'success';
  inputSize?: 'sm' | 'md' | 'lg';
}

/**
 * Input - Composant de champ de saisie de base
 * 
 * Respecte le principe de responsabilité unique (SOLID)
 * Seulement responsable de l'affichage et de la saisie
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant = 'default', 
    inputSize = 'md', 
    ...props 
  }, ref) => {
    
    // Configuration des variantes
    const variantClasses = {
      default: 'border-border/50 focus:border-primary focus:ring-primary',
      error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
      success: 'border-green-500 focus:border-green-500 focus:ring-green-500'
    };

    // Configuration des tailles
    const sizeClasses = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-6 py-3 text-base'
    };

    return (
      <input
        className={cn(
          "w-full bg-background/50 border rounded-lg text-foreground placeholder-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all",
          "disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[inputSize],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
