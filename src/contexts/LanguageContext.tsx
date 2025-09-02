'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Types pour les langues supportées
export type SupportedLanguage = 'fr' | 'en' | 'es' | 'de'

// Interface pour le contexte
interface LanguageContextType {
  currentLanguage: SupportedLanguage
  setLanguage: (language: SupportedLanguage) => void
  t: (key: string) => string
  isLoading: boolean
}

// Création du contexte
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Hook personnalisé pour utiliser le contexte
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Props pour le provider
interface LanguageProviderProps {
  children: ReactNode
}

// Provider du contexte
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('fr')
  const [translations, setTranslations] = useState<Record<string, any>>({})
  const [isLoading, setIsLoading] = useState(true)

  // Fonction pour changer la langue
  const setLanguage = async (language: SupportedLanguage) => {
    if (language === currentLanguage) return

    setIsLoading(true)
    try {
      // Charger les traductions pour la nouvelle langue
      const response = await import(`@/locales/${language}.json`)
      setTranslations(response.default)
      setCurrentLanguage(language)
      
      // Sauvegarder dans le localStorage
      localStorage.setItem('preferred-language', language)
      
      // Sauvegarder dans les cookies pour le serveur
      document.cookie = `NEXT_LOCALE=${language}; path=/; max-age=31536000`
    } catch (error) {
      console.error('Erreur lors du chargement des traductions:', error)
      // Fallback vers le français en cas d'erreur
      setCurrentLanguage('fr')
    } finally {
      setIsLoading(false)
    }
  }

  // Fonction de traduction
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback vers la clé si la traduction n'est pas trouvée
        return key
      }
    }

    return typeof value === 'string' ? value : key
  }

  // Initialisation au montage du composant
  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        // Vérifier le localStorage
        const savedLanguage = localStorage.getItem('preferred-language') as SupportedLanguage
        
        // Vérifier les cookies
        const cookieLanguage = document.cookie
          .split('; ')
          .find(row => row.startsWith('NEXT_LOCALE='))
          ?.split('=')[1] as SupportedLanguage
        
        // Vérifier la langue du navigateur
        const browserLanguage = navigator.language.split('-')[0] as SupportedLanguage
        
        // Priorité : localStorage > cookie > navigateur > français
        const preferredLanguage = savedLanguage || cookieLanguage || browserLanguage || 'fr'
        
        // Valider que la langue est supportée
        const validLanguage: SupportedLanguage = ['fr', 'en', 'es', 'de'].includes(preferredLanguage) 
          ? preferredLanguage 
          : 'fr'
        
        // Charger les traductions
        const response = await import(`@/locales/${validLanguage}.json`)
        setTranslations(response.default)
        setCurrentLanguage(validLanguage)
        
        // Mettre à jour le localStorage et les cookies si nécessaire
        if (validLanguage !== savedLanguage) {
          localStorage.setItem('preferred-language', validLanguage)
        }
        if (validLanguage !== cookieLanguage) {
          document.cookie = `NEXT_LOCALE=${validLanguage}; path=/; max-age=31536000`
        }
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de la langue:', error)
        // Fallback vers le français
        const response = await import('@/locales/fr.json')
        setTranslations(response.default)
        setCurrentLanguage('fr')
      } finally {
        setIsLoading(false)
      }
    }

    initializeLanguage()
  }, [])

  // Valeur du contexte
  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    isLoading
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
