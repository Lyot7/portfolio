"use client";

import { useState, useEffect } from 'react';
import { ProjectCardSkeleton } from '@/components/skeletons';

interface ProjectWithSkeletonProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  timeout?: number;
}

/**
 * ProjectWithSkeleton - Wrapper pour les composants de projets avec skeleton
 * 
 * Affiche un skeleton pendant le chargement initial
 * Inclut un timeout de fallback pour éviter l'affichage infini du skeleton
 */
export function ProjectWithSkeleton({ 
  children, 
  fallback = <ProjectCardSkeleton />,
  timeout = 500 
}: ProjectWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Timeout de fallback pour éviter l'affichage infini du skeleton
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, timeout);

    return () => clearTimeout(fallbackTimer);
  }, [mounted, timeout]);

  // Afficher le skeleton pendant le chargement initial
  if (isLoading || !mounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
