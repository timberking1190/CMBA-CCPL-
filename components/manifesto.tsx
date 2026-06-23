import { Kicker, Reveal } from './reveal'
import { ScrollFillText } from './scroll-fill-text'
import { MagneticButton } from './magnetic-button'
import { LINKS } from '@/lib/links'

export function Manifesto() {
  return (
    <section id="manifesto" className="bg-paper px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <Kicker>Premier when it matters most</Kicker>
        </Reveal>
        <ScrollFillText
          className="mt-8 text-pretty text-3xl font-semibold leading-[1.18] tracking-tight sm:text-4xl md:text-5xl"
          text="Premier doesn't mean exclusive, but rather, it means real. The best. For everyone. A high performance club tournament league sanctioned by the largest basketball association in the region."
        />
        <Reveal delay={0.1}>
          <div className="mt-10">
            <MagneticButton href={LINKS.notify} external variant="red">
              Get on the list
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
