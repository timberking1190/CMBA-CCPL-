'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { Kicker } from './reveal'

const ITEMS = [
  'Stop-Time Clocks',
  'Four 9-Minute Quarters',
  'Certified Refs',
  'Locked Rosters',
  'Age Verified',
  'Zero Recruiting',
  'Competitive Matchups',
  'Team Placement Verification',
  'Three Weekends',
  'Open Access',
  'One League',
]

function Item({
  label,
  progress,
  range,
  showPlus,
}: {
  label: string
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  range: [number, number]
  showPlus: boolean
}) {
  const color = useTransform(progress, range, ['#3a3640', '#ffffff'])
  return (
    <span className="inline">
      {showPlus && <span className="px-2 text-red sm:px-3">+</span>}
      <motion.span style={{ color }}>{label}</motion.span>
    </span>
  )
}

export function Rules() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.6'],
  })

  return (
    <section className="bg-black px-6 py-24 md:px-10 md:py-36">
      <div ref={ref} className="mx-auto max-w-6xl">
        <Kicker dark>Real games. Real rules.</Kicker>
        <p className="mt-10 text-balance text-3xl font-extrabold leading-[1.2] tracking-tight sm:text-4xl md:text-5xl">
          {reduce ? (
            <span className="text-paper">
              {ITEMS.map((item, i) => (
                <span key={item}>
                  {i > 0 && <span className="px-2 text-red sm:px-3">+</span>}
                  {item}
                </span>
              ))}
            </span>
          ) : (
            ITEMS.map((item, i) => {
              const start = i / ITEMS.length
              const end = start + 1 / ITEMS.length
              return (
                <Item
                  key={item}
                  label={item}
                  progress={scrollYProgress}
                  range={[start, end]}
                  showPlus={i > 0}
                />
              )
            })
          )}
        </p>
      </div>
    </section>
  )
}
