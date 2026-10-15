import { motion, useReducedMotion } from 'motion/react'

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
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  label,
  title,
  className = '',
}: {
  label: string
  title: string
  className?: string
}) {
  return (
    <Reveal className={className}>
      <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-teal uppercase glow-teal">
        {label}
      </p>
      <h2 className="font-display text-6xl text-haze sm:text-7xl lg:text-8xl">
        {title}
      </h2>
    </Reveal>
  )
}
