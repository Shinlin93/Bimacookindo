import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <NavLink to="/" className="word"><span className="word-mark" aria-hidden="true">✳</span> SETARA</NavLink>
        <div className="nav-links">
          <NavLink to="/">Tentang Setara</NavLink>
          <NavLink to="/koleksi">Koleksi</NavLink>
          <NavLink to="/resep-promo-dapur">Inspirasi Dapur</NavLink>
          <NavLink to="/panduan-pemesanan">Cara Memesan</NavLink>
        </div>
        <NavLink to="/koleksi" className="nav-signin">Lihat Koleksi</NavLink>
      </div>
    </nav>
  )
}
