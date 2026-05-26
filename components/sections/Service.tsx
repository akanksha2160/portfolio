'use client'

import { motion } from 'framer-motion'
import { SERVICE } from '@/lib/data'
import { Users } from 'lucide-react'

export function Service() {
  return (
    <section className="section bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-header font-serif text-4xl md:text-5xl font-bold text-navy mb-12">
            Service & Leadership
          </h2>

          <div className="space-y-6">
            {SERVICE.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="timeline-item bg-neutral-bg p-8 rounded-xl border border-neutral-border hover:border-blue-primary transition-colors"
              >
                <div className="flex items-start gap-4">
                  <Users className="text-blue-primary mt-1 flex-shrink-0" size={24} />
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-navy mb-1">
                      {service.role}
                    </h3>
                    <p className="text-blue-primary font-semibold mb-2">
                      {service.organization}
                    </p>
                    <p className="text-neutral-muted text-sm mb-3">
                      {service.startDate} – {service.endDate}
                    </p>
                    <p className="text-neutral-text text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
