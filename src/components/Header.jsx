import { useEffect, useState } from 'react'

export default function Header({ site, contact }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <img src={site.logo} alt="" className="brand-logo" />
          <span className="brand-text">
            <strong>{site.shortName}</strong> {site.nameZh}
          </span>
        </a>
        <nav className={`nav ${open ? 'open' : ''}`}>
          {site.nav.map((n) => (
            <a key={n.link} href={n.link} onClick={() => setOpen(false)}>{n.text}</a>
          ))}
          <a href={contact.lineLink} target="_blank" rel="noreferrer" className="nav-line">
            <LineIcon /> 線上客服
          </a>
        </nav>
        <button className={`burger ${open ? 'open' : ''}`} aria-label="選單" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

export function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path fill="currentColor" d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.2 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.6 1.1-.5 6-3.5 8.2-6 1.5-1.6 2-3.3 2-5C22 6.6 17.5 3 12 3zM8.5 13.6H6.4c-.3 0-.5-.2-.5-.5V9.4c0-.3.2-.5.5-.5s.5.2.5.5v3.2h1.6c.3 0 .5.2.5.5s-.2.5-.5.5zm1.9-.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9.4c0-.3.2-.5.5-.5s.5.2.5.5v3.7zm4.5 0c0 .2-.1.4-.3.5h-.2c-.2 0-.3-.1-.4-.2l-1.9-2.6v2.3c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9.4c0-.2.1-.4.3-.5h.2c.2 0 .3.1.4.2l1.9 2.6V9.4c0-.3.2-.5.5-.5s.5.2.5.5v3.7zm3.1-2.4c.3 0 .5.2.5.5s-.2.5-.5.5h-1.6v1h1.6c.3 0 .5.2.5.5s-.2.5-.5.5h-2.1c-.3 0-.5-.2-.5-.5V9.4c0-.3.2-.5.5-.5H18c.3 0 .5.2.5.5s-.2.5-.5.5h-1.6v1H18z"/>
    </svg>
  )
}
