import React from 'react';
import { ProjectCard, ProjectCardProps } from './ProjectCard';

export interface ProjectsGridProps {
  projects: ProjectCardProps[];
  className?: string;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects,
  className = ''
}) => {
  return (
    <>
      <style>
        {`
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
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}
      </style>
      
      <div className={`w-full ${className}`}>
        <div className="bento-section grid gap-2 p-3 max-w-[54rem] select-none relative mx-auto" style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)' }}>
          <div className="card-responsive grid gap-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                className="card flex flex-col justify-between relative aspect-[4/3] min-h-[200px] w-full max-w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsGrid;
