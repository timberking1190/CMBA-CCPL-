'use client'

import { motion, useReducedMotion } from 'framer-motion'

const PHRASES = [
  'EVERYONE PLAYS',
  'OPEN ACCESS',
  'STOP-TIME',
  'CERTIFIED REFS',
  'CALGARY FIRST',
  'REAL HOOPS',
]

export function Ticker() {
  const reduce = useReducedMotion()
  const content = (
    <div className="flex items-center gap-6 pr-6">
      {PHRASES.map((p) => (
        <span key={p} className="flex items-center gap-6">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-ink">
            {p}
          </span>
          <span className="text-red">·</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="overflow-hidden border-y border-hairline bg-paper py-4">
      {reduce ? (
        <div className="px-6">{content}</div>
      ) : (
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
        >
          {content}
          {content}
          {content}
          {content}
        </motion.div>
      )}
    </div>
  )
}
