"use client";

import { HeroSection, HeroSectionCompact, HeroSectionWithPattern } from './HeroSection';

export function HeroDemo() {
  return (
    <div className="space-y-16">
      {/* Section Header */}
      <div className="text-center py-12 bg-card border border-border rounded-lg">
        <h1 className="text-3xl font-bold text-card-foreground mb-4">
          Composants Hero Section
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Trois variantes de Hero Section pour la landing page, 
          avec titres colorés, boutons primaires/secondaires et alignement à gauche.
        </p>
      </div>

      {/* Hero Section Default */}
      <section>
        <div className="mb-8 p-4 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold text-foreground mb-2">1. HeroSection (Default)</h2>
          <p className="text-muted-foreground text-sm">
            Version complète avec badge, statistiques et call-to-action secondaire.
            Parfaite pour une landing page détaillée.
          </p>
        </div>
        <div className="border border-border rounded-lg overflow-hidden">
          <HeroSection />
        </div>
      </section>

      {/* Hero Section Compact */}
      <section>
        <div className="mb-8 p-4 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold text-foreground mb-2">2. HeroSectionCompact</h2>
          <p className="text-muted-foreground text-sm">
            Version condensée pour les pages où l'espace est limité.
            Garde l'essentiel tout en étant plus concise.
          </p>
        </div>
        <div className="border border-border rounded-lg overflow-hidden">
          <HeroSectionCompact />
        </div>
      </section>

      {/* Hero Section With Pattern */}
      <section>
        <div className="mb-8 p-4 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold text-foreground mb-2">3. HeroSectionWithPattern</h2>
          <p className="text-muted-foreground text-sm">
            Version avec pattern de fond, animations et effets visuels avancés.
            Idéale pour un impact visuel maximum.
          </p>
        </div>
        <div className="border border-border rounded-lg overflow-hidden">
          <HeroSectionWithPattern />
        </div>
      </section>

      {/* Code Examples */}
      <section className="p-6 bg-muted rounded-lg">
        <h2 className="text-xl font-semibold text-foreground mb-4">Utilisation</h2>
        
        <div className="space-y-4 text-sm">
          <div className="bg-background p-4 rounded border border-border">
            <h3 className="font-medium text-foreground mb-2">Import</h3>
            <pre className="text-muted-foreground">
{`import { 
  HeroSection, 
  HeroSectionCompact, 
  HeroSectionWithPattern 
} from '@/components/sections';`}
            </pre>
          </div>

          <div className="bg-background p-4 rounded border border-border">
            <h3 className="font-medium text-foreground mb-2">Utilisation dans une page</h3>
            <pre className="text-muted-foreground">
{`export default function HomePage() {
  return (
    <main>
      <HeroSection />
      {/* Autres sections... */}
    </main>
  );
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-card border border-border rounded-lg">
          <h3 className="font-semibold text-card-foreground mb-2">✨ Design</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Alignement à gauche</li>
            <li>• Mots-clés en couleur primaire</li>
            <li>• Typographie hiérarchisée</li>
            <li>• Espacement harmonieux</li>
          </ul>
        </div>

        <div className="p-6 bg-card border border-border rounded-lg">
          <h3 className="font-semibold text-card-foreground mb-2">🎯 Actions</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Button Primary principal</li>
            <li>• Button Secondary alternatif</li>
            <li>• Icônes Lucide React</li>
            <li>• Animations au hover</li>
          </ul>
        </div>

        <div className="p-6 bg-card border border-border rounded-lg">
          <h3 className="font-semibold text-card-foreground mb-2">📱 Responsive</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Breakpoints Tailwind</li>
            <li>• Tailles de texte adaptatives</li>
            <li>• Layout flexible</li>
            <li>• Espacement mobile-first</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
