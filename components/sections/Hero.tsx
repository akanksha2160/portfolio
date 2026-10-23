'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, GraduationCap, ArrowRight, MapPin } from 'lucide-react'
import { PERSONAL_INFO, BASE_PATH } from '@/lib/data'
import Link from 'next/link'

const STATS = [
  { label: 'GPA', value: '4.24', sub: '/ 4.30' },
  { label: 'Publications', value: '3', sub: 'incl. 1st-author' },
  { label: 'Fellowships', value: '3', sub: 'TEEP · IIPP · +' },
  { label: 'Best accuracy', value: '96%', sub: 'AUC 0.99' },
]

const FOCUS = ['Computational microscopy', 'Live-cell tracking', 'Interpretable AI', 'Image-based phenotyping', 'Weakly-supervised learning']

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-bg py-20 md:py-0">
      {/* Advanced animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-green-primary/5 rounded-full blur-3xl" style={{animation: 'pulse 4s ease-in-out infinite 1s'}}></div>
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-to-bl from-cyan-primary/5 via-transparent to-transparent blur-2xl"></div>
      </div>

      <motion.div
        className="relative z-10 w-full"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* BIG HERO PHOTO + INTRO */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          {/* Photo - Big and Impressive */}
          <motion.div variants={item} className="relative order-2 md:order-1">
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-primary via-green-primary to-cyan-primary rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-cyan-primary/50 bg-gradient-to-br from-cyan-primary/20 to-green-primary/10">
                <img
                  src={`${BASE_PATH}/photo.png`}
                  alt="Kumari Akanksha"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-9xl">👩‍🔬</div>' }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-bg/40 via-transparent to-cyan-primary/10"></div>
              </div>
            </div>
          </motion.div>

          {/* Intro + About Me */}
          <motion.div variants={item} className="order-1 md:order-2 space-y-6">
            <div>
              <p className="text-cyan-primary text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                <MapPin size={14} /> {PERSONAL_INFO.location}
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-text leading-tight mb-2">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl md:text-2xl font-light text-neutral-muted">
                Masters Student · Computational Imaging Researcher
              </p>
            </div>

            {/* Lab Info */}
            <div className="bg-gradient-to-r from-cyan-primary/10 to-green-primary/10 border border-cyan-primary/30 rounded-2xl p-6">
              <p className="text-cyan-primary font-semibold mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-glow rounded-full animate-pulse"></span>
                Integrated MechanoBioSystems Lab
              </p>
              <p className="text-neutral-muted text-sm leading-relaxed">
                National Cheng Kung University (NCKU) · Tainan, Taiwan
              </p>
            </div>

            {/* About Section */}
            <div className="space-y-4">
              <p className="text-neutral-text leading-relaxed">
                I'm a Master's student in Biomedical Engineering at National Cheng Kung University, specializing in <span className="text-cyan-primary font-semibold">computational imaging</span> and <span className="text-green-primary font-semibold">deep learning</span> for biological systems.
              </p>
              <p className="text-neutral-muted text-sm leading-relaxed">
                My research focuses on developing <strong>interpretable AI</strong> to transform microscopy images into actionable biological insights. I combine contrastive learning, temporal modeling, and saliency-based explainability to tackle challenges in live-cell tracking, quality assessment, and early phenotype prediction.
              </p>
              <p className="text-neutral-muted text-sm leading-relaxed">
                Currently, I'm working on Siamese networks for 3D cell identity preservation and weakly-supervised frameworks for non-destructive biomedical QC. Passionate about precision medicine, regenerative biology, and AI that scientists can trust.
              </p>
            </div>

            {/* Social + CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link href="#projects" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-primary to-blue-primary text-neutral-bg font-bold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-primary/40 hover:-translate-y-1 transition-all">
                Explore Research <ArrowRight size={18} />
              </Link>
              <div className="flex gap-2">
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
                    title={label}
                    className="p-2.5 rounded-lg bg-neutral-surface border border-neutral-border/50 text-neutral-text hover:text-cyan-primary hover:border-cyan-primary hover:bg-neutral-surface-2 hover:shadow-lg hover:shadow-cyan-primary/20 hover:-translate-y-1 transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        {/* KEY STATS + RESEARCH FOCUS SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {STATS.map((s) => (
              <motion.div key={s.label} variants={item} className="bento-card flex flex-col justify-center">
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-primary to-green-primary bg-clip-text text-transparent mb-2">
                  {s.value}
                </p>
                <p className="text-neutral-text text-sm font-semibold">{s.label}</p>
                <p className="text-neutral-muted text-xs mt-1">{s.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Research Focus */}
          <motion.div variants={item} className="bento-card mb-8">
            <p className="text-xs font-bold text-cyan-primary uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-glow rounded-full"></span> Research Focus
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {FOCUS.map((f) => (
                <span key={f} className="text-xs md:text-sm bg-gradient-to-br from-cyan-primary/10 to-green-primary/10 text-neutral-text border border-cyan-primary/30 px-3 py-2 rounded-lg hover:border-cyan-primary/60 transition-all cursor-default">
                  {f}
                </span>
              ))}
            </div>
          </motion.div>

          {/* PhD + Contact CTA */}
          <motion.div variants={item} className="bento-card bg-gradient-to-r from-cyan-primary/15 to-green-primary/10 border border-cyan-primary/40">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-neutral-text font-bold text-lg mb-1">PhD Applications • Fall 2026</p>
                <p className="text-neutral-muted text-sm">Seeking top programs in biomedical imaging, computational biology, and interpretable AI. Open to research collaborations.</p>
              </div>
              <Link href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-primary to-blue-primary text-neutral-bg font-bold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-primary/40 transition-all whitespace-nowrap">
                Let's Connect <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        </div>
      </motion.div>
    </section>
  )
}
