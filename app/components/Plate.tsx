'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  src?: string
  alt?: string
  tone: string
  no?: string
  caption?: string
  ratio?: string
  priority?: boolean
  /** Renders the image alone, with no caption block beneath it. */
  bare?: boolean
}

export default function Plate({
  src,
  alt,
  tone,
  no,
  caption,
  ratio = '4 / 5',
  priority,
  bare,
}: Props) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading')

  // An image that 404s before hydration never fires onError, so check on mount.
  useEffect(() => {
    const el = imgRef.current
    if (!el) return
    if (el.complete) {
      setStatus(el.naturalWidth > 0 ? 'ok' : 'error')
    }
  }, [src])

  const showImage = Boolean(src) && status !== 'error'
  const showCaption = !bare && Boolean(caption)

  return (
    <figure className={`plate${bare ? ' plate--bare' : ''}`}>
      <div
        className={`plate__img ${tone}${status === 'ok' ? ' has-image' : ''}`}
        style={{ aspectRatio: ratio }}
      >
        {showImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={imgRef}
            src={src}
            alt={alt || caption || ''}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchPriority={priority ? 'high' : 'auto'}
            data-loaded={status === 'ok'}
            onLoad={() => setStatus('ok')}
            onError={() => setStatus('error')}
          />
        )}
      </div>
      {showCaption && (
        <figcaption>
          {no && <span className="plate__no">{no}</span>}
          <span className="plate__cap">{caption}</span>
        </figcaption>
      )}
    </figure>
  )
}
