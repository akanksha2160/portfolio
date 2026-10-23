'use client'

import { motion } from 'framer-motion'
import { PUBLICATIONS } from '@/lib/data'

function getStatusBadge(status: string) {
  const badges: Record<string, { bg: string; text: string }> = {
    'accepted': { bg: 'bg-emerald-50 border border-emerald-200', text: 'text-emerald-700' },
    'under review': { bg: 'bg-amber-50 border border-amber-200', text: 'text-amber-700' },
    'conference': { bg: 'bg-blue-light border border-blue-primary/20', text: 'text-blue-primary' },
  }
  return badges[status] || badges['accepted']
}

export function Publications() {
  return (
    <section id="publications" className="section bg-neutral-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-header font-serif text-4xl md:text-5xl font-bold text-navy mb-12">
            Publications & Presentations
          </h2>

          <div className="space-y-6">
            {PUBLICATIONS.map((pub, idx) => {
              const badge = getStatusBadge(pub.status)
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bento-card"
                >
                  <div className="flex flex-wrap items-start gap-3 mb-3">
                    <span className={`badge ${badge.bg} ${badge.text}`}>
                      {pub.status.charAt(0).toUpperCase() + pub.status.slice(1)}
                    </span>
                    <span className="text-xs text-neutral-muted bg-neutral-surface-2 border border-neutral-border px-2 py-1 rounded">
                      {pub.role}
                    </span>
                  </div>
                  <p className="text-neutral-muted font-medium mb-2">
                    {pub.authors}
                  </p>
                  <h3 className="font-semibold text-lg text-navy mb-2">
                    "{pub.title}"
                  </h3>
                  <p className="text-neutral-text italic">
                    {pub.conference} {pub.year}
                    {pub.note && ` — ${pub.note}`}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
