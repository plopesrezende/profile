'use client'

import Image from 'next/image'
import { FaCode, FaLaptopCode, FaBrain, FaUsers } from 'react-icons/fa'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'

export default function About() {
  const { language } = useLanguage()
  const { 
    pageTitle, 
    role, 
    bio1, 
    bio2, 
    bio3, 
    keySkills, 
    skillsList, 
    journey, 
    journeyDescription1, 
    journeyDescription2, 
    journeyDescription3 
  } = translations[language].about

  // Mapping of skill icons
  const skillIcons = [
    <FaCode key="dev" className="text-5xl text-primary dark:text-primary-light mb-4" />,
    <FaLaptopCode key="arch" className="text-5xl text-primary dark:text-primary-light mb-4" />,
    <FaBrain key="leader" className="text-5xl text-primary dark:text-primary-light mb-4" />,
    <FaUsers key="team" className="text-5xl text-primary dark:text-primary-light mb-4" />
  ]

  return (
    <div className="container mx-auto px-4 py-16 bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">{pageTitle}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <Image 
            src="/paulo-profile.jpg" 
            alt="Paulo Rezende" 
            width={500} 
            height={500} 
            className="rounded-lg shadow-lg dark:shadow-gray-800/50"
          />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">{role}</h2>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">{bio1}</p>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">{bio2}</p>
          <p className="text-lg text-gray-700 dark:text-gray-300">{bio3}</p>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">{keySkills}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsList.map((skill, index) => (
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-gray-900/20 transition-all hover:shadow-md" key={index}>
              {skillIcons[index]}
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{skill.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">{journey}</h2>
        <div className="prose max-w-none dark:prose-invert">
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">{journeyDescription1}</p>
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">{journeyDescription2}</p>
          <p className="text-lg text-gray-700 dark:text-gray-300">{journeyDescription3}</p>
        </div>
      </div>
    </div>
  )
}
