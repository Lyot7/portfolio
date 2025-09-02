"use client";

import { forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface FormFieldProps {
  label?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
}

/**
 * FormField - Composant de champ de formulaire réutilisable
 * 
 * Respecte le principe de responsabilité unique (SOLID)
 * Seulement responsable de l'affichage des champs de formulaire
 */
const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ 
    label,
    error,
    required = false,
    children,
    className,
    labelClassName,
    errorClassName
  }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-2", className)}>
        {label && (
          <label className={cn(
            "block text-sm font-medium text-foreground",
            required && "after:content-['*'] after:ml-1 after:text-destructive",
            labelClassName
          )}>
            {label}
          </label>
        )}
        
        {children}
        
        {error && (
          <p className={cn(
            "text-sm text-destructive",
            errorClassName
          )}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';

export { FormField };
export type { FormFieldProps };
