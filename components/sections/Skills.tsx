'use client'

import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="section bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-header font-serif text-4xl md:text-5xl font-bold text-navy mb-12">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(SKILLS).map(([category, { items, icon }], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-bg p-8 rounded-xl border border-neutral-border hover:border-blue-primary transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{icon}</span>
                  <h3 className="font-serif text-xl font-bold text-navy">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white border border-neutral-border rounded-full text-sm font-medium text-neutral-text hover:border-blue-primary hover:text-blue-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
