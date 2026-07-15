import { SearchX } from 'lucide-react'
import ProductCard from './ProductCard'

function ProductList({ products, onAddToCart, favorites, onToggleFavorite, onClearFilters }) {
  if (products.length === 0) {
    return (
      <div className="empty-results">
        <SearchX size={48} strokeWidth={1.4} />
        <h3>No encontramos productos</h3>
        <p>Prueba otra búsqueda o elimina los filtros seleccionados.</p>
        <button type="button" className="button button-secondary" onClick={onClearFilters}>Limpiar filtros</button>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          isFavorite={favorites.includes(product.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}

export default ProductList
