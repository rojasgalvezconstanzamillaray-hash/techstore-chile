import 'dotenv/config'
import app from './app.js'
import { connectDatabase, disconnectDatabase } from './config/db.js'

const port = Number(process.env.PORT) || 3000

async function startServer() {
  try {
    await connectDatabase()
    const server = app.listen(port, () => {
      console.log(`API TechStore disponible en http://localhost:${port}`)
    })

    const shutdown = async () => {
      server.close(async () => {
        await disconnectDatabase()
        process.exit(0)
      })
    }

    process.on('SIGINT', shutdown)
    process.on('SIGTERM', shutdown)
  } catch (error) {
    console.error(`No fue posible iniciar el servidor: ${error.message}`)
    process.exit(1)
  }
}

startServer()
