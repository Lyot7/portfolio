export default function AProposPage() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Me <span className="text-primary">Découvrir</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-8">
          Découvrez mon parcours, mes compétences et ma passion pour le développement
        </p>
        
        <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-8">
          <p className="text-muted-foreground">
            🚧 Page en cours de développement...
          </p>
        </div>
      </div>
    </section>
  );
}
