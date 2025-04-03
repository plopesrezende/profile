'use client'

import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes'

interface ThemeToggleProps {
  isMobile?: boolean
}

export default function ThemeToggle({ isMobile = false }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  
  // Avoid hydration mismatch by rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <button
      onClick={toggleTheme}
      className={`${isMobile ? 'text-xl' : 'text-lg'} p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
    </button>
  )
}