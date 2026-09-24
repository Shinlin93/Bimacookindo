import ArchitecturalProductScene from './ArchitecturalProductScene.jsx'

export default function CampaignHero() {
  return (
    <header className="hero">
      <div className="hero-deco d1" />
      <div className="hero-deco d2" />
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
          <div className="hero-dots" aria-hidden="true">
            <span className="active" />
            <span />
            <span />
          </div>
        </div>
        <div className="hero-visual">
          <ArchitecturalProductScene />
        </div>
      </div>
    </header>
  )
}
