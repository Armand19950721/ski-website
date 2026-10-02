import { useEffect, useState } from 'react'

function Video({ id }) {
  const q = new URLSearchParams({
    autoplay: 1, mute: 1, loop: 1, playlist: id, controls: 0, playsinline: 1,
    rel: 0, modestbranding: 1, iv_load_policy: 3, disablekb: 1,
  })
  return (
    <div className="hero-video">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?${q}`}
        title="Ski & Snowboard Class"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen={false}
        tabIndex={-1}
      />
      <div className="hero-fade" />
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
  const pages = 3
  const video = !!data.youtubeId
  const [page, setPage] = useState(0)
  useEffect(() => {
    if (video) return
    const t = setInterval(() => setPage((p) => (p + 1) % pages), 5000)
    return () => clearInterval(t)
  }, [video])

  return (
    <section id="top" className={`hero ${video ? 'has-video' : ''}`}>
      {video ? <Video id={data.youtubeId} /> : <Collage images={data.images} page={page} />}
      {data.badge && <img src={data.badge} alt="" className="hero-badge" />}
      {data.caption && <div className="hero-caption">{data.caption}</div>}
      {!video && (
        <div className="hero-dots">
          {Array.from({ length: pages }).map((_, i) => (
            <button key={i} className={i === page ? 'on' : ''} onClick={() => setPage(i)} aria-label={`第 ${i + 1} 頁`} />
          ))}
        </div>
      )}
    </section>
  )
}
