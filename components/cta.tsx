import { Reveal } from './reveal'
import { MagneticButton } from './magnetic-button'
import { RegisterButton } from './register-button'
import { LINKS } from '@/lib/links'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-red px-6 py-28 md:px-10 md:py-40">
      {/* Diagonal stripe texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #0c0b0e 0, #0c0b0e 2px, transparent 2px, transparent 22px)',
        }}
      />
      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="display text-balance text-paper text-[clamp(2.5rem,8vw,6rem)]">
            Ready for real basketball?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-paper/90 sm:text-xl">
            Registration opens June 2026. Get on the list and we'll tell you the
            second the floor opens.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-12 flex flex-col items-center gap-8">
            <RegisterButton tone="red" align="center" />
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href={LINKS.notify} external variant="dark">
                Get Notified
              </MagneticButton>
              <MagneticButton href={LINKS.email} variant="outlineDark">
                Contact the League
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
