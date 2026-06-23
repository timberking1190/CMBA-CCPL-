'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  ShieldCheck,
  Timer,
  Lock,
  BadgeCheck,
  Ban,
  Unlock,
  type LucideIcon,
} from 'lucide-react'
import { Kicker } from './reveal'

const TILES: { icon: LucideIcon; title: string; line: string }[] = [
  {
    icon: ShieldCheck,
    title: 'CMBA Sanctioned',
    line: 'Backed by the province largest basketball association.',
  },
  {
    icon: Timer,
    title: 'Stop-Time Play',
    line: 'Four nine-minute quarters on a real clock.',
  },
  {
    icon: Lock,
    title: 'Locked Rosters',
    line: 'Submitted before each weekend. No ringers.',
  },
  {
    icon: BadgeCheck,
    title: 'Age Verified',
    line: 'Birth dates checked. Divisions enforced. No grey areas.',
  },
  {
    icon: Ban,
    title: 'Zero Recruiting',
    line: 'No in-gym poaching. Show up, play, go home.',
  },
  {
    icon: Unlock,
    title: 'Open Access',
    line: 'Any team in the city. No invitation required.',
  },
]

export function Standard() {
  const reduce = useReducedMotion()

  return (
    <section id="standard" className="bg-black px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Kicker dark>The standard</Kicker>
        <h2 className="mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-paper sm:text-5xl md:text-6xl">
          Sanctioned <span className="text-red">with standards.</span>
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map((tile, i) => {
            const Icon = tile.icon
            return (
              <motion.div
                key={tile.title}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col gap-4 bg-black p-8 transition-colors duration-300 hover:bg-ink"
              >
                <Icon
                  className="h-7 w-7 text-red transition-transform duration-300 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-extrabold tracking-tight text-paper">
                  {tile.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted">
                  {tile.line}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
