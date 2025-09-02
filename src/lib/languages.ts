import { SupportedLanguage } from '@/contexts/LanguageContext'

// Configuration des langues supportées
export const SUPPORTED_LANGUAGES: Array<{
  code: SupportedLanguage
  name: string
  nativeName: string
  flag: string
  locale: string
  rtl: boolean
}> = [
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    locale: 'fr-FR',
    rtl: false
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    locale: 'en-US',
    rtl: false
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    locale: 'es-ES',
    rtl: false
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    locale: 'de-DE',
    rtl: false
  }
]

// Fonction utilitaire pour obtenir les informations d'une langue
export const getLanguageInfo = (code: SupportedLanguage) => {
  return SUPPORTED_LANGUAGES.find(lang => lang.code === code)
}

// Fonction utilitaire pour vérifier si une langue est supportée
export const isSupportedLanguage = (code: string): code is SupportedLanguage => {
  return SUPPORTED_LANGUAGES.some(lang => lang.code === code)
}

// Fonction utilitaire pour obtenir la langue par défaut
export const getDefaultLanguage = (): SupportedLanguage => 'fr'

// Fonction utilitaire pour détecter la langue du navigateur
export const detectBrowserLanguage = (): SupportedLanguage => {
  if (typeof window === 'undefined') return getDefaultLanguage()
  
  const browserLang = navigator.language.split('-')[0]
  return isSupportedLanguage(browserLang) ? browserLang : getDefaultLanguage()
}
