'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Paulo's architectural vision transformed our legacy system into a modern, scalable platform. His expertise in microservices and event-driven architecture was invaluable.",
      author: "Maria Silva",
      position: "CTO, Enterprise Solutions"
    },
    {
      text: "Working with Paulo was a game-changer for our development team. His leadership and technical mentorship helped us improve our processes and deliver with much higher quality.",
      author: "Carlos Mendes",
      position: "Engineering Director, Tech Innovators"
    },
    {
      text: "The cloud migration strategy Paulo designed for us resulted in 40% cost reduction and significantly improved system reliability. His deep knowledge of Azure and Kubernetes was evident.",
      author: "Ana Ferreira",
      position: "CEO, Digital Startup"
    }
  ]
  
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
    <section className="py-20 bg-light dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Feedback from clients and colleagues who have worked with me.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center z-10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="card text-center py-10 px-6 md:px-12"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center z-10"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
