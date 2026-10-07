import { useMemo, useState } from 'react'
import { products } from '../data/products.js'

const categories = ['Bakeware', 'Bar & Coffee Utilities', 'Chafing Dish', 'Cooking Utensils', 'Cookware', 'Kitchen Food Pan', 'Kitchen Storage & Organizer', 'Snack Basket', 'Woodenware']
const filters = ['Semua', 'In Stock', 'On Sale', 'Indent / Pre-order']

const productMeta = [
  { price: 'IDR 51.900', oldPrice: 'IDR 58.000', discount: '-8%', cashback: '1.038 pts' },
  { price: 'IDR 61.200 – IDR 74.100', cashback: '1.224 pts' },
  { price: 'IDR 89.900', oldPrice: 'IDR 120.000', discount: '-25%', cashback: '1.798 pts' },
  { price: 'IDR 124.500', cashback: '2.490 pts' },
  { price: 'IDR 249.000', oldPrice: 'IDR 299.000', discount: '-17%', cashback: '4.980 pts' },
]

export default function Kitchenware() {
  const [activeCategory, setActiveCategory] = useState('Cookware')
  const [activeFilter, setActiveFilter] = useState('Semua')
  const [sort, setSort] = useState('Featured')
  const [page, setPage] = useState(1)
  const [filterOpen, setFilterOpen] = useState(false)

  const visibleProducts = useMemo(() => {
    const list = products.map((product, index) => ({ ...product, ...productMeta[index] }))
    if (sort === 'Price low to high') return [...list].sort((a, b) => Number(a.price.replace(/[^0-9]/g, '')) - Number(b.price.replace(/[^0-9]/g, '')))
    if (sort === 'Price high to low') return [...list].sort((a, b) => Number(b.price.replace(/[^0-9]/g, '')) - Number(a.price.replace(/[^0-9]/g, '')))
    return list
  }, [sort])

  return (
    <main className="kitchenware-page">
      <div className="shipping-bar"><div className="kw-wrap"><span>Shipping All Over Indonesia</span><span>Free Shipping*</span><span>Safety Guaranteed</span><a href="https://wa.me/628563852888">WhatsApp 0856 3852 888</a></div></div>
      <section className="kw-intro kw-wrap">
        <p className="kw-kicker">BREWSUNIQ · HORECA SUPPLIER SEJAK 2016</p>
        <h1>Kitchenware</h1>
        <p className="kw-lede">Peralatan dapur pilihan untuk kebutuhan restoran, hotel, kafe, dan rumah Anda.</p>
      </section>
      <nav className="kw-categories kw-wrap" aria-label="Kategori kitchenware">
        {categories.map((category) => <button key={category} className={activeCategory === category ? 'is-active' : ''} onClick={() => setActiveCategory(category)}>{category}</button>)}
      </nav>
      <section className="kw-catalog kw-wrap">
        <div className="kw-toolbar"><div><strong>702</strong> Produk <span className="kw-muted">· {activeCategory}</span></div><div className="kw-actions"><button className="kw-filter-button" onClick={() => setFilterOpen(true)}>Filter{activeFilter !== 'Semua' ? ` · ${activeFilter}` : ''}</button><label>Urutkan <select value={sort} onChange={(event) => setSort(event.target.value)}><option>Featured</option><option>Price low to high</option><option>Price high to low</option></select></label></div></div>
        <div className="kw-filter-chips">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'is-selected' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
        <div className="kw-grid">{visibleProducts.map((product) => <a className="kw-card" href={`/product/${product.id}`} key={product.id}><div className="kw-image-wrap">{product.discount && <span className="kw-sale">{product.discount}</span>}<img src={product.image} alt={product.alt} /></div><div className="kw-card-body"><h2>{product.title}</h2><div className="kw-price">{product.price} {product.oldPrice && <del>{product.oldPrice}</del>}</div><span className="kw-cashback">Cashback {product.cashback}</span></div></a>)}</div>
        <nav className="kw-pagination" aria-label="Pagination"><button className="current">1</button><button onClick={() => setPage(2)}>2</button><button onClick={() => setPage(3)}>3</button><span>…</span><button onClick={() => setPage(15)}>15</button><button onClick={() => setPage(Math.min(15, page + 1))}>Next →</button></nav>
      </section>
      <a className="kw-whatsapp" href="https://wa.me/628563852888" aria-label="Chat WhatsApp">WA</a>
      {filterOpen && <div className="kw-sheet-backdrop" onClick={() => setFilterOpen(false)}><section className="kw-sheet" onClick={(event) => event.stopPropagation()}><div className="kw-sheet-head"><h2>Filter</h2><button onClick={() => setFilterOpen(false)} aria-label="Tutup filter">×</button></div>{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'is-selected' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}<button className="kw-apply" onClick={() => setFilterOpen(false)}>Terapkan</button></section></div>}
    </main>
  )
}

export function KitchenwareBottomNav() { return <nav className="kw-bottom-nav" aria-label="Navigasi mobile"><a href="/">Home</a><a href="/kitchenware">Kategori</a><a href="/resep-promo-dapur">Majalah</a><a href="/kitchenware">Keranjang</a><a href="/">Akun</a></nav> }

export function KitchenwareFooter() { return <footer className="kw-footer"><div className="kw-wrap"><strong>BREWSUNIQ</strong><p>Tableware · Furniture · Kitchenware</p><div className="kw-footer-links"><a href="/kitchenware">HORECA Supplier Bali</a><a href="/kitchenware">Showroom Serpong</a><a href="/kitchenware">Showroom Medan</a></div></div></footer> }

export { categories }

export function KitchenwarePageExtras() { return <><KitchenwareFooter /><KitchenwareBottomNav /></> }

export default Kitchenware
