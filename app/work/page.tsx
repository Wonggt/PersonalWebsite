import type { Metadata } from 'next'
import Chrome from '../components/Chrome'
import Chapter from '../components/Chapter'
import Colophon from '../components/Colophon'
import Plate from '../components/Plate'
import Reveal from '../components/Reveal'
import { profile } from '@/content/profile'
import { awards, caps, cases, footer, hero, track } from '@/content/work'

export const metadata: Metadata = {
  title: 'Curriculum Vitae',
  description: 'AI Engineer working on retrieval-augmented generation for tax at YYC taxPOD.',
}

export default function WorkPage() {
  return (
    <main className="page page--work">
      <Chrome mode="work" />

      {/* ── Opening ────────────────────────────────────── */}
      <section className="hero wrap grid12">
        <div className="masthead" style={{ gridColumn: '1 / 13' }}>
          <p className="mono">{hero.kicker}</p>
          <p className="mono">{hero.runningHead}</p>
        </div>

        <div style={{ gridColumn: '1 / 10' }}>
          <h1 className="display">
            {profile.first}
            <br />
            {profile.last}
          </h1>
          <p className="lede" style={{ marginTop: 22 }}>
            {hero.role}
          </p>
        </div>

        <dl className="cvmeta" style={{ gridColumn: '1 / 13' }}>
          {hero.meta.map((m) => (
            <div key={m.k}>
              <dt>{m.k}</dt>
              <dd>{m.v}</dd>
            </div>
          ))}
        </dl>

        <div style={{ gridColumn: '1 / 8', marginTop: 'clamp(28px,3.4vw,44px)' }}>
          <p className="lede">{hero.summary}</p>
        </div>

        <hr className="rule hero__rule" />
      </section>

      {/* ── 01 Track ───────────────────────────────────── */}
      <Chapter no={track.no} label={track.label}>
        <ol className="track">
          {track.items.map((item) => (
            <li key={item.yr}>
              <span className="yr">{item.yr}</span>
              <div>
                <b>{item.role}</b>
                <span className="co">{item.co}</span>
              </div>
              <p>{item.out}</p>
            </li>
          ))}
        </ol>
      </Chapter>

      {/* ── 02 Selected work ───────────────────────────── */}
      <Chapter no={cases.no} label={cases.label}>
        <div className="cases">
          {cases.items.map((item) => (
            <Reveal key={item.idx}>
              <article className="case">
              <div className="case__head">
                <span className="case__idx">{item.idx}</span>
                <h3>{item.title}</h3>
              </div>

              <div className="case__body">
                <dl className="spec">
                  <dt>Problem</dt>
                  <dd>{item.problem}</dd>
                  <dt>Approach</dt>
                  <dd>{item.approach}</dd>
                  <dt>Result</dt>
                  <dd>{item.result}</dd>
                </dl>

                <div className="stack">
                  <span className="stack__label">Stack</span>
                  <ul>
                    {item.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
          ))}
        </div>
      </Chapter>

      {/* ── 03 Awards ──────────────────────────────────── */}
      <Chapter no={awards.no} label={awards.label}>
        <p className="lede" style={{ maxWidth: '58ch' }}>
          {awards.intro}
        </p>

        <ol className="awards">
          {awards.items.map((item) => (
            <li key={item.title} className={`awards__row is-${item.tone}`}>
              <span className="yr">{item.date}</span>
              <div>
                <b>{item.title}</b>
                <span className="co">{item.event}</span>
              </div>
              <p>{item.note}</p>
            </li>
          ))}
        </ol>

        <div className="plates" style={{ marginTop: 'clamp(34px, 4.4vw, 62px)' }}>
          {awards.figures.map((fig, i) => (
            <Reveal
              key={fig.src}
              delay={(i % 3) * 0.5}
              style={{ gridColumn: fig.span, marginTop: fig.offset }}
            >
              <Plate {...fig} />
            </Reveal>
          ))}
        </div>
      </Chapter>

      {/* ── 04 Capabilities ────────────────────────────── */}
      <Chapter no={caps.no} label={caps.label}>
        <div className="caps">
          {caps.groups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Chapter>

      <Colophon mark={footer.mark} mode="work" />
    </main>
  )
}
