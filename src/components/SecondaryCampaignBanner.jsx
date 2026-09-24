import featureImage from '../assets/feature_mm2.jpg'

export default function SecondaryCampaignBanner() {
  return (
    <section className="banner">
      <div className="wrap banner-grid">
        <div className="banner-img">
          <img src={featureImage} alt="Panci stainless steel di atas meja dapur" />
        </div>
        <div>
          <h2 className="banner-title">Butuh Rekomendasi Set Masak?</h2>
          <p className="banner-copy">
            Ceritakan kebutuhan dapur Anda, tim kami bantu pilihkan set yang
            paling cocok — langsung lewat WhatsApp.
          </p>
          <div className="banner-ctas">
            <a href="#" className="btn btn-pill btn-primary">Chat via WhatsApp</a>
            <a href="#koleksi" className="btn btn-editorial btn-outline">Lihat Koleksi</a>
          </div>
        </div>
      </div>
    </section>
  )
}
