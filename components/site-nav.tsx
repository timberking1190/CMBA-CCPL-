'use client'

import { useState } from 'react'
import { LogoLockup } from './logo-lockup'
import { MenuOverlay } from './menu-overlay'

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div className="rounded-full bg-paper/70 px-3 py-1.5 backdrop-blur-md">
            <LogoLockup />
          </div>
          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-ink/20 bg-paper/70 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-ink backdrop-blur-md transition-colors hover:bg-ink hover:text-paper"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  )
}
