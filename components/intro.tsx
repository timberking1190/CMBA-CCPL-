import { Kicker } from './reveal'
import { ScrollFillText } from './scroll-fill-text'

export function Intro() {
  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <Kicker>The premise</Kicker>
        <ScrollFillText
          className="mt-8 text-pretty text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl"
          text="Calgary Club Premier League is a premier tournament league designed to get high quality, competitive basketball games between club teams and CMBA's strongest teams. Stop time games. Certified refs. Great competition. Built in Calgary."
        />
      </div>
    </section>
  )
}
