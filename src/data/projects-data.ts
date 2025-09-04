import { ProjectCardProps } from '@/components/sections/ProjectCard';

export const projectsData: ProjectCardProps[] = [
  {
    title: "Xulinos - Artisan Coutelier",
    description: `<p>Site web pour un <strong>artisan coutelier</strong>, après une semaine de travail et d'échanges avec un client réel.</p>
<p>Fonctionnalités principales :</p>
<ul>
  <li>Landing page optimisée SEO</li>
  <li>Configurateur de couteau sur mesure</li>
  <li>Système de mailing pour demande de devis</li>
  <li>Back office pour la gestion des produits et des stocks</li>
</ul>`,
    image: "/api/placeholder/400/300",
    imageAlt: "Xulinos - Artisan Coutelier - Capture d'écran",
    githubUrl: "https://github.com/Lyot7/xulinos",
    liveUrl: "https://xulinos.ly0t.fr",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WordPress", "Figma"]
  }
];

export default projectsData;
