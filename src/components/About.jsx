export default function About({ data }) {
  return (
    <section id="about" className="about">
      <img src={data.mountainImage} alt="" className="about-mountain" />
      <div className="about-side about-side-l" style={{ backgroundImage: `url(${data.sideImages[0]})` }} />
      <div className="about-side about-side-r" style={{ backgroundImage: `url(${data.sideImages[1]})` }} />
      <div className="about-inner" data-reveal>
        <h2>{data.title}</h2>
        <p className="about-lead">{data.lead}</p>
        <div className="about-text">
          {data.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="features">
          {data.features.map((f) => (
            <div key={f.title} className="feature">
              <strong>{f.title}</strong>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
