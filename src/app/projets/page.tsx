"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import { ProjectsPageSkeleton } from '@/components/skeletons';

export default function ProjetsPage() {
  const { t } = useTranslations();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Afficher le skeleton pendant le chargement des traductions
  if (!mounted) {
    return <ProjectsPageSkeleton />;
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          {t('projects.title')}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8">
          {t('projects.subtitle')}
        </p>
        <p className="text-base text-muted-foreground">
          {t('projects.development')}
        </p>
      </div>
    </section>
  );
}
