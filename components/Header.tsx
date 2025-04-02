'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]
  
  const isActive = (path: string) => {
    return pathname === path ? 'text-primary font-bold' : ''
  }
  
  return (
    <header className="bg-white dark:bg-dark shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Paulo Rezende
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
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
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
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
