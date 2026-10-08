import { NavLink } from 'react-router-dom'

const links = [
  ['Tableware', '/koleksi'],
  ['Kitchenware', '/'],
  ['Chef Wear', '/koleksi'],
  ['Furniture', '/koleksi'],
  ['Sale', '/resep-promo-dapur'],
  ['Gift', '/koleksi'],
  ['Expert Directory', '/panduan-pemesanan'],
]

export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <NavLink to="/" className="word"><span>SETARA</span><small>KITCHEN &amp; HORECA</small></NavLink>
        <nav className="nav-links" aria-label="Menu utama">
          {links.map(([label, path]) => <NavLink key={label} to={path} end={label === 'Kitchenware'}>{label}</NavLink>)}
        </nav>
        <div className="nav-actions"><button type="button" aria-label="Cari">⌕</button><button type="button" aria-label="Keranjang">Bag (0)</button></div>
      </div>
    </header>
  )
}
