const Producto = require('../models/producto');

// Crear
exports.crearProducto = async (req, res) => {
  try {
    const {
      nombre,
      precio,
      descripcion,
      categoria,
      marca,
      stock
    } = req.body;

    const nuevoProducto = new Producto({
      nombre: string,
      precio : Number,
      descripcion: string,
      categoria,
      marca,
      stock,
      imagen: req.file ? req.file.path : '' // 👈 Guarda la ruta del archivo
    });

    const guardado = await nuevoProducto.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Leer todos o filtrar
exports.obtenerProductos = async (req, res) => {
  try {
    const { nombre, marca, categoria } = req.query;
    const filtros = {};

    if (nombre) filtros.nombre = new RegExp(nombre, 'i');
    if (marca) filtros.marca = new RegExp(marca, 'i');
    if (categoria) filtros.categoria = new RegExp(categoria, 'i');

    const productos = await Producto.find(filtros);
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
exports.actualizarProducto = async (req, res) => {
  try {
    const actualizaciones = { ...req.body };

    if (req.file) {
      actualizaciones.imagen = req.file.path; // 👈 Actualizar imagen si viene archivo nuevo
    }

    const actualizado = await Producto.findByIdAndUpdate(req.params.id, actualizaciones, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar
exports.eliminarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
