'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'

export default function HeroSection() {
  const { language } = useLanguage()
  const { name, role, description, exploreServices, getInTouch } = translations[language].hero

  return (
    <section className="hero-gradient text-white py-20 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {name}
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              {role}
            </h2>
            <p className="text-lg mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services" className="bg-white text-primary font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors text-center">
                {exploreServices}
              </Link>
              <Link href="/contact" className="border-2 border-white text-white font-bold px-6 py-3 rounded-md hover:bg-white hover:text-primary transition-colors text-center">
                {getInTouch}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/paulo-hero.jpg"
                alt="Paulo Rezende"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
