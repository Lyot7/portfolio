/**
 * Constantes centralisées de l'application
 * 
 * Respecte le principe de responsabilité unique (SOLID)
 * Seulement responsable du stockage des constantes
 */

// Configuration de l'application
export const APP_CONFIG = {
  name: 'LY0T Portfolio',
  description: 'Développeur web full stack spécialisé dans la création de sites et applications web modernes',
  url: 'https://www.ly0t.fr',
  author: 'LY0T',
  version: '1.0.0'
} as const;

// Configuration des thèmes
export const THEME_CONFIG = {
  storageKey: 'portfolio-theme',
  defaultTheme: 'dark' as const,
  supportedThemes: ['light', 'dark'] as const
} as const;

// Configuration des langues
export const LANGUAGE_CONFIG = {
  default: 'fr',
  supported: ['fr', 'en', 'es', 'de'] as const,
  storageKey: 'portfolio-language'
} as const;

// Configuration des animations
export const ANIMATION_CONFIG = {
  durations: {
    fast: 150,
    normal: 300,
    slow: 500,
    verySlow: 1000
  },
  easings: {
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
  }
} as const;

// Configuration des breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

// Configuration des couleurs
export const COLOR_CONFIG = {
  primary: '#2eb352',
  secondary: '#1a1a1a',
  accent: '#3b82f6',
  success: '#22c55e',
  warning: '#fbbf24',
  error: '#ef4444'
} as const;

// Configuration des métadonnées
export const META_CONFIG = {
  title: {
    default: 'LY0T - Développeur Web Full Stack',
    template: '%s | LY0T Portfolio'
  },
  description: {
    default: 'Développeur web full stack spécialisé dans la création de sites et applications web modernes. Expert en React, Next.js, TypeScript et design d\'interfaces intuitives.',
    contact: 'Contactez LY0T pour vos projets web. Développeur full stack expert en React, Next.js et TypeScript.',
    projects: 'Découvrez les projets web créés par LY0T. Portfolio de développeur full stack spécialisé en React et Next.js.',
    about: 'En savoir plus sur LY0T, développeur web full stack freelance. Expertise en React, Next.js et TypeScript.'
  },
  keywords: [
    'développeur web',
    'full stack',
    'React',
    'Next.js',
    'TypeScript',
    'portfolio',
    'freelance',
    'développement web',
    'applications web',
    'sites web'
  ]
} as const;
