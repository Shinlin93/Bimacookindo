import { useReveal } from '../hooks/useReveal.js'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard.jsx'

export default function Koleksi() {
  const containerRef = useReveal()

  return (
    <div ref={containerRef}>
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Koleksi</span>
            <h2 className="h-section">Grid Produk</h2>
            <p className="section-copy">
              Semua alat masak Setara dalam satu tampilan.
            </p>
          </div>
          <div className="collection-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
