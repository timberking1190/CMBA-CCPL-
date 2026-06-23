import { ScrollProgress } from '@/components/scroll-progress'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Intro } from '@/components/intro'
import { Divisions } from '@/components/divisions'
import { Manifesto } from '@/components/manifesto'
import { WhoPlays } from '@/components/who-plays'
import { Rules } from '@/components/rules'
import { Standard } from '@/components/standard'
import { PullQuotes } from '@/components/pull-quotes'
import { Ticker } from '@/components/ticker'
import { Calendar } from '@/components/calendar'
import { CTA } from '@/components/cta'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteNav />
      <main>
        <Hero />
        <Intro />
        <Divisions />
        <Manifesto />
        <WhoPlays />
        <Rules />
        <Standard />
        <PullQuotes />
        <Ticker />
        <Calendar />
        <CTA />
      </main>
      <SiteFooter />
    </>
  )
}
