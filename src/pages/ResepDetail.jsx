import { Link, useParams } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'
import { recipes } from '../data/products'

export default function ResepDetail() {
  const { id } = useParams()
  const containerRef = useReveal()
  const recipe = recipes.find((r) => r.id === id)

  if (!recipe) {
    return (
      <div ref={containerRef}>
        <section>
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Resep</span>
              <h2 className="h-section">Resep tidak ditemukan</h2>
              <p className="section-copy">Resep yang kamu cari mungkin sudah dipindahkan atau dihapus.</p>
            </div>
            <Link to="/resep-promo-dapur" className="btn btn-pill btn-primary">← Kembali ke Resep</Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div ref={containerRef}>
      <section>
        <div className="wrap">
          <Link to="/resep-promo-dapur" className="promo-link">← Kembali ke Resep</Link>

          <div className="recipe-detail">
            <div className="recipe-detail-media">
              <img src={recipe.image} alt={recipe.title} />
            </div>
            <div className="recipe-detail-body">
              <span className="promo-eyebrow">{recipe.tag}</span>
              <h1 className="h-section">{recipe.title}</h1>
              <p className="section-copy">{recipe.copy}</p>

              <div className="recipe-meta">
                <div className="recipe-meta-item">
                  <span className="recipe-meta-label">Waktu</span>
                  <span className="recipe-meta-value">{recipe.time}</span>
                </div>
                <div className="recipe-meta-item">
                  <span className="recipe-meta-label">Porsi</span>
                  <span className="recipe-meta-value">{recipe.servings}</span>
                </div>
                <div className="recipe-meta-item">
                  <span className="recipe-meta-label">Alat</span>
                  <span className="recipe-meta-value">{recipe.tool}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="recipe-columns">
            <div className="recipe-ingredients">
              <h3 className="promo-title">Bahan-bahan</h3>
              <ul>
                {recipe.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="recipe-steps">
              <h3 className="promo-title">Cara Membuat</h3>
              <ol>
                {recipe.steps.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="page-cta">
            <p className="section-copy">Butuh alat masaknya?</p>
            <Link to="/koleksi" className="btn btn-pill btn-primary">Lihat Koleksi Produk</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
