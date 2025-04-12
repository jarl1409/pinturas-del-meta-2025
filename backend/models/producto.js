/**
 * Modelo Producto
 * Este módulo define el esquema para la colección "productos" en MongoDB usando Mongoose.
 * Cada documento representa un producto con sus respectivos campos: nombre, precio,
 * descripción, categoría, marca, presentación, imagen, stock y fecha de creación.
 *
 * Consideraciones de indexación:
 * - Para mejorar el rendimiento en búsquedas basadas en campos como 'nombre', 'marca', 'categoria' y 'color',
 *   se puede agregar índices directamente en este esquema.
 * - Ejemplo para indexar el campo 'nombre':
 *       productoSchema.index({ nombre: 1 });
 * - Si tus consultas combinan filtros por varios de estos campos, también podrías definir índices compuestos.
 *
 * Recomendaciones:
 * - Asegúrate de conectar a MongoDB en tu archivo principal mediante mongoose.connect().
 * - Importa este modelo en tus controladores para usarlo en las operaciones CRUD.
 */

const mongoose = require('mongoose');

// Definición del esquema para Producto
const productoSchema = new mongoose.Schema({
  // Nombre del producto - Campo obligatorio
  nombre: {
    type: String,
    required: true,
  },
  // Precio del producto - Campo obligatorio
  precio: {
    type: Number,
    required: true,
  },
  // Descripción del producto (opcional)
  descripcion: {
    type: String,
  },
  // Categoría del producto (opcional)
  categoria: {
    type: String,
  },
  // Marca del producto (opcional)
  marca: {
    type: String,
  },
  // Presentación del producto (opcional, ej. "galon", "1/4", etc.)
  presentacion: {
    type: String,
    required: true,
  },
  // Imagen asociada al producto (almacena la ruta o URL, opcional)
  imagen: {
    type: String,
    
  },
  // Stock del producto con valor por defecto 0
  stock: {
    type: Number,
    default: 0,
  },
  // Fecha de creación del registro, se asigna la fecha actual por defecto
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

// ======== Índices (opcional) =========
// Agregar índices mejora el rendimiento en las consultas.
// Si las búsquedas se realizan frecuentemente por estos campos, se recomienda indexarlos.

// Índice individual para nombre
// productoSchema.index({ nombre: 1 });

// Índice individual para marca
// productoSchema.index({ marca: 1 });

// Índice individual para categoría
// productoSchema.index({ categoria: 1 });

// Si en el futuro agregas el campo 'color' y necesitas consultas por ese campo:
// productoSchema.index({ color: 1 });

// Índice compuesto (útil si tus consultas filtran combinando varios campos, por ejemplo, por nombre, marca y categoría)
// productoSchema.index({ nombre: 1, marca: 1, categoria: 1 });

// =======================================

/**
 * Exporta el modelo "Producto" basado en el esquema definido.
 * Este modelo se utilizará en los controladores para realizar operaciones CRUD.
 */
module.exports = mongoose.model('Producto', productoSchema);
