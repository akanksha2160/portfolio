'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown, GraduationCap } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/data'
import { CellTrackingBackground } from './CellTrackingBackground'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 md:py-0 bg-neutral-bg">
      {/* Interactive cell-tracking animation */}
      <CellTrackingBackground />

      {/* Readability overlay - radial vignette keeps center text crisp */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(247,249,244,0.82) 0%, rgba(247,249,244,0.5) 45%, rgba(247,249,244,0.15) 100%)' }}
      />

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Research focus badge */}
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-cyan/40 text-sm font-medium text-navy shadow-sm">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            Computational Imaging · Deep Learning for Biology
          </span>
        </motion.div>

        {/* Profile Photo */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto relative group">
            {/* Animated glow ring */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-electric via-cyan-glow to-teal rounded-full blur-md opacity-70 animate-glow-pulse" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-electric via-cyan-glow to-teal rounded-full p-[3px]">
              <div className="w-full h-full bg-white rounded-full p-1">
                <div className="w-full h-full relative rounded-full overflow-hidden bg-neutral-bg">
                  <img
                    src="/photo.png"
                    alt="Kumari Akanksha"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-6xl">👩‍🔬</div>'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-navy via-blue-primary to-cyan bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x leading-tight pb-2"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Tagline */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl md:text-3xl font-serif font-bold text-navy mb-3">
            Building Interpretable AI for Biology
          </p>
          <p className="text-base md:text-xl text-neutral-muted font-light tracking-wide max-w-2xl mx-auto">
            Turning microscopy images into biological discovery through deep learning
          </p>
        </motion.div>

        {/* Short Bio */}
        <motion.p
          variants={itemVariants}
          className="text-neutral-text text-center max-w-3xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
        >
          I combine computational imaging, scientific machine learning, and interpretable AI to unlock patterns in
          biological systems—from live-cell tracking to early-stage phenotype prediction, enabling faster discovery
          in cell biology and regenerative medicine.
        </motion.p>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-10">
          {[
            { href: PERSONAL_INFO.github, Icon: Github, label: 'GitHub' },
            { href: PERSONAL_INFO.linkedin, Icon: Linkedin, label: 'LinkedIn' },
            { href: PERSONAL_INFO.googleScholar, Icon: GraduationCap, label: 'Google Scholar' },
            { href: `mailto:${PERSONAL_INFO.email}`, Icon: Mail, label: 'Email' },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="p-3 bg-white/80 backdrop-blur-md rounded-xl border border-neutral-border hover:border-cyan hover:bg-white hover:scale-110 hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300 group"
              title={label}
            >
              <Icon size={22} className="text-navy group-hover:text-blue-primary transition-colors" />
            </a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-blue-primary to-cyan text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-primary/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            View Research
          </a>
          <a
            href="#contact"
            className="inline-block bg-white/80 backdrop-blur-md text-navy border border-neutral-border px-8 py-3 rounded-xl font-semibold hover:border-cyan hover:-translate-y-0.5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="text-blue-primary" size={32} />
      </motion.div>
    </section>
  )
}
