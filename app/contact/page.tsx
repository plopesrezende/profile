import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
            <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
                Have a project in mind or want to discuss how I can help your organization?
                I'd love to hear from you.
            </p>

            <div className="grid gap-10 mb-16">
                <div>
                    <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

                    <div className="flex items-center mb-6">
                        <FaEnvelope className="text-2xl text-primary mr-4" />
                        <div>
                            <h3 className="font-bold">Email</h3>
                            <a href="mailto:plopesrezende@gmail.com" className="text-xl hover:text-primary transition-colors" target='_blank'>
                                <p>plopesrezende@gmail.com</p>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center mb-6">
                        <FaLinkedin className="text-2xl text-primary mr-4" />
                        <div>
                            <h3 className="font-bold">LinkedIn</h3>
                            <a href="https://linkedin.com/in/plopesrezende" className="text-xl hover:text-primary transition-colors" target='_blank'>
                                <p>linkedin.com/in/plopesrezende</p>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center mb-6">
                        <FaGithub className="text-2xl text-primary mr-4" />
                        <div>
                            <h3 className="font-bold">GitHub</h3>
                            <a href="https://github.com/plopesrezende" className="text-xl hover:text-primary transition-colors" target='_blank'>

                                <p>github.com/plopesrezende</p>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-2xl text-primary mr-4" />
                        <div>
                            <h3 className="font-bold">Location</h3>
                            <p>Paraná, Brazil</p>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Subject"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Your message"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-primary w-full">Send Message</button>
                    </form>
                </div> */}
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">How I Work</h2>
                <p className="text-center mb-6">
                    I value clear communication and a structured approach to ensure successful outcomes.
                    Here's what you can expect when working with me:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">1</div>
                        <h3 className="font-bold mb-2">Initial Consultation</h3>
                        <p>We'll discuss your needs and how I can help achieve your goals.</p>
                    </div>

                    <div className="text-center">
                        <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">2</div>
                        <h3 className="font-bold mb-2">Proposal & Planning</h3>
                        <p>I'll provide a detailed proposal with timeline and deliverables.</p>
                    </div>

                    <div className="text-center">
                        <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">3</div>
                        <h3 className="font-bold mb-2">Execution & Results</h3>
                        <p>Transparent, structured implementation with regular updates.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
