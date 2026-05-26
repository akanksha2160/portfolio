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

          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="hover-lift bg-white p-6 rounded-xl border border-neutral-border h-full flex flex-col"
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold text-blue-primary uppercase tracking-wider">
                    {project.status.split(' - ')[0]}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-muted text-sm mb-4 flex-grow">
                  {project.shortDescription}
                </p>

                {/* Key Metrics */}
                <div className="space-y-2 mb-6">
                  {Object.entries(project.keyMetrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-neutral-muted">{key}:</span>
                      <span className="font-medium text-navy">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-blue-light text-blue-primary px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-neutral-muted px-2 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-blue-primary font-medium hover:gap-3 transition-all group"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
