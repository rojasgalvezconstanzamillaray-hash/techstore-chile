import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react'
import { formatPrice } from '../utils/formatters'

function Cart({ isOpen, onClose, items, count, onUpdateQuantity, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <button
        type="button"
        className="header-action cart-trigger"
        onClick={onClose}
        aria-label={`Abrir carrito con ${count} productos`}
        aria-expanded={isOpen}
      >
        <span className="header-action-icon">
          <ShoppingCart size={21} />
          <span className="cart-count">{count}</span>
        </span>
        <span className="header-action-label">Carrito</span>
      </button>

      {isOpen && <button type="button" className="drawer-overlay" onClick={onClose} aria-label="Cerrar carrito" />}

      <aside className={`cart-drawer ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen} aria-label="Carrito de compras">
        <div className="drawer-header">
          <div>
            <span className="eyebrow">Tu selección</span>
            <h2>Carrito ({count})</h2>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Cerrar carrito">
            <X size={22} />
          </button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="cart-empty">
              <ShoppingCart size={45} strokeWidth={1.4} />
              <h3>Tu carrito está vacío</h3>
              <p>Agrega productos y aparecerán aquí.</p>
              <button type="button" className="button button-secondary" onClick={onClose}>Explorar productos</button>
            </div>
          ) : (
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <div className="cart-item-copy">
                    <h3>{item.name}</h3>
                    <span>{formatPrice(item.price)}</span>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-control" aria-label={`Cantidad de ${item.name}`}>
                      <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} aria-label="Disminuir cantidad">
                        <Minus size={15} />
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} aria-label="Aumentar cantidad">
                        <Plus size={15} />
                      </button>
                    </div>
                    <button type="button" className="remove-button" onClick={() => onRemove(item.id)} aria-label={`Eliminar ${item.name}`}>
                      <Trash2 size={17} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-summary">
            <div><span>Subtotal</span><strong>{formatPrice(total)}</strong></div>
            <small>Impuestos incluidos. Despacho calculado en el siguiente paso.</small>
            <button type="button" className="button button-primary button-full" onClick={() => window.alert('Compra simulada: el flujo de pago se implementará en la próxima versión.')}>Finalizar compra</button>
          </div>
        )}
      </aside>
    </>
  )
}

export default Cart
