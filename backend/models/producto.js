const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  descripcion: String,
  categoria: String,
  marca: String,
  presentacion: String,
  imagen: String,
  stock: { type: Number, default: 0 },
  fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Producto', productoSchema);
