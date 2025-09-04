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
    <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Bentos des projets */}
      <div className="w-full px-4">
        <ProjectBentoGrid projects={projectsData} />
      </div>
    </section>
  );
}
