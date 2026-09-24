import { products } from '../data/products'
import ProductCard from './ProductCard.jsx'

export default function ProductCollection() {
  return (
    <section id="koleksi">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Koleksi</span>
          <h2 className="h-section">Koleksi untuk Setiap Dapur</h2>
          <p className="section-copy">
            Lima alat masak dengan material yang jujur dan bentuk yang bekerja
            untuk penggunaan sehari-hari.
          </p>
        </div>
        <div className="collection-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
