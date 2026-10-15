import { useState } from 'react'

import { contact, site } from '../content'
import { contactSchema, sendContactEmail } from '../server/contact'
import { GradientText, Reveal, SectionHeading } from './Reveal'

type Status = 'idle' | 'sending' | 'sent' | 'error'
type Errors = Partial<Record<'name' | 'email' | 'message', string>>

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const values = Object.fromEntries(new FormData(form)) as Record<
      string,
      string
    >

    const parsed = contactSchema.safeParse(values)
    if (!parsed.success) {
      const next: Errors = {}
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors
        next[key] ??= issue.message
      }
      setErrors(next)
      return
    }

    setErrors({})
    setStatus('sending')
    try {
      await sendContactEmail({ data: parsed.data })
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="kontakt"
      className="relative isolate overflow-hidden py-28 sm:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-[radial-gradient(ellipse_at_50%_100%,color-mix(in_oklab,var(--color-violet)_50%,transparent),color-mix(in_oklab,var(--color-magenta)_10%,transparent)_45%,transparent_70%)]"
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading
            label={contact.label}
            title={contact.title}
            tone="rose"
          />
          <Reveal delay={0.1}>
            <p className="text-lead mt-6 max-w-md">{contact.lead}</p>
            <ul className="mt-10 space-y-3 text-lg">
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-haze underline decoration-rose decoration-2 underline-offset-8 hover:text-rose"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-haze underline decoration-rose decoration-2 underline-offset-8 hover:text-rose"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          {status === 'sent' ? (
            <div role="status" className="rounded-xl bg-card p-10">
              <GradientText
                as="p"
                tone="rose"
                className="font-display text-4xl"
              >
                Tack!
              </GradientText>
              <p className="mt-4 text-lg text-haze/85">
                Meddelandet är skickat. Jag hör av mig så snart jag kan.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-8 text-sm font-semibold text-teal hover:text-haze"
              >
                Skicka ett till
              </button>
            </div>
          ) : (
            <form
              noValidate
              onSubmit={onSubmit}
              className="space-y-5 rounded-xl bg-card p-6 pb-10 sm:p-10"
            >
              <Field
                label="Namn"
                name="name"
                error={errors.name}
                autoComplete="name"
              />
              <Field
                label="E-post"
                name="email"
                type="email"
                error={errors.email}
                autoComplete="email"
              />
              <Field
                label="Meddelande"
                name="message"
                error={errors.message}
                multiline
              />

              {/* Honeypot, dold för människor */}
              <div aria-hidden className="absolute -left-[9999px]">
                <label>
                  Företag
                  <input name="company" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              {/* Luften från felraden till knappen (20 + 20px) = luften under (pb-10) */}
              <div className="relative">
                <p className="mb-5 text-sm text-muted">{contact.privacy}</p>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full rounded-full bg-cream px-8 py-4 text-lg font-semibold text-night transition hover:brightness-110 disabled:opacity-60"
                >
                  {status === 'sending' ? 'Skickar…' : 'Skicka'}
                </button>

                <p
                  role="alert"
                  className="absolute inset-x-0 top-full mt-3 text-center text-magenta"
                >
                  {status === 'error' &&
                    'Något gick fel. Försök igen eller kontakta mig via LinkedIn.'}
                </p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  error,
  multiline,
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  error?: string
  multiline?: boolean
  autoComplete?: string
}) {
  const id = `f-${name}`
  const cls = `w-full rounded-xl border bg-night/60 px-4 py-3 text-haze placeholder:text-muted/60 transition focus:bg-night/80 focus:outline-none focus:ring-2 focus:ring-teal ${
    error ? 'border-magenta' : 'border-white/10'
  }`

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-muted">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          className={cls}
          aria-invalid={!!error}
          aria-describedby={`${id}-err`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          className={cls}
          aria-invalid={!!error}
          aria-describedby={`${id}-err`}
        />
      )}
      {/* Alltid renderad så att layouten inte hoppar när ett fel visas */}
      <p
        id={`${id}-err`}
        aria-live="polite"
        className="mt-1.5 min-h-5 text-sm text-magenta"
      >
        {error}
      </p>
    </div>
  )
}
