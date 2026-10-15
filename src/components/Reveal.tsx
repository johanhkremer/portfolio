import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

// Tonar in och glider upp när elementet scrollas in i bild.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export type Tone = 'yellow' | 'rose'

// Var på gradientskalan (text-sunset) en rubrik börjar och slutar. Gula rubriker
// startar i gult, rosa rubriker längre in på skalan. Båda glider lika långt (70 punkter).
export const gradientRange: Record<Tone, [string, string]> = {
  yellow: ['0%', '70%'],
  rose: ['30%', '100%'],
}

// Text med gradient som glider åt sidan när man scrollar förbi den.
export function GradientText({
  as = 'h2',
  tone = 'yellow',
  children,
  className = '',
}: {
  as?: 'h2' | 'span' | 'p'
  tone?: Tone
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    // Rörelsen sker medan rubriken är läsbar i bild (från 85 % ned till 15 % ned i fönstret)
    offset: ['start 85%', 'start 15%'],
  })
  const [from, to] = gradientRange[tone]
  const x = useTransform(scrollYProgress, [0, 1], [from, reduce ? from : to])
  const Tag = motion[as] as typeof motion.h2

  return (
    <Tag
      ref={ref as React.Ref<HTMLHeadingElement>}
      style={{ backgroundPositionX: x }}
      className={`text-sunset ${className}`}
    >
      {children}
    </Tag>
  )
}

export function SectionHeading({
  label,
  title,
  tone = 'yellow',
  className = '',
}: {
  label: string
  title: string
  tone?: Tone
  className?: string
}) {
  return (
    <Reveal className={className}>
      <p
        className={`mb-4 font-label text-lg ${tone === 'rose' ? 'text-rose' : 'text-amber'}`}
      >
        {label}
      </p>
      <GradientText
        tone={tone}
        className="font-display text-5xl sm:text-6xl lg:text-7xl"
      >
        {title}
      </GradientText>
    </Reveal>
  )
}
