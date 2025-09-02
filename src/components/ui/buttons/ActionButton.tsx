"use client";

import { forwardRef } from 'react';
import { Button, ButtonProps } from '../Button';

export interface ActionButtonProps extends Omit<ButtonProps, 'variant'> {
  actionType?: 'confirm' | 'cancel' | 'delete' | 'edit';
  children: React.ReactNode;
}

/**
 * ActionButton - Composant de bouton pour les actions secondaires
 * 
 * Respecte le principe de responsabilité unique (SOLID)
 * Seulement responsable des actions métier
 */
const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ 
    actionType = 'confirm',
    children,
    ...props 
  }, ref) => {
    const getVariant = () => {
      switch (actionType) {
        case 'delete':
          return 'destructive';
        case 'cancel':
          return 'secondary';
        case 'edit':
          return 'ghost';
        default:
          return 'secondary';
      }
    };

    return (
      <Button
        ref={ref}
        variant={getVariant()}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

ActionButton.displayName = 'ActionButton';

export default ActionButton;
