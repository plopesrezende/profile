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
    <FaCode key="dev" className="text-5xl text-primary mb-4" />,
    <FaLaptopCode key="arch" className="text-5xl text-primary mb-4" />,
    <FaBrain key="leader" className="text-5xl text-primary mb-4" />,
    <FaUsers key="team" className="text-5xl text-primary mb-4" />
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">{pageTitle}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <Image 
            src="/paulo-profile.jpg" 
            alt="Paulo Rezende" 
            width={500} 
            height={500} 
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-4">{role}</h2>
          <p className="text-lg mb-6">{bio1}</p>
          <p className="text-lg mb-6">{bio2}</p>
          <p className="text-lg">{bio3}</p>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">{keySkills}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsList.map((skill, index) => (
            <div className="card" key={index}>
              {skillIcons[index]}
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">{journey}</h2>
        <div className="prose max-w-none dark:prose-invert">
          <p className="text-lg mb-4">{journeyDescription1}</p>
          <p className="text-lg mb-4">{journeyDescription2}</p>
          <p className="text-lg">{journeyDescription3}</p>
        </div>
      </div>
    </div>
  )
}
