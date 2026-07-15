import mongoose from 'mongoose'
import Product from '../models/Product.js'

const sortOptions = {
  featured: { createdAt: -1 },
  'price-asc': { price: 1 },
  'price-desc': { price: -1 },
  rating: { rating: -1 },
}

export async function listProducts(req, res, next) {
  try {
    const { search = '', category, sort = 'featured' } = req.query
    const filters = { active: true }

    if (category && category !== 'Todos') filters.category = category
    if (search.trim()) {
      const safeSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      filters.$or = [
        { name: { $regex: safeSearch, $options: 'i' } },
        { description: { $regex: safeSearch, $options: 'i' } },
        { category: { $regex: safeSearch, $options: 'i' } },
      ]
    }

    const products = await Product.find(filters).sort(sortOptions[sort] ?? sortOptions.featured)
    res.json({ count: products.length, products })
  } catch (error) {
    next(error)
  }
}

export async function getProduct(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: 'Identificador de producto inválido' })
    }
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' })
    return res.json(product)
  } catch (error) {
    return next(error)
  }
}

export async function createProduct(req, res, next) {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch (error) {
    next(error)
  }
}

export async function updateProduct(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: 'Identificador de producto inválido' })
    }
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' })
    return res.json(product)
  } catch (error) {
    return next(error)
  }
}

export async function deleteProduct(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: 'Identificador de producto inválido' })
    }
    const product = await Product.findByIdAndDelete(req.params.id)
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' })
    return res.status(204).send()
  } catch (error) {
    return next(error)
  }
}
