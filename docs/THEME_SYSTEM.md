# Système de Thèmes - Portfolio

Ce document explique l'architecture et l'utilisation du système de thèmes light/dark du portfolio.

## Architecture

### 1. Variables CSS (`src/app/globals.css`)

Le système utilise des variables CSS natives pour définir les couleurs de chaque thème :

```css
:root {
  /* Light theme */
  --background: 255 255 255;
  --foreground: 23 23 23;
  /* ... autres variables ... */
}

.dark {
  /* Dark theme */
  --background: 10 10 10;
  --foreground: 237 237 237;
  /* ... autres variables ... */
}
```

### 2. Configuration Tailwind (`tailwind.config.ts`)

Tailwind est configuré pour utiliser ces variables avec support de l'opacité :

```typescript
colors: {
  background: "rgb(var(--background) / <alpha-value>)",
  foreground: "rgb(var(--foreground) / <alpha-value>)",
  // ...
}
```

### 3. Context React (`src/contexts/ThemeContext.tsx`)

- Gestion de l'état global du thème
- Persistance dans localStorage
- Détection automatique des préférences système
- Application de la classe `dark` sur `document.documentElement`

### 4. Types TypeScript (`src/types/theme.ts`)

Types complets pour la gestion des thèmes avec type safety.

## Utilisation

### Composants

```tsx
// Utilisation basique avec Tailwind
<div className="bg-background text-foreground">
  <h1 className="text-primary">Titre</h1>
  <p className="text-muted-foreground">Description</p>
</div>

// Avec les classes utilitaires
import { themeClasses } from '@/lib/theme-utils';

<button className={themeClasses.button.primary}>
  Bouton Primaire
</button>
```

### Hooks personnalisés

```tsx
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeVariables } from '@/hooks/useThemeVariables';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  const { getCSSVariable } = useThemeVariables();
  
  const backgroundColor = getCSSVariable('--background');
  
  return (
    <div style={{ backgroundColor: `rgb(${backgroundColor})` }}>
      Current theme: {theme}
    </div>
  );
}
```

## Palette de Couleurs

### Couleurs de Base
- `background` / `foreground` : Couleurs principales
- `card` / `card-foreground` : Cartes et conteneurs
- `border` / `input` / `ring` : Éléments d'interface

### Couleurs Sémantiques
- `primary` : Action principale
- `secondary` : Actions secondaires
- `muted` : Texte moins important
- `accent` : Éléments d'accentuation
- `destructive` : Actions destructrices (suppression, erreurs)
- `success` : Actions de succès
- `warning` : Avertissements

### Mode Light
- Background clair (blanc)
- Foreground sombre (noir)
- Couleurs vives et contrastées

### Mode Dark
- Background sombre (near-black)
- Foreground clair (near-white)
- Couleurs atténuées et douces pour les yeux

## Fonctionnalités

### ✅ Implémenté
- [x] Variables CSS complètes
- [x] Configuration Tailwind
- [x] Context React avec état global
- [x] Persistance localStorage
- [x] Détection automatique du thème système
- [x] Prévention hydration mismatch
- [x] Toggle animé avec feedback visuel
- [x] Types TypeScript complets
- [x] Hooks personnalisés
- [x] Classes utilitaires
- [x] Page de démonstration

### 🎯 Avantages

1. **Performance** : Variables CSS natives = transitions fluides
2. **Flexibilité** : Facile d'ajouter de nouveaux thèmes
3. **Type Safety** : Types TypeScript complets
4. **DX** : Excellent support IDE avec auto-complétion
5. **Accessibilité** : Respect des préférences système
6. **SSR** : Compatible Next.js sans hydration issues

## Pages de Test

- `/demo` : Démonstration du DarkVeilBackground
- `/demo/themes` : Démonstration complète du système de thèmes

## Structure des Fichiers

```
src/
├── app/
│   ├── globals.css              # Variables CSS et styles globaux
│   └── demo/themes/page.tsx     # Page de démonstration
├── components/
│   └── ui/
│       ├── ThemeToggle.tsx      # Bouton de basculement
│       └── ThemeDemo.tsx        # Composant de démonstration
├── contexts/
│   └── ThemeContext.tsx         # Context React principal
├── hooks/
│   └── useThemeVariables.ts     # Hooks personnalisés
├── lib/
│   └── theme-utils.ts           # Utilitaires et classes
├── types/
│   └── theme.ts                 # Types TypeScript
└── tailwind.config.ts           # Configuration Tailwind
```

## Bonnes Pratiques

1. **Utilisez les variables Tailwind** : `bg-background` au lieu de `bg-white`
2. **Respect de l'accessibilité** : Contrastes suffisants
3. **Performance** : Utilisez `useMounted()` pour éviter les hydration mismatches
4. **Consistance** : Utilisez `themeClasses` pour les patterns répétés
5. **Type Safety** : Importez les types depuis `@/types/theme`

## Extension

Pour ajouter une nouvelle couleur :

1. Ajoutez la variable CSS dans `globals.css`
2. Configurez Tailwind dans `tailwind.config.ts`
3. Ajoutez le type dans `theme.ts`
4. Utilisez dans vos composants

Exemple :
```css
/* globals.css */
:root {
  --info: 59 130 246;        /* blue-500 */
  --info-foreground: 255 255 255;
}

.dark {
  --info: 59 130 246;        /* blue-500 */
  --info-foreground: 255 255 255;
}
```

```typescript
// tailwind.config.ts
info: {
  DEFAULT: "rgb(var(--info) / <alpha-value>)",
  foreground: "rgb(var(--info-foreground) / <alpha-value>)",
}
```
