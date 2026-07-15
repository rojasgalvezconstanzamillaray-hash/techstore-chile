import { LockKeyhole, Mail, X } from 'lucide-react'

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert('Inicio de sesión simulado correctamente.')
    onClose()
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" className="icon-button modal-close" onClick={onClose} aria-label="Cerrar">
          <X size={22} />
        </button>
        <span className="login-icon"><LockKeyhole size={25} /></span>
        <span className="eyebrow">Bienvenido de vuelta</span>
        <h2 id="login-title">Ingresa a TechStore</h2>
        <p>Esta es una demostración académica. No se enviarán datos reales.</p>
        <form onSubmit={handleSubmit}>
          <label>Correo electrónico<span><Mail size={17} /><input type="email" placeholder="nombre@correo.cl" required /></span></label>
          <label>Contraseña<span><LockKeyhole size={17} /><input type="password" placeholder="••••••••" minLength="6" required /></span></label>
          <button className="button button-primary button-full" type="submit">Iniciar sesión</button>
        </form>
        <small>¿Aún no tienes cuenta? <button type="button">Regístrate gratis</button></small>
      </section>
    </div>
  )
}

export default LoginModal
