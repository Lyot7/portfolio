export function ContactPageSkeleton() {
  return (
    <div className="min-h-screen pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-32 md:pb-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-start justify-center pt-8">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Informations de contact - Colonne gauche */}
              <div className="space-y-6">
                {/* Titre et description */}
                <div>
                  <div className="w-48 h-10 sm:w-64 sm:h-12 bg-muted/20 rounded-lg animate-pulse mb-4"></div>
                  <div className="w-80 h-6 sm:w-96 sm:h-8 bg-muted/20 rounded-lg animate-pulse"></div>
                </div>
                
                {/* Cartes de contact */}
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg">
                    <div className="w-10 h-10 bg-muted/30 rounded-lg animate-pulse"></div>
                    <div className="flex-1">
                      <div className="w-20 h-4 bg-muted/20 rounded animate-pulse mb-2"></div>
                      <div className="w-48 h-4 bg-muted/20 rounded animate-pulse"></div>
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg">
                    <div className="w-10 h-10 bg-muted/30 rounded-lg animate-pulse"></div>
                    <div className="flex-1">
                      <div className="w-24 h-4 bg-muted/20 rounded animate-pulse mb-2"></div>
                      <div className="w-32 h-4 bg-muted/20 rounded animate-pulse"></div>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-3 p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg">
                    <div className="w-10 h-10 bg-muted/30 rounded-lg animate-pulse"></div>
                    <div className="flex-1">
                      <div className="w-20 h-4 bg-muted/20 rounded animate-pulse mb-2"></div>
                      <div className="w-36 h-4 bg-muted/20 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire - Colonne droite */}
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg overflow-visible w-full max-w-md mx-auto">
                {/* Stepper */}
                <div className="flex items-center justify-center mb-8 w-full">
                  <div className="flex items-center space-x-3 sm:space-x-6 w-full max-w-xs">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center flex-1">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-muted/30 rounded-full animate-pulse"></div>
                        {step < 3 && (
                          <div className="mx-3 sm:mx-6 flex-1">
                            <div className="w-full h-1 bg-muted/20 rounded-full"></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contenu de l'étape 1 (Informations personnelles) */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Titre de l'étape */}
                  <div className="w-32 h-6 sm:w-40 sm:h-8 bg-muted/20 rounded-lg animate-pulse"></div>
                  
                  {/* Champs du formulaire */}
                  <div className="space-y-3 sm:space-y-4">
                    {/* Prénom */}
                    <div>
                      <div className="w-20 h-4 bg-muted/20 rounded animate-pulse mb-2"></div>
                      <div className="w-full h-10 sm:h-12 bg-muted/20 rounded-lg animate-pulse"></div>
                    </div>

                    {/* Nom */}
                    <div>
                      <div className="w-16 h-4 bg-muted/20 rounded animate-pulse mb-2"></div>
                      <div className="w-full h-10 sm:h-12 bg-muted/20 rounded-lg animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Bouton Suivant */}
                <div className="mt-6">
                  <div className="w-full h-10 bg-muted/20 rounded-lg animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
