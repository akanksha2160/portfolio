'use client'

import { motion } from 'framer-motion'
import { TECHNICAL_EXPERIENCE } from '@/lib/data'

export function TechnicalExperience() {
  return (
    <section id="technical" className="section bg-neutral-surface border-y border-neutral-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="section-header text-3xl md:text-4xl font-bold text-neutral-text mb-12">
            Technical Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {TECHNICAL_EXPERIENCE.map((item) => (
              <div key={item.title} className="bento-card flex flex-col">
                <p className="text-xs text-neutral-muted mb-2">{item.period}</p>
                <h3 className="text-xl font-bold text-neutral-text mb-1">{item.title}</h3>
                <p className="text-cyan-primary text-sm font-medium mb-4">{item.organization}</p>
                <p className="text-neutral-muted text-sm leading-relaxed mb-5">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs bg-neutral-surface-2 text-neutral-muted px-3 py-1.5 rounded-lg border border-neutral-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
