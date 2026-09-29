import { Link } from 'react-router-dom'

const heroImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/820024554_17988939822114903_1224810735372321576_n-UCUN8LnkGSEN8sBbCLpdApGtnJRNb1.jpg'

export default function CampaignHero() {
  return (
    <header className="hero stillpage-hero">
      <nav className="stillpage-nav" aria-label="Navigasi utama">
        <Link to="/" className="stillpage-brand"><span aria-hidden="true">✦</span> SETARA</Link>
        <div className="stillpage-links">
          <Link to="/koleksi">Koleksi</Link><i aria-hidden="true" />
          <Link to="/resep-promo-dapur">Inspirasi</Link><i aria-hidden="true" />
          <Link to="/panduan-pemesanan">Cara Memesan</Link><i aria-hidden="true" />
          <Link to="/">Tentang Kami</Link>
        </div>
        <Link to="/koleksi" className="stillpage-start">Mulai Belanja</Link>
      </nav>
      <div className="stillpage-grid" aria-hidden="true" />
      <div className="stillpage-copy">
        <p className="stillpage-kicker">35.6762° N</p>
        <h1>Alat masak <em>untuk</em><br />satu hidangan<br />setiap waktu.</h1>
        <p className="stillpage-east">139.6503° E</p>
      </div>
      <div className="stillpage-intro">
        <p>Peralatan dapur yang tenang untuk memasak, berbagi, dan menciptakan hidangan yang layak diingat.</p>
        <Link to="/koleksi" className="stillpage-explore"><span aria-hidden="true">↓</span> Jelajahi</Link>
      </div>
      <img className="hero-image stillpage-image" src={heroImage} alt="Pohon tunggal di tengah padang berbintik warna" />
    </header>
  )
}
