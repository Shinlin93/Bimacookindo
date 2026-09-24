import p3Uniq from '../assets/p3_uniq.jpg'

const cards = [
  { name: 'Pengguna Setara', text: 'Wajannya ringan dipakai dan mudah dibersihkan setelah masak.' },
  { name: 'Pengguna Setara', text: 'Ukurannya pas untuk dapur kecil, tidak makan banyak tempat.' },
  { name: 'Pengguna Setara', text: 'Pegangannya tetap nyaman digenggam meski panci terisi penuh.' },
]

export default function SocialContent() {
  return (
    <section id="tentang">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Cerita Dapur</span>
          <h2 className="h-section">Dari Dapur ke Dapur</h2>
        </div>
        <div className="social-grid">
          <div className="social-cards">
            {cards.map((c, i) => (
              <div className="social-card reveal" key={i}>
                <div className="social-avatar" aria-hidden="true" />
                <div>
                  <div className="social-name">{c.name}</div>
                  <p className="social-text">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="social-media reveal">
            <img src={p3Uniq} alt="Wajan saute hitam dengan tutup kaca di atas meja dapur" />
          </div>
        </div>
      </div>
    </section>
  )
}
