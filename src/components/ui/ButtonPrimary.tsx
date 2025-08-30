"use client";

import { forwardRef } from 'react';
import { Button, ButtonProps } from './Button';

export interface ButtonPrimaryProps extends Omit<ButtonProps, 'variant'> {
  starAnimation?: boolean;
  animationSpeed?: React.CSSProperties['animationDuration'];
}

/**
 * Button Primary Component
 * 
 * Utilise la couleur primaire (green) comme arrière-plan avec du texte blanc.
 * Parfait pour les actions principales comme "Envoyer", "Confirmer", etc.
 * 
 * @param starAnimation - Active l'effet StarBorder de React Bits
 * @param animationSpeed - Vitesse de l'animation (ex: "4s")
 */
const ButtonPrimary = forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  ({ starAnimation = false, animationSpeed = "5s", size = "md", className = "", ...props }, ref) => {
    
    if (!starAnimation) {
      return <Button {...props} variant="primary" size={size} className={className} ref={ref} />;
    }

    // Classes de taille pour le bouton avec animation
    const sizeClasses = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-8 text-base'
    };

    // Bouton avec effet StarBorder intégré
    return (
      <button 
        ref={ref}
        className={`relative w-full sm:w-auto overflow-hidden rounded-lg isolate ${className}`}
        style={{ padding: '2px 0' }}
        {...props}
      >
        {/* Gradient du bas qui se déplace - Contenu */}
        <div
          className="absolute w-[250%] h-[40%] opacity-80 bottom-[-8px] right-[-150%] rounded-full animate-star-movement-bottom z-0"
          style={{
            background: `radial-gradient(circle, rgb(var(--primary)), rgb(var(--primary) / 0.6) 20%, transparent 35%)`,
            animationDuration: animationSpeed,
            filter: 'blur(1px)',
          }}
        />
        
        {/* Gradient du haut qui se déplace - Contenu */}
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
        
        {/* Contenu du bouton - Design vert classique */}
        <div className={`relative z-10 w-full bg-primary text-primary-foreground font-medium border border-primary transition-all duration-200 hover:bg-primary/90 ${sizeClasses[size]} rounded-md flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`}>
          {props.children}
        </div>
      </button>
    );
  }
);

ButtonPrimary.displayName = 'ButtonPrimary';

export { ButtonPrimary };
