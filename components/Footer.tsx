'use client'

import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'

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
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Paulo Rezende</h3>
            <p className="mb-4">
              {aboutMe}
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/plopesrezende" className="text-xl hover:text-primary transition-colors" target='_blank' aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/plopesrezende" className="text-xl hover:text-primary transition-colors" target='_blank' aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:plopesrezende@gmail.com" className="text-xl hover:text-primary transition-colors" target='_blank' aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{services}</h3>
            <ul className="space-y-2">
              {servicesList.map((service, index) => (
                <li key={index}>
                  <Link href="/services" className="hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinksList.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{contact}</h3>
            <p className="mb-2">{contactInfo.location}</p>
            <p className="mb-2">{contactInfo.email}</p>
            <Link href="/contact" className="text-primary hover:underline">
              {getInTouch}
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p>{copyright.replace('{year}', new Date().getFullYear().toString())}</p>
        </div>
      </div>
    </footer>
  )
}
