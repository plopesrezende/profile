'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'
import { FaGlobe } from 'react-icons/fa'
import { useTheme } from 'next-themes'
import { useState } from 'react'

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
  const { theme: currentTheme } = useTheme()
  const { languageButton, languageLabel } = translations[language]
  const [showTooltip, setShowTooltip] = useState(false)

  // Use the resolved theme from context instead of the prop
  const effectiveTheme = currentTheme === 'dark' ? 'dark' : theme

  const themeStyles = {
    light: 'border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-primary hover:border-primary',
    dark: 'border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-gray-100 hover:border-gray-500',
    primary: 'border-white border-opacity-60 text-white text-opacity-90 hover:bg-white hover:bg-opacity-10 hover:border-opacity-100'
  }

  // Apply the theme styles based on current theme
  const buttonStyle = themeStyles[effectiveTheme]

  // Standard toggle style
  if (!isMobile) {
    return (
      <div className="relative">
        <button
          onClick={toggleLanguage}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className={`p-2 border rounded-full transition-all duration-200 flex items-center justify-center ${buttonStyle} ${className}`}
          title={languageLabel}
          aria-label={languageLabel}
        >
          <FaGlobe className="text-sm" />
        </button>
        {showTooltip && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-gray-800 dark:bg-gray-700 text-white rounded whitespace-nowrap z-10">
            {languageButton}
          </div>
        )}
      </div>
    )
  }

  // Compact toggle for mobile
  return (
    <button
      onClick={toggleLanguage}
      className={`p-2 border rounded-full transition-all duration-200 flex items-center justify-center ${buttonStyle} ${className}`}
      title={languageLabel}
      aria-label={languageLabel}
    >
      <FaGlobe className="text-sm" />
    </button>
  )
}