export default function FAQ({ items }) {
  return (
    <section id="faq" className="section">
      <div className="container narrow">
        <h2>常見問題</h2>
        {items.map((f, i) => (
          <details key={i} className="faq-item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
