"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from '@/hooks/useTranslations';
import { NavigationSkeleton } from '@/components/skeletons';

export function Navigation() {
  const { t, isLoading } = useTranslations();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Afficher le skeleton pendant le chargement des traductions
  if (isLoading || !mounted) {
    return <NavigationSkeleton />;
  }

  return (
    <nav className="hidden lg:flex items-center gap-8">
      <Link 
        href="/" 
        className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
      >
        {t('navigation.home')}
      </Link>
      
      <Link 
        href="/projets" 
        className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
      >
        {t('navigation.projects')}
      </Link>
      
      <Link 
        href="/parcours" 
        className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
      >
        {t('navigation.journey')}
      </Link>
      
      <Link 
        href="/contact" 
        className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
      >
        {t('navigation.contact')}
      </Link>
    </nav>
  );
}
