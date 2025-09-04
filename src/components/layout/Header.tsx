"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui';
import { Navigation } from '@/components/layout';
import { ThemeToggle } from '@/components/ui';
import { LanguageSelector } from '@/components/ui';
import { useTranslations, useComponentLoading } from '@/hooks';
import { HeaderSkeleton } from '@/components/skeletons';
import { Menu, X } from 'lucide-react';

export function Header() {
  const { t } = useTranslations();
  const { isLoading } = useComponentLoading();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Gérer le breakpoint à 450px
  useEffect(() => {
    const checkScreenSize = () => {
      const isMobileSize = window.innerWidth < 450;
      console.log('Screen width:', window.innerWidth, 'isMobile:', isMobileSize);
      setIsMobile(isMobileSize);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Afficher le skeleton pendant le chargement des traductions
  // TEMPORAIRE: Désactivé pour debug
  // if (isLoading) {
  //   return <HeaderSkeleton />;
  // }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      {/* Debug indicator - à supprimer après test */}
      <div className="bg-red-500 text-white text-xs p-1 text-center">
        DEBUG: isMobile = {isMobile.toString()}, width = {typeof window !== 'undefined' ? window.innerWidth : 'SSR'}
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Gère son propre skeleton */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Navigation centrale - Desktop uniquement (cachée en dessous de 450px) */}
          {!isMobile && (
            <div className="block">
              <Navigation />
            </div>
          )}

          {/* Contrôles de droite - Desktop uniquement (cachés en dessous de 450px) */}
          {!isMobile && (
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <LanguageSelector />
            </div>
          )}

          {/* Bouton menu mobile - Visible uniquement en dessous de 450px */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="block p-2 text-foreground hover:text-primary transition-colors duration-200 rounded-md hover:bg-muted/50"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          )}
        </div>

        {/* Menu mobile déroulant - Affiché uniquement sur mobile */}
        {isMobileMenuOpen && isMobile && (
          <div className="block border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="px-6 py-6">
              <div className="flex flex-col gap-6">
                
                {/* Contrôles en haut du menu mobile */}
                <div className="flex items-center justify-between">
                  {/* Bouton Langue à gauche */}
                  <div className="flex items-center">
                    <LanguageSelector />
                  </div>
                  
                  {/* Bouton Thème à droite */}
                  <div className="flex items-center">
                    <ThemeToggle />
                  </div>
                </div>

                {/* Séparateur visuel */}
                <div className="border-t border-border/30"></div>

                {/* Navigation mobile */}
                <nav className="flex flex-col gap-2">
                  <Link 
                    href="/" 
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-3 px-2 rounded-md hover:bg-muted/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('navigation.home')}
                  </Link>
                  
                  <Link 
                    href="/projets" 
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-3 px-2 rounded-md hover:bg-muted/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('navigation.projects')}
                  </Link>
                  
                  <Link 
                    href="/parcours" 
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-3 px-2 rounded-md hover:bg-muted/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('navigation.journey')}
                  </Link>
                  
                  <Link 
                    href="/contact" 
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-3 px-2 rounded-md hover:bg-muted/30"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('navigation.contact')}
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
