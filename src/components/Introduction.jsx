import { useState } from 'react'
import { SectionTitle } from './Team.jsx'

function Accordion({ title, children, open, onToggle }) {
  return (
    <li className={open ? 'open' : ''}>
      <button className="acc-head" onClick={onToggle}>
        <span>{title}</span>
        <i className="acc-icon" aria-hidden="true" />
      </button>
      {open && <div className="acc-body">{children}</div>}
    </li>
  )
}

export default function Introduction({ courses, guides }) {
  const [open, setOpen] = useState(null)
  const toggle = (k) => () => setOpen(open === k ? null : k)

  return (
    <section id="courses" className="section intro">
      <SectionTitle en={courses.title} zh={courses.subtitle} />
      <div className="intro-inner" data-reveal>
        <h4 className="group-label">{courses.groupLabel}</h4>
        <ul className="acc">
          {courses.items.map((c, i) => (
            <Accordion key={c.name} title={c.name} open={open === `c${i}`} onToggle={toggle(`c${i}`)}>
              <div className="course-detail">
                {c.pricing.map((p) => (
                  <div key={p.label} className="detail-block">
                    <div className="detail-label">{p.label}</div>
                    <ul className="tiers">
                      {p.tiers.map(([k, v]) => <li key={k}><span>{k}</span><b>{v}</b></li>)}
                    </ul>
                    {p.note && <div className="detail-note">{p.note}</div>}
                  </div>
                ))}
                {c.details.map((d) => (
                  <div key={d.label} className="detail-block">
                    <div className="detail-label">{d.label}</div>
                    {d.lines.map((l, j) => <p key={j}>{l}</p>)}
                  </div>
                ))}
                <a href="#booking" className="btn-gold btn-sm">預約此行程</a>
              </div>
            </Accordion>
          ))}
        </ul>

        <h4 className="group-label">{guides.groupLabel}</h4>
        <ul className="acc">
          {guides.items.map((g, i) => (
            <Accordion key={g.title} title={g.title} open={open === `g${i}`} onToggle={toggle(`g${i}`)}>
              <div className="course-detail">
                {g.sections.map((s) => (
                  <div key={s.label} className="detail-block">
                    <div className="detail-label">{s.label}</div>
                    {s.lines.map((l, j) => <p key={j}>{l}</p>)}
                  </div>
                ))}
              </div>
            </Accordion>
          ))}
        </ul>
      </div>
    </section>
  )
}
