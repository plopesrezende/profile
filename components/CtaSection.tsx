'use client'

import Link from 'next/link'
import { FaGlobe } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'

export default function CtaSection() {
  const { language } = useLanguage()  
  const currentContent = translations[language].cta
  
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <div className="bg-primary dark:bg-primary-dark text-white rounded-lg p-10 text-center max-w-4xl mx-auto relative shadow-xl dark:shadow-primary-dark/20">
          <motion.h2 
            key={`title-${language}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold mb-4 pt-6"
          >
            {currentContent.title}
          </motion.h2>
          
          <motion.p 
            key={`description-${language}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            {currentContent.description}
          </motion.p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.div
              key={`button1-${language}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link 
                href="/contact" 
                className="bg-white dark:bg-gray-800 text-primary dark:text-primary-light font-bold px-8 py-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors inline-block shadow-md"
              >
                {currentContent.consultationButton}
              </Link>
            </motion.div>
            
            <motion.div
              key={`button2-${language}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Link 
                href="/services" 
                className="border-2 border-white dark:border-gray-200 text-white font-bold px-8 py-3 rounded-md hover:bg-white hover:text-primary dark:hover:bg-gray-800 dark:hover:text-primary-light transition-colors inline-block shadow-md"
              >
                {currentContent.servicesButton}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
