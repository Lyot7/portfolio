# Composants Button - Documentation

## Vue d'ensemble

Le système de boutons du portfolio propose des composants réutilisables et accessibles, parfaitement intégrés au système de thèmes avec la nouvelle palette verte.

## Composants Disponibles

### 1. Button (Composant de Base)

Le composant `Button` est la base de tous les autres boutons. Il offre plusieurs variantes et tailles.

```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="md">
  Mon Bouton
</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'destructive' \| 'ghost' \| 'link'` | `'primary'` | Style du bouton |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Taille du bouton |
| `isLoading` | `boolean` | `false` | Affiche un spinner de chargement |
| `disabled` | `boolean` | `false` | Désactive le bouton |

### 2. ButtonPrimary

Bouton principal avec la couleur primaire (vert) en arrière-plan.

```tsx
import { ButtonPrimary } from '@/components/ui';

<ButtonPrimary size="md">
  <Send className="w-4 h-4" />
  Envoyer
</ButtonPrimary>
```

**Design :**
- Arrière-plan : `bg-primary` (vert)
- Texte : `text-primary-foreground` (blanc)
- Ombre et effets de hover
- Animation de scale au clic

### 3. ButtonSecondary

Bouton secondaire avec bordure verte et fond transparent.

```tsx
import { ButtonSecondary } from '@/components/ui';

<ButtonSecondary size="md">
  <Heart className="w-4 h-4" />
  Favoris
</ButtonSecondary>
```

**Design :**
- Bordure : `border-2 border-primary` (vert)
- Fond : `bg-transparent`
- Texte : `text-primary` (vert)
- Hover : `hover:bg-primary/10` (fond vert léger)

## Variantes du Composant Base

### Primary
```tsx
<Button variant="primary">Primary</Button>
```
- Couleur primaire (vert) en arrière-plan
- Texte blanc
- Pour les actions principales

### Secondary
```tsx
<Button variant="secondary">Secondary</Button>
```
- Bordure verte, fond transparent
- Texte vert
- Pour les actions secondaires

### Destructive
```tsx
<Button variant="destructive">Supprimer</Button>
```
- Couleur rouge pour les actions destructrices
- Utilisé pour la suppression, annulation, etc.

### Ghost
```tsx
<Button variant="ghost">Ghost</Button>
```
- Transparent par défaut
- Couleur au hover
- Pour les actions subtiles

### Link
```tsx
<Button variant="link">Lien</Button>
```
- Style de lien avec soulignement
- Pour la navigation

## Tailles

### Small (`sm`)
```tsx
<ButtonPrimary size="sm">Small</ButtonPrimary>
```
- Hauteur : `h-8`
- Padding : `px-3`
- Texte : `text-xs`

### Medium (`md`) - Default
```tsx
<ButtonPrimary size="md">Medium</ButtonPrimary>
```
- Hauteur : `h-10`
- Padding : `px-4 py-2`
- Texte : `text-sm`

### Large (`lg`)
```tsx
<ButtonPrimary size="lg">Large</ButtonPrimary>
```
- Hauteur : `h-12`
- Padding : `px-8`
- Texte : `text-base`

## États

### Loading
```tsx
<ButtonPrimary isLoading>
  Chargement...
</ButtonPrimary>
```
- Affiche un spinner animé
- Désactive automatiquement le bouton
- Curseur `cursor-not-allowed`

### Disabled
```tsx
<ButtonPrimary disabled>
  Désactivé
</ButtonPrimary>
```
- Opacité réduite (`opacity-50`)
- Événements désactivés (`pointer-events-none`)

## Utilisation avec Icônes

### Icône à gauche
```tsx
<ButtonPrimary>
  <Send className="w-4 h-4" />
  Envoyer
</ButtonPrimary>
```

### Icône à droite
```tsx
<ButtonPrimary>
  Continuer
  <ArrowRight className="w-4 h-4" />
</ButtonPrimary>
```

### Icône seule
```tsx
<ButtonPrimary size="sm">
  <Heart className="w-4 h-4" />
</ButtonPrimary>
```

## Exemples d'Utilisation

### Formulaire de Contact
```tsx
<div className="flex gap-3">
  <ButtonPrimary className="flex-1">
    <Send className="w-4 h-4" />
    Envoyer
  </ButtonPrimary>
  <ButtonSecondary>
    Annuler
  </ButtonSecondary>
</div>
```

### Action sur Card
```tsx
<div className="flex gap-3">
  <ButtonPrimary size="sm">
    Voir le projet
    <ArrowRight className="w-4 h-4" />
  </ButtonPrimary>
  <ButtonSecondary size="sm">
    <Heart className="w-4 h-4" />
    Favoris
  </ButtonSecondary>
</div>
```

### Action avec Loading
```tsx
const [isLoading, setIsLoading] = useState(false);

<ButtonPrimary 
  isLoading={isLoading}
  onClick={handleSubmit}
>
  {isLoading ? 'Envoi...' : 'Envoyer'}
</ButtonPrimary>
```

## Accessibilité

### Focus
- Outline visible avec `focus-visible:ring-2`
- Couleur de focus : `focus-visible:ring-ring`

### États Aria
```tsx
<ButtonPrimary 
  aria-label="Envoyer le formulaire"
  disabled={isInvalid}
>
  Envoyer
</ButtonPrimary>
```

### Loading State
```tsx
<ButtonPrimary 
  isLoading={isLoading}
  aria-label={isLoading ? 'Chargement en cours' : 'Envoyer'}
>
  {isLoading ? 'Chargement...' : 'Envoyer'}
</ButtonPrimary>
```

## Animations

### Scale Effect
- `active:scale-95` : Réduction légère au clic
- `transform-gpu` : Optimisation GPU

### Transitions
- `transition-all duration-200 ease-in-out`
- Transitions fluides sur toutes les propriétés

### Hover Effects
- **Primary** : `hover:bg-primary/90` + `hover:shadow-lg`
- **Secondary** : `hover:bg-primary/10` + `hover:shadow-md`

## Personnalisation

### Classes Personnalisées
```tsx
<ButtonPrimary className="w-full justify-between">
  Mon Bouton Custom
  <ChevronDown className="w-4 h-4" />
</ButtonPrimary>
```

### Styles Inline (Non recommandé)
```tsx
<ButtonPrimary style={{ minWidth: '200px' }}>
  Largeur Fixe
</ButtonPrimary>
```

## Pages de Démonstration

- `/demo` : Showcase rapide des boutons
- `/demo/buttons` : Démonstration complète avec tous les états
- `/demo/themes` : Intégration avec le système de thèmes

## Structure des Fichiers

```
src/components/ui/
├── Button.tsx              # Composant de base
├── ButtonPrimary.tsx       # Composant Primary spécialisé
├── ButtonSecondary.tsx     # Composant Secondary spécialisé
├── ButtonDemo.tsx          # Composant de démonstration
└── index.ts               # Exports centralisés
```

## Intégration Thème

Les boutons utilisent automatiquement les variables CSS du système de thème :
- `--primary` : Couleur primaire (vert)
- `--primary-foreground` : Texte sur fond primaire
- `--ring` : Couleur de focus

Les couleurs s'adaptent automatiquement aux thèmes light/dark.

## Bonnes Pratiques

1. **Hiérarchie** : Primary pour l'action principale, Secondary pour les actions secondaires
2. **Consistance** : Utilisez les mêmes tailles dans un contexte donné
3. **Loading States** : Toujours feedback visuel pour les actions async
4. **Accessibilité** : Labels explicites et états aria appropriés
5. **Performance** : Composants optimisés avec forwardRef et memo si nécessaire
