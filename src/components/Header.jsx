export default function Header({ site }) {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="brand">{site.name}</a>
        <nav className="nav">
          <a href="#courses">課程</a>
          <a href="#instructors">教練</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="btn btn-sm">聯絡我們</a>
        </nav>
      </div>
    </header>
  )
}
