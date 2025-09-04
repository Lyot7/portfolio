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
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
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
  },
  'WordPress': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
    alt: 'WordPress',
    name: 'WordPress'
  },
  
  // Additional Frontend Technologies
  'Vue.js': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    alt: 'Vue.js',
    name: 'Vue.js'
  },
  'Angular': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
    alt: 'Angular',
    name: 'Angular'
  },
  'Svelte': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
    alt: 'Svelte',
    name: 'Svelte'
  },
  'Sass': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    alt: 'Sass',
    name: 'Sass'
  },
  'Less': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg',
    alt: 'Less',
    name: 'Less'
  },
  'Bootstrap': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    alt: 'Bootstrap',
    name: 'Bootstrap'
  },
  'Material UI': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    alt: 'Material UI',
    name: 'Material UI'
  },
  'Redux': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    alt: 'Redux',
    name: 'Redux'
  },
  'GraphQL': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    alt: 'GraphQL',
    name: 'GraphQL'
  },
  'Webpack': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
    alt: 'Webpack',
    name: 'Webpack'
  },
  'Vite': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    alt: 'Vite',
    name: 'Vite'
  },
  
  // Backend Technologies
  'PHP': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    alt: 'PHP',
    name: 'PHP'
  },
  'Laravel': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
    alt: 'Laravel',
    name: 'Laravel'
  },
  'Symfony': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',
    alt: 'Symfony',
    name: 'Symfony'
  },
  'Ruby': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
    alt: 'Ruby',
    name: 'Ruby'
  },
  'Rails': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original.svg',
    alt: 'Ruby on Rails',
    name: 'Ruby on Rails'
  },
  'Go': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    alt: 'Go',
    name: 'Go'
  },
  'Rust': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
    alt: 'Rust',
    name: 'Rust'
  },
  'Java': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    alt: 'Java',
    name: 'Java'
  },
  'Spring': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    alt: 'Spring',
    name: 'Spring'
  },
  'C#': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    alt: 'C#',
    name: 'C#'
  },
  '.NET': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
    alt: '.NET',
    name: '.NET'
  },
  
  // Database & Storage
  'Redis': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    alt: 'Redis',
    name: 'Redis'
  },
  'SQLite': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    alt: 'SQLite',
    name: 'SQLite'
  },
  'Firebase': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    alt: 'Firebase',
    name: 'Firebase'
  },
  'Supabase': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
    alt: 'Supabase',
    name: 'Supabase'
  },
  
  // DevOps & Cloud
  'Kubernetes': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    alt: 'Kubernetes',
    name: 'Kubernetes'
  },
  'Jenkins': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    alt: 'Jenkins',
    name: 'Jenkins'
  },
  'GitHub Actions': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    alt: 'GitHub Actions',
    name: 'GitHub Actions'
  },
  'Netlify': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
    alt: 'Netlify',
    name: 'Netlify'
  },
  'Heroku': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
    alt: 'Heroku',
    name: 'Heroku'
  },
  'DigitalOcean': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
    alt: 'DigitalOcean',
    name: 'DigitalOcean'
  },
  
  // Mobile Development
  'React Native': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    alt: 'React Native',
    name: 'React Native'
  },
  'Flutter': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    alt: 'Flutter',
    name: 'Flutter'
  },
  'Ionic': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
    alt: 'Ionic',
    name: 'Ionic'
  },
  
  // Design & Tools
  'Sketch': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg',
    alt: 'Sketch',
    name: 'Sketch'
  },
  'Adobe XD': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg',
    alt: 'Adobe XD',
    name: 'Adobe XD'
  },
  'Photoshop': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
    alt: 'Photoshop',
    name: 'Photoshop'
  },
  'Illustrator': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
    alt: 'Illustrator',
    name: 'Illustrator'
  },
  'VS Code': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    alt: 'VS Code',
    name: 'VS Code'
  },
  'IntelliJ': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
    alt: 'IntelliJ IDEA',
    name: 'IntelliJ IDEA'
  },
  'WebStorm': {
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg',
    alt: 'WebStorm',
    name: 'WebStorm'
  }
};

// Fonction utilitaire pour récupérer les logos d'un projet
export const getProjectLogos = (technologies: string[]): TechLogo[] => {
  return technologies
    .map(tech => techLogos[tech])
    .filter(Boolean); // Filtrer les technologies non trouvées
};
