import { LineIcon } from './Header.jsx'

export default function Footer({ site, contact }) {
  return (
    <footer className="footer">
      <div className="footer-ctas">
        <a href={contact.lineLink} target="_blank" rel="noreferrer" className="btn-outline"><LineIcon /> 線上客服</a>
      </div>
      <div className="footer-company">{site.company.name}</div>
      <div className="footer-copy">{site.footer}</div>
    </footer>
  )
}
