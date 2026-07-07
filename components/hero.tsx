'use client'

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'
import { useEffect, useState } from 'react'
import { MagneticButton } from './magnetic-button'
import { RegisterButton } from './register-button'
import { CalgaryBackdrop } from './calgary-backdrop'
import { LINKS } from '@/lib/links'

const ROTATING = ['Real.', 'Premier.', 'Bigger.', 'Local.', 'Legendary.']

function MaskLine({
  children,
  delay,
}: {
  children: React.ReactNode
  delay: number
}) {
  const reduce = useReducedMotion()
  return (
    <span className="block overflow-hidden pb-[0.05em]">
      <motion.span
        className="block"
        initial={reduce ? { opacity: 0 } : { y: '110%' }}
        animate={reduce ? { opacity: 1 } : { y: '0%' }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING.length)
    }, 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-paper px-6 pb-12 pt-28 md:px-10"
    >
      {/* Dynamic Calgary skyline backdrop */}
      <CalgaryBackdrop />

      {/* Eyebrow row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between border-b border-hairline pb-5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-muted sm:text-xs"
      >
        <span>Established 2026 · Calgary, AB</span>
        <span className="text-ink">Tips off Fall 2026</span>
      </motion.div>

      {/* Headline */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center py-10">
        <h1 className="display text-ink text-[clamp(3rem,13vw,11rem)]">
          <MaskLine delay={0.3}>Play</MaskLine>
          <MaskLine delay={0.42}>Something</MaskLine>
          <span className="block overflow-hidden pb-[0.05em]">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROTATING[index]}
                className="block text-red"
                initial={{ y: '60%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-60%', opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {ROTATING[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-hairline pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="max-w-md text-pretty text-base text-muted">
          The first club tournament league in Alberta, sanctioned by the
          province largest basketball association.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <RegisterButton tone="light" />
          <MagneticButton href="#manifesto" variant="dark">
            See the format
          </MagneticButton>
          <MagneticButton href={LINKS.notify} external variant="outline">
            Get Notified
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  )
}
