export default function Instructors({ items }) {
  return (
    <section id="instructors" className="section section-alt">
      <div className="container">
        <h2>教練</h2>
        <div className="grid">
          {items.map((p, i) => (
            <div key={i} className="card instructor">
              <div className="avatar" style={{ backgroundImage: `url(${p.image})` }} />
              <h3>{p.name}</h3>
              <div className="muted">{p.title}</div>
              <div className="certs">
                {p.certs.map((c, j) => <span key={j} className="tag">{c}</span>)}
              </div>
              <p>{p.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
