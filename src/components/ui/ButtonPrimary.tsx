"use client";

import { forwardRef } from 'react';
import { Button, ButtonProps } from './Button';

export interface ButtonPrimaryProps extends Omit<ButtonProps, 'variant'> {}

/**
 * Button Primary Component
 * 
 * Utilise la couleur primaire (green) comme arrière-plan avec du texte blanc.
 * Parfait pour les actions principales comme "Envoyer", "Confirmer", etc.
 */
const ButtonPrimary = forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  (props, ref) => {
    return <Button {...props} variant="primary" ref={ref} />;
  }
);

ButtonPrimary.displayName = 'ButtonPrimary';

export { ButtonPrimary };
