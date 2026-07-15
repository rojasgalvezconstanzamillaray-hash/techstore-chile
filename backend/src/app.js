import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import mongoose from 'mongoose'
import morgan from 'morgan'
import orderRoutes from './routes/orderRoutes.js'
import productRoutes from './routes/productRoutes.js'

const app = express()

app.disable('x-powered-by')
app.use(helmet())
app.use(
  cors({
    origin: process.env.CLIENT_URL?.split(',') ?? ['http://localhost:5173'],
  }),
)
app.use(express.json({ limit: '100kb' }))
app.use(morgan(process.env.NODE_ENV === 'test' ? 'tiny' : 'dev'))

app.get('/api/health', (_req, res) => {
  const states = ['desconectado', 'conectado', 'conectando', 'desconectando']
  res.json({
    status: 'ok',
    service: 'techstore-api',
    database: states[mongoose.connection.readyState] ?? 'desconocido',
  })
})

app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)

app.use((_req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' })
})

app.use((error, _req, res, _next) => {
  console.error(error)

  if (error.name === 'ValidationError') {
    const details = Object.values(error.errors).map((item) => item.message)
    return res.status(400).json({ message: 'Datos inválidos', details })
  }

  if (error.code === 11000) {
    return res.status(409).json({ message: 'El registro ya existe' })
  }

  return res.status(500).json({
    message: process.env.NODE_ENV === 'production' ? 'Error interno del servidor' : error.message,
  })
})

export default app
