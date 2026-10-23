'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'
import { CV_URL } from '@/lib/data'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Technical', href: '#technical' },
    { label: 'Publications', href: '#publications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-neutral-bg/80 backdrop-blur-xl border-b border-neutral-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg text-neutral-text hover:text-cyan-primary transition-colors">
            Kumari Akanksha
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-muted hover:text-cyan-primary font-medium text-sm transition-colors border-b-2 border-transparent hover:border-cyan-primary/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CV Download Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={CV_URL}
              download
              className="flex items-center gap-2 border border-neutral-text text-neutral-text px-4 py-2 rounded-lg hover:bg-neutral-text hover:text-neutral-bg font-medium text-sm transition-all"
            >
              <Download size={16} />
              CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-text hover:text-cyan-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-neutral-text hover:text-blue-primary py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CV_URL}
              download
              className="flex items-center gap-2 border border-neutral-text text-neutral-text px-4 py-2 rounded-lg font-medium mt-4 w-full justify-center"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
