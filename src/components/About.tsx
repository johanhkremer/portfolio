import { about } from '../content'
import { Reveal, SectionHeading } from './Reveal'

export function About() {
  return (
    <section id="om" className="relative isolate py-28 sm:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          {/* Duotone: bilden i gråskala med solnedgångsgradient ovanpå */}
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-2xl">
            <img
              src="/profile-large.jpg"
              alt="Johan Kremer"
              className="h-full w-full object-cover grayscale contrast-125"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(160deg,var(--color-amber),var(--color-coral)_40%,var(--color-magenta)_70%,var(--color-violet))] mix-blend-multiply" />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-white/15 ring-inset" />
          </div>
        </Reveal>

        <div>
          <SectionHeading label={about.label} title={about.title} />
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className="mt-6 text-lg text-haze/85">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <ul className="mt-10 flex flex-wrap gap-2">
              {about.skills.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-haze/90"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
