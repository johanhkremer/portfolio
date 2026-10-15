import { Link } from '@tanstack/react-router'

import { GradientText } from './Reveal'

export function NotFound() {
  return (
    <main className="relative isolate grid min-h-svh place-items-center overflow-hidden px-4 text-center">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,color-mix(in_oklab,var(--color-violet)_55%,transparent),transparent_70%),linear-gradient(180deg,#1c1226,var(--color-night))]"
      />
      <div>
        <p className="font-label text-lg text-amber">Felkod 404</p>
        <GradientText
          as="h1"
          className="font-display text-6xl sm:text-7xl lg:text-8xl"
        >
          Sidan finns inte
        </GradientText>
        <p className="text-lead mx-auto mt-6 max-w-md">
          Adressen stämmer inte, eller så har sidan flyttat. Gå tillbaka till
          startsidan så hittar du rätt.
        </p>
        <Link
          to="/"
          className="mt-10 inline-flex items-center rounded-full bg-cream px-7 py-3 text-lg font-semibold text-night transition hover:brightness-110"
        >
          Till startsidan
        </Link>
      </div>
    </main>
  )
}
