import { products, heroOrder } from '../data/products'

export default function ArchitecturalProductScene() {
  const ordered = heroOrder.map((id) => products.find((p) => p.id === id))

  return (
    <div className="scene">
      {ordered.map((product, i) => (
        <div key={product.id} className={`scene-item${i === 2 ? ' center' : ''}`}>
          <div className="scene-photo">
            <img src={product.image} alt={product.alt} />
          </div>
          <div className="scene-base" />
        </div>
      ))}
    </div>
  )
}
