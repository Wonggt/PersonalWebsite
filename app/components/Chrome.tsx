import Link from 'next/link'
import { nav, profile } from '@/content/profile'

export default function Chrome({ mode }: { mode: 'life' | 'work' }) {
  const other = mode === 'life' ? nav.work : nav.life

  return (
    <header className="chrome">
      <div className="wrap chrome__inner">
        <Link href="/" className="mark" aria-label={`${profile.name} — home`}>
          A<em>W</em>
        </Link>

        <Link href={other.href} className="switch">
          {other.label}
          <svg width="15" height="8" viewBox="0 0 15 8" fill="none" aria-hidden="true">
            <path d="M0 4h13M10 1l3 3-3 3" stroke="currentColor" strokeWidth="1" />
          </svg>
        </Link>
      </div>
    </header>
  )
}
