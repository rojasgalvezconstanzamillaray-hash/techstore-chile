import { Headset, RefreshCcw, ShieldCheck, Truck } from 'lucide-react'

const benefits = [
  { icon: Truck, title: 'Envíos rápidos', text: 'Despacho de 24 a 48 horas' },
  { icon: ShieldCheck, title: 'Pago seguro', text: 'Tus datos siempre protegidos' },
  { icon: RefreshCcw, title: 'Garantía extendida', text: 'Cambios fáciles y respaldo' },
  { icon: Headset, title: 'Soporte 24/7', text: 'Te ayudamos cuando lo necesites' },
]

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Beneficios de comprar en TechStore">
      <div className="sidebar-heading">
        <span>¿Por qué elegirnos?</span>
        <strong>Compra con confianza</strong>
      </div>
      {benefits.map(({ icon: Icon, title, text }) => (
        <div className="sidebar-benefit" key={title}>
          <span className="benefit-icon"><Icon size={22} /></span>
          <div><strong>{title}</strong><small>{text}</small></div>
        </div>
      ))}
      <div className="sidebar-help">
        <span>¿Necesitas ayuda?</span>
        <strong>+56 2 2345 6789</strong>
        <small>Lun a sáb, 9:00 a 20:00</small>
      </div>
    </aside>
  )
}

export default Sidebar
