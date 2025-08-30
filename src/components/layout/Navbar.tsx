"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';
import { useScrollDirection, useIsMobile } from '@/hooks';

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

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Projets', href: '/projets' },
    { name: 'Me découvrir', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  // Logique de visibilité selon l'appareil et le scroll
  const shouldHideNavbar = isMobile && scrollDirection === 'down' && !isAtTop;

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

        {/* Theme Toggle + Menu mobile (hamburger) à droite */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <div className="flex-shrink-0">
            <ThemeToggle />
          </div>
          
          {/* Menu mobile */}
          <MobileMenu navItems={navItems} currentPath={pathname} />
        </div>
      </nav>
    </div>
  );
}

/**
 * Menu mobile avec dropdown
 */
function MobileMenu({ navItems, currentPath }: { navItems: Array<{name: string, href: string}>, currentPath: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          relative p-3 rounded-lg
          bg-card/80 backdrop-blur-md border border-border
          text-foreground hover:bg-card hover:text-primary
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
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-card/50 backdrop-blur-md border border-border/50 rounded-xl shadow-lg z-50 animate-in slide-in-from-top duration-200">
          <div className="py-2">
            {navItems.map((item) => {
              const isActive = currentPath === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-xs font-semibold tracking-wider uppercase transition-colors",
                    "hover:bg-muted/50 focus-visible:outline-none focus-visible:bg-muted/50",
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
      )}
    </div>
  );
}
