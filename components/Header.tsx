'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import LanguageToggle from './LanguageToggle'
import TechLogo from './TechLogo'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language } = useLanguage()
  const { home, about, services, contact, openMenu, closeMenu } = translations[language].header

  // Navigation items with translated names
  const navItems = [
    { name: home, path: '/' },
    { name: about, path: '/about' },
    { name: services, path: '/services' },
    { name: contact, path: '/contact' },
  ]

  const isActive = (path: string) => {
    return pathname === path ? 'text-primary font-bold' : ''
  }

  return (
    <header className="bg-white dark:bg-dark shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <TechLogo size='md' showName={true} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-8 mr-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`hover:text-primary transition-colors ${isActive(item.path)}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <LanguageToggle isMobile={true} />
            <ThemeToggle isMobile={true} />
            <button
              className="ml-4 text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? closeMenu : openMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`block py-2 hover:text-primary transition-colors ${isActive(item.path)}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}              
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
