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

export default function Introduction({ data }) {
  const [open, setOpen] = useState(null)
  const toggle = (k) => () => setOpen(open === k ? null : k)

  return (
    <section id="courses" className="section intro">
      <SectionTitle en={data.title} zh={data.subtitle} />
      <div className="intro-inner" data-reveal>
        {data.groups.map((g, gi) => (
          <div key={g.label}>
            <h4 className="group-label">{g.label}</h4>
            <ul className="acc">
              {g.items.map((item, i) => (
                <Accordion key={item.title} title={item.title} open={open === `${gi}-${i}`} onToggle={toggle(`${gi}-${i}`)}>
                  <div className="course-detail">
                    {item.sections.map((s) => (
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
        ))}
      </div>
    </section>
  )
}
