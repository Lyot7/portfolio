import { ProjectCardProps } from '@/types';

export const projects: ProjectCardProps[] = [
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light theme, internationalization, and responsive design.',
    image: '/api/placeholder/600/400',
    imageAlt: 'Portfolio website screenshot',
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourportfolio.com',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: '#0f172a'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.',
    image: '/api/placeholder/600/400',
    imageAlt: 'E-commerce platform screenshot',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://yourecommerce.com',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: '#1e293b'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/api/placeholder/600/400',
    imageAlt: 'Task management app screenshot',
    githubUrl: 'https://github.com/yourusername/taskmanager',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'Vuetify'],
    color: '#334155'
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location detection, 7-day forecasts, and interactive weather maps.',
    image: '/api/placeholder/600/400',
    imageAlt: 'Weather dashboard screenshot',
    githubUrl: 'https://github.com/yourusername/weather-app',
    liveUrl: 'https://yourweather.com',
    technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'CSS Grid'],
    color: '#475569'
  },
  {
    id: 'social-media-clone',
    title: 'Social Media Clone',
    description: 'Social networking platform with user profiles, posts, comments, likes, and real-time notifications.',
    image: '/api/placeholder/600/400',
    imageAlt: 'Social media clone screenshot',
    githubUrl: 'https://github.com/yourusername/social-clone',
    technologies: ['React', 'GraphQL', 'Apollo', 'PostgreSQL'],
    color: '#64748b'
  },
  {
    id: 'ai-chat-application',
    title: 'AI Chat Application',
    description: 'Intelligent chatbot application powered by machine learning with natural language processing capabilities.',
    image: '/api/placeholder/600/400',
    imageAlt: 'AI chat application screenshot',
    githubUrl: 'https://github.com/yourusername/ai-chat',
    liveUrl: 'https://yourchat.com',
    technologies: ['Python', 'TensorFlow', 'Flask', 'WebSocket'],
    color: '#7c3aed'
  }
];
