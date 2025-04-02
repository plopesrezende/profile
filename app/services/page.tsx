import { FaLaptopCode, FaUsers, FaCloud, FaBrain, FaGraduationCap } from 'react-icons/fa'

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">Services</h1>
      <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
        Leveraging over 15 years of experience to help your organization succeed through
        technical excellence and strategic guidance.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div className="card">
          <div className="mb-6">
            <FaLaptopCode className="text-5xl text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2">Architecture Consulting</h2>
            <p className="text-lg mb-4">
              Expert guidance on designing robust, scalable system architectures tailored to your business needs.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">What I Offer:</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Microservices architecture design</li>
              <li>Event-driven system implementation</li>
              <li>Domain-Driven Design (DDD) approaches</li>
              <li>CQRS pattern implementation</li>
              <li>Legacy system modernization</li>
            </ul>
          </div>
          
          <button className="btn-primary">Learn More</button>
        </div>
        
        <div className="card">
          <div className="mb-6">
            <FaUsers className="text-5xl text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2">Team Leadership & Development</h2>
            <p className="text-lg mb-4">
              Building and mentoring high-performance technical teams that deliver exceptional results.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">What I Offer:</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Team structuring and organization</li>
              <li>Technical mentorship and growth plans</li>
              <li>Agile practice implementation</li>
              <li>Knowledge sharing frameworks</li>
              <li>Technical interviewing and hiring</li>
            </ul>
          </div>
          
          <button className="btn-primary">Learn More</button>
        </div>
        
        <div className="card">
          <div className="mb-6">
            <FaCloud className="text-5xl text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2">Cloud Migration & DevOps</h2>
            <p className="text-lg mb-4">
              Guiding your organization to the cloud with secure, optimized infrastructure and DevOps practices.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">What I Offer:</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Azure cloud architecture and implementation</li>
              <li>Kubernetes orchestration</li>
              <li>CI/CD pipeline setup</li>
              <li>Infrastructure as Code (IaC)</li>
              <li>Cloud cost optimization</li>
            </ul>
          </div>
          
          <button className="btn-primary">Learn More</button>
        </div>
        
        <div className="card">
          <div className="mb-6">
            <FaGraduationCap className="text-5xl text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-2">Training & Workshops</h2>
            <p className="text-lg mb-4">
              Specialized technical training to elevate your team's skills and capabilities.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-2">What I Offer:</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Modern architecture patterns</li>
              <li>Cloud-native development</li>
              <li>React and Next.js best practices</li>
              <li>Java Spring Boot mastery</li>
              <li>TypeScript and modern JavaScript</li>
            </ul>
          </div>
          
          <button className="btn-primary">Learn More</button>
        </div>
      </div>
      
      <div className="bg-primary text-white p-10 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Ready to transform your technical capabilities?</h2>
        <p className="text-xl mb-8 text-center">
          Let's discuss how my services can help your organization achieve its technical and business goals.
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-primary font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  )
}
