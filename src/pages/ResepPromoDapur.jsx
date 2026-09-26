import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import { recipes } from '../data/products'
import SecondaryCampaignBanner from '../components/SecondaryCampaignBanner.jsx'

export default function ResepPromoDapur() {
  const containerRef = useReveal()

  return (
    <div ref={containerRef}>
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Resep</span>
            <h2 className="h-section">Resep dari Dapur Setara</h2>
            <p className="section-copy">
              Ide masakan sehari-hari yang bisa dibuat dengan koleksi alat masak Setara.
            </p>
          </div>
          <div className="promo-grid">
            {recipes.map((recipe) => (
              <div key={recipe.id} className={`promo-card ${recipe.accent || ''}`}>
                <span className="promo-eyebrow">{recipe.tag}</span>
                <h3 className="promo-title">{recipe.title}</h3>
                <p className="promo-copy">{recipe.copy}</p>
                <Link to={`/resep-promo-dapur/${recipe.id}`} className="promo-link">Lihat resep →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SecondaryCampaignBanner />
    </div>
  )
}
