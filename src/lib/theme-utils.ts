/**
 * Theme utilities for consistent theme handling across the application
 */

import { Theme } from '@/types/theme';

/**
 * Get the theme preference from localStorage or system preference
 */
export function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  
  const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
    return savedTheme;
  }
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Save theme preference to localStorage
 */
export function saveTheme(theme: Theme): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('portfolio-theme', theme);
  }
}

/**
 * Apply theme class to document element
 */
export function applyTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;
  
  const root = document.documentElement;
  
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

/**
 * Listen for system theme changes
 */
export function watchSystemTheme(callback: (theme: Theme) => void): () => void {
  if (typeof window === 'undefined') return () => {};
  
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleChange = (e: MediaQueryListEvent) => {
    // Only update if no theme is saved in localStorage
    if (!localStorage.getItem('portfolio-theme')) {
      callback(e.matches ? 'dark' : 'light');
    }
  };
  
  mediaQuery.addEventListener('change', handleChange);
  
  return () => mediaQuery.removeEventListener('change', handleChange);
}

/**
 * CSS class names for theme-aware components
 */
export const themeClasses = {
  card: 'bg-card text-card-foreground border border-border',
  button: {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    success: 'bg-success text-success-foreground hover:bg-success/90',
    warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  },
  input: 'bg-input border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring',
  muted: 'text-muted-foreground',
} as const;
