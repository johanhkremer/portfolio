import { maf } from '../content'
import { Reveal } from './Reveal'

export function MafCase() {
  return (
    <section
      id="maf"
      className="relative isolate overflow-hidden py-28 sm:py-40"
    >
      {/* Bakgrund: turkos och violett skymning */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_10%,color-mix(in_oklab,var(--color-teal)_28%,transparent),transparent_55%),radial-gradient(ellipse_at_10%_90%,color-mix(in_oklab,var(--color-violet)_40%,transparent),transparent_60%),var(--color-night)]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-teal uppercase glow-teal">
            {maf.label}
          </p>
        </Reveal>

        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <h2 className="font-display text-[clamp(7rem,26vw,20rem)] text-sunset glow-magenta">
              {maf.title}
            </h2>
            <p className="mt-2 font-display text-3xl text-haze sm:text-4xl">
              {maf.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-xl text-haze/90">{maf.summary}</p>
            <p className="mt-4 text-muted">{maf.role}</p>
            <a
              href={maf.url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-haze px-7 py-3 font-semibold text-night transition hover:bg-amber"
            >
              Besök m-a-f.org <span aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>

        {/* TODO: byt mot en skärmdump av sajten (t.ex. /maf-screenshot.webp) */}
        <Reveal delay={0.1} className="mt-20">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-dusk shadow-[0_40px_120px_-30px_var(--color-magenta)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-coral" />
              <span className="h-3 w-3 rounded-full bg-amber" />
              <span className="h-3 w-3 rounded-full bg-teal" />
              <span className="ml-4 text-xs text-muted">m-a-f.org</span>
            </div>
            <div className="grid aspect-[16/8] place-items-center bg-[linear-gradient(135deg,var(--color-plum),var(--color-magenta)_60%,var(--color-amber))]">
              <span className="font-display text-5xl text-night/70 sm:text-7xl">
                Skärmdump här
              </span>
            </div>
          </div>
        </Reveal>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
          {maf.facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08} className="bg-night/90 p-6">
              <dt className="text-xs font-semibold tracking-[0.25em] text-muted uppercase">
                {f.label}
              </dt>
              <dd className="mt-2 text-lg font-semibold text-haze">{f.value}</dd>
            </Reveal>
          ))}
        </dl>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {maf.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.1}>
              <span className="font-display text-5xl text-magenta/70">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-xl font-bold text-haze">{h.title}</h3>
              <p className="mt-2 text-muted">{h.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
