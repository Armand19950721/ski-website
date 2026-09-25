export default function Announcements({ items }) {
  if (!items || items.length === 0) return null
  return (
    <section className="announcements">
      <div className="container">
        {items.map((a, i) => (
          <div key={i} className="announcement">
            <span className="announcement-date">{a.date}</span>
            <span>{a.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
