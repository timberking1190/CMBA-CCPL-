import { Reveal } from './reveal'

const QUOTES = [
  {
    pre: "We're not building another tournament. We're building the league Calgary's ",
    red: 'been waiting for.',
    post: '',
    by: 'The CCPL Charter',
  },
  {
    pre: 'Three games each tournament with organizations of all shapes and sizes. ',
    red: 'This is how we build players and grow the game.',
    post: '',
    by: 'Calgary Minor Basketball Association',
  },
  {
    pre: 'Local gyms. Local refs. ',
    red: 'Local rivalries that stay local.',
    post: '',
    by: 'Calgary First, the CCPL way',
  },
]

export function PullQuotes() {
  return (
    <section className="bg-paper px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 md:gap-28">
        {QUOTES.map((q, i) => (
          <Reveal key={i}>
            <figure
              className={i % 2 === 1 ? 'md:ml-auto md:max-w-4xl' : 'md:max-w-4xl'}
            >
              <blockquote className="text-balance text-3xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl">
                {q.pre}
                <span className="text-red">{q.red}</span>
                {q.post}
              </blockquote>
              <figcaption className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-muted">
                {q.by}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
