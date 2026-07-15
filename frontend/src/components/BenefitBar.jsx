import { Award, CreditCard, RefreshCcw, Truck } from 'lucide-react'

const items = [
  { icon: CreditCard, title: 'Hasta 12 cuotas', text: 'sin interés' },
  { icon: Truck, title: 'Despacho rápido', text: 'en 24 a 48 horas' },
  { icon: RefreshCcw, title: 'Cambios simples', text: 'hasta 30 días' },
  { icon: Award, title: 'Calidad garantizada', text: 'productos originales' },
]

function BenefitBar() {
  return (
    <section className="benefit-bar" aria-label="Condiciones de compra">
      <div className="container benefit-bar-grid">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title}><Icon size={22} /><span><strong>{title}</strong><small>{text}</small></span></div>
        ))}
      </div>
    </section>
  )
}

export default BenefitBar
