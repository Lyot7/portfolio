"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

/**
 * ProjectImage - Composant d'image pour les projets avec skeleton de chargement
 * 
 * Affiche un skeleton pendant le chargement de l'image
 * Utilise le composant Image de Next.js pour l'optimisation
 * Inclut un timeout de fallback pour éviter le chargement infini
 */
export function ProjectImage({ 
  src, 
  alt, 
  className = "", 
  width = 400, 
  height = 300,
  priority = false 
}: ProjectImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Timeout de fallback pour éviter le chargement infini
    const fallbackTimer = setTimeout(() => {
      setImageLoaded(true);
    }, 800); // 800ms maximum

    return () => clearTimeout(fallbackTimer);
  }, [mounted]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(true); // Afficher quand même en cas d'erreur
  };

  // Afficher le skeleton pendant le chargement de l'image
  if (!imageLoaded || !mounted) {
    return (
      <div className={`bg-muted/20 animate-pulse ${className}`} style={{ width: width, height: height }}>
        <div className="w-full h-full bg-muted/30 rounded animate-pulse" />
      </div>
    );
  }

  // Si c'est un SVG, utiliser une balise img normale avec dimensions fixes
  if (src.includes('.svg') || src.includes('/api/placeholder/')) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ width: width, height: height, objectFit: 'cover' }}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onLoad={handleImageLoad}
      onError={handleImageError}
    />
  );
}
