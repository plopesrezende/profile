import Link from 'next/link'

export default function CtaSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-primary text-white rounded-lg p-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Technical Capabilities?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you need architecture consulting, team leadership, or technical training,
            I'm here to help your organization achieve its goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/contact" 
              className="bg-white text-primary font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-md hover:bg-white hover:text-primary transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
