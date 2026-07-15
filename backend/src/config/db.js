import mongoose from 'mongoose'

export async function connectDatabase() {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    throw new Error('Falta la variable de entorno MONGODB_URI')
  }

  await mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000,
  })

  console.log(`MongoDB conectado: ${mongoose.connection.name}`)
}

export async function disconnectDatabase() {
  await mongoose.disconnect()
}
