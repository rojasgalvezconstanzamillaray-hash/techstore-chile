import {
  Gamepad2,
  HardDrive,
  Headphones,
  Heart,
  Keyboard,
  Laptop,
  MemoryStick,
  Monitor,
  Mouse,
  Printer,
  ShoppingCart,
  Smartphone,
  Star,
  Tablet,
  Webcam,
} from 'lucide-react'
import { formatPrice } from '../utils/formatters'

const productIcons = {
  Gamepad2,
  HardDrive,
  Headphones,
  Keyboard,
  Laptop,
  MemoryStick,
  Monitor,
  Mouse,
  Printer,
  Smartphone,
  Tablet,
  Webcam,
}

function ProductCard({ product, onAddToCart, isFavorite, onToggleFavorite }) {
  const ProductIcon = productIcons[product.icon] || Laptop

  return (
    <article className="product-card">
      <div className="product-visual" aria-label={`Imagen referencial de ${product.name}`}>
        <span className="product-badge">{product.badge}</span>
        <button
          type="button"
          className={`favorite-button ${isFavorite ? 'is-favorite' : ''}`}
          onClick={() => onToggleFavorite(product.id)}
          aria-label={isFavorite ? `Quitar ${product.name} de favoritos` : `Agregar ${product.name} a favoritos`}
          aria-pressed={isFavorite}
        >
          <Heart size={19} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
        <ProductIcon className="product-icon" size={86} strokeWidth={1.35} aria-hidden="true" />
        <span className="product-glow" />
      </div>

      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="rating" aria-label={`Valoración ${product.rating} de 5, ${product.reviews} reseñas`}>
          <span><Star size={15} fill="currentColor" /> {product.rating}</span>
          <small>({product.reviews})</small>
        </div>
        <div className="price-row">
          <strong>{formatPrice(product.price)}</strong>
          <del>{formatPrice(product.oldPrice)}</del>
        </div>
        <small className="installments">Hasta 12 cuotas sin interés</small>
        <button type="button" className="add-button" onClick={() => onAddToCart(product)}>
          <ShoppingCart size={18} /> Agregar al carrito
        </button>
      </div>
    </article>
  )
}

export default ProductCard
