"use client";

import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

/**
 * Header Component
 * 
 * Header global de l'application contenant :
 * - Logo LY0T (à gauche)
 * - Theme Toggle (à droite)
 */
export function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6 sm:p-8">
      <Logo size="md" />
      <ThemeToggle />
    </header>
  );
}
