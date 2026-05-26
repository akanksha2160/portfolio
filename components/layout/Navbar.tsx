'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'
import { CV_URL } from '@/lib/data'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#research' },
    { label: 'Experience', href: '#experience' },
    { label: 'Publications', href: '#publications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="font-serif text-xl font-bold text-navy hover:text-blue-primary">
            Kumari Akanksha
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-text hover:text-blue-primary font-medium text-sm transition-colors"
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
              className="flex items-center gap-2 bg-blue-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-medium"
            >
              <Download size={16} />
              CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-navy hover:text-blue-primary"
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
              className="flex items-center gap-2 bg-blue-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-medium mt-4 w-full justify-center"
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
