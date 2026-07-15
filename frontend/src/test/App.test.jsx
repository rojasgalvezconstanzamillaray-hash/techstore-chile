import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('TechStore', () => {
  it('renderiza los productos cargados desde JSON', () => {
    render(<App />)

    expect(screen.getByText('Notebook Gamer Nova X15')).toBeInTheDocument()
    expect(screen.getByText('Smartphone Orion Pro 256 GB')).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /agregar al carrito/i })).toHaveLength(12)
  })

  it('filtra productos con el buscador', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByPlaceholderText('¿Qué tecnología buscas hoy?'), 'EcoPrint')

    expect(screen.getByText('Impresora EcoPrint WiFi')).toBeInTheDocument()
    expect(screen.queryByText('Notebook Gamer Nova X15')).not.toBeInTheDocument()
    expect(screen.getByText('1 productos')).toBeInTheDocument()
  })

  it('actualiza el contador del carrito al agregar un producto', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getAllByRole('button', { name: /agregar al carrito/i })[0])

    expect(screen.getByRole('button', { name: 'Abrir carrito con 1 productos' })).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent('Notebook Gamer Nova X15 fue agregado al carrito')
  })
})
