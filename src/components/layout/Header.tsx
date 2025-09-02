"use client";

import { Logo } from '@/components/ui';
import { ThemeToggle } from '@/components/ui';
import { LanguageSelector } from '@/components/ui';

/**
 * Header - Composant d'en-tête principal
 * 
 * Respecte le principe de responsabilité unique (SOLID)
 * Seulement responsable de l'affichage de l'en-tête
 */
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Contrôles de droite */}
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
