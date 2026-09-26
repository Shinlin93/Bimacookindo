import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <NavLink to="/" className="word">SETARA</NavLink>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/resep-promo-dapur">Resep/Promo Dapur</NavLink>
          <NavLink to="/koleksi">Koleksi</NavLink>
          <a href="/#tentang">Tentang Kami</a>
        </div>
        <div className="nav-actions">
          <a href="#" aria-label="Cari">Cari</a>
          <a href="#" aria-label="Keranjang">Keranjang</a>
        </div>
      </div>
    </nav>
  )
}
