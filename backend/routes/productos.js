const express = require("express");
const router = express.Router();
const multer = require("multer");

// Controladores
const {
  crearProducto,
  obtenerProductos,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/productoController");

// Configuración de almacenamiento para imágenes (multer)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // Eliminar espacios del nombre original
    const cleanName = file.originalname.replace(/\s+/g, "-");
    cb(null, `${Date.now()}-${cleanName}`);
  },
});

const upload = multer({ storage });

/* 📦 Rutas de productos */
router.post("/", upload.single("imagen"), crearProducto); // Crear producto con imagen
router.get("/", obtenerProductos); // Obtener todos o por filtro
router.put("/:id", upload.single("imagen"), actualizarProducto); // Actualizar producto con imagen opcional
router.delete("/:id", eliminarProducto); // Eliminar producto

module.exports = router;
