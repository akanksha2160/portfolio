import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { ResearchInterests } from '@/components/sections/ResearchInterests'
import { Education } from '@/components/sections/Education'
import { Experience } from '@/components/sections/Experience'
import { Publications } from '@/components/sections/Publications'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Awards } from '@/components/sections/Awards'
import { Service } from '@/components/sections/Service'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ResearchInterests />
        <Education />
        <Experience />
        <Publications />
        <Projects />
        <Skills />
        <Awards />
        <Service />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
