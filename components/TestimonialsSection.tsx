'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaGlobe } from 'react-icons/fa'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'

export default function TestimonialsSection() {
  const { language } = useLanguage()
  
  const currentContent = translations[language].testimonials
  const testimonials = currentContent.testimonials
  
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }
  
  return (
    <section className="py-20 bg-light dark:bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            key={`title-${language}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold mb-4"
          >
            {currentContent.title}
          </motion.h2>
          <motion.p 
            key={`subtitle-${language}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-xl max-w-3xl mx-auto"
          >
            {currentContent.subtitle}
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-primary-dark transition-colors"
            aria-label={currentContent.prevLabel}
          >
            <FaChevronLeft />
          </button>
          
          <motion.div
            key={`${currentIndex}-${language}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="card text-center py-10 px-6 md:px-12 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          >
            <FaQuoteLeft className="text-4xl text-primary mx-auto mb-6" />
            <p className="text-xl mb-8">"{testimonials[currentIndex].text}"</p>
            <div>
              <p className="font-bold">{testimonials[currentIndex].author}</p>
              <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].position}</p>
            </div>
          </motion.div>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-primary-dark transition-colors"
            aria-label={currentContent.nextLabel}
          >
            <FaChevronRight />
          </button>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                }`}
                aria-label={`${currentContent.testimonialLabel} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
