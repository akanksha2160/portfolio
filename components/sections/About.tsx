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
            <p className="text-neutral-muted text-lg leading-relaxed mb-4">
              I'm a Master's student in Biomedical Engineering at National Cheng Kung University (NCKU) in Taiwan,
              pursuing research that bridges deep learning and biological systems.
            </p>
            <p className="text-neutral-muted text-lg leading-relaxed mb-6">
              My research focuses on computational imaging, image-based phenotyping, and developing interpretable deep learning
              models for automated quality assessment in biomedical applications. I'm particularly interested in live-cell tracking,
              temporal prediction models, and making AI interpretable for scientific discovery.
            </p>
            <p className="text-neutral-text text-base font-medium">
              Currently, I'm applying to top PhD programs in Computer Science and AI to continue research that impacts
              biomedical science and precision medicine.
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
                className="bg-neutral-bg p-6 rounded-xl border border-neutral-border hover:border-blue-primary transition-colors"
              >
                <p className="text-neutral-muted text-sm font-semibold uppercase tracking-wider mb-2">
                  {stat.label}
                </p>
                <p className="font-serif text-4xl font-bold text-navy">
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
