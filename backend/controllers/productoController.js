// controllers/productoController.js
const Producto = require("../models/producto");
const multer = require("multer");

// Crear producto con imagen y precios por presentación
exports.crearProducto = async (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      categoria,
      marca,
    } = req.body;

    // Extraer precios como mapa
    const precios = {};
    for (const key in req.body) {
      if (key.startsWith("precios[")) {
        const match = key.match(/precios\[(.+)\]/);
        if (match) {
          const presentacion = match[1];
          precios[presentacion] = Number(req.body[key]);
        }
      }
    }

    const nuevoProducto = new Producto({
      nombre,
      descripcion,
      categoria,
      marca,
      precios,
      imagen: req.file ? `uploads/${req.file.filename}` : "",
    });

    const guardado = await nuevoProducto.save();
    res.status(201).json(guardado);
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los productos (o filtrados)
exports.obtenerProductos = async (req, res) => {
  try {
    const { nombre, marca, categoria } = req.query;
    const filtros = {};

    if (nombre) filtros.nombre = new RegExp(nombre, "i");
    if (marca) filtros.marca = new RegExp(marca, "i");
    if (categoria) filtros.categoria = new RegExp(categoria, "i");

    const productos = await Producto.find(filtros);
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un producto por ID
exports.obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);

    if (!producto) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    res.json(producto);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener el producto" });
  }
};

// Actualizar producto
exports.actualizarProducto = async (req, res) => {
  try {
    const actualizaciones = { ...req.body };

    // Parsear precios si vienen como campos individuales
    if (!actualizaciones.precios && Object.keys(req.body).some(k => k.startsWith("precios["))) {
      actualizaciones.precios = {};
      for (const key in req.body) {
        if (key.startsWith("precios[")) {
          const match = key.match(/precios\[(.+)\]/);
          if (match) {
            const presentacion = match[1];
            actualizaciones.precios[presentacion] = Number(req.body[key]);
          }
        }
      }
    }

    if (req.file) {
      actualizaciones.imagen = req.file.path;
    }

    const actualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      actualizaciones,
      { new: true }
    );

    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar producto
exports.eliminarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
