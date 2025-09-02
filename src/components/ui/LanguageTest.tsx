'use client'

import React from 'react'
import { useTranslations } from '@/hooks/useTranslations'

export const LanguageTest: React.FC = () => {
  const { 
    t, 
    currentLanguage, 
    setLanguage, 
    translateWithVars,
    getCurrentLanguageName 
  } = useTranslations()

  const handleLanguageChange = async (language: string) => {
    if (language !== currentLanguage) {
      await setLanguage(language as any)
    }
  }

  return (
    <div className="p-6 bg-card border border-border rounded-lg space-y-4">
      <h3 className="text-lg font-semibold text-foreground">
        Test du système de langue
      </h3>
      
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">
          Langue actuelle: <span className="font-medium text-foreground">{getCurrentLanguageName()}</span>
        </p>
        
        <p className="text-sm text-muted-foreground">
          Code: <span className="font-mono text-foreground">{currentLanguage}</span>
        </p>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium text-foreground">Exemples de traductions :</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          <div className="p-3 bg-muted/50 rounded border">
            <p className="font-medium text-foreground">Titre de contact :</p>
            <p className="text-muted-foreground">{t('contact.title')}</p>
          </div>
          
          <div className="p-3 bg-muted/50 rounded border">
            <p className="font-medium text-foreground">Bouton suivant :</p>
            <p className="text-muted-foreground">{t('common.next')}</p>
          </div>
          
          <div className="p-3 bg-muted/50 rounded border">
            <p className="font-medium text-foreground">Navigation accueil :</p>
            <p className="text-muted-foreground">{t('navigation.home')}</p>
          </div>
          
          <div className="p-3 bg-muted/50 rounded border">
            <p className="font-medium text-foreground">Message de succès :</p>
            <p className="text-muted-foreground">{t('contact.success.message')}</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium text-foreground">Changer de langue :</h4>
        
        <div className="flex flex-wrap gap-2">
          {['fr', 'en', 'es', 'de'].map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                currentLanguage === lang
                  ? 'bg-primary text-white'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          Ce composant démontre le système de langue dynamique. 
          Changez de langue pour voir les traductions se mettre à jour en temps réel.
        </p>
      </div>
    </div>
  )
}
