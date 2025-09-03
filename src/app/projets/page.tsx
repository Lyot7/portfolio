"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import { ProjectsPageSkeleton } from '@/components/skeletons';
import { ProjectsBento, ProjectBentoGrid, ProjectsGrid } from '@/components/sections';
import { projects } from '@/data';
import { projectsData } from '@/data/projects-data';

export default function ProjetsPage() {
  const { t } = useTranslations();
  const [mounted, setMounted] = useState(false);
  const [viewMode, setViewMode] = useState<'bento' | 'grid'>('grid');

  useEffect(() => {
    setMounted(true);
  }, []);

  // Afficher le skeleton pendant le chargement des traductions
  if (!mounted) {
    return <ProjectsPageSkeleton />;
  }

  return (
    <section className="min-h-screen pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          {t('projects.title')}
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8">
          {t('projects.subtitle')}
        </p>
        <p className="text-base text-muted-foreground mb-8">
          {t('projects.development')}
        </p>
        
        {/* Toggle pour changer de vue */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              viewMode === 'grid'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Vue Grille
          </button>
          <button
            onClick={() => setViewMode('bento')}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              viewMode === 'bento'
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Vue Bento
          </button>
        </div>
      </div>
      
      <div className="flex justify-center">
        {viewMode === 'grid' ? (
          <ProjectsGrid projects={projectsData} />
        ) : (
          <ProjectBentoGrid projects={projectsData} />
        )}
      </div>
    </section>
  );
}
