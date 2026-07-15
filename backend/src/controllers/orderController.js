import mongoose from 'mongoose'
import Order from '../models/Order.js'
import Product from '../models/Product.js'

export async function createOrder(req, res, next) {
  try {
    const { customer, items } = req.body

    if (!customer?.name || !customer?.email || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Cliente e items son obligatorios' })
    }

    if (items.some((item) => !mongoose.isValidObjectId(item.productId) || Number(item.quantity) < 1)) {
      return res.status(400).json({ message: 'El pedido contiene productos o cantidades inválidas' })
    }

    const productIds = items.map((item) => item.productId)
    const products = await Product.find({ _id: { $in: productIds }, active: true })

    if (products.length !== new Set(productIds).size) {
      return res.status(400).json({ message: 'Uno o más productos no están disponibles' })
    }

    const orderItems = items.map((item) => {
      const product = products.find((candidate) => candidate._id.equals(item.productId))
      const quantity = Number(item.quantity)
      if (quantity > product.stock) throw new Error(`Stock insuficiente para ${product.name}`)
      return { product: product._id, name: product.name, unitPrice: product.price, quantity }
    })

    const total = orderItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)
    const order = await Order.create({ customer, items: orderItems, total })

    return res.status(201).json(order)
  } catch (error) {
    return next(error)
  }
}

export async function listOrders(_req, res, next) {
  try {
    const orders = await Order.find().sort({ createdAt: -1 }).limit(100)
    res.json({ count: orders.length, orders })
  } catch (error) {
    next(error)
  }
}
