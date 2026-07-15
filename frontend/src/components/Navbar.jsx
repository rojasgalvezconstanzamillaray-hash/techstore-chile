import { ChevronDown, Menu, X } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos', submenu: true },
  { label: 'Ofertas', href: '#ofertas' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

function Navbar({ isOpen, onToggle }) {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="container nav-inner">
        <button type="button" className="menu-toggle" onClick={onToggle} aria-expanded={isOpen} aria-controls="main-menu">
          {isOpen ? <X size={21} /> : <Menu size={21} />}
          Menú
        </button>
        <ul id="main-menu" className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          {links.map((link, index) => (
            <li key={link.label}>
              <a className={index === 0 ? 'active' : ''} href={link.href} onClick={() => isOpen && onToggle()}>
                {link.label}
                {link.submenu && <ChevronDown size={14} />}
              </a>
            </li>
          ))}
        </ul>
        <span className="nav-shipping">Retiro gratis en tienda</span>
      </div>
    </nav>
  )
}

export default Navbar
