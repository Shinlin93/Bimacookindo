import { Link } from 'react-router-dom'
import { InstagramIcon, WhatsAppIcon, TikTokIcon } from './icons.jsx'

export default function Footer() {
  return (
    <footer>
      <div className="footer-primary">
        <div className="wrap">
          <div className="word">SETARA</div>
          <div className="footer-social">
            <a href="#" aria-label="Instagram" className="footer-social-icon"><InstagramIcon /></a>
            <a href="#" aria-label="WhatsApp" className="footer-social-icon"><WhatsAppIcon /></a>
            <a href="#" aria-label="TikTok" className="footer-social-icon"><TikTokIcon /></a>
          </div>
        </div>
      </div>
      <div className="footer-secondary">
        <div className="wrap">
          <div className="footer-cols">
            <div>
              <h4>Produk</h4>
              <Link to="/">Home</Link>
              <Link to="/koleksi">Koleksi</Link>
              <Link to="/resep-promo-dapur">Resep/Promo Dapur</Link>
            </div>
            <div>
              <h4>Perusahaan</h4>
              <a href="/#tentang">Tentang Kami</a>
              <a href="#">Karier</a>
              <a href="#">Kontak</a>
            </div>
            <div>
              <h4>Bantuan</h4>
              <a href="#">Pengiriman</a>
              <a href="#">Pengembalian</a>
              <a href="#">Kebijakan Privasi</a>
            </div>
          </div>
          <div className="footer-bottom">© 2026 Setara. Semua hak dilindungi.</div>
        </div>
      </div>
    </footer>
  )
}
