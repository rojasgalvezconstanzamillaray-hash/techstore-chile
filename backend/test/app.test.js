import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import request from 'supertest'
import app from '../src/app.js'

describe('API TechStore', () => {
  it('responde el estado del servicio', async () => {
    const response = await request(app).get('/api/health')

    assert.equal(response.status, 200)
    assert.equal(response.body.status, 'ok')
    assert.equal(response.body.service, 'techstore-api')
  })

  it('responde 404 para rutas desconocidas', async () => {
    const response = await request(app).get('/api/ruta-inexistente')

    assert.equal(response.status, 404)
    assert.equal(response.body.message, 'Ruta no encontrada')
  })
})
