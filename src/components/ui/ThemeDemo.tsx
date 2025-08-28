"use client";

import { themeClasses } from '@/lib/theme-utils';
import { ButtonPrimary, ButtonSecondary, Button } from './index';

export function ThemeDemo() {
  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Système de Thèmes
        </h1>
        <p className="text-muted-foreground">
          Démonstration des variables CSS et de l'intégration Tailwind
        </p>
      </div>

      {/* Cards Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`${themeClasses.card} p-6 rounded-lg`}>
            <h3 className="text-lg font-medium mb-2">Carte Basique</h3>
            <p className="text-sm text-muted-foreground">
              Une carte utilisant les variables CSS de base.
            </p>
          </div>
          
          <div className="bg-primary text-primary-foreground p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Carte Primaire</h3>
            <p className="text-sm opacity-90">
              Carte avec couleurs primaires du thème.
            </p>
          </div>
          
          <div className="bg-secondary text-secondary-foreground p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Carte Secondaire</h3>
            <p className="text-sm text-muted-foreground">
              Carte avec couleurs secondaires.
            </p>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Buttons</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">Nouveaux Composants</h3>
            <div className="flex flex-wrap gap-4">
              <ButtonPrimary>Button Primary</ButtonPrimary>
              <ButtonSecondary>Button Secondary</ButtonSecondary>
              <Button variant="destructive">Destructive</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-foreground mb-3">Classes Utilitaires (Legacy)</h3>
            <div className="flex flex-wrap gap-4">
              <button className={`${themeClasses.button.primary} px-4 py-2 rounded-md font-medium transition-colors`}>
                Primaire
              </button>
              <button className={`${themeClasses.button.secondary} px-4 py-2 rounded-md font-medium transition-colors`}>
                Secondaire
              </button>
              <button className={`${themeClasses.button.destructive} px-4 py-2 rounded-md font-medium transition-colors`}>
                Destructeur
              </button>
              <button className={`${themeClasses.button.success} px-4 py-2 rounded-md font-medium transition-colors`}>
                Succès
              </button>
              <button className={`${themeClasses.button.warning} px-4 py-2 rounded-md font-medium transition-colors`}>
                Attention
              </button>
              <button className={`${themeClasses.button.ghost} px-4 py-2 rounded-md font-medium transition-colors`}>
                Ghost
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Formulaires</h2>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Nom
            </label>
            <input 
              type="text" 
              placeholder="Votre nom"
              className={`${themeClasses.input} w-full px-3 py-2 rounded-md focus:outline-none`}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input 
              type="email" 
              placeholder="votre@email.com"
              className={`${themeClasses.input} w-full px-3 py-2 rounded-md focus:outline-none`}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea 
              placeholder="Votre message..."
              rows={4}
              className={`${themeClasses.input} w-full px-3 py-2 rounded-md focus:outline-none resize-none`}
            />
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Palette de Couleurs</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-background border border-border p-4 rounded-lg">
            <div className="w-full h-12 bg-background border border-border rounded mb-2"></div>
            <p className="text-xs text-foreground font-medium">Background</p>
          </div>
          
          <div className="bg-foreground p-4 rounded-lg">
            <div className="w-full h-12 bg-foreground rounded mb-2"></div>
            <p className="text-xs text-background font-medium">Foreground</p>
          </div>
          
          <div className="bg-primary p-4 rounded-lg">
            <div className="w-full h-12 bg-primary rounded mb-2"></div>
            <p className="text-xs text-primary-foreground font-medium">Primary</p>
          </div>
          
          <div className="bg-secondary p-4 rounded-lg">
            <div className="w-full h-12 bg-secondary rounded mb-2"></div>
            <p className="text-xs text-secondary-foreground font-medium">Secondary</p>
          </div>
          
          <div className="bg-muted p-4 rounded-lg">
            <div className="w-full h-12 bg-muted rounded mb-2"></div>
            <p className="text-xs text-muted-foreground font-medium">Muted</p>
          </div>
          
          <div className="bg-accent p-4 rounded-lg">
            <div className="w-full h-12 bg-accent rounded mb-2"></div>
            <p className="text-xs text-accent-foreground font-medium">Accent</p>
          </div>
          
          <div className="bg-destructive p-4 rounded-lg">
            <div className="w-full h-12 bg-destructive rounded mb-2"></div>
            <p className="text-xs text-destructive-foreground font-medium">Destructive</p>
          </div>
          
          <div className="bg-success p-4 rounded-lg">
            <div className="w-full h-12 bg-success rounded mb-2"></div>
            <p className="text-xs text-success-foreground font-medium">Success</p>
          </div>
        </div>
      </section>
    </div>
  );
}
