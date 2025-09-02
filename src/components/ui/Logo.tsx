"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LogoSkeleton } from '@/components/skeletons';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Logo Component
 * 
 * Affiche le favicon avec le texte "LY0T" comme logo de marque.
 * Peut être utilisé comme lien vers la page d'accueil.
 */
export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Simuler le temps de chargement de l'image et de la typo
    const timer = setTimeout(() => {
      setImageLoaded(true);
    }, 150); // 150ms pour le chargement de l'image et de la typo

    return () => clearTimeout(timer);
  }, []);

  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8', 
    lg: 'h-10 w-10'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  // Afficher le skeleton pendant le chargement de l'image et de la typo
  if (!imageLoaded || !mounted) {
    return <LogoSkeleton />;
  }

  return (
    <Link 
      href="/" 
      className={cn(
        "flex items-center gap-3 transition-all duration-200 hover:opacity-80",
        className
      )}
    >
      {/* Favicon */}
      <div className={cn("relative", sizeClasses[size])}>
        <Image
          src="/favicon.svg"
          alt="LY0T Logo"
          width={32}
          height={32}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Texte de marque */}
      {showText && (
        <span className={cn(
          "font-asimovian font-normal text-foreground tracking-wide",
          textSizeClasses[size]
        )}>
          LY<span className="text-primary">0</span>T
        </span>
      )}
    </Link>
  );
}

/**
 * Logo Icon Only - Version sans texte
 */
export function LogoIcon({ className = "", size = "md" }: Omit<LogoProps, 'showText'>) {
  return <Logo className={className} size={size} showText={false} />;
}
