"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/buttons';
import { AnimatedButton } from '@/components/ui';
import { ArrowRight, Download, Eye } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslations, useComponentLoading } from '@/hooks';
import { HeroSkeleton } from '@/components/skeletons';

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
  const { t, translateWithVars } = useTranslations();
  const { isLoading } = useComponentLoading();
  const [yearsOfExperience, setYearsOfExperience] = useState<number>(0);

  useEffect(() => {
    setYearsOfExperience(calculateYearsOfExperience());
  }, []);

  // Afficher le skeleton pendant le chargement des traductions
  if (isLoading) {
    return <HeroSkeleton />;
  }

  return (
    <section className="min-h-screen flex items-center pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl"> {/* Limitation de largeur pour l'alignement à gauche */}
          
          {/* Badge/Tag avec fond renforcé pour meilleure lisibilité */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 backdrop-blur-md border border-primary/30 text-primary text-sm font-medium shadow-lg">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              {t('home.hero.badge')}
            </span>
          </div>

          {/* Titre Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
            {t('home.hero.title.part1')}{' '}
            <span className="text-primary">{t('home.hero.title.part2')}</span>{' '}
            {t('home.hero.title.part3')}{' '}
            <span className="text-primary">{t('home.hero.title.part4')}</span>.
          </h1>

          {/* Sous-titre */}
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground max-w-3xl mb-8 leading-relaxed">
            {t('home.hero.description')}
          </p>

          {/* Conteneur flex en colonne avec inversion sur mobile très petit */}
          <div className="flex flex-col gap-4 mb-12 max-[450px]:flex-col-reverse">
            
            {/* Statistiques rapides avec fond pour meilleure lisibilité */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground text-sm font-medium">
                  {translateWithVars('home.hero.stats.experience', { years: yearsOfExperience })}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground text-sm font-medium">{t('home.hero.stats.business')}</span>
              </div>
              <div className="flex items-center gap-2 bg-card/40 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground text-sm font-medium">{t('home.hero.stats.interfaces')}</span>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <AnimatedButton size="lg" className="group w-full sm:w-auto">
                  {t('home.hero.cta.contact')}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </AnimatedButton>
              </Link>
              
              <Link href="/projets" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="group w-full sm:w-auto">
                  {t('home.hero.cta.projects')}
                  <Eye className="w-5 h-5 transition-transform group-hover:scale-110" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Version alternative avec layout différent */
export function HeroSectionCompact() {
  const { t } = useTranslations();

  return (
    <section className="min-h-[80vh] flex items-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          
          {/* Titre Principal - Version Compacte */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            {t('home.hero.compact.title.part1')}{' '}
            <span className="text-primary">{t('home.hero.compact.title.part2')}</span>{' '}
            {t('home.hero.compact.title.part3')}{' '}
            <span className="text-primary">{t('home.hero.compact.title.part4')}</span>{' '}
            {t('home.hero.compact.title.part5')}{' '}
            <span className="text-primary">{t('home.hero.compact.title.part6')}</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-base sm:text-lg text-white max-w-2xl mb-8">
            {t('home.hero.compact.description')}
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-3">
            <AnimatedButton className="group shadow-lg">
              {t('home.hero.compact.cta.projects')}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </AnimatedButton>
            
            <Button variant="secondary" className="shadow-md">
              {t('home.hero.compact.cta.contact')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Version avec background pattern */
export function HeroSectionWithPattern() {
  const { t } = useTranslations();

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
              {t('home.hero.pattern.badge')}
            </span>
          </div>

          {/* Titre avec animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-in slide-in-from-left duration-700 delay-200">
            {t('home.hero.pattern.title.part1')}
            <span className="text-primary relative">
              {t('home.hero.pattern.title.part2')}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/20 rounded-full"></div>
            </span>
            <br />
            {t('home.hero.pattern.title.part3')}{' '}
            <span className="text-primary">{t('home.hero.pattern.title.part4')}</span>
          </h1>

          {/* Sous-titre avec animation */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mb-10 leading-relaxed animate-in slide-in-from-left duration-700 delay-300">
            {t('home.hero.pattern.description')}
          </p>

          {/* Boutons avec animation */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left duration-700 delay-500">
            <AnimatedButton size="lg" className="group shadow-lg hover:shadow-xl">
              {t('home.hero.pattern.cta.projects')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </AnimatedButton>
            
            <Button variant="secondary" size="lg" className="group">
              <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
              {t('home.hero.pattern.cta.cv')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
