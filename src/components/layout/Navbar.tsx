"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageSelector } from '@/components/ui/LanguageSelector';
import { cn } from '@/lib/utils';
import { useScrollDirection, useIsMobile } from '@/hooks';
import { useTranslations } from '@/hooks/useTranslations';
import { NavbarSkeleton } from '@/components/skeletons';

/**
 * Navbar Component
 * 
 * Navigation complète de l'application contenant :
 * - Logo LY0T (à gauche)
 * - Menu de navigation (centre)
 * - Theme Toggle (à droite)
 */
export function Navbar() {
  const pathname = usePathname();
  const { scrollDirection, isAtTop } = useScrollDirection();
  const isMobile = useIsMobile();
  const { t, isLoading } = useTranslations();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.projects'), href: '/projets' },
    { name: t('navigation.about'), href: '/a-propos' },
    { name: t('navigation.contact'), href: '/contact' },
  ];

  // Logique de visibilité selon l'appareil et le scroll
  const shouldHideNavbar = isMobile && scrollDirection === 'down' && !isAtTop;

  // Afficher le skeleton pendant le chargement des traductions
  if (isLoading || !mounted) {
    return <NavbarSkeleton />;
  }

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out",
      "px-6 sm:px-8 lg:px-16 py-4 sm:py-6 md:py-8", // Mêmes marges horizontales que la hero section
      shouldHideNavbar ? "-translate-y-full" : "translate-y-0"
    )}>
      {/* Navbar qui prend toute la largeur disponible */}
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl px-6 py-4 shadow-lg">
        {/* Logo à gauche */}
        <Logo size="md" />

        {/* Menu de navigation au centre */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative group px-4 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ease-in-out rounded-lg",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  "hover:bg-primary/10 hover:backdrop-blur-sm hover:shadow-sm",
                  isActive 
                    ? "text-primary bg-primary/15 shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {/* Background hover effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Texte */}
                <span className="relative z-10">{item.name}</span>
                

              </Link>
            );
          })}
        </div>

        {/* Language Selector + Theme Toggle + Menu mobile (hamburger) à droite */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle + Language Selector - Desktop uniquement (cachés en dessous de 450px) */}
          {!isMobile && (
            <div className="flex items-center gap-3 w-full justify-end">
              <div className="flex-shrink-0 flex justify-center">
                <ThemeToggle className="w-full" />
              </div>
              <div className="flex-shrink-0 flex justify-center">
                <LanguageSelector className="w-full" />
              </div>
            </div>
          )}
          
          {/* Menu mobile - Visible uniquement en dessous de 450px */}
          <MobileMenu navItems={navItems} currentPath={pathname} isMobile={isMobile} />
        </div>
      </nav>
    </div>
  );
}

/**
 * Menu mobile avec dropdown
 */
function MobileMenu({ navItems, currentPath, isMobile }: { navItems: Array<{name: string, href: string}>, currentPath: string, isMobile: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          relative p-3 rounded-lg
          bg-background border border-border
          text-foreground hover:bg-muted hover:text-primary
          transition-all duration-300 ease-in-out
          hover:scale-110 active:scale-95 
          shadow-lg hover:shadow-xl
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        "
        aria-label="Menu de navigation"
        aria-expanded={isOpen}
      >
        <svg
          className={cn("w-5 h-5 transition-transform duration-200", isOpen && "rotate-90")}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      
      {/* Dropdown menu mobile */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ 
              duration: 0.2, 
              ease: "easeOut",
              opacity: { duration: 0.15 }
            }}
            className="absolute top-full right-0 mt-2 w-64 bg-background border border-border rounded-xl shadow-xl z-50"
          >
            <div className="py-4">
              {/* Contrôles en haut du menu mobile - Affichés seulement si cachés dans le header (mobile) */}
              {isMobile && (
                <>
                  <div className="flex items-center gap-3 w-full px-4 mb-4">
                    {/* Bouton Thème à gauche */}
                    <div className="flex-1 flex justify-center">
                      <ThemeToggle className="w-full" />
                    </div>
                    
                    {/* Bouton Langue à droite */}
                    <div className="flex-1 flex justify-center">
                      <LanguageSelector className="w-full" />
                    </div>
                  </div>

                  {/* Séparateur visuel */}
                  <div className="border-t border-border/30 mb-4"></div>
                </>
              )}

              {/* Navigation mobile */}
              <div className="px-2">
                {navItems.map((item) => {
                  const isActive = currentPath === item.href;
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-4 py-3 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-lg",
                        "hover:bg-muted focus-visible:outline-none focus-visible:bg-muted",
                        "transform hover:translate-x-1",
                        isActive 
                          ? "text-primary bg-primary/10" 
                          : "text-foreground"
                      )}
                    >
                      {item.name}
                      {isActive && (
                        <div className="w-1 h-1 bg-primary rounded-full ml-2 inline-block" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
