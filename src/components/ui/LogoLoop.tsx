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
  speed = 1,
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

  // Dupliquer les logos pour un défilement continu
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        ref={containerRef}
        className="flex items-center gap-8 whitespace-nowrap"
        style={{ width: 'fit-content' }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex items-center justify-center min-w-[60px] h-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-8 max-w-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
