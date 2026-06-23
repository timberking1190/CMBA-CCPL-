'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { NAV_ITEMS, LINKS } from '@/lib/links'

export function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] bg-black text-paper"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="mx-auto flex h-full max-w-7xl flex-col px-6 py-6 md:px-10">
            <div className="flex items-center justify-between">
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-muted">
                Calgary Club Premier
              </span>
              <button
                onClick={onClose}
                className="rounded-full border border-paper/30 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-paper hover:text-black"
              >
                Close
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center">
              <ul className="flex flex-col">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.25 + i * 0.06,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b border-paper/10"
                  >
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      onClick={onClose}
                      className="group flex items-baseline gap-4 py-3 md:py-4"
                    >
                      <span className="font-mono text-sm text-red md:text-base">
                        {item.num}
                      </span>
                      <span className="display text-4xl text-paper transition-colors duration-300 group-hover:text-red sm:text-6xl md:text-7xl">
                        {item.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
              <span>October to November 2026 · Calgary, AB</span>
              <a
                href={LINKS.email}
                className="text-paper transition-colors hover:text-red"
              >
                league@cmba.ab.ca
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
