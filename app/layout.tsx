import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://akanksha2160.github.io/portfolio'),
  title: 'Kumari Akanksha | Computational Imaging & Deep Learning for Biomedical Research',
  description: 'Master\'s student in Biomedical Engineering at NCKU. Research in computational microscopy, deep learning, and image-based phenotyping.',
  keywords: ['Computational Imaging', 'Deep Learning', 'Biomedical Engineering', 'Scientific Machine Learning', 'Biological Image Analysis'],
  authors: [{ name: 'Kumari Akanksha' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://akanksha2160.github.io/portfolio',
    siteName: 'Kumari Akanksha Portfolio',
    title: 'Kumari Akanksha | Computational Imaging & Deep Learning',
    description: 'Master\'s student in Biomedical Engineering. Research in computational microscopy and deep learning for biological systems.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@akanksha2160',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://akanksha2160.github.io/portfolio" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Kumari Akanksha',
            url: 'https://akanksha2160.github.io/portfolio',
            email: 'kakankshatk.7@gmail.com',
            jobTitle: 'Graduate Research Assistant',
            affiliation: {
              '@type': 'Organization',
              name: 'National Cheng Kung University',
            },
            sameAs: [
              'https://github.com/akanksha2160',
              'https://linkedin.com/in/akanksha2160',
            ],
          })}
        </script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
