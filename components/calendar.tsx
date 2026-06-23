'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Kicker, Reveal } from './reveal'
import { RegisterButton } from './register-button'
import { REGISTRATION } from '@/lib/registration'

type Row = {
  weekend: string
  dates: { text: string; reds: string[] }
  span: string
  detail: string
}

const U15: Row[] = [
  {
    weekend: 'Weekend 1',
    dates: { text: 'Oct 9 / 10', reds: ['9', '10'] },
    span: 'Two days',
    detail: 'Round-robin + bracket',
  },
  {
    weekend: 'Weekend 2',
    dates: { text: 'Oct 23 / 24', reds: ['23', '24'] },
    span: 'Two days',
    detail: 'Round-robin + bracket',
  },
  {
    weekend: 'Weekend 3',
    dates: { text: 'Nov 6 / 7', reds: ['6', '7'] },
    span: 'Two days',
    detail: 'Playoffs + finals',
  },
]

const HS: Row[] = [
  {
    weekend: 'Weekend 1',
    dates: { text: 'Oct 2 to 4', reds: ['2', '4'] },
    span: 'Three days',
    detail: '+ Sunday skills',
  },
  {
    weekend: 'Weekend 2',
    dates: { text: 'Oct 16 to 18', reds: ['16', '18'] },
    span: 'Three days',
    detail: '+ Sunday skills',
  },
  {
    weekend: 'Weekend 3',
    dates: { text: 'Oct 30 to Nov 1', reds: ['30', '1'] },
    span: 'Three days',
    detail: 'Playoffs + finals',
  },
]

function renderDates(dates: Row['dates']) {
  const parts = dates.text.split(/(\d+)/)
  return parts.map((part, i) =>
    dates.reds.includes(part) ? (
      <span key={i} className="text-red">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

function CalendarRow({ row, index }: { row: Row; index: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative grid grid-cols-2 items-center gap-4 overflow-hidden border-t border-hairline py-5 pl-5 transition-[padding] duration-300 hover:pl-7 md:grid-cols-4"
    >
      <span
        className="absolute inset-y-0 left-0 w-0.5 bg-red transition-all duration-300 group-hover:w-1"
        aria-hidden="true"
      />
      <span className="text-sm font-bold uppercase tracking-[0.14em] text-muted">
        {row.weekend}
      </span>
      <span className="text-right text-xl font-extrabold tracking-tight text-ink md:text-left md:text-2xl">
        {renderDates(row.dates)}
      </span>
      <span className="text-sm font-semibold text-muted">{row.span}</span>
      <span className="col-span-2 text-sm font-semibold text-ink md:col-span-1 md:text-right">
        {row.detail}
      </span>
    </motion.div>
  )
}

export function Calendar() {
  return (
    <section id="calendar" className="bg-paper-grey px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Kicker>What's next</Kicker>
          <h2 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Mark the gym time.
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-lg text-muted">
            Three tournament weekends per division, October to November 2026.
          </p>
          <p className="mt-4 inline-flex items-baseline gap-2 text-base font-bold uppercase tracking-[0.12em] text-ink">
            <span className="text-2xl font-extrabold tracking-tight text-red">
              {REGISTRATION.price}
            </span>
            <span className="text-muted">{REGISTRATION.priceUnit}</span>
          </p>
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-red">
              U15 Premier
              <span className="ml-2 text-muted">(Friday to Saturday)</span>
            </h3>
            <div>
              {U15.map((row, i) => (
                <CalendarRow key={row.weekend} row={row} index={i} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-red">
              High School Premier
              <span className="ml-2 text-muted">(Friday to Sunday)</span>
            </h3>
            <div>
              {HS.map((row, i) => (
                <CalendarRow key={row.weekend} row={row} index={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-hairline pt-12 text-center">
          <RegisterButton tone="light" align="center" />
        </div>
      </div>
    </section>
  )
}
