"use client";

import { useTranslations, useComponentLoading } from '@/hooks';
import { ProjectsPageSkeleton } from '@/components/skeletons';
import { ProjectBentoGrid } from '@/components/sections';
import { projectsData } from '@/data/projects-data';

export default function ProjetsPage() {
  const { t } = useTranslations();
  const { isLoading } = useComponentLoading();

  // Afficher le skeleton pendant le chargement des traductions
  if (isLoading) {
    return <ProjectsPageSkeleton />;
  }

  return (
    <main className="min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-16 px-6 sm:px-8 lg:px-16">
      {/* En-tête de la page */}
      <header className="text-center mb-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Mes <span className="text-primary">Projets</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('projects.subtitle')}
        </p>
      </header>

      {/* Section des projets */}
      <section className="w-full">
        <ProjectBentoGrid projects={projectsData} />
      </section>
    </main>
  );
}
