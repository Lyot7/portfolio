"use client";

import { forwardRef } from 'react';
import { Button, ButtonProps } from '../Button';
import { cn } from '@/lib/utils';

export interface IconButtonProps extends Omit<ButtonProps, 'variant' | 'size'> {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  isSquare?: boolean;
  children?: React.ReactNode;
}

/**
 * IconButton - Composant de bouton optimisé pour les icônes
 * 
 * Respecte le principe de responsabilité unique (SOLID)
 * Seulement responsable de l'affichage d'icônes
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ 
    icon,
    size = 'md',
    isSquare = true,
    children,
    className,
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: isSquare ? 'h-8 w-8 p-0' : 'h-8 px-2 py-1',
      md: isSquare ? 'h-10 w-10 p-0' : 'h-10 px-3 py-2',
      lg: isSquare ? 'h-12 w-12 p-0' : 'h-12 px-4 py-3'
    };

    const iconSizes = {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6'
    };

    return (
      <Button
        ref={ref}
        variant="ghost"
        size={size}
        className={cn(
          sizeClasses[size],
          isSquare && 'aspect-square',
          className
        )}
        {...props}
      >
        <span className={cn(
          iconSizes[size],
          'flex-shrink-0'
        )}>
          {icon}
        </span>
        {children && (
          <span className="ml-2">{children}</span>
        )}
      </Button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
