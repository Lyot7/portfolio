export function ProjectsPageSkeleton() {
  return (
    <section className="min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Skeleton pour la grille de projets - Correspond à la structure réelle */}
      <div className="w-full px-4">
        {/* Grille de projets skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Projet 1 */}
          <div className="bg-muted/20 rounded-xl p-6 animate-pulse">
            <div className="h-6 w-3/4 bg-muted/30 rounded mb-4"></div>
            <div className="h-4 w-full bg-muted/30 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-muted/30 rounded mb-4"></div>
            <div className="h-8 w-24 bg-muted/30 rounded"></div>
          </div>
          
          {/* Projet 2 */}
          <div className="bg-muted/20 rounded-xl p-6 animate-pulse">
            <div className="h-6 w-2/3 bg-muted/30 rounded mb-4"></div>
            <div className="h-4 w-full bg-muted/30 rounded mb-2"></div>
            <div className="h-4 w-4/5 bg-muted/30 rounded mb-4"></div>
            <div className="h-8 w-20 bg-muted/30 rounded"></div>
          </div>
          
          {/* Projet 3 */}
          <div className="bg-muted/20 rounded-xl p-6 animate-pulse">
            <div className="h-6 w-3/5 bg-muted/30 rounded mb-4"></div>
            <div className="h-4 w-full bg-muted/30 rounded mb-2"></div>
            <div className="h-4 w-3/4 bg-muted/30 rounded mb-4"></div>
            <div className="h-8 w-28 bg-muted/30 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
