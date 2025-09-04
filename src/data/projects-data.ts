import { ProjectCardProps } from '@/components/sections/ProjectCard';

export const projectsData: ProjectCardProps[] = [
  {
    title: "Xulinos - Artisan Coutelier",
    description: "Site web pour un artisan coutelier, avec une interface moderne et responsive. Réalisé en fin de première année de Master, ce site est le résultat d'une semaine de travail et d'échanges avec un client réel.",
    image: "/api/placeholder/400/300",
    imageAlt: "Xulinos - Artisan Coutelier - Capture d'écran",
    githubUrl: "https://github.com/votre-username/portfolio",
    liveUrl: "https://xulinos.fr",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    estimatedTime: "2-3 semaines",
    date: "Décembre 2024"
  },
  {
    title: "Application E-commerce",
    description: "Plateforme de vente en ligne complète avec gestion des produits, panier d'achat et système de paiement sécurisé.",
    image: "/api/placeholder/400/300",
    imageAlt: "Application E-commerce - Capture d'écran",
    githubUrl: "https://github.com/votre-username/ecommerce-app",
    liveUrl: "https://votre-ecommerce.vercel.app",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    estimatedTime: "4-6 semaines",
    date: "Novembre 2024"
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif pour visualiser et analyser des données métriques avec graphiques et rapports personnalisables.",
    image: "/api/placeholder/400/300",
    imageAlt: "Dashboard Analytics - Capture d'écran",
    githubUrl: "https://github.com/votre-username/analytics-dashboard",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    estimatedTime: "3-4 semaines",
    date: "Octobre 2024"
  },
  {
    title: "Application Mobile",
    description: "Application mobile cross-platform pour la gestion de tâches avec synchronisation cloud et notifications push.",
    image: "/api/placeholder/400/300",
    imageAlt: "Application Mobile - Capture d'écran",
    githubUrl: "https://github.com/votre-username/task-app",
    liveUrl: "https://votre-app.vercel.app",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    estimatedTime: "5-7 semaines",
    date: "Septembre 2024"
  },
  {
    title: "API REST",
    description: "API RESTful robuste avec authentification JWT, validation des données et documentation Swagger complète.",
    image: "/api/placeholder/400/300",
    imageAlt: "API REST - Capture d'écran",
    githubUrl: "https://github.com/votre-username/rest-api",
    technologies: ["Node.js", "Express", "JWT", "Swagger", "MongoDB"],
    estimatedTime: "2-3 semaines",
    date: "Août 2024"
  },
  {
    title: "Site Vitrine",
    description: "Site vitrine responsive pour une entreprise locale avec design moderne et optimisation SEO avancée.",
    image: "/api/placeholder/400/300",
    imageAlt: "Site Vitrine - Capture d'écran",
    githubUrl: "https://github.com/votre-username/company-website",
    liveUrl: "https://entreprise-vitrine.vercel.app",
    technologies: ["HTML5", "CSS3", "JavaScript", "SEO"],
    estimatedTime: "1-2 semaines",
    date: "Juillet 2024"
  }
];

export default projectsData;
