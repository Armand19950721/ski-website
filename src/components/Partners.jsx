import { SectionTitle } from './Team.jsx'

export default function Partners({ data }) {
  return (
    <section id="partners" className="partners">
      <div className="partners-bg" style={{ backgroundImage: `url(${data.background})` }} />
      <div className="partners-inner">
        <SectionTitle en={data.title} zh={data.subtitle} />
        <p className="partners-lead" data-reveal>{data.lead}</p>
        <div className="logo-grid" data-reveal>
          {data.items.map((p) => (
            <a key={p.name} href={p.link} target="_blank" rel="noreferrer" className="logo" title={p.name}>
              <img src={p.logo} alt={p.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
