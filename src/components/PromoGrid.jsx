import { Link } from 'react-router-dom'
import p1Bima from '../assets/p1_bima.jpg'
import p2Wppink from '../assets/p2_wppink.jpg'
import matHandle from '../assets/mat_handle.jpg'

export default function PromoGrid() {
  return (
    <section id="promo">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Resep/Promo Dapur</span>
          <h2 className="h-section">Resep &amp; Inspirasi</h2>
          <p className="section-copy">
            Ide masakan singkat yang bisa dibuat dengan koleksi alat masak Setara.
          </p>
        </div>

        <div className="promo-grid">
          <div className="promo-card">
            <span className="promo-eyebrow">Resep</span>
            <h3 className="promo-title">Gurame Asam Manis</h3>
            <p className="promo-copy">Ikan gurame goreng kering disiram saus asam manis dengan wortel dan cabai.</p>
            <Link to="/resep-promo-dapur/gurame-asam-manis" className="promo-link">Lihat resep →</Link>
          </div>
          <div className="promo-card accent-orange">
            <span className="promo-eyebrow">Resep</span>
            <h3 className="promo-title">Nasi Kuning</h3>
            <p className="promo-copy">Nasi kuning gurih beraroma rempah, klasik untuk acara maupun sarapan spesial.</p>
            <Link to="/resep-promo-dapur/nasi-kuning" className="promo-link">Lihat resep →</Link>
          </div>
          <div className="promo-card">
            <span className="promo-eyebrow">Resep</span>
            <h3 className="promo-title">Ayam Asam Pedas</h3>
            <p className="promo-copy">Ayam berkuah pedas asam segar dengan lengkuas dan daun bawang.</p>
            <Link to="/resep-promo-dapur/ayam-asam-pedas" className="promo-link">Lihat resep →</Link>
          </div>
        </div>

        <div className="promo-grid row2">
          <div className="promo-card accent-cream">
            <div className="promo-img"><img src={p1Bima} alt="Panci keramik dengan pegangan kayu" /></div>
            <span className="promo-eyebrow">Koleksi Baru</span>
            <h3 className="promo-title">Seri Keramik Pegangan Kayu</h3>
            <p className="promo-copy">Material keramik dengan sentuhan kayu solid pada pegangan.</p>
            <Link to="/koleksi" className="promo-link">Lihat koleksi →</Link>
          </div>
          <div className="promo-card accent-cream">
            <div className="promo-img"><img src={matHandle} alt="Detail konstruksi pegangan" /></div>
            <span className="promo-eyebrow">Konsultasi</span>
            <h3 className="promo-title">Butuh Bantuan Memilih?</h3>
            <p className="promo-copy">Tim kami siap membantu menentukan alat masak yang sesuai kebutuhan Anda.</p>
            <a href="#" className="promo-link">Hubungi via WhatsApp →</a>
          </div>
        </div>

        <div className="page-cta">
          <p className="section-copy">Masih ada lebih banyak resep di halaman khusus.</p>
          <Link to="/resep-promo-dapur" className="btn btn-pill btn-primary">Lihat Semua Resep</Link>
        </div>
      </div>
    </section>
  )
}
