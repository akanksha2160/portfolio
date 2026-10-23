import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PROJECTS } from '@/lib/data'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Research Projects | Kumari Akanksha',
  description: 'Detailed research projects in computational imaging, deep learning, and biomedical engineering.',
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-bg py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-blue-primary hover:text-navy font-medium mb-8"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <h1 className="font-serif text-5xl font-bold text-navy mb-12">
            Research Projects
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block bento-card p-8"
              >
                <span className="text-xs font-semibold text-blue-primary uppercase tracking-wider mb-4 block">
                  {project.status}
                </span>
                <h2 className="font-serif text-2xl font-bold text-navy mb-3 hover:text-blue-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-neutral-muted text-base mb-6">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs bg-blue-light text-blue-primary px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
