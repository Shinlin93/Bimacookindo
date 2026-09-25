import p1Bima from '../assets/p1_bima.jpg'
import p2Wppink from '../assets/p2_wppink.jpg'
import matHandle from '../assets/mat_handle.jpg'

export default function PromoGrid() {
  return (
    <main className="promo-page">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Untuk Dapur Anda</span>
          <h2 className="h-section">Inspirasi &amp; Panduan</h2>
          <p className="section-copy">
            Rekomendasi singkat untuk membantu Anda memilih dan merawat alat masak.
          </p>
        </div>

        <div className="promo-grid">
          <div className="promo-card">
            <span className="promo-eyebrow">Panduan</span>
            <h3 className="promo-title">Memilih Wajan yang Tepat</h3>
            <p className="promo-copy">Kenali perbedaan wajan datar dan wajan dalam untuk kebutuhan masakan sehari-hari.</p>
            <a href="#koleksi" className="promo-link">Baca selengkapnya →</a>
          </div>
          <div className="promo-card accent-orange">
            <span className="promo-eyebrow">Perawatan</span>
            <h3 className="promo-title">Merawat Permukaan Anti-Lengket</h3>
            <p className="promo-copy">Tips sederhana agar lapisan wajan Anda tetap awet lebih lama.</p>
            <a href="#koleksi" className="promo-link">Baca selengkapnya →</a>
          </div>
          <div className="promo-card">
            <span className="promo-eyebrow">Rekomendasi</span>
            <h3 className="promo-title">Set Dasar untuk Dapur Baru</h3>
            <p className="promo-copy">Tiga alat masak yang wajib ada untuk memulai dapur yang lengkap.</p>
            <a href="#koleksi" className="promo-link">Baca selengkapnya →</a>
          </div>
        </div>

        <div className="promo-grid row2">
          <div className="promo-card accent-cream">
            <div className="promo-img"><img src={p1Bima} alt="Panci keramik dengan pegangan kayu" /></div>
            <span className="promo-eyebrow">Koleksi Baru</span>
            <h3 className="promo-title">Seri Keramik Pegangan Kayu</h3>
            <p className="promo-copy">Material keramik dengan sentuhan kayu solid pada pegangan.</p>
            <a href="#koleksi" className="promo-link">Lihat koleksi →</a>
          </div>
          <div className="promo-card accent-cream">
            <div className="promo-img"><img src={matHandle} alt="Detail konstruksi pegangan" /></div>
            <span className="promo-eyebrow">Konsultasi</span>
            <h3 className="promo-title">Butuh Bantuan Memilih?</h3>
            <p className="promo-copy">Tim kami siap membantu menentukan alat masak yang sesuai kebutuhan Anda.</p>
            <a href="#" className="promo-link">Hubungi via WhatsApp →</a>
          </div>
        </div>
      </div>
    </main>
  )
}
