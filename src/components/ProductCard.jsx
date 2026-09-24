export default function ProductCard({ product }) {
  return (
    <div className="product-card reveal">
      <div className="product-img">
        <img src={product.image} alt={product.alt} />
      </div>
      <div className="product-body">
        <div className="product-num">{product.number}</div>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description}</p>
        <a href="#" className="promo-link">Lihat detail →</a>
      </div>
    </div>
  )
}
