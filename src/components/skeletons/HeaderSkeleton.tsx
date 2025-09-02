"use client";

import { LogoSkeleton } from './LogoSkeleton';
import { NavigationSkeleton } from './NavigationSkeleton';

export function HeaderSkeleton() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Skeleton */}
          <div className="flex items-center">
            <LogoSkeleton />
          </div>

          {/* Navigation Skeleton */}
          <NavigationSkeleton />

          {/* Contrôles de droite Skeleton */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Skeleton */}
            <div className="w-10 h-10 bg-muted/30 rounded-lg animate-pulse"></div>
            
            {/* Language Selector Skeleton */}
            <div className="w-10 h-10 bg-muted/30 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
