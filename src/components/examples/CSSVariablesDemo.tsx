"use client";

import { ButtonPrimary, ButtonSecondary } from '@/components/ui';
import { Palette, Code2, CheckCircle } from 'lucide-react';

export function CSSVariablesDemo() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20 text-success text-sm font-medium mb-4">
          <CheckCircle className="w-4 h-4" />
          Variables CSS Activées
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Démonstration des Variables CSS
        </h1>
        <p className="text-muted-foreground">
          Tous les composants utilisent maintenant les variables CSS définies dans le système de thèmes
        </p>
      </div>

      {/* Color Palette */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
          <Palette className="w-6 h-6 text-primary" />
          Palette de Couleurs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Primary */}
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="w-full h-16 bg-primary rounded-lg mb-3 flex items-center justify-center">
              <span className="text-primary-foreground font-semibold">Primary</span>
            </div>
            <p className="text-card-foreground font-medium">rgb(var(--primary))</p>
            <p className="text-muted-foreground text-sm">46 179 82 (Vert)</p>
          </div>

          {/* Secondary */}
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="w-full h-16 bg-secondary rounded-lg mb-3 flex items-center justify-center">
              <span className="text-secondary-foreground font-semibold">Secondary</span>
            </div>
            <p className="text-card-foreground font-medium">rgb(var(--secondary))</p>
            <p className="text-muted-foreground text-sm">220 252 231 (Vert clair)</p>
          </div>

          {/* Background */}
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="w-full h-16 border border-border rounded-lg mb-3 flex items-center justify-center" 
                 style={{ backgroundColor: 'rgb(var(--background))' }}>
              <span className="text-foreground font-semibold">Background</span>
            </div>
            <p className="text-card-foreground font-medium">rgb(var(--background))</p>
            <p className="text-muted-foreground text-sm">S'adapte au thème</p>
          </div>

          {/* Foreground */}
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="w-full h-16 border border-border rounded-lg mb-3 flex items-center justify-center"
                 style={{ backgroundColor: 'rgb(var(--foreground))' }}>
              <span className="text-background font-semibold">Foreground</span>
            </div>
            <p className="text-card-foreground font-medium">rgb(var(--foreground))</p>
            <p className="text-muted-foreground text-sm">Texte principal</p>
          </div>

          {/* Muted */}
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="w-full h-16 bg-muted rounded-lg mb-3 flex items-center justify-center">
              <span className="text-muted-foreground font-semibold">Muted</span>
            </div>
            <p className="text-card-foreground font-medium">rgb(var(--muted))</p>
            <p className="text-muted-foreground text-sm">Éléments discrets</p>
          </div>

          {/* Accent */}
          <div className="bg-card border border-border rounded-lg p-4">
            <div className="w-full h-16 bg-accent rounded-lg mb-3 flex items-center justify-center">
              <span className="text-accent-foreground font-semibold">Accent</span>
            </div>
            <p className="text-card-foreground font-medium">rgb(var(--accent))</p>
            <p className="text-muted-foreground text-sm">Éléments d'accentuation</p>
          </div>
        </div>
      </section>

      {/* Semantic Colors */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Couleurs Sémantiques</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
            <div className="w-full h-12 bg-destructive rounded-lg mb-3 flex items-center justify-center">
              <span className="text-destructive-foreground font-semibold text-sm">Destructive</span>
            </div>
            <p className="text-foreground font-medium">Actions dangereuses</p>
          </div>

          <div className="bg-success/10 border border-success/20 rounded-lg p-4">
            <div className="w-full h-12 bg-success rounded-lg mb-3 flex items-center justify-center">
              <span className="text-success-foreground font-semibold text-sm">Success</span>
            </div>
            <p className="text-foreground font-medium">Actions réussies</p>
          </div>

          <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
            <div className="w-full h-12 bg-warning rounded-lg mb-3 flex items-center justify-center">
              <span className="text-warning-foreground font-semibold text-sm">Warning</span>
            </div>
            <p className="text-foreground font-medium">Avertissements</p>
          </div>
        </div>
      </section>

      {/* Components Using Variables */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Composants Utilisant les Variables</h2>
        
        <div className="bg-card border border-border rounded-lg p-6 space-y-6">
          {/* Hero Section Preview */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Hero Section</h3>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Badge utilisant primary/10
              </div>
              
              <h1 className="text-2xl font-bold text-foreground">
                Titre avec mot en{' '}
                <span className="text-primary">couleur primaire</span>
              </h1>
              
              <p className="text-muted-foreground">
                Sous-titre avec{' '}
                <span className="text-foreground font-semibold">mots importants</span>{' '}
                en foreground.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Boutons</h3>
            <div className="flex gap-4">
              <ButtonPrimary>Primary Button</ButtonPrimary>
              <ButtonSecondary>Secondary Button</ButtonSecondary>
            </div>
          </div>

          {/* Stats */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Statistiques</h3>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Point en primary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Texte en muted-foreground</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Variables Code */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
          <Code2 className="w-6 h-6 text-primary" />
          Variables CSS Utilisées
        </h2>
        
        <div className="bg-muted rounded-lg p-6 overflow-x-auto">
          <pre className="text-sm text-muted-foreground">
{`/* Mode Light */
:root {
  --primary: 46 179 82;        /* Vert */
  --secondary: 220 252 231;    /* Vert clair */
  --background: 255 255 255;   /* Blanc */
  --foreground: 23 23 23;      /* Noir */
  --muted-foreground: 107 114 128;
}

/* Mode Dark */
.dark {
  --primary: 46 179 82;        /* Même vert */
  --secondary: 34 46 37;       /* Vert sombre */
  --background: 10 10 10;      /* Noir */
  --foreground: 237 237 237;   /* Blanc */
  --muted-foreground: 161 161 170;
}`}
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Utilisation dans les Composants</h2>
        
        <div className="bg-muted rounded-lg p-6">
          <pre className="text-sm text-muted-foreground">
{`// Classes Tailwind qui utilisent les variables CSS
<span className="text-primary">         // rgb(var(--primary))
<div className="bg-primary/10">      // rgba(var(--primary), 0.1)
<p className="text-foreground">      // rgb(var(--foreground))
<span className="text-muted-foreground"> // rgb(var(--muted-foreground))
<div className="border-border">      // rgb(var(--border))

// Ces classes s'adaptent automatiquement aux thèmes light/dark !`}
          </pre>
        </div>
      </section>
    </div>
  );
}
