'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'

export default function ExperienceSection() {
  const { language } = useLanguage()

  // Get translations for the experience section
  const { sectionTitle, sectionDescription, experiences } = translations[language].experienceSection

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">{sectionTitle}</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            {sectionDescription}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-primary dark:border-primary pl-8 ml-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-12 relative"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="absolute -left-12 w-8 h-8 bg-primary dark:bg-primary rounded-full flex items-center justify-center text-white">
                  {index + 1}
                </div>
                <div className="card bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{exp.title}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium text-gray-700 dark:text-gray-200">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
