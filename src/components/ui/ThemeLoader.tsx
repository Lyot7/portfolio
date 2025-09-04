"use client";

import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

/**
 * ThemeLoader - Composant de chargement du thème
 * 
 * S'affiche pendant que le thème se charge pour éviter le flash
 * Utilise des couleurs neutres et une transition douce
 */
export function ThemeLoader() {
  const { mounted } = useTheme();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (mounted) {
      // Transition immédiate quand le thème est monté
      setIsVisible(false);
    }
  }, [mounted]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-white dark:bg-black transition-opacity duration-300 ease-out"
      style={{
        opacity: mounted ? 0 : 1,
        pointerEvents: mounted ? 'none' : 'auto'
      }}
    >
      {/* Spinner de chargement centré avec animation plus fluide */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-6 h-6 border-2 border-gray-300 dark:border-gray-600 border-t-green-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
