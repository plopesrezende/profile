'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'
import Link from 'next/link'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const { language } = useLanguage()
  const { 
    aboutMe, 
    services, 
    servicesList, 
    quickLinks, 
    quickLinksList, 
    contact, 
    contactInfo, 
    getInTouch,
    copyright
  } = translations[language].footer

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Paulo Rezende</h3>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {aboutMe}
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/plopesrezende" className="text-xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors" target='_blank' aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="mailto:plopesrezende@gmail.com" className="text-xl text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors" target='_blank' aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">{services}</h3>
            <ul className="space-y-2">
              {servicesList.map((service, index) => (
                <li key={index}>
                  <Link href="/services" className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">{quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinksList.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">{contact}</h3>
            <p className="mb-2 text-gray-700 dark:text-gray-300">{contactInfo.location}</p>
            <p className="mb-2 text-gray-700 dark:text-gray-300">{contactInfo.email}</p>
            <Link href="/contact" className="text-primary dark:text-primary-light hover:underline">
              {getInTouch}
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-300 dark:border-gray-800 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-500">{copyright.replace('{year}', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  )
}
