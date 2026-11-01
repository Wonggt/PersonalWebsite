export default function Marquee({ items }: { items: string[] }) {
  const group = (
    <div className="marquee__group" aria-hidden="true">
      {items.map((item, i) => (
        <span key={`${item}-${i}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 40 }}>
          {item}
          <i>·</i>
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee" role="presentation">
      <div className="marquee__track">
        {group}
        {group}
      </div>
    </div>
  )
}
