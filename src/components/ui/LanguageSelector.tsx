'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage, SupportedLanguage } from '@/contexts/LanguageContext'
import { SUPPORTED_LANGUAGES } from '@/lib/languages'

export const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage, isLoading } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Fermer le dropdown quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Fermer le dropdown quand la langue change
  useEffect(() => {
    setIsOpen(false)
  }, [currentLanguage])

  const handleLanguageChange = async (language: SupportedLanguage) => {
    if (language !== currentLanguage && !isLoading) {
      await setLanguage(language)
    }
  }

  const currentLanguageData = SUPPORTED_LANGUAGES.find(lang => lang.code === currentLanguage)

  if (isLoading) {
    return (
      <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-muted/50 animate-pulse">
        <div className="w-4 h-4 bg-muted rounded-full" />
        <div className="w-16 h-4 bg-muted rounded" />
      </div>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bouton principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          relative px-3 py-2 rounded-lg
          bg-card/80 backdrop-blur-md border border-border
          text-foreground hover:bg-card hover:text-primary
          transition-all duration-300 ease-in-out
          hover:scale-110 active:scale-95 
          shadow-lg hover:shadow-xl
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        "
        aria-label="Sélectionner la langue"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center justify-center gap-1">
          <span className="text-lg">
            {currentLanguageData?.flag}
          </span>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`} 
          />
        </div>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden"
          >
            <div className="py-1">
              {SUPPORTED_LANGUAGES.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors duration-150 ${
                    language.code === currentLanguage 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-foreground'
                  }`}
                  disabled={isLoading}
                >
                  <span className="text-lg">{language.flag}</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      {language.nativeName}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {language.name}
                    </span>
                  </div>
                  {language.code === currentLanguage && (
                    <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
