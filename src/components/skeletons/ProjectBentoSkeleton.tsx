/**
 * ProjectBentoSkeleton - Skeleton pour les bentos de projets
 * 
 * Reproduit fidèlement la structure d'un ProjectBento
 * avec la grille et les différentes sections
 */
export function ProjectBentoSkeleton() {
  return (
    <div className="project-bento max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Flexbox bento skeleton */}
      <div className="flex flex-col gap-2 sm:gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        
        {/* Carte 1 - Grande carte (2x2) */}
        <div className="card md:col-span-2 lg:col-span-2 md:row-span-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-[20px] p-4 animate-pulse">
          {/* Image skeleton */}
          <div className="h-32 md:h-40 lg:h-48 bg-muted/20 rounded-lg mb-4" style={{ minHeight: '300px' }}></div>
          
          {/* Contenu skeleton */}
          <div className="space-y-3">
            <div className="h-6 w-3/4 bg-muted/20 rounded"></div>
            <div className="h-4 w-full bg-muted/20 rounded"></div>
            <div className="h-4 w-5/6 bg-muted/20 rounded"></div>
            <div className="h-4 w-4/5 bg-muted/20 rounded"></div>
          </div>
        </div>

        {/* Carte 2 - Carte normale */}
        <div className="card bg-card/50 backdrop-blur-sm border border-border/50 rounded-[20px] p-4 animate-pulse">
          {/* Image skeleton */}
          <div className="h-20 bg-muted/20 rounded-lg mb-3" style={{ minHeight: '80px' }}></div>
          
          {/* Contenu skeleton */}
          <div className="space-y-2">
            <div className="h-5 w-2/3 bg-muted/20 rounded"></div>
            <div className="h-3 w-full bg-muted/20 rounded"></div>
            <div className="h-3 w-3/4 bg-muted/20 rounded"></div>
          </div>
        </div>

        {/* Carte 3 - Carte normale */}
        <div className="card bg-card/50 backdrop-blur-sm border border-border/50 rounded-[20px] p-4 animate-pulse">
          {/* Image skeleton */}
          <div className="h-20 bg-muted/20 rounded-lg mb-3" style={{ minHeight: '80px' }}></div>
          
          {/* Contenu skeleton */}
          <div className="space-y-2">
            <div className="h-5 w-2/3 bg-muted/20 rounded"></div>
            <div className="h-3 w-full bg-muted/20 rounded"></div>
            <div className="h-3 w-3/4 bg-muted/20 rounded"></div>
          </div>
        </div>

        {/* Carte 4 - Carte avec technologies */}
        <div className="card bg-card/50 backdrop-blur-sm border border-border/50 rounded-[20px] p-4 animate-pulse">
          {/* Technologies skeleton */}
          <div className="flex flex-wrap gap-2 mb-3">
            <div className="h-6 w-16 bg-muted/20 rounded"></div>
            <div className="h-6 w-20 bg-muted/20 rounded"></div>
            <div className="h-6 w-14 bg-muted/20 rounded"></div>
            <div className="h-6 w-18 bg-muted/20 rounded"></div>
          </div>
          
          {/* Contenu skeleton */}
          <div className="space-y-2">
            <div className="h-5 w-2/3 bg-muted/20 rounded"></div>
            <div className="h-3 w-full bg-muted/20 rounded"></div>
          </div>
        </div>

        {/* Carte 5 - Carte normale */}
        <div className="card bg-card/50 backdrop-blur-sm border border-border/50 rounded-[20px] p-4 animate-pulse">
          {/* Image skeleton */}
          <div className="h-20 bg-muted/20 rounded-lg mb-3" style={{ minHeight: '80px' }}></div>
          
          {/* Contenu skeleton */}
          <div className="space-y-2">
            <div className="h-5 w-2/3 bg-muted/20 rounded"></div>
            <div className="h-3 w-full bg-muted/20 rounded"></div>
            <div className="h-3 w-3/4 bg-muted/20 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}