import 'dotenv/config'
import { readFile } from 'node:fs/promises'
import { connectDatabase, disconnectDatabase } from './config/db.js'
import Product from './models/Product.js'

async function seed() {
  try {
    await connectDatabase()
    const jsonUrl = new URL('../../frontend/src/data/productos.json', import.meta.url)
    const products = JSON.parse(await readFile(jsonUrl, 'utf8'))
    const records = products.map(({ id: _id, ...product }) => product)

    await Product.deleteMany({})
    await Product.insertMany(records)

    console.log(`${records.length} productos cargados correctamente`)
  } catch (error) {
    console.error(`Error al cargar datos: ${error.message}`)
    process.exitCode = 1
  } finally {
    await disconnectDatabase()
  }
}

seed()
