function formatPrice(price, currency) {
  return `${currency} ${price.toLocaleString()}`
}

export default function Courses({ items }) {
  return (
    <section id="courses" className="section">
      <div className="container">
        <h2>課程</h2>
        <div className="grid">
          {items.map((c, i) => (
            <div key={i} className="card">
              <div className="card-top">
                <span className="tag">{c.level}</span>
                <span className="muted">{c.duration}</span>
              </div>
              <h3>{c.name}</h3>
              <p>{c.description}</p>
              <ul className="includes">
                {c.includes.map((x, j) => <li key={j}>{x}</li>)}
              </ul>
              <div className="price">{formatPrice(c.price, c.currency)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
