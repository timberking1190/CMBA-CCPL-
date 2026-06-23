'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { Marquee } from './marquee'
import { CountUp } from './count-up'
import { cn } from '@/lib/utils'

export type Stat = { value: number; suffix?: string; label: string }

export function MediaCard({
  index,
  tagline,
  title,
  description,
  marqueeText,
  marqueeTone,
  stats,
  priceLabel,
  align = 'left',
}: {
  index?: string
  tagline: string
  title: string
  description: string
  marqueeText: string
  marqueeTone: 'red' | 'black'
  stats?: Stat[]
  priceLabel?: string
  align?: 'left' | 'right'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <motion.div
      ref={ref}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'group relative w-full max-w-2xl',
        align === 'right' ? 'ml-auto md:mt-24' : 'mr-auto',
      )}
    >
      {/* Media area */}
      <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] transition-shadow duration-500 group-hover:shadow-2xl sm:aspect-[16/11]">
        <motion.div style={reduce ? undefined : { y }} className="h-[116%]">
          <Marquee text={marqueeText} tone={marqueeTone} />
        </motion.div>
        {index && (
          <span className="absolute left-5 top-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-paper/80">
            Division {index}
          </span>
        )}
      </div>

      {/* Overlapping label card */}
      <div className="relative z-10 -mt-12 ml-4 mr-4 rounded-[20px] border border-hairline bg-paper p-6 shadow-sm sm:-mt-16 sm:ml-8 sm:p-8">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-red">
          {tagline}
        </span>
        <h3 className="mt-2 text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-muted">
          {description}
        </p>
        {priceLabel && (
          <div className="mt-5 inline-flex items-baseline gap-2 rounded-full border border-hairline bg-paper-grey px-4 py-1.5">
            <span className="text-base font-extrabold tracking-tight text-red">
              {priceLabel.split(' ')[0]}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
              {priceLabel.split(' ').slice(1).join(' ')}
            </span>
          </div>
        )}
        {stats && (
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 border-t border-hairline pt-5">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </span>
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-muted">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
