import { CheckCircle2, X } from 'lucide-react'

function Toast({ message, onClose }) {
  if (!message) return null

  return (
    <div className="toast" role="status" aria-live="polite">
      <CheckCircle2 size={21} />
      <span>{message}</span>
      <button type="button" onClick={onClose} aria-label="Cerrar notificación"><X size={17} /></button>
    </div>
  )
}

export default Toast
