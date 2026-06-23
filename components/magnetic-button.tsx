'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'red' | 'dark' | 'outline' | 'outlineDark'

const VARIANTS: Record<Variant, string> = {
  red: 'bg-red text-paper hover:bg-ink',
  dark: 'bg-ink text-paper hover:bg-red',
  outline: 'border border-ink/30 text-ink hover:bg-ink hover:text-paper',
  outlineDark:
    'border border-paper/40 text-paper hover:bg-paper hover:text-black',
}

export function MagneticButton({
  children,
  href,
  onClick,
  external,
  variant = 'red',
  className,
}: {
  children: ReactNode
  href?: string
  onClick?: () => void
  external?: boolean
  variant?: Variant
  className?: string
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const reduce = useReducedMotion()

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    setPos({ x: x * 0.25, y: y * 0.25 })
  }

  const reset = () => setPos({ x: 0, y: 0 })

  const classes = cn(
    'inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] transition-colors duration-300',
    VARIANTS[variant],
    className,
  )

  const motionProps = {
    animate: { x: pos.x, y: pos.y },
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
    onMouseMove: handleMove,
    onMouseLeave: reset,
  }

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
