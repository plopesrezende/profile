'use client'

import { motion } from 'framer-motion'

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'Technical Lead',
      company: 'Enterprise Tech Company',
      period: '2018 - Present',
      description: 'Leading architecture design and implementation for cloud-native applications. Managing a team of 15 developers across multiple projects.'
    },
    {
      title: 'Co-founder & CTO',
      company: 'LEXP',
      period: '2016 - Present',
      description: 'Developed innovative EdTech solutions leveraging modern architecture patterns and cloud technologies to enhance educational experiences.'
    },
    {
      title: 'Senior Software Architect',
      company: 'Technology Consultancy',
      period: '2012 - 2018',
      description: 'Designed and implemented scalable enterprise solutions using microservices and event-driven architecture for Fortune 500 clients.'
    },
    {
      title: 'Software Developer',
      company: 'Digital Agency',
      period: '2008 - 2012',
      description: 'Developed web applications and services for various clients using Java, JavaScript, and emerging frontend technologies.'
    }
  ]
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Over 18 years of experience delivering technical excellence across various roles and industries.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-4 border-primary pl-8 ml-4">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="mb-12 relative"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="absolute -left-12 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                  {index + 1}
                </div>
                <div className="card">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
                  </div>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
