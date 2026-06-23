'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Marquee({
  text,
  tone = 'red',
  speed = 18,
  reverse = false,
  className,
}: {
  text: string
  tone?: 'red' | 'black' | 'paper'
  speed?: number
  reverse?: boolean
  className?: string
}) {
  const reduce = useReducedMotion()

  const tones: Record<string, string> = {
    red: 'bg-red text-paper',
    black: 'bg-black text-paper',
    paper: 'bg-paper text-ink',
  }

  const repeated = Array.from({ length: 6 }, () => text).join(' ')

  return (
    <div
      className={cn(
        'relative flex h-full items-center overflow-hidden',
        tones[tone],
        className,
      )}
      aria-label={text.replace(/[·/+]/g, '').trim()}
    >
      {reduce ? (
        <div className="display whitespace-nowrap px-6 text-3xl font-black sm:text-5xl">
          {text}
        </div>
      ) : (
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
          transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
        >
          <span className="display pr-4 text-4xl font-black sm:text-6xl md:text-7xl">
            {repeated}
          </span>
          <span
            className="display pr-4 text-4xl font-black sm:text-6xl md:text-7xl"
            aria-hidden="true"
          >
            {repeated}
          </span>
        </motion.div>
      )}
    </div>
  )
}
