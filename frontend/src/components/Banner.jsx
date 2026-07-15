import { ArrowRight, BadgePercent, ShieldCheck } from 'lucide-react'
import heroImage from '../assets/hero-techstore.png'

function Banner() {
  const heroSrc = typeof heroImage === 'string' ? heroImage : heroImage.src

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src={heroSrc} alt="Computador gamer, notebook, monitor y accesorios sobre un escritorio iluminado" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="hero-kicker"><BadgePercent size={16} /> Cyber Tech Week</span>
        <h1 id="hero-title">La tecnología que lleva tu mundo al siguiente nivel</h1>
        <p>Equipos seleccionados, precios increíbles y despacho rápido para que avances sin límites.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#ofertas">Ver ofertas <ArrowRight size={18} /></a>
          <span><ShieldCheck size={17} /> Compra protegida</span>
        </div>
      </div>
    </section>
  )
}

export default Banner
