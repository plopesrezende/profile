import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Paulo Rezende</h3>
            <p className="mb-4">
              Software Architect & Tech Leader with over 15 years of experience building
              scalable systems and high-performing teams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-primary transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="text-xl hover:text-primary transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="text-xl hover:text-primary transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-xl hover:text-primary transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-primary transition-colors">Architecture Consulting</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Team Leadership</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Cloud Migration</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Training & Workshops</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="mb-2">São Paulo, Brazil</p>
            <p className="mb-2">paulo@example.com</p>
            <Link href="/contact" className="text-primary hover:underline">
              Get in touch
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Paulo Ricardo Rezende. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
