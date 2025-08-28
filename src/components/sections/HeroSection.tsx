"use client";

import { ButtonPrimary, ButtonSecondary } from '@/components/ui';
import { ArrowRight, Download, Eye } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl"> {/* Limitation de largeur pour l'alignement à gauche */}
          
          {/* Badge/Tag */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Disponible pour de nouveaux projets
            </span>
          </div>

          {/* Titre Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
            Développeur{' '}
            <span className="text-primary">Frontend</span>
            <br />
            passionné par les{' '}
            <span className="text-primary">interfaces</span>
            <br />
            modernes et{' '}
            <span className="text-primary">performantes</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Je crée des expériences web exceptionnelles avec{' '}
            <span className="text-foreground font-semibold">React</span>,{' '}
            <span className="text-foreground font-semibold">Next.js</span> et{' '}
            <span className="text-foreground font-semibold">TypeScript</span>.
            Spécialisé dans les architectures clean et les performances optimales.
          </p>

          {/* Statistiques rapides */}
          <div className="flex flex-wrap gap-6 mb-10 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">+3 ans d'expérience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">+15 projets réalisés</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">100% satisfaction client</span>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <ButtonPrimary size="lg" className="group">
              Voir mes projets
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </ButtonPrimary>
            
            <ButtonSecondary size="lg" className="group">
              <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
              Télécharger CV
            </ButtonSecondary>
          </div>

          {/* Call to action secondaire */}
          <div className="flex items-center gap-4">
            <div className="h-px bg-border flex-1 max-w-16"></div>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group">
              <Eye className="w-4 h-4 transition-transform group-hover:scale-110" />
              Découvrir mon parcours
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Version alternative avec layout différent */
export function HeroSectionCompact() {
  return (
    <section className="min-h-[80vh] flex items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          
          {/* Titre Principal - Version Compacte */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Développeur{' '}
            <span className="text-primary">Frontend</span>{' '}
            spécialisé en{' '}
            <span className="text-primary">React</span> et{' '}
            <span className="text-primary">Next.js</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mb-8">
            Je transforme vos idées en applications web modernes, 
            performantes et accessibles.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-3">
            <ButtonPrimary className="group">
              Découvrir mes projets
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </ButtonPrimary>
            
            <ButtonSecondary>
              Me contacter
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Version avec background pattern */
export function HeroSectionWithPattern() {
  return (
    <section className="relative min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Pattern de fond */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>
      
      {/* Gradient subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          
          {/* Badge animé */}
          <div className="mb-8 animate-in slide-in-from-left duration-700">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Portfolio 2025 • Ouvert aux opportunités
            </span>
          </div>

          {/* Titre avec animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-in slide-in-from-left duration-700 delay-200">
            Créateur d'
            <span className="text-primary relative">
              expériences
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/20 rounded-full"></div>
            </span>
            <br />
            web{' '}
            <span className="text-primary">exceptionnelles</span>
          </h1>

          {/* Sous-titre avec animation */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mb-10 leading-relaxed animate-in slide-in-from-left duration-700 delay-300">
            Développeur Frontend passionné, je conçois et développe des interfaces 
            modernes qui allient{' '}
            <span className="text-foreground font-semibold">performance</span>,{' '}
            <span className="text-foreground font-semibold">accessibilité</span> et{' '}
            <span className="text-foreground font-semibold">design</span>.
          </p>

          {/* Boutons avec animation */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left duration-700 delay-500">
            <ButtonPrimary size="lg" className="group shadow-lg hover:shadow-xl">
              Explorer mes projets
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </ButtonPrimary>
            
            <ButtonSecondary size="lg" className="group">
              <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
              Télécharger CV
            </ButtonSecondary>
          </div>
        </div>
      </div>
    </section>
  );
}
