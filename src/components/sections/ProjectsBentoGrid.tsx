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
    <div className={`w-full space-y-16 ${className}`}>
      {projects.map((project, index) => (
        <div key={index} className="w-full">
          {/* Titre du projet au-dessus du bento */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {project.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {project.description}
            </p>
          </div>
          
          {/* Bento du projet */}
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
