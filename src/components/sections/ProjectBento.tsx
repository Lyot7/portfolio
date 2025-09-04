import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ExternalLink, Github, Calendar, Clock, Code, Globe, Image, FileText } from 'lucide-react';
import LogoLoop from '../ui/LogoLoop';
import { getProjectLogos } from '../../data/tech-logos';
import { ProjectBentoSkeleton } from '../skeletons';
import { useTranslations } from '../../hooks/useTranslations';

export interface ProjectBentoProps {
  project: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    githubUrl?: string;
    liveUrl?: string;
    technologies: string[];
  };
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  glowColor?: string;
}

const DEFAULT_GLOW_COLOR = '34, 197, 94';

// Créer les cartes caractéristiques pour un projet avec disposition bento selon le code fourni
const createProjectCards = (project: ProjectBentoProps['project']) => [
  {
    id: 'title',
    title: 'Titre du projet',
    content: project.title,
    icon: FileText,
    color: '#060010',
    // Mobile: col-start-1 row-start-1 col-span-3, Desktop: col-start-1 row-start-1 col-span-5 row-span-1
    className: 'col-start-1 row-start-1 col-span-3 md:col-start-1 md:row-start-1 md:col-span-5 md:row-span-1',
    isTitle: true
  },
  {
    id: 'links',
    title: 'Liens en ligne & Github',
    content: { github: project.githubUrl, live: project.liveUrl },
    icon: ExternalLink,
    color: '#060010',
    // Mobile: col-start-3 row-start-2 row-span-2, Desktop: col-start-6 row-start-1 col-span-2 row-span-1
    className: 'col-start-3 row-start-2 row-span-2 md:col-start-6 md:row-start-1 md:col-span-2 md:row-span-1',
    isLinks: true
  },
  {
    id: 'image',
    title: 'Image (Full size)',
    content: project.image,
    icon: Image,
    color: '#060010',
    // Mobile: col-start-1 row-start-2 col-span-2 row-span-2, Desktop: col-start-4 row-start-2 col-span-4 row-span-3
    className: 'col-start-1 row-start-2 col-span-2 row-span-2 md:col-start-4 md:row-start-2 md:col-span-4 md:row-span-3',
    isImage: true
  },
  {
    id: 'description',
    title: 'Description',
    content: project.description,
    icon: FileText,
    color: '#060010',
    // Mobile: col-start-1 row-start-4 col-span-3 row-span-2, Desktop: col-start-1 row-start-2 col-span-3 row-span-3
    className: 'col-start-1 row-start-4 col-span-3 row-span-2 md:col-start-1 md:row-start-2 md:col-span-3 md:row-span-3',
    isDescription: true
  },
  {
    id: 'technologies',
    title: 'Logos technos',
    content: project.technologies,
    icon: Code,
    color: '#060010',
    // Mobile: col-start-1 row-start-6 col-span-3, Desktop: col-start-1 row-start-5 col-span-7 row-span-1
    className: 'col-start-1 row-start-6 col-span-3 md:col-start-1 md:row-start-5 md:col-span-7 md:row-span-1',
    isTechnologies: true
  }
];

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

