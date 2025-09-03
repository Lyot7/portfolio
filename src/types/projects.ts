export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
  color?: string;
}
