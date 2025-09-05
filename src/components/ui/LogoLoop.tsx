import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export interface LogoItem {
  src: string;
  alt: string;
  name: string;
}

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 0.5,
  direction = 'left',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 500;
    }
    return false;
  });

  // Détection de la largeur d'écran pour affichage mobile
  useEffect(() => {
    const checkMobile = () => {
      const newIsMobile = window.innerWidth < 500;
      const wasMobile = isMobile;
      
      // Si on change de mode (desktop ↔ mobile), réinitialiser l'état
      if (newIsMobile !== wasMobile) {
        setIsAnimating(false);
        // Forcer un re-render pour nettoyer l'animation
        if (containerRef.current) {
          containerRef.current.style.transform = 'translateX(0)';
        }
      }
      
      setIsMobile(newIsMobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);

  useEffect(() => {
    // Ne jamais lancer l'animation sur mobile
    if (isMobile) return;
    if (!containerRef.current || logos.length === 0) return;

    // Réinitialiser la position du conteneur au début
    const container = containerRef.current;
    container.style.transform = 'translateX(0)';
    let animationId: number;

    const startAnimation = () => {
      // Attendre que le DOM soit rendu pour calculer les dimensions
      const calculateDimensions = () => {
        const containerWidth = container.offsetWidth;
        const contentWidth = container.scrollWidth;
        
        // Mesurer précisément la largeur d'un set complet
        // On prend les premiers logos.length éléments (premier set)
        const firstSetElements = Array.from(container.children).slice(0, logos.length);
        
        // Calculer la largeur totale du premier set en incluant tous les gaps
        let firstSetWidth = 0;
        firstSetElements.forEach((element, index) => {
          const elementWidth = element.getBoundingClientRect().width;
          firstSetWidth += elementWidth;
          
          // Ajouter le gap après chaque élément sauf le dernier
          if (index < firstSetElements.length - 1) {
            firstSetWidth += 16; // gap-4 = 16px
          }
        });
        
        // Ajouter le gap complet à droite du premier set
        // Pour assurer une continuité parfaite entre les sections
        const gapBetweenLogos = 16; // gap-4 = 16px
        const fullGap = gapBetweenLogos; // 16px - gap complet
        
        // La largeur d'un set inclut le gap complet à droite
        const singleSetWidth = firstSetWidth + fullGap;
        
        // Les dimensions sont calculées pour assurer une animation fluide
        
        return {
          containerWidth,
          contentWidth,
          singleSetWidth
        };
      };

      const { singleSetWidth } = calculateDimensions();
      
      // Vitesse de base : 400px par seconde, ajustée par le paramètre speed
      const baseSpeed = 150; // pixels par seconde
      const actualSpeed = baseSpeed * speed;
      
      // Calculer la durée pour faire défiler un set complet
      const animationDuration = singleSetWidth / actualSpeed; // temps en secondes
      
      let startTime: number;
      let currentPosition = 0;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        
        const elapsed = (timestamp - startTime) / 1000; // temps en secondes
        
        // Calculer le progrès dans le cycle (0 à 1)
        // Utiliser une approche plus précise pour éviter les erreurs de précision
        const cycleTime = elapsed % animationDuration;
        const progress = cycleTime / animationDuration;
        
        // Calculer la position basée sur le progrès
        // Quand progress = 0: position initiale (première section visible)
        // Quand progress = 1: première section complètement sortie, deuxième section en position initiale
        
        // Utiliser une approche continue sans coupure pour une animation parfaitement fluide
        // Le modulo assure que quand progress atteint 1, il revient naturellement à 0
        // sans transition instantanée visible
        let currentPosition: number;
        
        if (direction === 'left') {
          currentPosition = -progress * singleSetWidth;
        } else {
          currentPosition = progress * singleSetWidth;
        }
        
        // Appliquer la transformation avec une précision maximale
        container.style.transform = `translateX(${currentPosition.toFixed(6)}px)`;
        
        // Continuer l'animation
        animationId = requestAnimationFrame(animate);
      };

      // Démarrer l'animation
      animationId = requestAnimationFrame(animate);
      setIsAnimating(true);
      
      return animationId;
    };

    // Délai pour s'assurer que le DOM est rendu et les dimensions calculées
    const timeoutId = setTimeout(() => {
      animationId = startAnimation();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      setIsAnimating(false);
    };
  }, [speed, direction, logos, isMobile]);

  // Dupliquer les logos pour un défilement continu sans espace
  const getDuplicatedLogos = () => {
    // Dupliquer exactement 3 fois pour assurer la continuité parfaite
    // Section 1: logos originaux (visible au début)
    // Section 2: logos dupliqués (prend la place de la section 1)
    // Section 3: logos dupliqués (prend la place de la section 2)
    const duplicated = [...logos, ...logos, ...logos];
    
    // Duplication en 3 sections pour assurer la continuité parfaite
    
    return duplicated;
  };
  
  const duplicatedLogos = getDuplicatedLogos();

  // Affichage mobile : logos statiques en grille adaptative
  if (isMobile) {
    // Calculer le nombre optimal de colonnes selon le nombre de logos
    const getGridCols = () => {
      if (logos.length <= 2) return 'grid-cols-2';
      if (logos.length <= 4) return 'grid-cols-2';
      if (logos.length <= 6) return 'grid-cols-3';
      return 'grid-cols-4';
    };

    return (
      <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
        <div 
          className="flex flex-wrap gap-2 w-full h-auto justify-center items-center"
          style={{ transform: 'translateX(0)' }} // S'assurer que la position est réinitialisée
        >
          {logos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className={`flex items-center gap-1.5 h-8 px-2 py-1 rounded-lg backdrop-blur-sm opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group flex-shrink-0 ${
                theme === 'light' 
                  ? 'bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400' 
                  : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-4 w-4 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 flex-shrink-0"
              />
              <span className={`text-sm font-medium whitespace-nowrap ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Affichage desktop : slider animé
  return (
    <div className={`relative overflow-hidden h-auto ${className}`}>
      <div
        ref={containerRef}
        className="flex items-center gap-4 whitespace-nowrap will-change-transform h-auto"
        style={{ 
          width: 'fit-content',
          transition: isAnimating ? 'none' : 'transform 0.3s ease-out'
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className={`flex items-center gap-1.5 min-w-fit h-12 px-2 py-2 rounded-lg backdrop-blur-sm opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer group ${
              theme === 'light' 
                ? 'bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400' 
                : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-5 w-5 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 flex-shrink-0"
            />
            <span className={`text-xs font-medium whitespace-nowrap ${
              theme === 'light' ? 'text-black' : 'text-white'
            }`}>
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
