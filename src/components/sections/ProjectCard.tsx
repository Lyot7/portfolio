import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectImage } from '@/components/ui';

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  imageAlt,
  githubUrl,
  liveUrl,
  technologies,
  className = ''
}) => {
  return (
    <div 
      className={`card flex flex-col justify-between relative aspect-[4/3] min-h-[200px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] card--border-glow ${className}`}
      style={{
        backgroundColor: '#060010',
        borderColor: '#166534',
        color: 'hsl(0, 0%, 100%)',
        '--glow-x': '50%',
        '--glow-y': '50%',
        '--glow-intensity': '0',
        '--glow-radius': '200px'
      } as React.CSSProperties}
    >
      {/* Header avec label et titre - style bento */}
      <div className="card__header flex justify-between gap-3 relative text-white mb-3">
        <span className="card__label text-base text-green-400 font-medium">Projet</span>
        <h3 className="card__title font-normal text-base m-0 text-clamp-1 group-hover:text-green-400 transition-colors duration-300">
          {title}
        </h3>
      </div>

      {/* Image du projet - plus compacte pour le style bento */}
      <div className="relative h-24 overflow-hidden rounded-lg mb-3" style={{ minHeight: '96px' }}>
        <ProjectImage
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={300}
          height={96}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Description - style bento avec text-clamp */}
      <div className="card__content flex flex-col relative text-white mb-3">
        <p className="card__description text-xs leading-5 opacity-90 text-clamp-2">
          {description}
        </p>
      </div>

      {/* Technologies - limitées pour le style bento compact */}
      <div className="mb-3">
        <div className="flex flex-wrap gap-1">
          {technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30">
              +{technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Boutons d'action - style bento compact */}
      <div className="mt-auto">
        <div className="flex gap-2">
          {githubUrl && (
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1 h-7 px-2 text-xs font-medium rounded-md border border-green-500/30 bg-transparent text-green-300 hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-200"
            >
              <Github className="h-3 w-3" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          )}
          {liveUrl && (
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1 h-7 px-2 text-xs font-medium rounded-md bg-green-600 hover:bg-green-700 text-white transition-all duration-200"
            >
              <ExternalLink className="h-3 w-3" />
              <span className="hidden sm:inline">Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
