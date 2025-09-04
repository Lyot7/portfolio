export function AboutPageSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Titre principal - Hauteurs plus réalistes pour text-4xl à text-6xl */}
        <div className="w-64 h-12 sm:w-80 sm:h-14 lg:w-96 lg:h-16 bg-muted/20 rounded-lg animate-pulse mx-auto mb-6"></div>
        
        {/* Sous-titre - Hauteurs plus réalistes pour text-lg à text-2xl */}
        <div className="w-80 h-6 sm:w-96 sm:h-7 lg:w-[28rem] lg:h-8 bg-muted/20 rounded-lg animate-pulse mx-auto mb-8"></div>
        
        {/* Texte de développement - Hauteur plus réaliste pour text-base */}
        <div className="w-64 h-5 sm:w-80 sm:h-5 bg-muted/20 rounded-lg animate-pulse mx-auto"></div>
      </div>
    </section>
  );
}
