"use client";

import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Input - Composant d'entrée de texte réutilisable
 * 
 * Respecte le principe de responsabilité unique (SOLID)
 * Seulement responsable de l'affichage des champs de saisie
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className,
    variant = 'default',
    size = 'md',
    ...props 
  }, ref) => {
    const baseClasses = [
      "flex w-full rounded-md border border-input bg-background",
      "text-sm ring-offset-background",
      "file:border-0 file:bg-transparent file:text-sm file:font-medium",
      "placeholder:text-muted-foreground",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50"
    ];

    const variants = {
      default: "border-input",
      error: "border-destructive focus-visible:ring-destructive",
      success: "border-success focus-visible:ring-success"
    };

    const sizes = {
      sm: "h-8 px-3",
      md: "h-10 px-3 py-2",
      lg: "h-12 px-4 py-3 text-base"
    };

    return (
      <input
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
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
export type { InputProps };
