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
    <div className="container mx-auto px-4 py-16">      
      <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>
      <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
        {subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {items.map((service, index) => {
          const Icon = SERVICE_ICONS[index]
          return (
            <div className="card" key={index}>
              <div className="mb-6">
                <Icon className="text-5xl text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <p className="text-lg mb-4">
                  {service.description}
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">{offerTitle}</h3>
                <ul className="list-disc list-inside mb-6">
                  {service.offerings.map((offering, i) => (
                    <li key={i}>{offering}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-primary text-white p-10 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">{ctaTitle}</h2>
        <p className="text-xl mb-8 text-center">
          {ctaText}
        </p>
        <div className="flex justify-center">
          <Link href="/contact" className="bg-white text-primary font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            {ctaButton}
          </Link>
        </div>
      </div>
    </div>
  )
}
