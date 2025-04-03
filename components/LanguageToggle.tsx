'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'
import { FaGlobe } from 'react-icons/fa'

interface LanguageToggleProps {
  isMobile?: boolean
  theme?: 'light' | 'dark' | 'primary'
  className?: string
}

export default function LanguageToggle({ 
  isMobile = false,
  theme = 'light',
  className = ''
}: LanguageToggleProps) {
  const { language, toggleLanguage } = useLanguage()
  const { languageButton, languageLabel } = translations[language]

  const themeStyles = {
    light: 'border-primary text-primary hover:bg-primary hover:text-white',
    dark: 'border-white text-white hover:bg-white hover:text-primary',
    primary: 'border-white text-white hover:bg-white hover:text-primary'
  }

  // Apply the theme styles
  const buttonStyle = themeStyles[theme]

  // Standard toggle style
  if (!isMobile) {
    return (
      <button
        onClick={toggleLanguage}
        className={`px-3 py-1 border rounded transition-colors flex items-center gap-2 ${buttonStyle} ${className}`}
        title={languageLabel}
        aria-label={languageLabel}
      >
        <FaGlobe className="text-sm" />
        <span>{languageButton}</span>
      </button>
    )
  }

  // Compact toggle for mobile
  return (
    <button
      onClick={toggleLanguage}
      className={`px-2 py-1 border rounded transition-colors ${buttonStyle} ${className}`}
      title={languageLabel}
      aria-label={languageLabel}
    >
      {languageButton}
    </button>
  )
}