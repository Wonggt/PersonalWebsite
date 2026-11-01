import Chrome from './components/Chrome'
import Chapter from './components/Chapter'
import Colophon from './components/Colophon'
import Marquee from './components/Marquee'
import Plate from './components/Plate'
import Reveal from './components/Reveal'
import { profile } from '@/content/profile'
import {
  badminton,
  everyday,
  footer,
  hero,
  marquee,
  travel,
  university,
  type Photo,
} from '@/content/life'

export const metadata = {
  title: 'Life',
  description:
    'I write code most days. The rest of the time I’m on a badminton court, in a coffee shop, or on a plane to somewhere I haven’t been.',
}

function PhotoGrid({ photos, rowGap }: { photos: Photo[]; rowGap?: string }) {
  return (
    <div className="plates" style={{ rowGap }}>
      {photos.map((photo, i) => (
        <Reveal
          key={photo.src}
          delay={(i % 3) * 0.5}
          style={{ gridColumn: photo.span, marginTop: photo.offset }}
        >
          <Plate {...photo} />
        </Reveal>
      ))}
    </div>
  )
}

export default function LifePage() {
  return (
    <main className="page page--life">
      <Chrome mode="life" />

      {/* ── Opening ────────────────────────────────────── */}
      <section className="hero wrap grid12">
        <div className="masthead" style={{ gridColumn: '1 / 13' }}>
          <p className="mono">{hero.kicker}</p>
          <p className="mono">{hero.runningHead}</p>
        </div>

        <div className="hero__name">
          <h1 className="display">
            {profile.first}
            <br />
            {profile.last}
          </h1>
          <p className="lede hero__lede">{hero.lede}</p>
          <p className="hero__note">{hero.note}</p>
        </div>

        <Reveal className="hero__plate" delay={1}>
          <Plate {...hero.photo} priority />
        </Reveal>

        <hr className="rule hero__rule" />
      </section>

      <Marquee items={marquee} />

      {/* ── 01 Everyday ────────────────────────────────── */}
      <Chapter no={everyday.no} label={everyday.label}>
        <div className="chapter__head">
          <h2 className="section-title">
            {everyday.title}
            <em>{everyday.titleEm}</em>
            {everyday.titleEnd}
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            {everyday.intro}
          </p>
        </div>

        <PhotoGrid photos={everyday.photos} />
      </Chapter>

      {/* ── 02 Badminton ───────────────────────────────── */}
      <Chapter no={badminton.no} label={badminton.label}>
        <div className="chapter__head">
          <h2 className="section-title">
            {badminton.title}
            <em>{badminton.titleEm}</em>
            {badminton.titleEnd}
          </h2>
        </div>

        <div className="split">
          <div className="prose">
            {badminton.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="scorecard">
            {badminton.score.map((row) => (
              <div key={row.k}>
                <dt>{row.k}</dt>
                <dd>{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div style={{ marginTop: 'clamp(32px, 4vw, 56px)' }}>
          <PhotoGrid photos={badminton.photos} rowGap="clamp(20px,2.4vw,32px)" />
        </div>

        <p className="hero__note" style={{ marginTop: 14 }}>
          {badminton.note}
        </p>
      </Chapter>

      {/* ── 03 Travel ──────────────────────────────────── */}
      <Chapter no={travel.no} label={travel.label}>
        <div className="chapter__head">
          <h2 className="section-title">
            {travel.title}
            <em>{travel.titleEm}</em>
            {travel.titleEnd}
          </h2>
          <p className="lede" style={{ marginTop: 22 }}>
            {travel.intro}
          </p>
        </div>

        <PhotoGrid photos={travel.photos} />
      </Chapter>

      {/* ── 04 University ──────────────────────────────── */}
      <Chapter no={university.no} label={university.label}>
        <div className="chapter__head">
          <h2 className="section-title">
            {university.title}
            <em>{university.titleEm}</em>
            {university.titleEnd}
          </h2>
        </div>

        <div className="split">
          <div className="prose">
            {university.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <blockquote className="pull">
            <p>{university.quote}</p>
            <footer>{university.quoteBy}</footer>
          </blockquote>
        </div>

        <div style={{ marginTop: 'clamp(32px, 4vw, 56px)' }}>
          <PhotoGrid photos={university.photos} />
        </div>
      </Chapter>

      <Colophon mark={footer.mark} mode="life" />
    </main>
  )
}
