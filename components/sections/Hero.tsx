'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, GraduationCap, ArrowRight, MapPin } from 'lucide-react'
import { PERSONAL_INFO, BASE_PATH } from '@/lib/data'

const SOCIALS = [
  { href: PERSONAL_INFO.googleScholar, Icon: GraduationCap, label: 'Google Scholar' },
  { href: PERSONAL_INFO.github, Icon: Github, label: 'GitHub' },
  { href: PERSONAL_INFO.linkedin, Icon: Linkedin, label: 'LinkedIn' },
  { href: `mailto:${PERSONAL_INFO.email}`, Icon: Mail, label: 'Email' },
]

export function Hero() {
  return (
    <section className="min-h-[92vh] flex items-center py-16 md:py-24">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="order-2 md:order-1"
        >
          <p className="flex items-center gap-2 text-sm text-neutral-muted mb-6">
            <MapPin size={14} /> {PERSONAL_INFO.location}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-text leading-[1.1]">
            Hello, I&apos;m <span className="text-cyan-primary">Kumari Akanksha</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-muted">
            Master&apos;s researcher in Biomedical Engineering · Computational Imaging &amp; Deep Learning
          </p>
          <p className="mt-6 text-neutral-text leading-relaxed max-w-xl">
            I build interpretable deep-learning methods that turn microscopy images into biological insight, from
            tracking individual cells in 3D cancer invasion to predicting stem-cell differentiation quality before
            it can be measured. I work at National Cheng Kung University in the lab of Prof. Ting-Yuan Tu.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-neutral-text text-neutral-bg px-6 py-3 rounded-lg font-medium hover:bg-cyan-primary hover:text-neutral-bg transition-all hover:-translate-y-0.5"
            >
              View my work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-neutral-border text-neutral-text px-6 py-3 rounded-lg font-medium hover:border-neutral-text transition-all"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            {SOCIALS.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                title={label}
                aria-label={label}
                className="p-2.5 rounded-lg border border-neutral-border text-neutral-muted hover:text-cyan-primary hover:border-cyan-primary transition-all hover:-translate-y-0.5"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="order-1 md:order-2 mx-auto w-full max-w-sm"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-neutral-border shadow-xl">
            <img
              src={`${BASE_PATH}/photo.jpg`}
              alt="Kumari Akanksha"
              className="w-full h-full object-cover object-[62%_62%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
