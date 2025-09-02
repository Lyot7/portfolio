import { LogoSkeleton } from './LogoSkeleton';

export function NavbarSkeleton() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out px-6 sm:px-8 lg:px-16 py-4 sm:py-6 md:py-8">
      {/* Navbar qui prend toute la largeur disponible */}
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl px-6 py-4 shadow-lg">
        {/* Logo à gauche */}
        <LogoSkeleton />

        {/* Menu de navigation au centre */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Navigation items */}
          <div className="px-4 py-2.5 w-16 h-8 bg-muted/20 rounded-lg animate-pulse"></div>
          <div className="px-4 py-2.5 w-16 h-8 bg-muted/20 rounded-lg animate-pulse"></div>
          <div className="px-4 py-2.5 w-20 h-8 bg-muted/20 rounded-lg animate-pulse"></div>
          <div className="px-4 py-2.5 w-16 h-8 bg-muted/20 rounded-lg animate-pulse"></div>
        </div>

        {/* Language Selector + Theme Toggle + Menu mobile à droite */}
        <div className="flex items-center gap-3">
          {/* Language Selector Skeleton */}
          <div className="w-10 h-10 bg-muted/30 rounded-lg animate-pulse"></div>
          
          {/* Theme Toggle Skeleton */}
          <div className="w-10 h-10 bg-muted/30 rounded-lg animate-pulse"></div>
          
          {/* Menu mobile Skeleton */}
          <div className="md:hidden w-10 h-10 bg-muted/30 rounded-lg animate-pulse"></div>
        </div>
      </nav>
    </div>
  );
}
