import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      trim: true,
      minlength: 3,
      maxlength: 120,
    },
    price: {
      type: Number,
      required: [true, 'El precio es obligatorio'],
      min: 0,
    },
    oldPrice: {
      type: Number,
      min: 0,
      default: null,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    reviews: {
      type: Number,
      min: 0,
      default: 0,
    },
    category: {
      type: String,
      required: [true, 'La categoría es obligatoria'],
      trim: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, 'La descripción es obligatoria'],
      trim: true,
      maxlength: 300,
    },
    badge: {
      type: String,
      trim: true,
      default: '',
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    icon: {
      type: String,
      trim: true,
      default: 'Laptop',
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

productSchema.index({ name: 'text', description: 'text', category: 'text' })

const Product = mongoose.model('Product', productSchema)

export default Product
