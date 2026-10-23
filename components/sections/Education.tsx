'use client'

import { motion } from 'framer-motion'
import { EDUCATION } from '@/lib/data'
import { GraduationCap } from 'lucide-react'

export function Education() {
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
            Education
          </h2>

          <div className="space-y-8">
            {EDUCATION.map((edu, idx) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="timeline-item bento-card p-8"
              >
                <div className="flex items-start gap-4">
                  <GraduationCap className="text-blue-primary mt-1 flex-shrink-0" size={24} />
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-bold text-navy mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-primary font-semibold mb-2">
                      {edu.school}
                    </p>
                    <p className="text-neutral-muted text-sm mb-4">
                      {edu.startDate} – {edu.endDate}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="bg-neutral-surface-2 px-3 py-1.5 rounded-lg text-neutral-text font-medium border border-neutral-border">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>
                  <p className="text-neutral-muted text-sm whitespace-nowrap">{edu.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
