'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export type LanguageKey = 'en' | 'pt-br'

interface LanguageContextType {
  language: LanguageKey
  toggleLanguage: () => void
  setLanguage: (lang: LanguageKey) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageKey>('en')
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize language from localStorage when component mounts
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') as LanguageKey | null
    if (storedLanguage && (storedLanguage === 'en' || storedLanguage === 'pt-br')) {
      setLanguage(storedLanguage)
    } else {
      // Optionally detect browser language
      const browserLang = navigator.language.toLowerCase()      
      if (browserLang.startsWith('pt')) {
        setLanguage('pt-br')
      }
    }
    setIsInitialized(true)
  }, [])

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('language', language)
    }
  }, [language, isInitialized])

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'pt-br' : 'en')
  }

  const setLanguageExplicitly = (lang: LanguageKey) => {
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ 
      language, 
      toggleLanguage, 
      setLanguage: setLanguageExplicitly 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
