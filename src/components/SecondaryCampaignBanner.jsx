import { Link } from 'react-router-dom'
import featureImage from '../assets/rekomendasi-alat-masak.jpeg'

export default function SecondaryCampaignBanner() {
  return (
    <section className="banner">
      <div className="wrap banner-grid">
        <div className="banner-img">
          <img src={featureImage} alt="Alat masak dengan tutup kaca dan pegangan kayu di atas meja dapur" />
        </div>
        <div>
          <h2 className="banner-title">Butuh Rekomendasi Alat Masak?</h2>
          <p className="banner-copy">
            Ceritakan kebutuhan dapur Anda, tim kami bantu pilihkan set yang
            paling cocok — langsung lewat WhatsApp.
          </p>
          <div className="banner-ctas">
            <a href="#" className="btn btn-pill btn-primary">Chat via WhatsApp</a>
            <Link to="/koleksi" className="btn btn-editorial btn-outline">Lihat Koleksi</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
