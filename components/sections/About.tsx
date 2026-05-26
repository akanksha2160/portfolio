'use client'

import { motion } from 'framer-motion'

export function About() {
  const stats = [
    { label: 'GPA', value: '4.24/4.30' },
    { label: 'Publications', value: '2+' },
    { label: 'Fellowships', value: '3' },
    { label: 'Years Experience', value: '2+' },
  ]

  return (
    <section id="about" className="section bg-white">
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
            <h2 className="section-header font-serif text-4xl md:text-5xl font-bold text-navy mb-6">
              About Me
            </h2>
            <p className="text-blue-primary text-xl font-semibold mb-4">
              "Converting microscopy images into biological discovery through interpretable AI"
            </p>
            <p className="text-neutral-text text-lg leading-relaxed mb-4">
              I'm a Master's student in Biomedical Engineering at National Cheng Kung University (NCKU), where I combine
              <strong> computational imaging, scientific machine learning, and interpretable AI</strong> to understand biological systems at scale.
            </p>
            <p className="text-neutral-text text-lg leading-relaxed mb-4">
              My research tackles three interconnected problems:
            </p>
            <ul className="text-neutral-text text-base space-y-2 mb-6 ml-6">
              <li>✓ <strong>Identity preservation in dense tracking:</strong> Long-term cell tracking with 84.62% accuracy using contrastive learning</li>
              <li>✓ <strong>Interpretable quality assessment:</strong> Grad-CAM saliency maps for non-destructive biomedical QC</li>
              <li>✓ <strong>Early prediction:</strong> Forecasting differentiation outcomes from early-stage morphology (96.25% accuracy)</li>
            </ul>
            <p className="text-neutral-text text-base">
              I believe good AI for science is <em>interpretable</em>, <em>reproducible</em>, and <em>domain-aware</em>.
              I'm applying to top PhD programs to build research that impacts precision medicine and regenerative biology.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-bg p-6 rounded-xl border border-neutral-border card-glow"
              >
                <p className="text-neutral-muted text-sm font-semibold uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <p className="font-serif text-4xl font-bold bg-gradient-to-br from-navy to-cyan bg-clip-text text-transparent">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
