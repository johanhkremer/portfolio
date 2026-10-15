import { teaching } from '../content'
import { Reveal, SectionHeading } from './Reveal'

// Varje kort får sin egen solnedgångston
const cardTones = [
  'from-magenta/80 via-plum to-night',
  'from-coral/80 via-plum to-night',
  'from-violet/80 via-dusk to-night',
  'from-teal/60 via-dusk to-night',
]

export function Teaching() {
  return (
    <section
      id="undervisning"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,var(--color-night),var(--color-dusk)_50%,var(--color-night))] py-28 sm:py-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <SectionHeading label={teaching.label} title={teaching.title} />
          <Reveal delay={0.1}>
            <p className="text-xl text-haze/90">{teaching.lead}</p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teaching.courses.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <article
                  className={`group relative flex h-full min-h-80 flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b p-6 transition duration-500 hover:-translate-y-1 hover:border-white/30 ${cardTones[i % cardTones.length]}`}
                >
                  <span className="absolute top-6 left-6 rounded-full border border-white/30 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-haze uppercase">
                    {c.tag}
                  </span>
                  <h3 className="font-display text-4xl text-haze transition group-hover:text-amber">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm text-haze/80">{c.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
