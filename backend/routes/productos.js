const express = require("express");
const router = express.Router();
const multer = require("multer");

// Controladores
const {
  crearProducto,
  obtenerProductos,
  obtenerProducto, 
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/productoController");

// Configuración de almacenamiento para imágenes (multer)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const cleanName = file.originalname.replace(/\s+/g, "-");
    cb(null, `${Date.now()}-${cleanName}`);
  },
});

const upload = multer({ storage });

/* 📦 Rutas de productos */
router.post("/", upload.single("imagen"), crearProducto);
router.get("/", obtenerProductos);
router.get("/:id", obtenerProducto); 
router.put("/:id", upload.single("imagen"), actualizarProducto);
router.delete("/:id", eliminarProducto);

module.exports = router;
