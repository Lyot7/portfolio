# 🌍 Système de Langue Dynamique

Ce projet implémente un système de changement de langue dynamique qui permet de basculer entre le français, l'anglais, l'espagnol et l'allemand sans recharger la page.

## ✨ Fonctionnalités

- **Changement de langue en temps réel** sans rechargement de page
- **4 langues supportées** : Français (FR), Anglais (EN), Espagnol (ES), Allemand (DE)
- **Détection automatique** de la langue du navigateur
- **Persistance** des préférences dans le localStorage et les cookies
- **Fallback automatique** vers le français en cas d'erreur
- **Interface utilisateur intuitive** avec drapeaux et noms natifs
- **Hook personnalisé** pour des traductions avancées

## 🏗️ Architecture

### Structure des fichiers

```
src/
├── locales/                    # Fichiers de traduction JSON
│   ├── fr.json                # Français (langue par défaut)
│   ├── en.json                # Anglais
│   ├── es.json                # Espagnol
│   └── de.json                # Allemand
├── contexts/
│   └── LanguageContext.tsx    # Contexte React pour la langue
├── components/ui/
│   └── LanguageSelector.tsx   # Composant de sélection de langue
├── hooks/
│   └── useTranslations.ts     # Hook personnalisé pour les traductions
└── lib/
    └── languages.ts           # Configuration des langues supportées
```

### Composants principaux

1. **`LanguageProvider`** : Wrapper du contexte qui gère l'état global de la langue
2. **`LanguageSelector`** : Composant UI pour changer de langue avec dropdown
3. **`useLanguage`** : Hook de base pour accéder au contexte
4. **`useTranslations`** : Hook avancé avec fonctionnalités supplémentaires

## 🚀 Utilisation

### 1. Configuration de base

Le système est déjà configuré dans le layout principal :

```tsx
// src/app/layout.tsx
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <GlobalLayout>
              {children}
            </GlobalLayout>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 2. Utilisation simple avec useLanguage

```tsx
import { useLanguage } from '@/contexts/LanguageContext'

function MonComposant() {
  const { t, currentLanguage, setLanguage } = useLanguage()
  
  return (
    <div>
      <h1>{t('contact.title')}</h1>
      <p>Langue actuelle : {currentLanguage}</p>
      <button onClick={() => setLanguage('en')}>
        Passer en anglais
      </button>
    </div>
  )
}
```

### 3. Utilisation avancée avec useTranslations

```tsx
import { useTranslations } from '@/hooks/useTranslations'

function MonComposant() {
  const { 
    t, 
    translateWithVars, 
    translateConditional,
    hasTranslation 
  } = useTranslations()
  
  // Traduction simple
  const titre = t('contact.title')
  
  // Traduction avec variables
  const message = translateWithVars('welcome.message', { name: 'John' })
  
  // Traduction conditionnelle
  const texte = translateConditional({
    fr: 'Bonjour',
    en: 'Hello',
    es: 'Hola',
    de: 'Hallo'
  })
  
  // Vérifier si une traduction existe
  if (hasTranslation('custom.key')) {
    // Utiliser la traduction personnalisée
  }
  
  return <div>{titre}</div>
}
```

### 4. Ajout du sélecteur de langue

Le composant est déjà intégré dans la navbar, mais vous pouvez l'ajouter ailleurs :

```tsx
import { LanguageSelector } from '@/components/ui/LanguageSelector'

function MonComposant() {
  return (
    <div>
      <h1>Mon titre</h1>
      <LanguageSelector />
    </div>
  )
}
```

## 📝 Ajout de nouvelles traductions

### 1. Ajouter une nouvelle clé dans tous les fichiers de langue

```json
// src/locales/fr.json
{
  "newSection": {
    "title": "Nouveau titre",
    "description": "Nouvelle description"
  }
}

// src/locales/en.json
{
  "newSection": {
    "title": "New title",
    "description": "New description"
  }
}

// Faire de même pour es.json et de.json
```

### 2. Utiliser la nouvelle traduction

```tsx
const { t } = useLanguage()
const titre = t('newSection.title')
```

## 🔧 Personnalisation

### Ajouter une nouvelle langue

1. **Créer le fichier de traduction** : `src/locales/ja.json`
2. **Mettre à jour le type** : Ajouter `'ja'` dans `SupportedLanguage`
3. **Mettre à jour la configuration** : Ajouter dans `src/lib/languages.ts`
4. **Traduire tous les textes** dans le nouveau fichier

### Modifier le style du sélecteur

Le composant `LanguageSelector` utilise Tailwind CSS et peut être personnalisé en modifiant les classes CSS.

## 🎯 Bonnes pratiques

1. **Utiliser des clés hiérarchiques** : `section.subsection.element`
2. **Garder les clés en anglais** pour la cohérence du code
3. **Tester toutes les langues** lors du développement
4. **Utiliser des fallbacks** pour les traductions manquantes
5. **Éviter les textes codés en dur** dans les composants

## 🐛 Dépannage

### La langue ne change pas

- Vérifier que le composant est dans le `LanguageProvider`
- Vérifier que la fonction `setLanguage` est bien appelée
- Vérifier la console pour les erreurs de chargement des fichiers JSON

### Traductions manquantes

- Vérifier que la clé existe dans tous les fichiers de langue
- Utiliser `hasTranslation()` pour vérifier l'existence
- Vérifier la syntaxe des clés (points, pas d'espaces)

### Performance

- Les traductions sont chargées de manière asynchrone
- Utiliser `isLoading` pour afficher un état de chargement
- Les traductions sont mises en cache dans le contexte

## 📚 Exemples complets

Voir le composant `LanguageTest` dans `src/components/ui/LanguageTest.tsx` pour un exemple complet d'utilisation.

## 🔗 Intégration avec Next.js

Ce système est compatible avec Next.js 13+ et l'App Router. Il utilise :
- Les contextes React pour la gestion d'état
- Les imports dynamiques pour charger les traductions
- Le localStorage et les cookies pour la persistance
- Framer Motion pour les animations

---

**Note** : Ce système remplace complètement le système d'internationalisation basé sur les routes de Next.js, offrant une expérience utilisateur plus fluide et une maintenance plus simple.
