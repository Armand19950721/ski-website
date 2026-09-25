export default function Process({ data }) {
  return (
    <section className="process" data-reveal>
      <h3 className="process-title">{data.title}</h3>
      <ol className="process-steps">
        {data.steps.map((s, i) => (
          <li key={i}>
            <div className="step-icon"><img src={s.icon} alt="" /></div>
            <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
            <div className="step-text">{s.title}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}
