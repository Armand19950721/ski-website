import { useState } from 'react'

const empty = { date: '', course: '', location: '', pax: '', name: '', contact: '', note: '' }

export default function Booking({ data, courses, announcements = [] }) {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState(empty)
  const [sending, setSending] = useState(false)
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const selected = courses.find((c) => c.name === form.course)
  const step1ok = form.date && form.course && form.location && form.pax
  const step2ok = form.name && form.contact

  async function submit(e) {
    e.preventDefault()
    if (!step2ok) return
    setSending(true)
    if (data.googleFormId) {
      const body = new URLSearchParams()
      Object.entries(data.entries).forEach(([k, id]) => body.append(id, form[k] || ''))
      try {
        await fetch(`https://docs.google.com/forms/d/e/${data.googleFormId}/formResponse`, {
          method: 'POST', mode: 'no-cors', body,
        })
      } catch (_) { /* no-cors: cannot read result */ }
    }
    setSending(false)
    setStep(2)
  }

  return (
    <section id="booking" className="booking" data-reveal>
      {announcements.length > 0 && (
        <div className="ticker">
          <span className="ticker-label">公告</span>
          <div className="ticker-track">
            {announcements.map((a, i) => <span key={i}>{a.date}｜{a.text}</span>)}
          </div>
        </div>
      )}
      <div className="booking-card">
        <ol className="steps">
          {data.steps.map((s, i) => (
            <li key={s} className={i === step ? 'on' : i < step ? 'done' : ''}>
              <span>{i + 1}.</span>{s}
            </li>
          ))}
        </ol>

        {step === 0 && (
          <form className="bk-form" onSubmit={(e) => { e.preventDefault(); if (step1ok) setStep(1) }}>
            <div className="bk-grid">
              <label className="bk-field">
                <input type="date" className={form.date ? '' : 'empty'} value={form.date} onChange={set('date')} required />
                <span className="bk-ph">{form.date ? '' : '請選擇行程時間'}</span>
              </label>
              <select value={form.course} onChange={set('course')} required>
                <option value="">請選擇行程</option>
                {courses.map((c) => <option key={c.name}>{c.name}</option>)}
              </select>
              <select value={form.location} onChange={set('location')} required>
                <option value="">請選擇地點</option>
                {data.locations.map((l) => <option key={l}>{l}</option>)}
              </select>
              <select value={form.pax} onChange={set('pax')} required>
                <option value="">請選擇人數</option>
                {data.paxOptions.map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
            <a href="#courses" className="bk-link">全部行程介紹</a>
            <div className="bk-actions">
              <span className="bk-summary">
                {selected ? `${selected.name}｜${selected.pricing[0].label} ${selected.pricing[0].tiers[0][1]} 起` : '行程說明概要'}
              </span>
              <button className="btn-gold" disabled={!step1ok}>填寫聯絡資料 →</button>
            </div>
          </form>
        )}

        {step === 1 && (
          <form className="bk-form" onSubmit={submit}>
            <div className="bk-grid">
              <input placeholder="姓名（必填）" value={form.name} onChange={set('name')} required />
              <input placeholder="LINE ID / 電話 / Email（必填）" value={form.contact} onChange={set('contact')} required />
              <textarea placeholder="備註：程度、單板或雙板、兒童年齡…" rows="3" value={form.note} onChange={set('note')} />
            </div>
            <ul className="bk-review">
              <li><b>行程</b>{form.course}</li>
              <li><b>日期</b>{form.date}</li>
              <li><b>地點</b>{form.location}</li>
              <li><b>人數</b>{form.pax}</li>
            </ul>
            <div className="bk-actions">
              <button type="button" className="btn-ghost" onClick={() => setStep(0)}>← 回上一步</button>
              <button className="btn-gold" disabled={!step2ok || sending}>{sending ? '送出中…' : '送出預約諮詢'}</button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div className="bk-done">
            <h3>{data.successTitle}</h3>
            <p>{data.successText}</p>
            <a href={data.lineLink} target="_blank" rel="noreferrer" className="btn-gold">加入 LINE 加速確認</a>
            <button className="btn-ghost" onClick={() => { setForm(empty); setStep(0) }}>再預約一筆</button>
          </div>
        )}
      </div>
    </section>
  )
}
