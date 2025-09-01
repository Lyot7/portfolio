"use client";

import { ReactNode } from 'react';
import { DarkVeilBackground } from './DarkVeilBackground';
import { Navbar } from './Navbar';
import { useTheme } from '@/contexts/ThemeContext';
import ClickSpark from '@/components/ui/ClickSpark';

interface GlobalLayoutProps {
  children: ReactNode;
}

/**
 * GlobalLayout - Layout unique pour toute l'application
 * 
 * Inclut :
 * - Background animé (DarkVeilBackground)
 * - Header global (Logo + ThemeToggle)
 * - ClickSpark effectif partout
 * - Gestion adaptative des couleurs selon le thème
 */
export function GlobalLayout({ children }: GlobalLayoutProps) {
  const { theme, mounted } = useTheme();

  // Couleur des sparks selon le thème
  const sparkColor = mounted ? (theme === 'light' ? '#000000' : '#ffffff') : '#ffffff';

  return (
    <div className="min-h-screen relative">
      {/* Background animé */}
      <DarkVeilBackground />
      <div className="absolute inset-0 bg-overlay-fixed"></div>
      
      {/* Navbar global avec navigation */}
      <Navbar />
      
      {/* Contenu des pages */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* ClickSpark global pour toute l'application */}
      <div className="fixed inset-0 z-[9999] pointer-events-none">
        <ClickSpark
          sparkColor={sparkColor}        // Adaptatif selon thème
          sparkSize={10}                 // Taille des sparks
          sparkRadius={15}               // Rayon d'expansion  
          sparkCount={8}                 // Nombre de sparks
          duration={400}                 // Durée en ms
        />
      </div>
    </div>
  );
}
