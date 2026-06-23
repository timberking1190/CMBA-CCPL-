'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { MagneticButton } from './magnetic-button'
import { REGISTRATION } from '@/lib/registration'
import { cn } from '@/lib/utils'

type Tone = 'light' | 'red' | 'dark'

const LOCKED_TONE: Record<Tone, string> = {
  light: 'border-ink/15 bg-ink/[0.035] text-ink',
  red: 'border-paper/35 bg-black/15 text-paper',
  dark: 'border-paper/20 bg-paper/5 text-paper',
}

const DATE_TONE: Record<Tone, string> = {
  light: 'text-muted',
  red: 'text-paper/75',
  dark: 'text-muted',
}

const PRICE_TONE: Record<Tone, string> = {
  light: 'text-ink',
  red: 'text-paper',
  dark: 'text-paper',
}

const DOT_TONE: Record<Tone, string> = {
  light: 'bg-red',
  red: 'bg-paper',
  dark: 'bg-red',
}

export function RegisterButton({
  tone = 'light',
  showPrice = true,
  align = 'start',
  className,
}: {
  tone?: Tone
  showPrice?: boolean
  align?: 'start' | 'center'
  className?: string
}) {
  const reduce = useReducedMotion()

  // When registration opens, flip REGISTRATION.isOpen + set registerHref.
  if (REGISTRATION.isOpen && REGISTRATION.registerHref) {
    return (
      <div
        className={cn(
          'flex flex-col gap-2',
          align === 'center' ? 'items-center' : 'items-start',
          className,
        )}
      >
        <MagneticButton
          href={REGISTRATION.registerHref}
          external
          variant={tone === 'red' ? 'dark' : 'red'}
        >
          Register Now
        </MagneticButton>
        {showPrice && (
          <span
            className={cn(
              'text-xs font-bold uppercase tracking-[0.16em]',
              PRICE_TONE[tone],
            )}
          >
            {REGISTRATION.priceLabel}
          </span>
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'flex flex-col gap-2.5',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className,
      )}
    >
      <div
        role="button"
        aria-disabled="true"
        title={`Registration ${REGISTRATION.opensLabel.toLowerCase()}`}
        className={cn(
          'group relative inline-flex cursor-not-allowed items-center gap-2.5 overflow-hidden rounded-full border px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] select-none',
          LOCKED_TONE[tone],
        )}
      >
        {/* Sweeping sheen so the locked state still feels alive */}
        {!reduce && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
            animate={{ x: ['0%', '420%'] }}
            transition={{
              duration: 2.6,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1.8,
            }}
          />
        )}
        <Lock className="h-4 w-4 opacity-70" strokeWidth={2.2} aria-hidden="true" />
        Register
      </div>

      <span
        className={cn(
          'inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em]',
          DATE_TONE[tone],
        )}
      >
        <span className="relative flex h-1.5 w-1.5">
          {!reduce && (
            <span
              className={cn(
                'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
                DOT_TONE[tone],
              )}
            />
          )}
          <span
            className={cn('relative inline-flex h-1.5 w-1.5 rounded-full', DOT_TONE[tone])}
          />
        </span>
        {REGISTRATION.opensLabel}
        {showPrice && (
          <>
            <span aria-hidden="true" className="opacity-40">
              ·
            </span>
            <span className={PRICE_TONE[tone]}>{REGISTRATION.priceLabel}</span>
          </>
        )}
      </span>
    </div>
  )
}
