import { Kicker, Reveal } from './reveal'
import { MediaCard } from './media-card'

export function WhoPlays() {
  return (
    <section className="bg-paper-grey px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Kicker>No invitation required</Kicker>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Who plays.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
          <MediaCard
            align="left"
            tagline="Any club. Any CMBA team."
            title="Open the doors"
            description="No invitation. No membership. No closed circles. If you're in the city and you want in, you're in."
            marqueeText="ANY CLUB + ANY TEAM +"
            marqueeTone="red"
          />
          <MediaCard
            align="right"
            tagline="Same gym. Same refs."
            title="No politics"
            description="Club jersey or CMBA jersey. Same standings, same stakes. The only thing that changes is the crest."
            marqueeText="REAL HOOPS ·"
            marqueeTone="black"
          />
        </div>
      </div>
    </section>
  )
}
