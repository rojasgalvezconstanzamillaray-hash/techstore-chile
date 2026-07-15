import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { _id: false },
)

const orderSchema = new mongoose.Schema(
  {
    customer: {
      name: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true, lowercase: true },
    },
    items: {
      type: [orderItemSchema],
      validate: [(items) => items.length > 0, 'El pedido debe contener productos'],
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
    status: {
      type: String,
      enum: ['pendiente', 'pagado', 'despachado', 'cancelado'],
      default: 'pendiente',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

const Order = mongoose.model('Order', orderSchema)

export default Order
