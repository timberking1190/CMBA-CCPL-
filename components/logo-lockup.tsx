import { cn } from '@/lib/utils'

export function LogoLockup({
  className,
  dark = false,
}: {
  className?: string
  dark?: boolean
}) {
  return (
    <a
      href="#top"
      className={cn('group inline-flex items-center gap-3', className)}
      aria-label="Calgary Club Premier, back to top"
    >
      <span
        className={cn(
          'flex h-9 w-9 items-center justify-center border text-[0.7rem] font-extrabold tracking-tight transition-colors',
          dark
            ? 'border-paper/40 text-paper group-hover:border-paper'
            : 'border-ink/40 text-ink group-hover:border-ink',
        )}
      >
        CC<span className="text-red">P</span>L
      </span>
      <span className="hidden flex-col leading-none sm:flex">
        <span
          className={cn(
            'text-[0.7rem] font-bold uppercase tracking-[0.18em]',
            dark ? 'text-paper' : 'text-ink',
          )}
        >
          Calgary Club
        </span>
        <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-muted">
          Premier
        </span>
      </span>
    </a>
  )
}
