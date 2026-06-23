import { Kicker, Reveal } from './reveal'
import { MediaCard } from './media-card'
import { RegisterButton } from './register-button'
import { REGISTRATION } from '@/lib/registration'

export function Divisions() {
  return (
    <section
      id="divisions"
      className="bg-paper-grey px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Kicker>Two divisions, one standard</Kicker>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Pick your bracket. Bring your best.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
          <MediaCard
            index="01"
            align="left"
            tagline="U15 Premier"
            title="U15 Premier"
            description="For U15 club and rep teams ready to push past league play."
            marqueeText="STOP-TIME ·"
            marqueeTone="red"
            priceLabel={REGISTRATION.priceLabel}
            stats={[
              { value: 3, label: 'Weekends' },
              { value: 2, label: 'Days each' },
              { value: 9, suffix: '+', label: 'Games' },
            ]}
          />
          <MediaCard
            index="02"
            align="right"
            tagline="High School Premier"
            title="High School Premier"
            description="Open to every Calgary high school program team. Bonus skills programming."
            marqueeText="GAME ON /"
            marqueeTone="black"
            priceLabel={REGISTRATION.priceLabel}
            stats={[
              { value: 3, label: 'Weekends' },
              { value: 3, label: 'Days each' },
              { value: 9, suffix: '+', label: 'Games' },
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-center gap-5 rounded-[24px] border border-hairline bg-paper px-6 py-10 text-center">
          <p className="text-balance text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            Every team. <span className="text-red">{REGISTRATION.priceLabel}.</span>{' '}
            One flat price to play.
          </p>
          <RegisterButton tone="light" align="center" />
        </div>
      </div>
    </section>
  )
}
