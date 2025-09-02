"use client";

import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

export interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  animationSpeed?: React.CSSProperties['animationDuration'];
  children: ReactNode;
}

/**
 * AnimatedButton - Composant de bouton avec animations avancées
 * 
 * Respecte le principe de responsabilité unique (SOLID)
 * Seulement responsable des animations, pas de la logique métier
 */
const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ 
    size = 'md', 
    animationSpeed = "5s", 
    className = "",
    children,
    ...props 
  }, ref) => {
    
    // Configuration des tailles
    const sizeClasses = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-8 text-base'
    };

    return (
      <button 
        ref={ref}
        className={cn(
          "relative w-full sm:w-auto overflow-hidden rounded-lg isolate",
          className
        )}
        style={{ padding: '2px 0' }}
        {...props}
      >
        {/* Gradient du bas qui se déplace */}
        <div
          className="absolute w-[250%] h-[40%] opacity-80 bottom-[-8px] right-[-150%] rounded-full animate-star-movement-bottom z-0"
          style={{
            background: `radial-gradient(circle, rgb(var(--primary)), rgb(var(--primary) / 0.6) 20%, transparent 35%)`,
            animationDuration: animationSpeed,
            filter: 'blur(1px)',
          }}
        />
        
        {/* Gradient du haut qui se déplace */}
        <div
          className="absolute w-[250%] h-[40%] opacity-80 top-[-8px] left-[-150%] rounded-full animate-star-movement-top z-0"
          style={{
            background: `radial-gradient(circle, rgb(var(--primary)), rgb(var(--primary) / 0.6) 20%, transparent 35%)`,
            animationDuration: animationSpeed,
            filter: 'blur(1px)',
          }}
        />
        
        {/* Gradient central pour plus d'intensité */}
        <div
          className="absolute w-[150%] h-[25%] opacity-40 top-[37.5%] left-[-75%] rounded-full animate-star-movement-top z-0"
          style={{
            background: `linear-gradient(90deg, transparent, rgb(var(--primary) / 0.3), transparent)`,
            animationDuration: `calc(${animationSpeed} * 1.5)`,
            filter: 'blur(1.5px)',
          }}
        />
        
        {/* Contenu du bouton */}
        <div className={cn(
          "relative z-10 w-full bg-primary text-primary-foreground font-medium border border-primary",
          "transition-all duration-200 hover:bg-primary/90",
          sizeClasses[size],
          "rounded-md flex items-center justify-center gap-2 whitespace-nowrap",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50"
        )}>
          {children}
        </div>
      </button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export { AnimatedButton };
