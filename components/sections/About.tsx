'use client'

import { motion } from 'framer-motion'
import { EDUCATION } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="section bg-neutral-surface border-y border-neutral-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="section-header text-3xl md:text-4xl font-bold text-neutral-text mb-8">About Me</h2>
            <p className="text-neutral-text leading-relaxed mb-4">
              I&apos;m a Master&apos;s student in Biomedical Engineering at National Cheng Kung University. My work
              sits between computational imaging, scientific machine learning and cell biology: live-cell tracking,
              non-destructive quality assessment of stem-cell-derived cultures, and early prediction of
              differentiation outcomes.
            </p>
            <p className="text-neutral-muted leading-relaxed mb-4">
              I care about models that scientists can trust, which means interpretable, reproducible and grounded in
              the biology. I&apos;m looking to continue this work in a PhD program at the intersection of AI and
              biomedical imaging.
            </p>
            <p className="text-neutral-muted leading-relaxed">
              Outside the lab I enjoy badminton, hiking, photography and music.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-cyan-primary uppercase tracking-widest mb-6">Education</h3>
            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div key={edu.school} className="bento-card">
                  <p className="font-semibold text-neutral-text">{edu.degree}</p>
                  <p className="text-neutral-muted text-sm mt-1">{edu.school} · {edu.location}</p>
                  <p className="text-neutral-muted text-sm">{edu.startDate} – {edu.endDate}</p>
                  <p className="text-neutral-text text-sm mt-3">GPA {edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
