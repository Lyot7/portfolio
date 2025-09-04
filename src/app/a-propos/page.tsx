"use client";

import { useTranslations, useComponentLoading } from '@/hooks';
import { AboutPageSkeleton } from '@/components/skeletons';

export default function AProposPage() {
  const { t } = useTranslations();
  const { isLoading } = useComponentLoading();

  // Afficher le skeleton pendant le chargement des traductions
  if (isLoading) {
    return <AboutPageSkeleton />;
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          {t('about.title')}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8">
          {t('about.subtitle')}
        </p>
        <p className="text-base text-muted-foreground">
          {t('about.development')}
        </p>
      </div>
    </section>
  );
}
