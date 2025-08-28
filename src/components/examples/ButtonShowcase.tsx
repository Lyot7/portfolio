"use client";

import { ButtonPrimary, ButtonSecondary } from '@/components/ui';
import { Send, Download, Heart, Star } from 'lucide-react';

export function ButtonShowcase() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold text-card-foreground mb-6 text-center">
        Nouveaux Composants Button
      </h2>
      
      <div className="space-y-6">
        {/* Boutons simples */}
        <div className="text-center">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Boutons de base</h3>
          <div className="flex justify-center gap-4">
            <ButtonPrimary>Primary Button</ButtonPrimary>
            <ButtonSecondary>Secondary Button</ButtonSecondary>
          </div>
        </div>

        {/* Boutons avec icônes */}
        <div className="text-center">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Avec icônes</h3>
          <div className="flex justify-center gap-4">
            <ButtonPrimary>
              <Send className="w-4 h-4" />
              Envoyer
            </ButtonPrimary>
            <ButtonSecondary>
              <Heart className="w-4 h-4" />
              Favoris
            </ButtonSecondary>
          </div>
        </div>

        {/* Différentes tailles */}
        <div className="text-center">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Différentes tailles</h3>
          <div className="flex justify-center items-center gap-4">
            <ButtonPrimary size="sm">Small</ButtonPrimary>
            <ButtonPrimary size="md">Medium</ButtonPrimary>
            <ButtonPrimary size="lg">Large</ButtonPrimary>
          </div>
        </div>

        {/* États */}
        <div className="text-center">
          <h3 className="text-sm font-medium text-muted-foreground mb-3">États</h3>
          <div className="flex justify-center gap-4">
            <ButtonPrimary disabled>Disabled</ButtonPrimary>
            <ButtonSecondary isLoading>Loading...</ButtonSecondary>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          ✨ Couleur primaire: Vert • Bordures responsives • Animations fluides
        </p>
      </div>
    </div>
  );
}
