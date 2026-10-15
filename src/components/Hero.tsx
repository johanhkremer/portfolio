import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

import { hero } from '../content'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Parallax: solen sjunker, palmerna och texten rör sig i olika takt
  const sunY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '45%'])
  const palmsY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '12%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '-30%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0])

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-svh items-end overflow-hidden"
    >
      {/* Himmel */}
      <div
        aria-hidden
        className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,var(--color-night)_0%,var(--color-dusk)_28%,var(--color-plum)_48%,#8a1f6b_66%,var(--color-coral)_86%,var(--color-amber)_100%)]"
      />

      {/* Sol */}
      <motion.div
        aria-hidden
        style={{ y: sunY }}
        className="absolute bottom-[14%] left-1/2 -z-20 aspect-square w-[min(80vw,640px)] -translate-x-1/2 lg:left-[76%] rounded-full bg-[linear-gradient(180deg,var(--color-amber)_10%,var(--color-coral)_55%,var(--color-magenta)_100%)] opacity-90 blur-[1px] [mask-image:repeating-linear-gradient(180deg,#000_0px,#000_22px,transparent_22px,transparent_30px)]"
      />
      <div
        aria-hidden
        className="absolute bottom-[10%] left-1/2 -z-20 h-1/2 w-[120vw] -translate-x-1/2 rounded-full bg-magenta/30 blur-[120px]"
      />

      {/* Palmer */}
      <motion.div
        aria-hidden
        style={{ y: palmsY }}
        className="absolute inset-x-0 bottom-0 -z-10 text-night"
      >
        <Palms />
      </motion.div>

      {/* Text */}
      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-24 sm:px-8 sm:pb-32"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 text-xs font-semibold tracking-[0.35em] text-haze/80 uppercase sm:text-sm"
        >
          {hero.kicker}
        </motion.p>

        <h1 className="font-display text-[clamp(4rem,15vw,12rem)] leading-none text-haze drop-shadow-[0_6px_30px_rgba(11,6,20,0.6)]">
          {hero.lines.map((line, i) => (
            <motion.span
              key={line}
              className={`block ${i === hero.lines.length - 1 ? 'text-sunset -mt-[0.1em] pt-[0.15em]' : ''}`}
              initial={reduce ? false : { opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 max-w-xl text-lg text-haze/90 sm:text-xl"
        >
          {hero.lead}
        </motion.p>

        <motion.a
          href="#maf"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-14 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.35em] text-haze/80 uppercase hover:text-haze"
        >
          Scrolla vidare
          <span className="inline-block animate-bounce">↓</span>
        </motion.a>
      </motion.div>
    </section>
  )
}

// Enkla palmsilhuetter längs horisonten
function Palms() {
  return (
    <svg
      viewBox="0 0 1440 360"
      preserveAspectRatio="xMidYMax slice"
      className="h-[38vh] min-h-56 w-full"
      fill="currentColor"
    >
      <path d="M0 300 Q360 270 720 290 T1440 280 V360 H0Z" />
      <Palm x={120} h={300} lean={-14} />
      <Palm x={250} h={230} lean={10} />
      <Palm x={1170} h={280} lean={16} />
      <Palm x={1310} h={330} lean={-8} />
    </svg>
  )
}

function Palm({ x, h, lean }: { x: number; h: number; lean: number }) {
  const top = 330 - h
  const tipX = x + lean * 3
  const frond = (angle: number, len: number) => {
    const rad = (angle * Math.PI) / 180
    const ex = tipX + Math.cos(rad) * len
    const ey = top + Math.sin(rad) * len
    const cx = tipX + Math.cos(rad) * len * 0.5
    const cy = top + Math.sin(rad) * len * 0.5 - 28
    return `M${tipX} ${top} Q${cx} ${cy} ${ex} ${ey} Q${cx} ${cy + 14} ${tipX} ${top + 6}Z`
  }

  return (
    <g>
      <path
        d={`M${x - 7} 340 Q${x + lean} ${top + h / 2} ${tipX - 3} ${top} L${tipX + 3} ${top} Q${x + lean + 8} ${top + h / 2} ${x + 7} 340Z`}
      />
      {[-170, -140, -105, -75, -40, -10, 20, 160].map((a) => (
        <path key={a} d={frond(a, 95)} />
      ))}
    </g>
  )
}
