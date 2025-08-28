"use client";

import { useState } from 'react';
import { ButtonPrimary, ButtonSecondary, Button } from './index';
import { Download, Send, Heart, Star, Plus, ArrowRight } from 'lucide-react';

export function ButtonDemo() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingDemo = async () => {
    setIsLoading(true);
    // Simuler une action async
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div className="p-8 space-y-12 max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Composants Button
        </h1>
        <p className="text-muted-foreground">
          Démonstration des boutons Primary et Secondary avec la nouvelle palette verte
        </p>
      </div>

      {/* Boutons de Base */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Boutons de Base</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">Primary Button</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Utilise la couleur primaire (vert) comme arrière-plan avec du texte blanc.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonPrimary size="sm">Small Primary</ButtonPrimary>
              <ButtonPrimary size="md">Medium Primary</ButtonPrimary>
              <ButtonPrimary size="lg">Large Primary</ButtonPrimary>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">Secondary Button</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Bordure verte avec fond transparent, texte vert. Fond coloré au hover.
            </p>
            <div className="flex flex-wrap gap-4">
              <ButtonSecondary size="sm">Small Secondary</ButtonSecondary>
              <ButtonSecondary size="md">Medium Secondary</ButtonSecondary>
              <ButtonSecondary size="lg">Large Secondary</ButtonSecondary>
            </div>
          </div>
        </div>
      </section>

      {/* Boutons avec Icônes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Boutons avec Icônes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">Primary avec Icônes</h3>
            <div className="space-y-3">
              <ButtonPrimary>
                <Send className="w-4 h-4" />
                Envoyer
              </ButtonPrimary>
              
              <ButtonPrimary>
                <Download className="w-4 h-4" />
                Télécharger
              </ButtonPrimary>
              
              <ButtonPrimary>
                <Plus className="w-4 h-4" />
                Ajouter
              </ButtonPrimary>
              
              <ButtonPrimary>
                Continuer
                <ArrowRight className="w-4 h-4" />
              </ButtonPrimary>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">Secondary avec Icônes</h3>
            <div className="space-y-3">
              <ButtonSecondary>
                <Heart className="w-4 h-4" />
                Favoris
              </ButtonSecondary>
              
              <ButtonSecondary>
                <Star className="w-4 h-4" />
                Noter
              </ButtonSecondary>
              
              <ButtonSecondary>
                Annuler
              </ButtonSecondary>
              
              <ButtonSecondary>
                Retour
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </section>

      {/* États des Boutons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">États des Boutons</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Normal</h3>
            <div className="space-y-2">
              <ButtonPrimary className="w-full">Primary</ButtonPrimary>
              <ButtonSecondary className="w-full">Secondary</ButtonSecondary>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Disabled</h3>
            <div className="space-y-2">
              <ButtonPrimary disabled className="w-full">Primary</ButtonPrimary>
              <ButtonSecondary disabled className="w-full">Secondary</ButtonSecondary>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Loading</h3>
            <div className="space-y-2">
              <ButtonPrimary 
                isLoading={isLoading} 
                onClick={handleLoadingDemo}
                className="w-full"
              >
                {isLoading ? 'Chargement...' : 'Démarrer'}
              </ButtonPrimary>
              <ButtonSecondary isLoading className="w-full">Secondary</ButtonSecondary>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-foreground mb-3">Autres variantes</h3>
            <div className="space-y-2">
              <Button variant="destructive" className="w-full">Destructive</Button>
              <Button variant="ghost" className="w-full">Ghost</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Exemples d'Utilisation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Exemples d'Utilisation</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire de Contact */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-medium text-card-foreground mb-4">Formulaire de Contact</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Votre nom"
                className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
              />
              <input 
                type="email" 
                placeholder="votre@email.com"
                className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none"
              />
              <textarea 
                placeholder="Votre message..."
                rows={3}
                className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:outline-none resize-none"
              />
              <div className="flex gap-3">
                <ButtonPrimary className="flex-1">
                  <Send className="w-4 h-4" />
                  Envoyer
                </ButtonPrimary>
                <ButtonSecondary>Annuler</ButtonSecondary>
              </div>
            </div>
          </div>

          {/* Actions sur Card */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-medium text-card-foreground mb-2">Projet Portfolio</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Un portfolio moderne construit avec Next.js, TypeScript et Tailwind CSS.
            </p>
            <div className="flex gap-3">
              <ButtonPrimary size="sm">
                Voir le projet
                <ArrowRight className="w-4 h-4" />
              </ButtonPrimary>
              <ButtonSecondary size="sm">
                <Heart className="w-4 h-4" />
                Ajouter aux favoris
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </section>

      {/* Code d'Utilisation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">Code d'Utilisation</h2>
        
        <div className="bg-muted rounded-lg p-6 overflow-x-auto">
          <pre className="text-sm text-muted-foreground">
{`// Import des composants
import { ButtonPrimary, ButtonSecondary } from '@/components/ui';

// Utilisation basique
<ButtonPrimary>Action Principale</ButtonPrimary>
<ButtonSecondary>Action Secondaire</ButtonSecondary>

// Avec icônes
<ButtonPrimary>
  <Send className="w-4 h-4" />
  Envoyer
</ButtonPrimary>

// Différentes tailles
<ButtonPrimary size="sm">Small</ButtonPrimary>
<ButtonPrimary size="md">Medium</ButtonPrimary>
<ButtonPrimary size="lg">Large</ButtonPrimary>

// États
<ButtonPrimary disabled>Désactivé</ButtonPrimary>
<ButtonPrimary isLoading>Chargement...</ButtonPrimary>`}
          </pre>
        </div>
      </section>
    </div>
  );
}
