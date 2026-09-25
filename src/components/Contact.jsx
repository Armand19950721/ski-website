export default function Contact({ data }) {
  return (
    <section id="contact" className="section section-alt">
      <div className="container narrow">
        <h2>聯絡我們</h2>
        <div className="contact-list">
          <div><strong>LINE</strong><a href={data.lineLink} target="_blank" rel="noreferrer">{data.line}</a></div>
          <div><strong>Email</strong><a href={`mailto:${data.email}`}>{data.email}</a></div>
          <div><strong>電話</strong><a href={`tel:${data.phone.replace(/[^+\d]/g, '')}`}>{data.phone}</a></div>
          <div><strong>地點</strong><span>{data.location}</span></div>
          <div><strong>營業時間</strong><span>{data.hours}</span></div>
        </div>
        <a href={data.lineLink} className="btn" target="_blank" rel="noreferrer">加 LINE 詢問課程</a>
      </div>
    </section>
  )
}
