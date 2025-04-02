import Image from 'next/image'
import { FaCode, FaLaptopCode, FaBrain, FaUsers } from 'react-icons/fa'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Paulo Ricardo Rezende</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <Image 
            src="/paulo-profile.jpg" 
            alt="Paulo Ricardo Rezende" 
            width={500} 
            height={500} 
            className="rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <h2 className="text-3xl font-bold mb-4">Software Architect & Tech Leader</h2>
          <p className="text-lg mb-6">
            With over 15 years of experience in software development and architecture,
            I specialize in designing scalable, maintainable systems that solve complex business problems.
          </p>
          <p className="text-lg mb-6">
            My passion lies in building high-performance teams and implementing modern
            architectures using microservices, event-driven patterns, and cloud technologies.
          </p>
          <p className="text-lg">
            As a technical leader, I've guided organizations through digital transformations,
            helping them adopt DevOps practices, improve their development processes, and
            leverage cutting-edge technologies to stay competitive.
          </p>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Key Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <FaCode className="text-5xl text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Software Development</h3>
            <p>React, NextJS, TypeScript, Java Spring Boot, and more</p>
          </div>
          
          <div className="card">
            <FaLaptopCode className="text-5xl text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Architecture</h3>
            <p>Microservices, Event Driven, DDD, CQRS, Cloud Native</p>
          </div>
          
          <div className="card">
            <FaBrain className="text-5xl text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Technical Leadership</h3>
            <p>Team leadership, architectural guidance, mentoring</p>
          </div>
          
          <div className="card">
            <FaUsers className="text-5xl text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Team Building</h3>
            <p>High-performance teams, agile practices, knowledge sharing</p>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">My Journey</h2>
        <div className="prose max-w-none dark:prose-invert">
          <p className="text-lg mb-4">
            My technical journey began over 15 years ago, and has evolved through various roles
            from developer to architect and technical leader. I've worked with startups, enterprises, 
            and everything in between, gaining a comprehensive understanding of what makes
            successful software projects and teams.
          </p>
          <p className="text-lg mb-4">
            As co-founder of LEXP, I've applied my technical expertise to creating innovative
            solutions for the education sector, demonstrating my ability to bridge business needs
            with technical implementation.
          </p>
          <p className="text-lg">
            Today, I'm focused on helping organizations build resilient, scalable systems and
            empowering technical teams to achieve their full potential through consultation,
            training, and hands-on architectural guidance.
          </p>
        </div>
      </div>
    </div>
  )
}
