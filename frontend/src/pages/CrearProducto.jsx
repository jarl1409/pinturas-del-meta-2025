// src/pages/CrearProducto.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CrearProducto() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    categoria: "",
    marca: "",
    stock: "",
    presentacion: "",
  });
  const [imagen, setImagen] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImagenChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (imagen) data.append("imagen", imagen);

    try {
      await axios.post("http://localhost:5000/api/productos", data);
      navigate("/precios");
    } catch (error) {
      console.error("Error al crear producto:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Crear nuevo producto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="number"
          name="precio"
          placeholder="Precio"
          value={form.precio}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          value={form.descripcion}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoría"
          value={form.categoria}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="marca"
          placeholder="Marca"
          value={form.marca}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
        <input
          type="text"
          name="presentacion"
          placeholder="Presentación"
          value={form.presentacion}
          onChange={handleChange}
          className="w-full border rounded p-2"
        />

        <div>
          <label className="block font-semibold text-sm mb-1 text-gray-700">
            Foto del producto:
          </label>
          <input
            type="file"
            name="imagen"
            onChange={handleImagenChange}
            className="w-full border border-gray-300 p-2 rounded"
            accept="image/*"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Crear producto
        </button>
      </form>
    </div>
  );
}
