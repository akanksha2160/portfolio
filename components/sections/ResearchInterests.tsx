'use client'

import { motion } from 'framer-motion'
import { RESEARCH_INTERESTS } from '@/lib/data'

export function ResearchInterests() {
  return (
    <section id="research" className="section bg-neutral-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-header font-serif text-4xl md:text-5xl font-bold text-navy mb-12">
            Research Interests
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {RESEARCH_INTERESTS.map((category, idx) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bento-card p-8"
              >
                <div className="text-5xl mb-5">{category.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-navy mb-5">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="text-neutral-muted text-sm leading-relaxed flex gap-2">
                      <span className="text-cyan-primary flex-shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
