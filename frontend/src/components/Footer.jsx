import { Camera, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="#inicio">
            <span className="brand-symbol" aria-hidden="true"><span /><span /><span /></span>
            <span className="brand-name">Tech<span>Store</span></span>
          </a>
          <p>Soluciones tecnológicas para estudiar, trabajar, crear y jugar sin límites.</p>
          <div className="footer-socials">
            <a href="https://facebook.com" aria-label="Facebook"><MessageCircle size={18} /></a>
            <a href="https://instagram.com" aria-label="Instagram"><Camera size={18} /></a>
          </div>
        </div>
        <div id="nosotros">
          <h2>TechStore</h2>
          <a href="#nosotros">Sobre nosotros</a>
          <a href="#productos">Productos</a>
          <a href="#ofertas">Ofertas</a>
          <a href="#contacto">Preguntas frecuentes</a>
        </div>
        <div>
          <h2>Ayuda</h2>
          <a href="#contacto">Despachos</a>
          <a href="#contacto">Cambios y devoluciones</a>
          <a href="#contacto">Garantías</a>
          <a href="#contacto">Términos y condiciones</a>
        </div>
        <div>
          <h2>Contacto</h2>
          <span><MapPin size={17} /> Av. Providencia 1234, Santiago</span>
          <span><Mail size={17} /> contacto@techstore.cl</span>
          <span><Phone size={17} /> +56 2 2345 6789</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} TechStore Chile. Todos los derechos reservados.</span>
        <span>Sitio académico demostrativo</span>
      </div>
    </footer>
  )
}

export default Footer
