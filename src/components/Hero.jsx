export default function Hero({ data }) {
  return (
    <section id="top" className="hero" style={{ backgroundImage: `url(${data.image})` }}>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
        <div className="hero-actions">
          <a href={data.primaryButton.link} className="btn">{data.primaryButton.text}</a>
          <a href={data.secondaryButton.link} className="btn btn-outline">{data.secondaryButton.text}</a>
        </div>
      </div>
    </section>
  )
}
