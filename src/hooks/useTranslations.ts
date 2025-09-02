import { useLanguage } from '@/contexts/LanguageContext'

/**
 * Hook personnalisé pour les traductions avec fonctionnalités avancées
 * 
 * @returns {object} Objet contenant les fonctions de traduction
 */
export const useTranslations = () => {
  const { t, currentLanguage, setLanguage, isLoading } = useLanguage()

  /**
   * Traduction simple avec clé
   * @param key - Clé de traduction (ex: "contact.title")
   * @returns {string} Texte traduit
   */
  const translate = (key: string): string => {
    return t(key)
  }

  /**
   * Traduction avec interpolation de variables
   * @param key - Clé de traduction
   * @param variables - Objet contenant les variables à interpoler
   * @returns {string} Texte traduit avec variables interpolées
   */
  const translateWithVars = (key: string, variables: Record<string, string | number>): string => {
    let text = t(key)
    
    // Remplacer les variables {{variable}} par leurs valeurs
    Object.entries(variables).forEach(([varName, value]) => {
      const regex = new RegExp(`{{${varName}}}`, 'g')
      text = text.replace(regex, String(value))
    })
    
    return text
  }

  /**
   * Traduction conditionnelle selon la langue
   * @param translations - Objet avec les traductions pour chaque langue
   * @returns {string} Traduction pour la langue actuelle
   */
  const translateConditional = (translations: Record<string, string>): string => {
    return translations[currentLanguage] || translations['fr'] || ''
  }

  /**
   * Traduction avec fallback
   * @param key - Clé de traduction principale
   * @param fallback - Clé de fallback si la première n'existe pas
   * @returns {string} Traduction ou fallback
   */
  const translateWithFallback = (key: string, fallback: string): string => {
    const translation = t(key)
    return translation !== key ? translation : t(fallback)
  }

  /**
   * Vérifier si une traduction existe
   * @param key - Clé de traduction
   * @returns {boolean} True si la traduction existe
   */
  const hasTranslation = (key: string): boolean => {
    return t(key) !== key
  }

  /**
   * Obtenir le nom natif de la langue actuelle
   * @returns {string} Nom natif de la langue
   */
  const getCurrentLanguageName = (): string => {
    const languageNames: Record<string, string> = {
      fr: 'Français',
      en: 'English',
      es: 'Español',
      de: 'Deutsch'
    }
    return languageNames[currentLanguage] || 'Français'
  }

  return {
    // Fonctions de traduction
    t: translate,
    translate,
    translateWithVars,
    translateConditional,
    translateWithFallback,
    hasTranslation,
    
    // Informations sur la langue
    currentLanguage,
    setLanguage,
    isLoading,
    getCurrentLanguageName,
    
    // Alias pour compatibilité
    language: currentLanguage,
    changeLanguage: setLanguage
  }
}
