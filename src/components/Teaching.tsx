import { teaching } from '../content'
import { Reveal, SectionHeading } from './Reveal'

export function Teaching() {
  return (
    <section
      id="undervisning"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#3a2447,var(--color-dusk)_35%,var(--color-dusk))] py-28 sm:py-40"
    >
      {/* Avdelare mot MAF-sektionen ovanför */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-rose),transparent)] opacity-60"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <SectionHeading
            label={teaching.label}
            title={teaching.title}
            tone="rose"
          />
          <Reveal delay={0.1}>
            <p className="text-lead">{teaching.lead}</p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teaching.courses.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <article
                  className={`group relative flex h-full flex-col sm:min-h-80 overflow-hidden rounded-xl bg-plum p-6 transition duration-500 hover:-translate-y-1 hover:bg-[color-mix(in_oklab,var(--color-plum),white_8%)]`}
                >
                  <span className="mb-12 font-label text-lg text-rose">
                    {c.tag}
                  </span>
                  <h3 className="font-display text-2xl break-words hyphens-auto text-haze sm:text-3xl lg:min-h-[2lh]">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-muted">{c.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
