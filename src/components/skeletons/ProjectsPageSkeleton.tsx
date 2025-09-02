export function ProjectsPageSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Titre principal */}
        <div className="w-48 h-16 sm:w-64 sm:h-20 lg:w-80 lg:h-24 bg-muted/20 rounded-lg animate-pulse mx-auto mb-6"></div>
        
        {/* Sous-titre */}
        <div className="w-80 h-6 sm:w-96 sm:h-8 lg:w-[28rem] lg:h-10 bg-muted/20 rounded-lg animate-pulse mx-auto mb-8"></div>
        
        {/* Texte de développement */}
        <div className="w-64 h-5 sm:w-80 sm:h-6 bg-muted/20 rounded-lg animate-pulse mx-auto"></div>
      </div>
    </section>
  );
}
