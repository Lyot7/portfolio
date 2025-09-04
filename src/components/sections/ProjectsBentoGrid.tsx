import React from 'react';
import ProjectBento from './ProjectBento';

export interface ProjectBentoGridProps {
  projects: Array<{
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    githubUrl?: string;
    liveUrl?: string;
    technologies: string[];
    estimatedTime: string;
    date: string;
  }>;
  className?: string;
}

export const ProjectsBentoGrid: React.FC<ProjectBentoGridProps> = ({
  projects,
  className = ''
}) => {
  return (
    <div className={`w-full space-y-12 ${className}`}>
      {projects.map((project, index) => (
        <div key={index} className="w-full">
          <ProjectBento
            project={project}
            enableBorderGlow={true}
            disableAnimations={false}
            glowColor="34, 197, 94"
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsBentoGrid;
