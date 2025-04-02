'use client'

import { FaLaptopCode, FaUsers, FaCloud, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function ServicesSection() {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-primary mb-4" />,
      title: 'Architecture Consulting',
      description: 'Expert guidance on designing scalable, maintainable system architectures using microservices, event-driven patterns, and DDD.'
    },
    {
      icon: <FaUsers className="text-4xl text-primary mb-4" />,
      title: 'Team Leadership',
      description: 'Building and mentoring high-performance technical teams that deliver exceptional results through effective processes and practices.'
    },
    {
      icon: <FaCloud className="text-4xl text-primary mb-4" />,
      title: 'Cloud Migration',
      description: 'Guiding organizations to the cloud with secure, optimized Azure infrastructure and DevOps practices including Kubernetes.'
    },
    {
      icon: <FaGraduationCap className="text-4xl text-primary mb-4" />,
      title: 'Training & Workshops',
      description: 'Specialized technical training in modern architecture, cloud-native development, and frontend/backend technologies.'
    }
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
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Leveraging technology expertise to help businesses solve complex problems and achieve their goals.
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
              <div>{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
