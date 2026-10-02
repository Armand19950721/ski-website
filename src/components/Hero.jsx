import { useEffect, useState } from 'react'

function Frame({ id }) {
  const q = new URLSearchParams({
    autoplay: 1, mute: 1, loop: 1, playlist: id, controls: 0, playsinline: 1,
    rel: 0, modestbranding: 1, iv_load_policy: 3, disablekb: 1, fs: 0,
  })
  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${id}?${q}`}
      title="Ski & Snowboard Class"
      allow="autoplay; encrypted-media"
      tabIndex={-1}
    />
  )
}

function Copy({ data }) {
  return (
    <div className="hero-copy">
      {data.caption && <div className="hero-eyebrow">{data.caption}</div>}
      <h1>
        {data.heading}
        {data.subheading && <small>{data.subheading}</small>}
      </h1>
      {data.text && <p>{data.text}</p>}
      {data.cta?.length > 0 && (
        <div className="hero-ctas">
          {data.cta.map((c, i) => (
            <a key={c.link} href={c.link} className={i === 0 ? 'btn-gold' : 'btn-outline'}>{c.text}</a>
          ))}
        </div>
      )}
    </div>
  )
}

function Collage({ images, page }) {
  return (
    <div className="hero-collage" style={{ '--shift': page }}>
      {images.map((src, i) => (
        <div key={i} className={`tile t${i + 1}`} style={{ backgroundImage: `url(${src})` }} />
      ))}
      <div className="hero-fade" />
    </div>
  )
}

export default function Hero({ data }) {
  const id = data.youtubeId
  const portrait = data.videoPortrait !== false

  if (id) {
    return (
      <section id="top" className={`hero has-video ${portrait ? 'hero-portrait' : 'hero-landscape'}`}>
        <div className="hero-bg" />
        {!portrait && (
          <div className="hero-video"><Frame id={id} /><div className="hero-fade" /></div>
        )}
        <div className="hero-wrap">
          <Copy data={data} />
          {portrait && (
            <div className="hero-frame-wrap">
              <div className="hero-frame-glow" />
              <div className="hero-frame"><Frame id={id} /><div className="hero-frame-fade" /></div>
            </div>
          )}
        </div>
      </section>
    )
  }

  const pages = 3
  const [page, setPage] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setPage((p) => (p + 1) % pages), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="top" className="hero">
      <Collage images={data.images} page={page} />
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
