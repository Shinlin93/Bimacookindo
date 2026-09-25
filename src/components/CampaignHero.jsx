const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp_Image_2026-09-23_at.jpeg_2K_20260923130011.jpeg_2K_20260924120555.jpeg_2K_20260924195302-T5iJvgzeDwAEOkN185U9U0uBY4lTyG.jpeg'

export default function CampaignHero() {
  return (
    <header className="hero">
      <img className="hero-image" src={heroImage} alt="Koleksi panci dan wajan di atas podium" />
      <div className="hero-overlay" />
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow">Koleksi Peralatan Masak 2026</span>
          <h1 className="hero-title">Masak Lebih Baik, Setiap Hari</h1>
          <p className="hero-sub">
            Kualitas yang dirancang untuk menemani setiap momen memasak.
          </p>
          <div className="hero-ctas">
            <a href="#koleksi" className="btn btn-pill btn-on-color">Lihat Koleksi</a>
            <a href="#promo" className="btn btn-editorial btn-outline">Jelajahi Produk</a>
          </div>
        </div>
      </div>
    </header>
  )
}
