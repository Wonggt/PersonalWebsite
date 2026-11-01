import type { ReactNode } from 'react'

type Props = {
  no: string
  label: string
  children: ReactNode
}

export default function Chapter({ no, label, children }: Props) {
  return (
    <section className="chapter wrap">
      <div className="chapter__rail">
        <span className="numeral" aria-hidden="true">
          {no}
        </span>
        <span className="chapter__label">{label}</span>
      </div>
      <div className="chapter__body">{children}</div>
    </section>
  )
}
