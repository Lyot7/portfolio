import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ExternalLink, Github, Calendar, Clock, Code, Globe, Image, FileText } from 'lucide-react';

export interface ProjectBentoProps {
  project: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    githubUrl?: string;
    liveUrl?: string;
    technologies: string[];
    estimatedTime: string;
    date: string;
  };
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  glowColor?: string;
}

const DEFAULT_GLOW_COLOR = '34, 197, 94';

// Créer les cartes caractéristiques pour un projet
const createProjectCards = (project: ProjectBentoProps['project']) => [
  {
    id: 'title',
    title: 'Titre du projet',
    content: project.title,
    icon: FileText,
    color: '#060010',
    span: 'span-2'
  },
  {
    id: 'description',
    title: 'Description',
    content: project.description,
    icon: FileText,
    color: '#060010',
    span: 'span-2'
  },
  {
    id: 'image',
    title: 'Aperçu',
    content: project.image,
    icon: Image,
    color: '#060010',
    span: 'span-2',
    isImage: true
  },
  {
    id: 'technologies',
    title: 'Technologies',
    content: project.technologies,
    icon: Code,
    color: '#060010',
    span: 'span-1',
    isTechnologies: true
  },
  {
    id: 'time',
    title: 'Temps estimé',
    content: project.estimatedTime,
    icon: Clock,
    color: '#060010',
    span: 'span-1'
  },
  {
    id: 'date',
    title: 'Date de réalisation',
    content: project.date,
    icon: Calendar,
    color: '#060010',
    span: 'span-1'
  },
  {
    id: 'github',
    title: 'Code source',
    content: project.githubUrl,
    icon: Github,
    color: '#060010',
    span: 'span-1',
    isLink: true,
    linkType: 'github'
  },
  {
    id: 'live',
    title: 'Voir le projet',
    content: project.liveUrl,
    icon: Globe,
    color: '#060010',
    span: 'span-1',
    isLink: true,
    linkType: 'live'
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
  
  const projectCards = createProjectCards(project);

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
            grid-template-columns: 1fr;
            width: 90%;
            margin: 0 auto;
            padding: 0.5rem;
          }
          
          @media (min-width: 600px) {
            .card-responsive {
              grid-template-columns: repeat(4, 1fr);
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
          
          .span-1 { grid-column: span 1; }
          .span-2 { grid-column: span 2; }
          
          @media (max-width: 599px) {
            .span-2 { grid-column: span 1; }
          }
        `}
      </style>
      
      <div className="w-full">
        <div className="bento-section grid gap-2 p-3 max-w-[54rem] select-none relative mx-auto" style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)' }}>
          <div className="card-responsive grid gap-2">
            {projectCards.map((card, index) => {
              const IconComponent = card.icon;
              const baseClassName = `card flex flex-col justify-between relative aspect-[4/3] min-h-[200px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${enableBorderGlow ? 'card--border-glow' : ''} ${card.span}`;

              const cardStyle = {
                backgroundColor: card.color || 'var(--background-dark)',
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
                >
                  {/* Header avec icône et titre */}
                  <div className="card__header flex items-center gap-3 relative text-white mb-3">
                    <IconComponent className="h-5 w-5 text-green-400" />
                    <h4 className="card__title font-medium text-sm m-0 text-green-400">
                      {card.title}
                    </h4>
                  </div>

                  {/* Contenu de la carte */}
                  <div className="card__content flex flex-col relative text-white">
                    {card.isImage ? (
                      <div className="relative h-32 overflow-hidden rounded-lg">
                        <img
                          src={card.content as string}
                          alt={project.imageAlt}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    ) : card.isTechnologies ? (
                      <div className="flex flex-wrap gap-2">
                        {(card.content as string[]).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-2 text-sm bg-green-500/20 text-green-300 rounded-full border border-green-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    ) : card.isLink ? (
                      <div className="mt-auto">
                        {card.content && (
                          <a 
                            href={card.content as string} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center gap-2 h-10 px-4 text-sm font-medium rounded-md transition-all duration-200 ${
                              card.linkType === 'github' 
                                ? 'border border-green-500/30 bg-transparent text-green-300 hover:bg-green-500/20 hover:border-green-400/50'
                                : 'bg-green-600 hover:bg-green-700 text-white'
                            }`}
                          >
                            <IconComponent className="h-4 w-4" />
                            {card.linkType === 'github' ? 'Voir le code' : 'Voir le projet'}
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className="mt-auto">
                        <p className="text-lg font-medium text-white">
                          {card.content}
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
