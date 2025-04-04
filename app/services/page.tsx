'use client'

import { FaLaptopCode, FaUsers, FaCloud, FaGraduationCap } from 'react-icons/fa'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'
import Link from 'next/link'

// Map of icons to use for each service
const SERVICE_ICONS = [
  FaLaptopCode,
  FaUsers, 
  FaCloud,
  FaGraduationCap
]

export default function Services() {
  const { language } = useLanguage()
  const { title, subtitle, offerTitle, items, ctaTitle, ctaText, ctaButton } = translations[language].services

  return (
    <div className="container mx-auto px-4 py-16 bg-white dark:bg-gray-900">      
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">{title}</h1>
      <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
        {subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {items.map((service, index) => {
          const Icon = SERVICE_ICONS[index]
          return (
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm dark:shadow-gray-900/20 transition-all hover:shadow-md" key={index}>
              <div className="mb-6">
                <Icon className="text-5xl text-primary dark:text-primary-light mb-4" />
                <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">{service.title}</h2>
                <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
                  {service.description}
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-100">{offerTitle}</h3>
                <ul className="list-disc list-inside mb-6 text-gray-700 dark:text-gray-300">
                  {service.offerings.map((offering, i) => (
                    <li key={i}>{offering}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-primary dark:bg-primary-dark text-white p-10 rounded-lg shadow-xl dark:shadow-primary-dark/20">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">{ctaTitle}</h2>
        <p className="text-xl mb-8 text-center text-white dark:text-gray-100">
          {ctaText}
        </p>
        <div className="flex justify-center">
          <Link href="/contact" className="bg-white dark:bg-gray-800 text-primary dark:text-primary-light font-bold px-8 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md">
            {ctaButton}
          </Link>
        </div>
      </div>
    </div>
  )
}
