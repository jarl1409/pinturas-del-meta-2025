const express = require('express');
const router = express.Router();
const multer = require('multer');
const {
  crearProducto,
  obtenerProductos,
  actualizarProducto,
  eliminarProducto
} = require('../controllers/productoController');

// Configurar almacenamiento de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Carpeta donde se guardan las imágenes
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Evitar nombres duplicados
  }
});

const upload = multer({ storage });

// Rutas Crud
router.post('/', upload.single('imagen'), crearProducto); // 👈 acepta imagen
router.get('/', obtenerProductos);
router.put('/:id', upload.single('imagen'), actualizarProducto); // también puedes actualizar la imagen
router.delete('/:id', eliminarProducto);

module.exports = router;
