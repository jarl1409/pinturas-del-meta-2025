// 👇 1. Cargar variables de entorno desde .env
require('dotenv').config();

// 👇 2. Importar librerías necesarias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// 👇 3. Importar rutas
const productosRoutes = require('./routes/productos'); // Asegúrate que esta ruta exista

// 👇 4. Crear la app de Express
const app = express();
const PORT = process.env.PORT || 5000;

// 👇 5. Middlewares (funciones que se ejecutan antes de llegar a las rutas)
app.use(cors()); // Permitir peticiones desde el frontend (localhost:5173 por ejemplo)
app.use(express.json()); // Leer datos JSON del body de las peticiones

// 👇 6. Rutas
app.use('/api/productos', productosRoutes); // Todas las rutas de productos comenzarán por /api/productos

// 👇 7. Ruta raíz opcional para testear en el navegador
app.get('/', (req, res) => {
  res.send('API de Pinturas del Meta funcionando');
});

// 👇 8. Conexión a MongoDB (usando la variable de entorno desde .env)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB');

    // 👇 9. Iniciar el servidor Express
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Error al conectar a MongoDB:', error);
  });
