import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

export default function CrearProducto() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    marca: "",
  });

  const [precios, setPrecios] = useState({
    "1/32": "",
    "1/16": "",
    "1/8": "",
    "1/4": "",
    "galon": "",
    "cuñete": "",
  });

  const [imagen, setImagen] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrecioChange = (e) => {
    const { name, value } = e.target;
    setPrecios((prev) => ({ ...prev, [name]: value }));
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

    // Filtrar precios válidos (evita campos vacíos)
    Object.entries(precios).forEach(([key, value]) => {
      if (value) data.append(`precios[${key}]`, value);
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
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-sm text-gray-600 hover:text-black mb-4"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Volver
      </button>

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

        {/* Precios por presentación */}
        <div className="border rounded p-4 bg-gray-50">
          <h3 className="font-bold mb-2">Precios por presentación</h3>
          {Object.keys(precios).map((key) => (
            <div key={key} className="flex items-center gap-2 mb-2">
              <label className="w-24 capitalize">{key}:</label>
              <input
                type="number"
                name={key}
                value={precios[key]}
                onChange={handlePrecioChange}
                className="flex-1 border rounded p-2"
                placeholder={`Precio para ${key}`}
              />
            </div>
          ))}
        </div>

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
