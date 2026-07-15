import { Camera, LogIn, MessageCircle, Moon, ShieldCheck, Sun, Truck, UserPlus } from 'lucide-react'
import SearchBar from './SearchBar'
import Cart from './Cart'

function Header({
  query,
  onQueryChange,
  cart,
  cartCount,
  isCartOpen,
  onToggleCart,
  onUpdateQuantity,
  onRemoveFromCart,
  theme,
  onToggleTheme,
  onOpenLogin,
}) {
  return (
    <header>
      <div className="utility-bar">
        <div className="container utility-inner">
          <div className="utility-benefits">
            <span><Truck size={14} /> Envíos a todo Chile</span>
            <span><ShieldCheck size={14} /> Compra 100% segura</span>
          </div>
          <div className="social-links" aria-label="Redes sociales">
            <a href="https://facebook.com" aria-label="Facebook"><MessageCircle size={15} /></a>
            <a href="https://instagram.com" aria-label="Instagram"><Camera size={15} /></a>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="TechStore Chile, inicio">
            <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
            <span className="brand-name">Tech<span>Store</span></span>
          </a>

          <SearchBar query={query} onQueryChange={onQueryChange} />

          <div className="header-actions">
            <button type="button" className="header-action" onClick={onOpenLogin}>
              <LogIn size={20} />
              <span className="header-action-label">Iniciar sesión</span>
            </button>
            <button type="button" className="header-action register-action" onClick={onOpenLogin}>
              <UserPlus size={20} />
              <span className="header-action-label">Registrarse</span>
            </button>
            <button type="button" className="header-action theme-toggle" onClick={onToggleTheme} aria-label={`Activar modo ${theme === 'light' ? 'oscuro' : 'claro'}`}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              <span className="header-action-label">{theme === 'light' ? 'Oscuro' : 'Claro'}</span>
            </button>
            <Cart
              isOpen={isCartOpen}
              onClose={onToggleCart}
              items={cart}
              count={cartCount}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemoveFromCart}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
