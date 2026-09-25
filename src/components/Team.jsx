import { useState } from 'react'

export default function Team({ data }) {
  const [active, setActive] = useState(null)
  return (
    <section id="team" className="section team">
      <SectionTitle en={data.title} zh={data.subtitle} />
      <div className="team-track" data-reveal>
        {data.members.map((m, i) => (
          <button key={i} className="coach" onClick={() => setActive(m)}>
            <div className="coach-photo" style={{ backgroundImage: `url(${m.image})` }}>
              <span className="coach-expand">⤢</span>
            </div>
            <div className="coach-title">{m.title}</div>
            <div className="coach-name">{m.name}</div>
          </button>
        ))}
      </div>

      {active && (
        <div className="modal" onClick={() => setActive(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-x" onClick={() => setActive(null)} aria-label="關閉">×</button>
            <div className="modal-photo" style={{ backgroundImage: `url(${active.image})` }} />
            <div className="modal-body">
              <div className="coach-title">{active.title}</div>
              <h3>{active.name}</h3>
              <p>{active.bio}</p>
              <div className="cert-label">Certificate</div>
              <div className="tags">
                {active.langs.map((t) => <span key={t} className="tag tag-lang">{t}</span>)}
                {active.certs.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export function SectionTitle({ en, zh }) {
  return (
    <div className="sec-title" data-reveal>
      <h2>{en}</h2>
      <p>{zh}</p>
    </div>
  )
}
