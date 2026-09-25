export default function Footer({ site }) {
  return (
    <footer className="footer">
      <div className="container">
        <div>{site.name}｜{site.tagline}</div>
        <div className="muted">{site.footer}</div>
      </div>
    </footer>
  )
}
