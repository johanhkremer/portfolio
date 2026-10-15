import { useEffect, useState } from 'react'

const links = [
  { href: '#maf', label: 'MAF' },
  { href: '#undervisning', label: 'Undervisning' },
  { href: '#om', label: 'Om mig' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-night/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-3xl text-sunset"
          aria-label="Till toppen"
        >
          JK
        </a>

        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold tracking-[0.2em] text-haze/80 uppercase transition hover:text-magenta"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobilmeny"
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`h-0.5 w-6 bg-haze transition ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-haze transition ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-haze transition ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {open && (
        <ul id="mobilmeny" className="flex flex-col gap-1 px-4 pb-6 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-display text-4xl text-haze hover:text-magenta"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
