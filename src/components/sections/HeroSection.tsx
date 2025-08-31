"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ButtonPrimary, ButtonSecondary } from '@/components/ui';
import { ArrowRight, Download, Eye } from 'lucide-react';

// Fonction pour calculer les années d'expérience depuis le 1er septembre 2021
function calculateYearsOfExperience(): number {
  const startDate = new Date('2021-09-01');
  const currentDate = new Date();
  
  // Calculer la différence en années
  const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
  const monthDiff = currentDate.getMonth() - startDate.getMonth();
  
  // Si on n'a pas encore atteint septembre de l'année en cours, soustraire 1
  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < startDate.getDate())) {
    return yearsDiff - 1;
  }
  
  return yearsDiff;
}

export function HeroSection() {
  const [yearsOfExperience, setYearsOfExperience] = useState<number>(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setYearsOfExperience(calculateYearsOfExperience());
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl"> {/* Limitation de largeur pour l'alignement à gauche */}
          
          {/* Badge/Tag avec fond renforcé pour meilleure lisibilité */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 backdrop-blur-md border border-primary/30 text-primary text-sm font-medium shadow-lg">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Ouvert aux opportunités
            </span>
          </div>

          {/* Titre Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
            Développez votre activité grâce à un site qui{' '}
            <span className="text-primary">attire</span>{' '}
            et{' '}
            <span className="text-primary">convertit</span>.
          </h1>

                      {/* Sous-titre */}
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
              Je suis à l&apos;écoute de vos besoins et je vous accompagne dans la création ou l&apos;amélioration de votre site ou application web sur mesure.
            </p>

          {/* Statistiques rapides avec fond pour meilleure lisibilité */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground text-sm font-medium">
                {mounted ? `+${yearsOfExperience} ans de dev` : '+3 ans de dev'}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground text-sm font-medium">Conscience business</span>
            </div>
            <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-foreground text-sm font-medium">Expérimenté en conception d'interfaces intuitives</span>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/contact" className="w-full sm:w-auto">
              <ButtonPrimary size="lg" className="group w-full sm:w-auto" starAnimation={true} animationSpeed="4s">
                Prendre contact
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </ButtonPrimary>
            </Link>
            
            <Link href="/projets" className="w-full sm:w-auto">
              <ButtonSecondary size="lg" className="group w-full sm:w-auto">
                Découvrez mes projets
                <Eye className="w-5 h-5 transition-transform group-hover:scale-110" />
              </ButtonSecondary>
            </Link>
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
            <ButtonPrimary className="group shadow-lg">
              Découvrir mes projets
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </ButtonPrimary>
            
            <ButtonSecondary className="shadow-md">
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
            Créateur d&apos;
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
