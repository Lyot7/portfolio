import { useState, useEffect } from 'react';
import { useTranslations } from './useTranslations';

/**
 * Hook personnalisé pour gérer le chargement indépendant des composants
 * Chaque composant peut utiliser ce hook pour gérer son propre état de chargement
 */
export function useComponentLoading() {
  const { isLoading: translationsLoading } = useTranslations();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    isLoading: translationsLoading || !mounted,
    mounted
  };
}

/**
 * Hook pour gérer le chargement d'images
 */
export function useImageLoading() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(true); // En cas d'erreur, afficher quand même
  };

  return {
    imageLoaded: imageLoaded && mounted,
    handleImageLoad,
    handleImageError,
    mounted
  };
}

/**
 * Hook pour gérer le chargement de données
 */
export function useDataLoading<T>(data: T | null) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (data && mounted) {
      setDataLoaded(true);
    }
  }, [data, mounted]);

  return {
    dataLoaded: dataLoaded && mounted,
    mounted
  };
}
