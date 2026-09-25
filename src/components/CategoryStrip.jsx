import { categories } from '../data/products'

export default function CategoryStrip() {
  return (
    <div className="category-strip">
      <div className="wrap">
        <nav className="category-scroll" aria-label="Kategori produk">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href="#koleksi"
              className={`category-item${i === 0 ? ' active' : ''}`}
            >
              {cat.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