const ProjectBento: React.FC<ProjectBentoProps> = ({
  project,
  enableBorderGlow = true,
  disableAnimations = false,
  glowColor = DEFAULT_GLOW_COLOR
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;
  const { isLoading } = useTranslations();
  const [mounted, setMounted] = useState(false);
  
  const projectCards = createProjectCards(project);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Display skeleton ONLY during real translation loading
  if (isLoading || !mounted) {
    return <ProjectBentoSkeleton />;
  }

  // Fonction pour gérer le tilt des cartes
  const handleCardTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldDisableAnimations) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8; // Tilt léger
    const rotateY = ((x - centerX) / centerX) * 8;  // Tilt léger
    
    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000
    });
  };

  // Fonction pour réinitialiser le tilt
  const handleCardReset = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldDisableAnimations) return;
    
    const card = e.currentTarget;
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  return (
    <>
      <style>
        {`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${glowColor};
            --border-color: #166534;
            --background-dark: #060010;
            --white: hsl(0, 0%, 100%);
            --green-primary: rgba(34, 197, 94, 1);
            --green-glow: rgba(34, 197, 94, 0.2);
            --green-border: rgba(34, 197, 94, 0.8);
          }
          
          .card-responsive {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(6, 1fr);
            gap: 1rem;
            width: 100%;
            max-width: 100vw;
            margin: 0 auto;
            min-height: 400px;
            max-height: 80vh;
          }
          
          @media (min-width: 768px) {
            .card-responsive {
              grid-template-columns: repeat(7, 1fr);
              grid-template-rows: repeat(5, 1fr);
              gap: 0.8rem;
              min-height: 320px;
              max-height: 75vh;
              max-width: 95vw;
            }
          }
          
          @media (min-width: 1024px) {
            .card-responsive {
              max-width: 90vw;
              min-height: 350px;
              max-height: 70vh;
            }
          }
          
          @media (min-width: 1280px) {
            .card-responsive {
              max-width: 85vw;
              min-height: 380px;
              max-height: 65vh;
            }
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(34, 197, 94, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(34, 197, 94, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(22, 101, 52, 0.4), 0 0 30px rgba(34, 197, 94, 0.2);
          }
          
          /* Halo vert sur les cartes */
          .card {
            transition: all 0.3s ease;
            background: rgba(6, 0, 16, 0.5);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
          }
          
          .card:hover {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.1);
            background: rgba(6, 0, 16, 0.6);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
          }
          
          /* Styles pour le HTML dans la description */
          .prose-invert {
            --tw-prose-body: rgb(255 255 255);
            --tw-prose-headings: rgb(255 255 255);
            --tw-prose-lead: rgb(255 255 255);
            --tw-prose-links: rgb(34 197 94);
            --tw-prose-bold: rgb(255 255 255);
            --tw-prose-counters: rgb(255 255 255);
            --tw-prose-bullets: rgb(255 255 255);
            --tw-prose-hr: rgb(255 255 255);
            --tw-prose-quotes: rgb(255 255 255);
            --tw-prose-quote-borders: rgb(34 197 94);
            --tw-prose-captions: rgb(255 255 255);
            --tw-prose-code: rgb(34 197 94);
            --tw-prose-pre-code: rgb(255 255 255);
            --tw-prose-pre-bg: rgba(6, 0, 16, 0.8);
            --tw-prose-th-borders: rgb(34 197 94);
            --tw-prose-td-borders: rgb(34 197 94);
          }
          
          .prose-invert a {
            color: rgb(34 197 94);
            text-decoration: underline;
            text-decoration-color: rgba(34, 197, 94, 0.5);
            transition: all 0.2s ease;
          }
          
          .prose-invert a:hover {
            color: rgb(34 197 94);
            text-decoration-color: rgb(34 197 94);
            text-shadow: 0 0 8px rgba(34, 197, 94, 0.3);
          }
          
          .prose-invert ul {
            list-style-type: disc;
            padding-left: 1.5rem;
            margin: 0.5rem 0;
          }
          
          .prose-invert li {
            color: rgb(255 255 255);
            margin: 0.25rem 0;
          }
          
          .prose-invert li::marker {
            color: rgb(34 197 94);
          }
          
          .prose-invert p {
            margin: 0.5rem 0;
          }
          
          .prose-invert strong {
            color: rgb(34 197 94);
            font-weight: 600;
          }
          
          .prose-invert em {
            color: rgb(255 255 255);
            font-style: italic;
          }
          
          .prose-invert ul, .prose-invert ol {
            margin: 0.5rem 0;
            padding-left: 1rem;
          }
          
          .prose-invert li {
            margin: 0.25rem 0;
          }
        `}
      </style>
      
      <div className="w-full">
        <div className="bento-section grid gap-2 p-2 sm:p-3 md:p-4 select-none relative mx-auto" style={{ fontSize: 'clamp(0.9rem, 0.8rem + 0.4vw, 1.3rem)' }}>
          <div className="card-responsive">
            {projectCards.map((card, index) => {
              const IconComponent = card.icon;
              const baseClassName = `card flex flex-col justify-between relative ${card.isImage ? 'p-0' : 'p-2'} rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${enableBorderGlow ? 'card--border-glow' : ''} ${card.className}`;

              const cardStyle = {
                backgroundColor: 'rgba(6, 0, 16, 0.5)',
                backdropFilter: 'blur(10px)',
                borderColor: 'var(--border-color)',
                color: 'var(--white)',
                '--glow-x': '50%',
                '--glow-y': '50%',
                '--glow-intensity': '0',
                '--glow-radius': '200px'
              } as React.CSSProperties;

              return (
                <div
                  key={card.id}
                  className={baseClassName}
                  style={cardStyle}
                  onMouseMove={handleCardTilt}
                  onMouseLeave={handleCardReset}
                >

                  {/* Contenu de la carte */}
                  <div className="card__content flex flex-col relative text-white h-full">
                    {card.isTitle ? (
                      <div className="flex items-center justify-center h-full">
                        <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight text-center">
                          {card.content as string}
                        </h2>
                      </div>
                    ) : card.isImage ? (
                      <div className="relative h-full overflow-hidden">
                        <img
                          src={card.content as string}
                          alt={project.imageAlt}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    ) : card.isTechnologies ? (
                      <div className="flex items-center justify-center h-full">
                        <LogoLoop
                          logos={getProjectLogos(card.content as string[])}
                          speed={0.3}
                          direction="left"
                          className="w-full h-12"
                        />
                      </div>
                    ) : card.isDescription ? (
                      <div className="flex items-start justify-start h-full p-4">
                        <div 
                          className="text-base text-white leading-relaxed text-left prose prose-invert prose-base max-w-none"
                          dangerouslySetInnerHTML={{ __html: card.content as string }}
                        />
                      </div>
                    ) : card.isLinks ? (
                      <div className="flex flex-col gap-1 h-full p-1">
                        {card.content && typeof card.content === 'object' && (
                          <>
                            {card.content.github && (
                              <a 
                                href={card.content.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group flex-1 flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200 border border-green-500/40 bg-green-500/10 text-green-300 hover:bg-green-500/20 hover:border-green-400/60 rounded-lg"
                              >
                                <Github className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
                                <span>Code</span>
                              </a>
                            )}
                            {card.content.live && (
                              <a 
                                href={card.content.live} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group flex-1 flex items-center justify-center gap-2 text-sm font-medium transition-all duration-200 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg shadow-green-500/20 rounded-lg"
                              >
                                <Globe className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
                                <span>Démo</span>
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <p className="text-lg font-medium text-white text-center">
                          {card.content as string}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBento;
