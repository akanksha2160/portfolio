import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PROJECTS } from '@/lib/data'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find(p => p.slug === params.slug)
  if (!project) return {}

  return {
    title: `${project.title} | Kumari Akanksha`,
    description: project.overview,
  }
}

export async function generateStaticParams() {
  return PROJECTS.map(project => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-b from-neutral-bg to-white py-12 border-b border-neutral-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-blue-primary hover:text-navy font-medium mb-6"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>

            <h1 className="font-serif text-5xl font-bold text-navy mb-4">
              {project.title}
            </h1>
            <p className="text-neutral-muted text-lg mb-6">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-xs font-semibold text-blue-primary uppercase tracking-wider bg-blue-light px-3 py-1 rounded-full">
                {project.status}
              </span>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm bg-neutral-bg border border-neutral-border px-3 py-1 rounded-full text-neutral-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                Overview
              </h2>
              <p className="text-neutral-muted text-lg leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Key Metrics */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">
                Key Results
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(project.keyMetrics).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-neutral-bg p-6 rounded-xl border border-neutral-border"
                  >
                    <p className="text-neutral-muted text-sm font-semibold uppercase tracking-wider mb-2">
                      {key}
                    </p>
                    <p className="font-serif text-3xl font-bold text-navy">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Methodology */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                Methodology
              </h2>
              <p className="text-neutral-muted text-lg leading-relaxed">
                {project.methodology}
              </p>
            </div>

            {/* Dataset */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                Dataset & Experimental Setup
              </h2>
              <p className="text-neutral-muted text-lg leading-relaxed">
                {project.dataset}
              </p>
            </div>

            {/* Results */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-navy mb-4">
                Results & Analysis
              </h2>
              <p className="text-neutral-muted text-lg leading-relaxed">
                {project.results}
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-light border border-blue-primary p-8 rounded-xl">
              <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                Interested in this research?
              </h3>
              <p className="text-neutral-muted mb-6">
                I'm always happy to discuss research ideas and collaborate with fellow scientists.
              </p>
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-blue-primary to-cyan text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-primary/30 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
