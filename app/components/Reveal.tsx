'use client'

import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
}

/**
 * Fades + lifts its children once they enter the viewport.
 * The wrapper is the grid item, so `style={{ gridColumn }}` still works.
 */
export default function Reveal({ children, className, style, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      el.setAttribute('data-visible', 'true')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.setAttribute('data-visible', 'true')
            io.unobserve(el)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.04 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={{ ...style, ['--i' as string]: delay } as CSSProperties}
    >
      {children}
    </div>
  )
}
