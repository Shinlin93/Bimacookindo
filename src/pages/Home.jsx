import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from '../data/products.js'

const categories = [
  'Bakeware',
  'Bar & Coffee Utilities',
  'Chafing Dish',
  'Cooking Utensils',
  'Cookware',
  'Kitchen Food Pan',
  'Kitchen Storage & Organizer',
  'Snack Basket',
  'Woodenware',
]

const catalog = products.map((product, index) => ({
  ...product,
  price: ['51.900', '61.200 – 74.100', '89.900', '120.000', '299.000'][index],
  oldPrice: index === 3 ? '135.000' : index === 4 ? '349.000' : null,
  discount: index === 3 ? '-8%' : index === 4 ? '-14%' : null,
  cashback: ['1.038', '1.224', '1.798', '2.400', '5.980'][index],
}))

function ProductCard({ product }) {
  return (
    <Link className="catalog-card" to={`/product/${product.id}`} aria-label={`Lihat ${product.title}`}>
      <div className="catalog-image-wrap">
        <img src={product.image} alt={product.alt} className="catalog-image" />
        {product.discount && <span className="discount-badge">{product.discount}</span>}
      </div>
      <div className="catalog-card-body">
        <h2>{product.title}</h2>
        <div className="price-line">
          <strong>IDR {product.price}</strong>
          {product.oldPrice && <del>IDR {product.oldPrice}</del>}
        </div>
        <span className="cashback">✦ Cashback {product.cashback} pts</span>
      </div>
    </Link>
  )
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('Cookware')
  const [sort, setSort] = useState('Relevan')
  const [filterOpen, setFilterOpen] = useState(false)

  const visibleProducts = useMemo(() => {
    if (sort === 'Harga terendah') return [...catalog].sort((a, b) => Number(a.price.replace(/\D/g, '').split(' ')[0]) - Number(b.price.replace(/\D/g, '').split(' ')[0]))
    if (sort === 'Harga tertinggi') return [...catalog].sort((a, b) => Number(b.price.replace(/\D/g, '').split(' ')[0]) - Number(a.price.replace(/\D/g, '').split(' ')[0]))
    return catalog
  }, [sort])

  return (
    <main className="kitchenware-page">
      <section className="trust-bar">
        <div className="wrap trust-inner">
          <span>Shipping All Over Indonesia</span><span>Free Shipping*</span><span>Safety Guaranteed</span>
          <a href="https://wa.me/628563852888" target="_blank" rel="noreferrer">WhatsApp 0856 3852 888</a>
        </div>
      </section>

      <section className="catalog-intro">
        <div className="wrap">
          <p className="catalog-kicker">Brewsuniq · HORECA Supplier sejak 2016</p>
          <h1>Kitchenware</h1>
          <p className="catalog-description">Perlengkapan dapur pilihan untuk restoran, hotel, kafe, dan rumah Anda.</p>
        </div>
      </section>

      <nav className="category-strip kitchen-categories" aria-label="Kategori kitchenware">
        <div className="wrap category-scroll">
          {categories.map((category) => (
            <button key={category} className={activeCategory === category ? 'category-item active' : 'category-item'} onClick={() => setActiveCategory(category)} type="button">
              <span className="category-icon" aria-hidden="true">{category === 'Cookware' ? '◉' : '◇'}</span>
              {category}
            </button>
          ))}
        </div>
      </nav>

      <section className="catalog-section">
        <div className="wrap">
          <div className="catalog-toolbar">
            <div><strong>702 Produk</strong><span className="active-filter">{activeCategory}</span></div>
            <div className="toolbar-actions">
              <button className="filter-button" type="button" onClick={() => setFilterOpen(true)}>Filter</button>
              <label className="sort-control">Urutkan
                <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Urutkan produk">
                  <option>Relevan</option><option>Harga terendah</option><option>Harga tertinggi</option>
                </select>
              </label>
            </div>
          </div>

          {filterOpen && <div className="filter-panel"><div><strong>Filter Produk</strong><button type="button" onClick={() => setFilterOpen(false)} aria-label="Tutup filter">×</button></div><label><input type="checkbox" /> In Stock</label><label><input type="checkbox" /> On Sale</label><label><input type="checkbox" /> Indent / Pre-order</label><button className="btn btn-primary" type="button" onClick={() => setFilterOpen(false)}>Terapkan</button></div>}

          <div className="catalog-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
          <nav className="pagination" aria-label="Paginasi produk"><a className="current" href="#products">1</a><a href="#products">2</a><a href="#products">3</a><span>…</span><a href="#products">15</a><a className="next" href="#products">Next →</a></nav>
        </div>
      </section>

      <a className="whatsapp-float" href="https://wa.me/628563852888" target="_blank" rel="noreferrer" aria-label="Chat via WhatsApp">WA</a>
      <nav className="mobile-bottom-nav" aria-label="Navigasi mobile"><Link to="/">Home</Link><button type="button" onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}>Kategori</button><Link to="/resep-promo-dapur">Majalah</Link><Link to="/panduan-pemesanan">Keranjang</Link><Link to="/koleksi">Akun</Link></nav>
    </main>
  )
}
