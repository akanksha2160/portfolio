'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/data'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-bg via-white to-neutral-bg relative overflow-hidden py-20 md:py-0">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-light/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-light/10 rounded-full blur-3xl -z-10" />

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Photo */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-primary to-navy rounded-full p-1">
              <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                <div className="w-full h-full relative rounded-full overflow-hidden bg-neutral-bg">
                  {/* Placeholder - user will add their photo */}
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    👩‍🔬
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl md:text-7xl font-bold text-navy mb-4"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Tagline with typewriter effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-lg md:text-2xl text-neutral-muted font-light tracking-wide">
            Computational Imaging · Scientific Machine Learning
          </p>
          <p className="text-lg md:text-2xl text-blue-primary font-medium mt-2">
            Deep Learning for Biomedical Research
          </p>
        </motion.div>

        {/* Short Bio */}
        <motion.p
          variants={itemVariants}
          className="text-neutral-muted text-center max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
        >
          Master's student at NCKU applying to top PhD programs in Computer Science and AI for Biomedical Research.
          Passionate about computational microscopy, image analysis, and interpretable deep learning.
        </motion.p>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full border border-neutral-border hover:border-blue-primary hover:bg-blue-light/10 transition-all duration-300 hover:shadow-lg"
            title="GitHub"
          >
            <Github size={24} className="text-navy hover:text-blue-primary" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full border border-neutral-border hover:border-blue-primary hover:bg-blue-light/10 transition-all duration-300 hover:shadow-lg"
            title="LinkedIn"
          >
            <Linkedin size={24} className="text-navy hover:text-blue-primary" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-3 bg-white rounded-full border border-neutral-border hover:border-blue-primary hover:bg-blue-light/10 transition-all duration-300 hover:shadow-lg"
            title="Email"
          >
            <Mail size={24} className="text-navy hover:text-blue-primary" />
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <a
            href="#about"
            className="inline-block bg-blue-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
          >
            Explore My Work
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-neutral-muted" size={32} />
      </motion.div>
    </section>
  )
}
