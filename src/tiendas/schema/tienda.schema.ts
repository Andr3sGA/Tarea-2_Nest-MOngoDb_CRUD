import mongoose from 'mongoose';

export const TiendaSchema = new mongoose.Schema(
  {
    nombres: { type: String, required: true },
    ciudad: { type: String, required: true },
    telefono: { type: Number, required: true },
    categoria: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

TiendaSchema.index({ nombres: 1 }, { unique: true });
TiendaSchema.index({ ciudad: 1 });
