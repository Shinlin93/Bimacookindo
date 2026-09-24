import { categories } from '../data/products'
import { PotIcon, PanIcon, SetIcon, UtensilIcon, GridIcon } from './icons.jsx'

const icons = {
  panci: PotIcon,
  wajan: PanIcon,
  set: SetIcon,
  aksesoris: UtensilIcon,
  semua: GridIcon,
}

export default function CategoryStrip() {
  return (
    <div className="category-strip">
      <div className="wrap">
        <nav className="category-scroll" aria-label="Kategori produk">
          {categories.map((cat, i) => {
            const Icon = icons[cat.id]
            return (
              <a
                key={cat.id}
                href="#koleksi"
                className={`category-item${i === 0 ? ' active' : ''}`}
              >
                <span className="category-icon"><Icon /></span>
                {cat.label}
              </a>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
