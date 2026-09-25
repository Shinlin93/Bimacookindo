export default function Navbar() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <div className="nav-links">
          <a href="#koleksi">Produk</a>
          <a href="#promo">Promo</a>
          <a href="#tentang">Tentang Kami</a>
        </div>
        <div className="nav-actions">
          <a href="#" aria-label="Cari">Cari</a>
          <a href="#" aria-label="Keranjang">Keranjang</a>
        </div>
      </div>
    </nav>
  )
}
