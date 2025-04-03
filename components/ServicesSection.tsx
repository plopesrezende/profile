'use client'

import { FaLaptopCode, FaUsers, FaCloud, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'

export default function ServicesSection() {
  const { language } = useLanguage()
  const { sectionTitle, sectionDescription, services } = translations[language].servicesSection
  
  // Define service icons to be reused
  const SERVICE_ICONS = [
    <FaLaptopCode key="architecture" className="text-4xl text-primary mb-4" />,
    <FaUsers key="leadership" className="text-4xl text-primary mb-4" />,
    <FaCloud key="cloud" className="text-4xl text-primary mb-4" />,
    <FaGraduationCap key="training" className="text-4xl text-primary mb-4" />
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <section className="py-20 bg-light dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{sectionTitle}</h2>
          <p className="text-xl max-w-3xl mx-auto">
            {sectionDescription}
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="card text-center"
              variants={itemVariants}
            >
              <div>{SERVICE_ICONS[index]}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
