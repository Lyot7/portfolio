export interface TechLogo {
  src: string;
  alt: string;
  name: string;
}

export const techLogos: Record<string, TechLogo> = {
  // Frontend
  'React': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    alt: 'React',
    name: 'React'
  },
  'Next.js': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    alt: 'Next.js',
    name: 'Next.js'
  },
  'TypeScript': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    alt: 'TypeScript',
    name: 'TypeScript'
  },
  'JavaScript': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    alt: 'JavaScript',
    name: 'JavaScript'
  },
  'Tailwind CSS': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    alt: 'Tailwind CSS',
    name: 'Tailwind CSS'
  },
  'CSS': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    alt: 'CSS3',
    name: 'CSS3'
  },
  'HTML': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    alt: 'HTML5',
    name: 'HTML5'
  },
  
  // Backend
  'Node.js': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    alt: 'Node.js',
    name: 'Node.js'
  },
  'Python': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    alt: 'Python',
    name: 'Python'
  },
  'Django': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    alt: 'Django',
    name: 'Django'
  },
  'Express': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    alt: 'Express.js',
    name: 'Express.js'
  },
  
  // Database
  'MongoDB': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    alt: 'MongoDB',
    name: 'MongoDB'
  },
  'PostgreSQL': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    alt: 'PostgreSQL',
    name: 'PostgreSQL'
  },
  'MySQL': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    alt: 'MySQL',
    name: 'MySQL'
  },
  
  // Tools & Others
  'Git': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    alt: 'Git',
    name: 'Git'
  },
  'Docker': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    alt: 'Docker',
    name: 'Docker'
  },
  'AWS': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    alt: 'AWS',
    name: 'AWS'
  },
  'Vercel': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
    alt: 'Vercel',
    name: 'Vercel'
  },
  'Figma': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    alt: 'Figma',
    name: 'Figma'
  }
};

// Fonction utilitaire pour récupérer les logos d'un projet
export const getProjectLogos = (technologies: string[]): TechLogo[] => {
  return technologies
    .map(tech => techLogos[tech])
    .filter(Boolean); // Filtrer les technologies non trouvées
};
