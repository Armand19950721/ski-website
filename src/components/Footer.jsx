import { LineIcon } from './Header.jsx'

export default function Footer({ site, contact }) {
  const c = site.company
  return (
    <footer className="footer">
      <nav className="footer-nav">
        {site.nav.map((n) => <a key={n.link} href={n.link}>{n.text}</a>)}
      </nav>
      <div className="footer-ctas">
        <a href={contact.lineLink} target="_blank" rel="noreferrer" className="btn-outline"><LineIcon /> 線上客服</a>
        <a href={`mailto:${contact.recruitEmail}?subject=應徵教練`} className="footer-link">✉ 應徵教練</a>
        {contact.googleBusiness && <a href={contact.googleBusiness} target="_blank" rel="noreferrer" className="footer-link">Google 商家檔案</a>}
        {contact.instagram && <a href={contact.instagram} target="_blank" rel="noreferrer" className="footer-link">Instagram</a>}
      </div>
      <div className="footer-company">
        <div>{c.name}</div>
        <div>{c.address}</div>
        <div>{c.representative}</div>
        <div>{c.license}</div>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <div>{c.taxId}</div>
      </div>
      <div className="footer-copy">{site.footer}</div>
    </footer>
  )
}
