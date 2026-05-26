'use client'

import { motion } from 'framer-motion'
import { PERSONAL_INFO } from '@/lib/data'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.get('name') as string)} - ${encodeURIComponent(formData.get('subject') as string)}&body=${encodeURIComponent(formData.get('message') as string)}`
    window.location.href = email
  }

  return (
    <section id="contact" className="section bg-neutral-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-header font-serif text-4xl md:text-5xl font-bold text-navy mb-12">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-2xl font-bold text-navy mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border border-neutral-border hover:border-blue-primary hover:shadow-lg transition-all group"
                >
                  <Mail className="text-blue-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="font-semibold text-navy mb-1">Email</p>
                    <p className="text-blue-primary hover:underline">{PERSONAL_INFO.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg border border-neutral-border hover:border-blue-primary hover:shadow-lg transition-all group"
                >
                  <Phone className="text-blue-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                  <div>
                    <p className="font-semibold text-navy mb-1">Phone</p>
                    <p className="text-blue-primary hover:underline">{PERSONAL_INFO.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-neutral-border">
                  <MapPin className="text-blue-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-navy mb-1">Location</p>
                    <p className="text-neutral-muted">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <h3 className="font-serif text-2xl font-bold text-navy mb-8">
                Send a Message
              </h3>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-neutral-border rounded-lg focus:outline-none focus:border-blue-primary focus:ring-1 focus:ring-blue-primary"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-neutral-border rounded-lg focus:outline-none focus:border-blue-primary focus:ring-1 focus:ring-blue-primary"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-border rounded-lg focus:outline-none focus:border-blue-primary focus:ring-1 focus:ring-blue-primary"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-primary to-cyan text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-primary/30 transition-all duration-300"
              >
                Send Message
              </button>

              <p className="text-xs text-neutral-muted text-center">
                This form opens your email client. You can also reach me directly at {PERSONAL_INFO.email}
              </p>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
