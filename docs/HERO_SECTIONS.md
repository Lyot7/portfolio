# Composants Hero Section - Documentation

## Vue d'ensemble

Les composants Hero Section constituent l'élément principal d'accueil du portfolio. Ils présentent votre profil de manière impactante avec des titres comportant des mots en couleur primaire (vert) et des boutons d'action alignés à gauche.

## Composants Disponibles

### 1. HeroSection (Default)

La version complète avec tous les éléments pour une landing page détaillée.

```tsx
import { HeroSection } from '@/components/sections';

<HeroSection />
```

**Caractéristiques :**
- Badge de disponibilité animé
- Titre principal avec mots-clés colorés
- Sous-titre descriptif
- Statistiques rapides (expérience, projets, satisfaction)
- Deux boutons d'action (Primary + Secondary)
- Call-to-action secondaire

### 2. HeroSectionCompact

Version condensée pour les espaces limités, garde l'essentiel.

```tsx
import { HeroSectionCompact } from '@/components/sections';

<HeroSectionCompact />
```

**Caractéristiques :**
- Titre plus compact
- Sous-titre concis
- Deux boutons d'action uniquement
- Hauteur réduite (80vh au lieu de 100vh)

### 3. HeroSectionWithPattern

Version avec effets visuels avancés pour un impact maximum.

```tsx
import { HeroSectionWithPattern } from '@/components/sections';

<HeroSectionWithPattern />
```

**Caractéristiques :**
- Pattern de fond subtil
- Gradient d'arrière-plan
- Animations d'entrée (slide-in)
- Soulignement décoratif sur mot-clé
- Badge animé amélioré

## Design et Mise en Page

### Alignement à Gauche
Tous les composants utilisent un alignement à gauche avec :
- `max-w-4xl` pour limiter la largeur
- Contenu aligné naturellement à gauche
- Responsive avec padding adaptatif

### Mots en Couleur Primaire
Les mots-clés importants utilisent la classe `text-primary` :
```tsx
<span className="text-primary">Frontend</span>
<span className="text-primary">interfaces</span>
<span className="text-primary">performantes</span>
```

### Hiérarchie Typographique
```css
/* Titre principal */
text-4xl sm:text-5xl lg:text-6xl xl:text-7xl

/* Sous-titre */
text-lg sm:text-xl lg:text-2xl

/* Badge/Stats */
text-sm
```

## Boutons d'Action

### Configuration Standard
```tsx
<div className="flex flex-col sm:flex-row gap-4">
  <ButtonPrimary size="lg" className="group">
    Voir mes projets
    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
  </ButtonPrimary>
  
  <ButtonSecondary size="lg" className="group">
    <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
    Télécharger CV
  </ButtonSecondary>
</div>
```

### Animations
- **Primary** : Flèche qui se déplace au hover (`group-hover:translate-x-1`)
- **Secondary** : Icône qui scale au hover (`group-hover:scale-110`)

## Éléments Visuels

### Badge de Disponibilité
```tsx
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
  Disponible pour de nouveaux projets
</span>
```

### Statistiques
```tsx
<div className="flex items-center gap-2">
  <div className="w-2 h-2 bg-primary rounded-full"></div>
  <span className="text-muted-foreground">+3 ans d'expérience</span>
</div>
```

### Pattern de Fond (WithPattern)
```tsx
<div className="absolute inset-0" style={{
  backgroundImage: `radial-gradient(circle at 1px 1px, rgb(var(--primary)) 1px, transparent 0)`,
  backgroundSize: '24px 24px'
}}></div>
```

## Responsive Design

### Breakpoints
- **Mobile** : Layout en colonne, tailles de texte réduites
- **Tablet (sm)** : Boutons en ligne, texte agrandi
- **Desktop (lg)** : Tailles maximales, espacement optimal
- **Large (xl)** : Texte encore plus grand pour les grands écrans

### Padding Adaptatif
```css
py-20 px-4 sm:px-6 lg:px-8
```

## Animations

### Animations d'Entrée (WithPattern)
```tsx
className="animate-in slide-in-from-left duration-700"
className="animate-in slide-in-from-left duration-700 delay-200"
className="animate-in slide-in-from-left duration-700 delay-300"
```

### Micro-interactions
- Badge avec point pulsant
- Icônes animées au hover
- Transitions fluides sur les couleurs

## Personnalisation

### Contenu
Pour adapter le contenu, modifiez directement dans le composant :

```tsx
// Titre principal
Développeur{' '}
<span className="text-primary">Frontend</span>
{/* ... */}

// Sous-titre  
Je crée des expériences web exceptionnelles avec{' '}
<span className="text-foreground font-semibold">React</span>
{/* ... */}

// Statistiques
<span className="text-muted-foreground">+3 ans d'expérience</span>
```

### Couleurs
Les couleurs s'adaptent automatiquement au système de thème :
- `text-primary` : Couleur verte définie dans le thème
- `text-foreground` : Couleur de texte principale
- `text-muted-foreground` : Couleur de texte secondaire

### Espacement
Utilisez les classes Tailwind pour ajuster :
```tsx
className="mb-8"     // Margin bottom
className="max-w-4xl" // Largeur maximale
className="gap-4"    // Espacement entre éléments
```

## Utilisation dans les Pages

### Page Principale
```tsx
// src/app/page.tsx
import { PortfolioLayout } from '@/components/layout/PortfolioLayout'
import { HeroSection } from '@/components/sections'

export default function Home() {
  return (
    <PortfolioLayout>
      <HeroSection />
    </PortfolioLayout>
  )
}
```

### Page Autonome
```tsx
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      {/* Autres sections... */}
    </main>
  );
}
```

## Pages de Démonstration

- `/` : Page principale avec HeroSection
- `/demo/hero` : Sélecteur de variantes interactif
- `/demo/hero-showcase` : Toutes les variantes en une page

## Structure des Fichiers

```
src/components/sections/
├── HeroSection.tsx          # Composants principaux
├── HeroDemo.tsx            # Composant de démonstration
└── index.ts               # Exports centralisés
```

## Bonnes Pratiques

### 1. Choix de la Variante
- **Default** : Landing page complète et détaillée
- **Compact** : Pages avec contraintes d'espace
- **WithPattern** : Maximum d'impact visuel

### 2. Contenu
- Gardez le titre accrocheur et professionnel
- Mettez en évidence 3-4 mots-clés maximum
- Statistiques réalistes et vérifiables

### 3. Actions
- Primary : Action principale (projets, portfolio)
- Secondary : Action alternative (CV, contact)

### 4. Performance
- Lazy loading des animations
- Images optimisées si ajoutées
- Transitions CSS plutôt que JavaScript

### 5. Accessibilité
- Contraste suffisant pour tous les textes
- Taille de police lisible sur mobile
- Focus visible sur les boutons
- Alt text pour les icônes décoratives

## Extensibilité

### Ajouter une Nouvelle Variante
1. Créer le composant dans `HeroSection.tsx`
2. L'exporter dans `index.ts`
3. L'ajouter aux démonstrations
4. Documenter les spécificités

### Intégration React Bits
Les composants sont prêts pour intégrer des éléments React Bits :
- Animations plus sophistiquées
- Patterns de fond avancés
- Effets de parallaxe

Le système actuel offre une base solide et extensible pour votre landing page portfolio ! 🚀
