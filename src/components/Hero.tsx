import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

import { hero } from '../content'
import { gradientRange } from './Reveal'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax: bilden rör sig långsammare än texten
  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', reduce ? '0%' : '15%'],
  )
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', reduce ? '0%' : '-30%'],
  )
  const [gradFrom, gradTo] = gradientRange.yellow
  const gradX = useTransform(
    scrollYProgress,
    [0, 1],
    [gradFrom, reduce ? gradFrom : gradTo],
  )
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0])

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-svh items-center justify-center text-center overflow-hidden"
    >
      {/* Bakgrundsbild: Malmö i skymning (se credits i content.ts) */}
      <motion.div
        aria-hidden
        style={{ y: imgY }}
        className="absolute inset-x-0 -top-[15%] -z-20 h-[115%]"
      >
        <picture>
          <source media="(max-width: 767px)" srcSet="/hero-malmo-mobil.webp" />
          <img
            src="/hero-malmo.webp"
            alt=""
            width={2400}
            height={1627}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-[50%_40%]"
          />
        </picture>
      </motion.div>

      {/* Toning: mörk över nav, lätt slöja bakom texten och mjuk övergång till nästa sektion */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-night)_75%,transparent)_0%,color-mix(in_oklab,var(--color-night)_45%,transparent)_30%,color-mix(in_oklab,var(--color-night)_55%,transparent)_60%,var(--color-night)_100%)]"
      />

      {/* Text */}
      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 pt-24 pb-[clamp(6rem,19svh,12rem)] sm:px-8"
      >
        <p
          style={{ '--delay': '0.1s' } as React.CSSProperties}
          className="animate-rise mb-6 font-label text-lg text-amber"
        >
          {hero.kicker}
        </p>

        <h1 className="font-display drop-shadow-[0_2px_24px_rgba(20,10,30,0.55)] text-[clamp(3rem,min(9vw,13svh),6.5rem)] leading-[1.08] text-haze">
          {hero.lines.map((line, i) => (
            <motion.span
              key={line}
              style={
                {
                  '--delay': `${0.2 + i * 0.12}s`,
                  '--rise-y': '60px',
                  ...(i === hero.lines.length - 1
                    ? { backgroundPositionX: gradX }
                    : {}),
                } as React.CSSProperties
              }
              className={`animate-rise block ${i === hero.lines.length - 1 ? 'text-sunset' : ''}`}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <p
          style={{ '--delay': '0.7s' } as React.CSSProperties}
          className="animate-rise text-lead mt-8 max-w-xl drop-shadow-[0_1px_12px_rgba(20,10,30,0.6)]"
        >
          {hero.lead}
        </p>
      </motion.div>

      {/* Scrollmarkör: ligger i botten av sidan och tonas ut vid scroll */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute inset-x-0 bottom-6 flex justify-center pb-[env(safe-area-inset-bottom)] sm:bottom-8"
      >
        <a
          href="#maf"
          style={
            { '--delay': '1.1s', '--rise-y': '0px' } as React.CSSProperties
          }
          className="animate-rise inline-flex h-12 w-12 items-center justify-center text-amber transition hover:text-haze"
        >
          <span className="sr-only">Scrolla vidare till projekt</span>
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-7 w-7 animate-bounce motion-reduce:animate-none"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
