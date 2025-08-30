"use client";

import { useEffect, useState } from 'react';

/**
 * Hook pour détecter les media queries
 * Utile pour adapter le comportement selon la taille d'écran
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Définir la valeur initiale
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Écouter les changements
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

/**
 * Hook spécialisé pour détecter les écrans mobiles
 */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 767px)');
}

/**
 * Hook spécialisé pour détecter les écrans desktop
 */
export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 768px)');
}
