'use client'

import { motion } from 'framer-motion'
import { AWARDS } from '@/lib/data'
import { Star } from 'lucide-react'

export function Awards() {
  return (
    <section className="section bg-neutral-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-header font-serif text-4xl md:text-5xl font-bold text-navy mb-12">
            Awards & Honors
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {AWARDS.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="hover-lift bg-white p-6 rounded-xl border border-neutral-border flex items-start gap-4"
              >
                <Star className="text-blue-primary flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-navy mb-1">
                    {award.title}
                  </h3>
                  <p className="text-blue-primary text-sm font-medium mb-1">
                    {award.organization}
                  </p>
                  {award.year && (
                    <p className="text-neutral-muted text-xs mb-2">
                      {award.year}
                    </p>
                  )}
                  <p className="text-neutral-muted text-sm">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
