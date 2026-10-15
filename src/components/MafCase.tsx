import { maf } from '../content'
import { GradientText, Reveal, SectionHeading } from './Reveal'

export function MafCase() {
  return (
    <section
      id="maf"
      className="relative isolate overflow-hidden py-28 sm:py-40"
    >
      {/* Bakgrund: mörk marinblå */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,var(--color-night),var(--color-navy)_30%,var(--color-navy))]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-y-0">
          <div>
            <SectionHeading label={maf.label} title={maf.title} />
            <Reveal delay={0.1}>
              <p className="mt-4 font-display text-2xl text-haze sm:text-3xl">
                {maf.subtitle}
              </p>
            </Reveal>
          </div>
          <Reveal
            delay={0.1}
            className="lg:col-start-2 lg:row-span-2 lg:row-start-1"
          >
            <p className="text-lead">{maf.summary}</p>
            <p className="mt-4 text-muted">{maf.role}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {maf.facts.map((f) => (
                <li
                  key={f.label}
                  className="rounded-full bg-card px-4 py-1.5 text-sm font-medium text-haze"
                >
                  {f.value}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal
            delay={0.15}
            className="lg:col-start-1 lg:row-start-2 lg:mt-10"
          >
            <a
              href={maf.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3 text-lg font-semibold text-night transition hover:brightness-110"
            >
              Besök m-a-f.org <span aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="/maf-screenshot.webp"
              alt="Startsidan på m-a-f.org med rubriken Välkommen till Malmö Amatörteaterforum"
              width={1440}
              height={470}
              loading="lazy"
              className="block h-auto min-h-56 w-full object-cover grayscale brightness-[1.9] contrast-110"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(160deg,var(--color-coral),var(--color-magenta)_55%,var(--color-violet))] mix-blend-multiply"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,var(--color-navy))]"
            />
          </div>
        </Reveal>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {maf.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.1}>
              <GradientText as="span" className="font-display text-4xl">
                0{i + 1}
              </GradientText>
              <h3 className="mt-3 font-display text-2xl text-haze">
                {h.title}
              </h3>
              <p className="mt-2 text-muted">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
