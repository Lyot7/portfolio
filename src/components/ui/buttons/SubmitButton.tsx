"use client";

import { forwardRef } from 'react';
import { Button, ButtonProps } from '../Button';
import { Loader2 } from 'lucide-react';

export interface SubmitButtonProps extends Omit<ButtonProps, 'type' | 'variant'> {
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

/**
 * SubmitButton - Composant de bouton spécialisé pour les formulaires
 * 
 * Respecte le principe de responsabilité unique (SOLID)
 * Seulement responsable de la soumission de formulaires
 */
const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ 
    isLoading = false, 
    loadingText = "Envoi en cours...",
    children,
    disabled,
    ...props 
  }, ref) => {
    return (
      <Button
        ref={ref}
        type="submit"
        variant="primary"
        disabled={disabled || isLoading}
        isLoading={isLoading}
        leftIcon={isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : undefined}
        {...props}
      >
        {isLoading ? loadingText : children}
      </Button>
    );
  }
);

SubmitButton.displayName = 'SubmitButton';

export default SubmitButton;
