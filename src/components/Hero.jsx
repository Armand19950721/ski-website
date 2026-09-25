import { useEffect, useState } from 'react'

export default function Hero({ data }) {
  const pages = 3
  const [page, setPage] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setPage((p) => (p + 1) % pages), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="top" className="hero">
      <div className="hero-collage" style={{ '--shift': page }}>
        {data.images.map((src, i) => (
          <div key={i} className={`tile t${i + 1}`} style={{ backgroundImage: `url(${src})` }} />
        ))}
        <div className="hero-fade" />
      </div>
      {data.badge && <img src={data.badge} alt="" className="hero-badge" />}
      {data.caption && <div className="hero-caption">{data.caption}</div>}
      <div className="hero-dots">
        {Array.from({ length: pages }).map((_, i) => (
          <button key={i} className={i === page ? 'on' : ''} onClick={() => setPage(i)} aria-label={`第 ${i + 1} 頁`} />
        ))}
      </div>
    </section>
  )
}
