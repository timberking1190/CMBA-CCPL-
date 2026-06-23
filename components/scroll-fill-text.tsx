'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

function Word({
  children,
  progress,
  range,
  dim,
  lit,
}: {
  children: ReactNode
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  range: [number, number]
  dim: string
  lit: string
}) {
  const opacity = useTransform(progress, range, [0.18, 1])
  const color = useTransform(progress, range, [dim, lit])
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity, color }}>{children}</motion.span>
    </span>
  )
}

export function ScrollFillText({
  text,
  className,
  dim = '#8c887f',
  lit = '#16131a',
}: {
  text: string
  className?: string
  dim?: string
  lit?: string
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.3'],
  })

  const words = text.split(' ')

  if (reduce) {
    return (
      <p className={cn(className)} style={{ color: lit }}>
        {text}
      </p>
    )
  }

  return (
    <p ref={ref} className={cn('flex flex-wrap', className)}>
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            dim={dim}
            lit={lit}
          >
            {word}
          </Word>
        )
      })}
    </p>
  )
}
