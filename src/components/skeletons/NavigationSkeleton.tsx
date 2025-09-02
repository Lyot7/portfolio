export function NavigationSkeleton() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {/* Navigation items */}
      <div className="flex items-center gap-8">
        {/* Accueil */}
        <div className="h-4 w-16 bg-muted/20 rounded animate-pulse"></div>
        
        {/* Projets */}
        <div className="h-4 w-16 bg-muted/20 rounded animate-pulse"></div>
        
        {/* Parcours */}
        <div className="h-4 w-16 bg-muted/20 rounded animate-pulse"></div>
        
        {/* Contact */}
        <div className="h-4 w-16 bg-muted/20 rounded animate-pulse"></div>
      </div>
    </nav>
  );
}
