'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { EXPERIENCE } from '@/lib/data'
import { ChevronDown } from 'lucide-react'

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section id="experience" className="section bg-neutral-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-header font-serif text-4xl md:text-5xl font-bold text-navy mb-12">
            Research Experience
          </h2>

          <div className="space-y-4">
            {EXPERIENCE.map((job, jobIdx) => (
              <motion.div
                key={jobIdx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: jobIdx * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === jobIdx ? -1 : jobIdx)}
                  className="w-full text-left bg-white border border-neutral-border rounded-xl p-6 hover:border-blue-primary hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-bold text-navy mb-1">
                        {job.title}
                      </h3>
                      <p className="text-blue-primary font-semibold mb-1">
                        {job.organization}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-muted">
                        <span>{job.startDate} – {job.endDate}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        {job.advisor && (
                          <>
                            <span>•</span>
                            <span>{job.advisor}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`text-neutral-muted flex-shrink-0 transition-transform ${
                        expandedIndex === jobIdx ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {expandedIndex === jobIdx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-neutral-bg border border-t-0 border-neutral-border rounded-b-xl p-6 space-y-4"
                  >
                    {job.bullets.map((bullet, bulletIdx) => (
                      <div key={bulletIdx} className="mb-4">
                        <h4 className="font-semibold text-navy mb-2">
                          {bullet.title}
                        </h4>
                        <p className="text-neutral-muted text-sm leading-relaxed mb-2">
                          {bullet.description}
                        </p>
                        {bullet.metrics.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {bullet.metrics.map((metric) => (
                              <span
                                key={metric}
                                className="text-xs bg-white px-2 py-1 rounded border border-blue-light text-blue-primary font-medium"
                              >
                                {metric}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
