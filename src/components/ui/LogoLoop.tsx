import React, { useEffect, useRef } from 'react';

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

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const animationDuration = 20 / speed; // 20s par défaut, ajusté par la vitesse

    // Créer l'animation CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes logoLoop {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(${direction === 'left' ? '-' : ''}100%);
        }
      }
      
      .logo-loop-container {
        animation: logoLoop ${animationDuration}s linear infinite;
      }
      
      .logo-loop-container:hover {
        animation-play-state: paused;
      }
    `;
    
    document.head.appendChild(style);
    container.classList.add('logo-loop-container');

    return () => {
      document.head.removeChild(style);
    };
  }, [speed, direction]);

  // Dupliquer les logos pour un défilement continu (plus de duplications pour une liste courte)
  const getDuplicatedLogos = () => {
    if (logos.length <= 3) {
      // Pour 3 logos ou moins, dupliquer 8 fois pour avoir une liste continue
      return [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];
    } else if (logos.length <= 6) {
      // Pour 4-6 logos, dupliquer 4 fois
      return [...logos, ...logos, ...logos, ...logos];
    } else {
      // Pour plus de 6 logos, dupliquer 2 fois (comportement original)
      return [...logos, ...logos];
    }
  };
  
  const duplicatedLogos = getDuplicatedLogos();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        ref={containerRef}
        className="flex items-center gap-4 whitespace-nowrap"
        style={{ width: 'fit-content' }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex items-center gap-1.5 min-w-fit h-12 px-2 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm opacity-60 hover:opacity-100 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-5 w-5 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
            />
            <span className="text-xs text-white font-medium whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
