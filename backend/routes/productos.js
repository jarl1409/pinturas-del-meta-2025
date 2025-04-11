const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  crearProducto,
  obtenerProductos,
  actualizarProducto,
  eliminarProducto
} = require('../controllers/productoController');

// Configuración de multer para almacenar archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Rutas
router.post('/', upload.single('imagen'), crearProducto);
router.get('/', obtenerProductos);
router.put('/:id', upload.single('imagen'), actualizarProducto);
router.delete('/:id', eliminarProducto);

module.exports = router;
