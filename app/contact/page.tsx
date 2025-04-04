'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { translations } from '@/translations'
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
    const { language } = useLanguage()
    const { 
        pageTitle, 
        pageDescription, 
        getInTouch, 
        email, 
        linkedin,
        location,
        locationValue,
        howIWork,
        howIWorkDescription,
        steps
    } = translations[language].contact

    return (
        <div className="container mx-auto px-4 py-16 bg-white dark:bg-gray-900">
            <h1 className="text-4xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">{pageTitle}</h1>
            <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                {pageDescription}
            </p>

            <div className="grid gap-10 mb-16">
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">{getInTouch}</h2>

                    <div className="flex items-center mb-6">
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full">
                            <FaEnvelope className="text-2xl text-primary dark:text-primary-light" />
                        </div>
                        <div className="ml-4">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100">{email.title}</h3>
                            <a href="mailto:plopesrezende@gmail.com" className="text-xl text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors" target='_blank'>
                                <p>plopesrezende@gmail.com</p>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center mb-6">
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full">
                            <FaLinkedin className="text-2xl text-primary dark:text-primary-light" />
                        </div>
                        <div className="ml-4">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100">{linkedin.title}</h3>
                            <a href="https://linkedin.com/in/plopesrezende" className="text-xl text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-light transition-colors" target='_blank'>
                                <p>linkedin.com/in/plopesrezende</p>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full">
                            <FaMapMarkerAlt className="text-2xl text-primary dark:text-primary-light" />
                        </div>
                        <div className="ml-4">
                            <h3 className="font-bold text-gray-800 dark:text-gray-100">{location.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{locationValue}</p>
                        </div>
                    </div>
                </div>

                {/* Contact form commented out in original code */}
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-gray-900/20">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">{howIWork}</h2>
                <p className="text-center mb-6 text-gray-700 dark:text-gray-300">
                    {howIWorkDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm dark:shadow-gray-900/10" key={index}>
                            <div className="bg-primary dark:bg-primary-dark text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                                {index + 1}
                            </div>
                            <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-100">{step.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
