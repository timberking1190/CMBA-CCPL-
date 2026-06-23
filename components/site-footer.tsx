import { LINKS } from '@/lib/links'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.8.22 2.43.47.66.25 1.22.59 1.77 1.14.55.55.89 1.11 1.14 1.77.25.63.42 1.36.47 2.43.05 1.07.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.8-.47 2.43a4.9 4.9 0 0 1-1.14 1.77c-.55.55-1.11.89-1.77 1.14-.63.25-1.36.42-2.43.47-1.07.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.8-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.14 4.9 4.9 0 0 1-1.14-1.77c-.25-.63-.42-1.36-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.8.47-2.43A4.9 4.9 0 0 1 3.67 3.68 4.9 4.9 0 0 1 5.44 2.54c.63-.25 1.36-.42 2.43-.47C8.94 2.01 9.28 2 12 2Zm0 1.8c-2.67 0-2.99.01-4.04.06-.98.04-1.5.21-1.86.35-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.36-.31.88-.35 1.86-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.98.21 1.5.35 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.36.14.88.31 1.86.35 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.98-.04 1.5-.21 1.86-.35.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.36.31-.88.35-1.86.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.98-.21-1.5-.35-1.86a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.36-.14-.88-.31-1.86-.35-1.05-.05-1.37-.06-4.04-.06Zm0 3.07a5.13 5.13 0 1 1 0 10.26 5.13 5.13 0 0 1 0-10.26Zm0 8.46a3.33 3.33 0 1 0 0-6.66 3.33 3.33 0 0 0 0 6.66Zm6.54-8.66a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.5a3.02 3.02 0 0 0-2.12-2.13C19.5 3.86 12 3.86 12 3.86s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.5C0 8.38 0 12 0 12s0 3.62.5 5.5a3.02 3.02 0 0 0 2.12 2.13c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.13C24 15.62 24 12 24 12s0-3.62-.5-5.5ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z" />
    </svg>
  )
}

const LEAGUE_LINKS = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Divisions', href: '#divisions' },
  { label: 'The Standard', href: '#standard' },
  { label: 'Calendar', href: '#calendar' },
  { label: 'Get Notified', href: LINKS.notify, external: true },
]

const WHEN_WHERE = [
  'October to November 2026',
  'Three tournament weekends',
  'Calgary, AB',
  'Multiple gyms',
]

export function SiteFooter() {
  return (
    <footer className="bg-black px-6 pb-10 pt-20 text-paper md:px-10 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-paper/10 pb-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <h3 className="display text-4xl text-paper sm:text-5xl">
              Calgary Club Premier.
            </h3>
            <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted">
              A CMBA production. Run by the Calgary Minor Basketball
              Association, built for the city and open to every Calgary team
              that wants real tournament basketball.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-red">
              The League
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {LEAGUE_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noopener noreferrer' : undefined}
                    className="text-sm font-semibold text-paper/80 transition-colors hover:text-red"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-red">
              When &amp; Where
            </h4>
            <ul className="mt-5 flex flex-col gap-3 text-sm font-semibold text-paper/80">
              {WHEN_WHERE.map((w) => (
                <li key={w}>{w}</li>
              ))}
              <li>
                <a
                  href={LINKS.phone}
                  className="transition-colors hover:text-red"
                >
                  (403) 804-3396
                </a>
              </li>
              <li>
                <a
                  href={LINKS.email}
                  className="transition-colors hover:text-red"
                >
                  league@cmba.ab.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            © Calgary Minor Basketball Association 2026 · CCPL 2026-27 Season
          </p>
          <div className="flex items-center gap-4">
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-paper/70 transition-colors hover:text-red"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-paper/70 transition-colors hover:text-red"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-paper/70 transition-colors hover:text-red"
            >
              <YoutubeIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
