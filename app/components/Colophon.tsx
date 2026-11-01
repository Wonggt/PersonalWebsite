import Link from 'next/link'
import { nav, profile } from '@/content/profile'

type Props = {
  mark: string
  mode: 'life' | 'work'
}

export default function Colophon({ mark, mode }: Props) {
  const other = mode === 'life' ? nav.work : nav.life

  return (
    <footer className="colophon wrap">
      <p className="colophon__mark">{mark}</p>

      <div className="links">
        {mode === 'work' ? (
          <>
            <a href={profile.cv} download>
              Download CV
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </>
        ) : (
          <>
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </>
        )}
        <Link href={other.href}>{other.label} →</Link>
      </div>

      <p className="imprint">
        © {profile.year} {profile.name} · {profile.city}
      </p>
    </footer>
  )
}
