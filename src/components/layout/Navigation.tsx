"use client";

import Link from 'next/link';
import { useTranslations, useComponentLoading } from '@/hooks';
import { NavigationSkeleton } from '@/components/skeletons';

export function Navigation() {
  const { t } = useTranslations();
  const { isLoading } = useComponentLoading();

  // Afficher le skeleton pendant le chargement des traductions
  if (isLoading) {
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
