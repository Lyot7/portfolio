export function LogoSkeleton() {
  return (
    <div className="flex items-center gap-3">
      {/* Placeholder pour le favicon */}
      <div className="w-8 h-8 bg-muted/30 rounded-lg animate-pulse"></div>
      
      {/* Placeholder pour le texte du logo - Largeur plus réaliste pour "LY0T" */}
      <div className="w-16 h-6 bg-muted/20 rounded animate-pulse"></div>
    </div>
  );
}
