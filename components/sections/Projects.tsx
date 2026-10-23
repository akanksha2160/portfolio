'use client'

import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Projects() {
  return (
    <section id="projects" className="section bg-neutral-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-header font-serif text-4xl md:text-5xl font-bold text-navy mb-12">
            Featured Research Projects
          </h2>

          {/* Bento layout: first project featured (full width), rest in a 2-col mosaic */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project, idx) => {
              const featured = idx === 0
              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`bento-card flex flex-col ${featured ? 'md:col-span-2' : ''}`}
                >
                  <div className="mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-coral" />
                    <span className="text-xs font-semibold text-accent-coral uppercase tracking-wide">
                      {project.status.split(' - ')[0]}
                    </span>
                  </div>

                  <div className={featured ? 'md:flex md:gap-8 md:items-start' : ''}>
                    <div className={featured ? 'md:flex-1' : ''}>
                      <h3 className={`font-serif font-bold text-navy mb-4 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                        {project.title}
                      </h3>
                      <p className="text-neutral-muted text-sm mb-5 leading-relaxed">
                        {project.shortDescription}
                      </p>
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, featured ? 5 : 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-neutral-surface-2 text-neutral-muted px-3 py-1.5 rounded-lg border border-neutral-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className={`bg-neutral-surface-2 border border-neutral-border rounded-xl p-5 mb-6 space-y-3 ${featured ? 'md:w-72 md:mb-0' : ''}`}>
                      {Object.entries(project.keyMetrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center gap-4 text-sm">
                          <span className="text-neutral-muted font-medium">{key}</span>
                          <span className="font-bold text-cyan-primary text-right">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-auto inline-flex items-center gap-2 text-blue-primary font-medium hover:text-cyan-primary hover:gap-3 transition-all w-fit"
                  >
                    Explore project <ArrowRight size={16} />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
