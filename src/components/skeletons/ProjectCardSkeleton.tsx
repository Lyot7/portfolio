/**
 * ProjectCardSkeleton - Skeleton pour les cartes de projets
 * 
 * Reproduit fidèlement la structure d'une ProjectCard
 * avec les mêmes dimensions et espacements
 */
export function ProjectCardSkeleton() {
  return (
    <div className="card group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]">
      {/* Header avec titre */}
      <div className="card__header flex justify-between gap-3 relative text-white mb-2">
        <div className="h-4 w-3/4 bg-muted/20 rounded animate-pulse"></div>
      </div>

      {/* Image du projet skeleton */}
      <div className="relative h-24 overflow-hidden rounded-lg mb-3" style={{ minHeight: '96px' }}>
        <div className="h-full w-full bg-muted/20 rounded animate-pulse"></div>
      </div>

      {/* Description skeleton */}
      <div className="card__content flex flex-col relative text-white mb-3">
        <div className="h-3 w-full bg-muted/20 rounded animate-pulse mb-1"></div>
        <div className="h-3 w-5/6 bg-muted/20 rounded animate-pulse mb-1"></div>
        <div className="h-3 w-4/5 bg-muted/20 rounded animate-pulse"></div>
      </div>

      {/* Boutons d'action skeleton */}
      <div className="card__actions flex gap-2">
        <div className="h-8 w-20 bg-muted/20 rounded animate-pulse"></div>
        <div className="h-8 w-20 bg-muted/20 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
