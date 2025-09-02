"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback, useMemo } from 'react';
import { Theme, ThemeContextType } from '@/types/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Fonction optimisée pour changer le thème
  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  }, [theme]);

  // Fonction pour définir un thème spécifique
  const setSpecificTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  }, []);

  // Premier useEffect : détecter et appliquer le thème immédiatement
  useEffect(() => {
    let initialTheme: Theme = 'dark';
    
    // Vérifier d'abord la variable globale (set par le script anti-flash)
    if (typeof window !== 'undefined' && (window as any).__INITIAL_THEME__) {
      initialTheme = (window as any).__INITIAL_THEME__;
    } else {
      // Fallback sur localStorage
      const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        initialTheme = savedTheme;
      } else {
        // Fallback sur la préférence système
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        initialTheme = mediaQuery.matches ? 'dark' : 'light';
      }
    }
    
    // Appliquer le thème initial immédiatement
    setTheme(initialTheme);
    
    // Nettoyer la variable globale
    if (typeof window !== 'undefined') {
      delete (window as any).__INITIAL_THEME__;
    }
    
    // Sauvegarder le thème détecté si pas déjà sauvegardé
    if (!localStorage.getItem('portfolio-theme')) {
      localStorage.setItem('portfolio-theme', initialTheme);
    }
  }, []); // Dépendances vides pour exécution unique

  // Deuxième useEffect : marquer comme monté et appliquer le thème au DOM
  useEffect(() => {
    setMounted(true);
  }, []);

  // Troisième useEffect : appliquer le thème au DOM et configurer les écouteurs
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    // Appliquer le thème au DOM
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    
    // Ajouter la classe theme-ready après l'application du thème
    root.classList.add('theme-ready');
    
    // Écouter les changements de préférence système seulement si pas de thème sauvegardé
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('portfolio-theme')) {
        const newSystemTheme = e.matches ? 'dark' : 'light';
        setTheme(newSystemTheme);
        localStorage.setItem('portfolio-theme', newSystemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, mounted]);

  // Valeur du contexte mémorisée pour éviter les re-renders
  const contextValue = useMemo(() => ({
    theme,
    toggleTheme,
    setTheme: setSpecificTheme,
    mounted
  }), [theme, toggleTheme, setSpecificTheme, mounted]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
