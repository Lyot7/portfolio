"use client";

import { useState, useEffect } from 'react';
import { Logo } from '@/components/ui';
import { Navigation } from '@/components/layout';
import { ThemeToggle } from '@/components/ui';
import { LanguageSelector } from '@/components/ui';
import { useTranslations } from '@/hooks/useTranslations';
import { HeaderSkeleton } from '@/components/skeletons';

export function Header() {
  const { t, isLoading } = useTranslations();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Afficher le skeleton pendant le chargement des traductions
  if (isLoading || !mounted) {
    return <HeaderSkeleton />;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Navigation centrale */}
          <Navigation />

          {/* Contrôles de droite */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
