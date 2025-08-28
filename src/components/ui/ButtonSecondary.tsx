"use client";

import { forwardRef } from 'react';
import { Button, ButtonProps } from './Button';

export interface ButtonSecondaryProps extends Omit<ButtonProps, 'variant'> {}

/**
 * Button Secondary Component
 * 
 * Utilise une bordure de couleur primaire (green) avec un fond transparent.
 * Le texte est de couleur primaire. Au hover, le fond devient légèrement coloré.
 * Parfait pour les actions secondaires comme "Annuler", "Retour", etc.
 */
const ButtonSecondary = forwardRef<HTMLButtonElement, ButtonSecondaryProps>(
  (props, ref) => {
    return <Button {...props} variant="secondary" ref={ref} />;
  }
);

ButtonSecondary.displayName = 'ButtonSecondary';

export { ButtonSecondary };
