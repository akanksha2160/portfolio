'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-surface-2 border-t border-neutral-border text-neutral-text py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-navy mb-2">{PERSONAL_INFO.name}</h3>
            <p className="text-neutral-muted text-sm leading-relaxed">{PERSONAL_INFO.title}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-navy mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-neutral-muted hover:text-navy transition-colors">About</a></li>
              <li><a href="#experience" className="text-neutral-muted hover:text-navy transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-neutral-muted hover:text-navy transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-neutral-muted hover:text-navy transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-navy mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-muted hover:text-cyan-primary transition-colors"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-muted hover:text-cyan-primary transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-neutral-muted hover:text-cyan-primary transition-colors"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-muted">
          <p>&copy; {currentYear} Kumari Akanksha. All rights reserved.</p>
          <p>Based in {PERSONAL_INFO.location}</p>
        </div>
      </div>
    </footer>
  )
}
