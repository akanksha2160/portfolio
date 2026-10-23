'use client'

import { motion } from 'framer-motion'
import { Building2, UserRound, BookOpenCheck, Microscope } from 'lucide-react'

export function About() {
  const facts = [
    { Icon: Building2, label: 'Institution', value: 'NCKU — Biomedical Engineering' },
    { Icon: UserRound, label: 'Advisor', value: 'Prof. Ting-Yuan Tu · Tu Lab' },
    { Icon: BookOpenCheck, label: 'Program', value: 'M.S. · expected Feb 2027' },
    { Icon: Microscope, label: 'Current work', value: 'Siamese Re-ID for 3D live-cell tracking' },
  ]

  return (
    <section id="about" className="section bg-neutral-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div>
            <h2 className="section-header text-4xl md:text-5xl font-bold text-neutral-text mb-8">
              About Me
            </h2>
            <p className="text-cyan-primary text-lg font-semibold mb-6 italic">
              "Converting microscopy images into biological discovery through interpretable AI"
            </p>
            <p className="text-neutral-text text-base leading-relaxed mb-4">
              I'm a Master's student in Biomedical Engineering at National Cheng Kung University (NCKU), where I combine
              <strong> computational imaging, scientific machine learning, and interpretable AI</strong> to understand biological systems at scale.
            </p>
            <p className="text-neutral-text text-base leading-relaxed mb-6">
              My research tackles three interconnected challenges:
            </p>
            <div className="space-y-4 mb-8 border-l-2 border-cyan-primary pl-6">
              <div>
                <p className="font-semibold text-navy mb-1">Identity Preservation in Dense Tracking</p>
                <p className="text-neutral-muted text-sm">Long-term cell tracking with 84.62% accuracy using contrastive learning</p>
              </div>
              <div>
                <p className="font-semibold text-navy mb-1">Interpretable Quality Assessment</p>
                <p className="text-neutral-muted text-sm">Grad-CAM saliency maps for non-destructive biomedical QC</p>
              </div>
              <div>
                <p className="font-semibold text-navy mb-1">Early Prediction</p>
                <p className="text-neutral-muted text-sm">Forecasting differentiation outcomes from early-stage morphology (96.25% accuracy)</p>
              </div>
            </div>
            <p className="text-neutral-text text-base">
              Good AI for science is <span className="font-semibold">interpretable</span>, <span className="font-semibold">reproducible</span>, and <span className="font-semibold">domain-aware</span>. I'm applying to PhD programs to build research that impacts precision medicine and regenerative biology.
            </p>
          </div>

          {/* Quick facts card */}
          <div className="bento-card p-8">
            <p className="text-xs font-semibold text-cyan-primary uppercase tracking-wide mb-8">At a Glance</p>
            <div className="space-y-6">
              {facts.map((f, index) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-blue-light border border-blue-primary/20 shrink-0">
                    <f.Icon className="text-blue-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-neutral-muted text-xs uppercase tracking-widest font-semibold mb-1">{f.label}</p>
                    <p className="text-neutral-text font-medium text-sm">{f.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
