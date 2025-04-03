'use client'

import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'

export default function Contact() {
    const { language } = useLanguage()
    const { 
        pageTitle, 
        pageDescription, 
        getInTouch, 
        email, 
        linkedin,
        github, 
        location,
        locationValue,
        howIWork,
        howIWorkDescription,
        steps
    } = translations[language].contact

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4 text-center">{pageTitle}</h1>
            <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
                {pageDescription}
            </p>

            <div className="grid gap-10 mb-16">
                <div>
                    <h2 className="text-2xl font-bold mb-6">{getInTouch}</h2>

                    <div className="flex items-center mb-6">
                        <FaEnvelope className="text-2xl text-primary mr-4" />
                        <div>
                            <h3 className="font-bold">{email.title}</h3>
                            <a href="mailto:plopesrezende@gmail.com" className="text-xl hover:text-primary transition-colors" target='_blank'>
                                <p>plopesrezende@gmail.com</p>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center mb-6">
                        <FaLinkedin className="text-2xl text-primary mr-4" />
                        <div>
                            <h3 className="font-bold">{linkedin.title}</h3>
                            <a href="https://linkedin.com/in/plopesrezende" className="text-xl hover:text-primary transition-colors" target='_blank'>
                                <p>linkedin.com/in/plopesrezende</p>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center mb-6">
                        <FaGithub className="text-2xl text-primary mr-4" />
                        <div>
                            <h3 className="font-bold">{github.title}</h3>
                            <a href="https://github.com/plopesrezende" className="text-xl hover:text-primary transition-colors" target='_blank'>
                                <p>github.com/plopesrezende</p>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-2xl text-primary mr-4" />
                        <div>
                            <h3 className="font-bold">{location.title}</h3>
                            <p>{locationValue}</p>
                        </div>
                    </div>
                </div>

                {/* Contact form commented out in original code */}
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">{howIWork}</h2>
                <p className="text-center mb-6">
                    {howIWorkDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div className="text-center" key={index}>
                            <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                                {index + 1}
                            </div>
                            <h3 className="font-bold mb-2">{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
