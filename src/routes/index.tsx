import { createFileRoute } from '@tanstack/react-router'

import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Hero } from '../components/Hero'
import { MafCase } from '../components/MafCase'
import { Nav } from '../components/Nav'
import { Teaching } from '../components/Teaching'
import { site } from '../content'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MafCase />
        <Teaching />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>Byggd med TanStack Start</p>
        </div>
      </footer>
    </>
  )
}
