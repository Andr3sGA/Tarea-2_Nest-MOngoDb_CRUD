import mongoose from 'mongoose';

export const ProductoSchema = new mongoose.Schema(
  {
    nombre_producto: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    proveedor: { type: String, required: true },
  },
  {
    timestamps: true,
  }, 
); 

ProductoSchema.index({ nombre_producto: 1 }, { unique: true });
