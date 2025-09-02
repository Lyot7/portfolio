"use client";

import { cn } from '@/lib/utils';

export interface HeroSkeletonProps {
  className?: string;
}

/**
 * HeroSkeleton - Composant skeleton ultra-fidèle à la section héro
 * 
 * Utilise exactement les mêmes classes Tailwind et dimensions
 * pour une transition parfaite entre skeleton et contenu
 */
export function HeroSkeleton({ className }: HeroSkeletonProps) {
  return (
    <section className={cn(
      "min-h-screen flex items-center pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-20 px-6 sm:px-8 lg:px-16",
      className
    )}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          
          {/* Badge skeleton - Même structure que le vrai badge */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/40 backdrop-blur-sm border border-border/30">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-32 h-5 bg-muted/30 rounded animate-pulse" />
            </div>
          </div>

          {/* Titre principal skeleton - Même hauteur et espacement */}
          <div className="mb-6 space-y-2">
            {/* Première ligne du titre */}
            <div className="h-16 sm:h-20 lg:h-24 xl:h-28 bg-muted/20 rounded-lg animate-pulse" />
            {/* Deuxième ligne du titre (plus courte) */}
            <div className="h-16 sm:h-20 lg:h-24 xl:h-28 bg-muted/20 rounded-lg animate-pulse w-4/5" />
          </div>

          {/* Description skeleton - Même largeur et hauteur */}
          <div className="mb-8 max-w-3xl">
            <div className="h-6 sm:h-7 lg:h-8 bg-muted/20 rounded animate-pulse mb-2" />
            <div className="h-6 sm:h-7 lg:h-8 bg-muted/20 rounded animate-pulse mb-2 w-11/12" />
            <div className="h-6 sm:h-7 lg:h-8 bg-muted/20 rounded animate-pulse w-10/12" />
          </div>

          {/* Statistiques skeleton - Même structure et espacement */}
          <div className="flex flex-wrap gap-4 mb-10">
            {/* Stat 1: Expérience */}
            <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <div className="w-24 h-5 bg-muted/30 rounded animate-pulse" />
            </div>
            
            {/* Stat 2: Business */}
            <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <div className="w-28 h-5 bg-muted/30 rounded animate-pulse" />
            </div>
            
            {/* Stat 3: Interfaces */}
            <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <div className="w-32 h-5 bg-muted/30 rounded animate-pulse" />
            </div>
          </div>

          {/* Boutons d'action skeleton - Même structure et classes que les vrais boutons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {/* Bouton principal (AnimatedButton) */}
            <div className="w-full sm:w-auto">
              <div className="relative w-full sm:w-auto overflow-hidden rounded-lg isolate" style={{ padding: '2px 0' }}>
                {/* Gradients skeleton */}
                <div className="absolute w-[250%] h-[40%] opacity-20 bottom-[-8px] right-[-150%] rounded-full bg-muted/30 animate-pulse" />
                <div className="absolute w-[250%] h-[40%] opacity-20 top-[-8px] left-[-150%] rounded-full bg-muted/30 animate-pulse" />
                <div className="absolute w-[150%] h-[25%] opacity-20 top-[37.5%] left-[-75%] rounded-full bg-muted/30 animate-pulse" />
                
                {/* Contenu du bouton skeleton */}
                <div className="relative z-10 w-full bg-muted/30 h-12 rounded-md flex items-center justify-center">
                  <div className="w-24 h-5 bg-muted/50 rounded animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Bouton secondaire (Button variant="secondary") */}
            <div className="w-full sm:w-auto">
              <div className="w-full sm:w-auto h-12 px-8 py-2 text-base font-medium border-2 border-muted/30 bg-transparent rounded-md flex items-center justify-center">
                <div className="w-28 h-5 bg-muted/30 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
