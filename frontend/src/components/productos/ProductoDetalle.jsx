// src/pages/ProductoDetalle.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Pencil,
  Check,
  Upload,
  ArrowLeft,
  Save,
  Presentation,
} from "lucide-react";
import axios from "axios";

import { usePresentaciones } from "../../hooks/usePresentaciones";

export default function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { precios, setPrecios, handlePrecioChange, presentaciones } =
    usePresentaciones();
  const [presentationSelect, setPresentationSelect] = useState("");

  const [producto, setProducto] = useState(null);
  const [form, setForm] = useState(null);
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/productos/${id}`)
      .then((res) => {
        setProducto(res.data);
        setForm({ ...res.data });
        setPrecios(res.data.precios || {}); // <-- importante
      })
      .catch((err) => console.error("Error al obtener producto:", err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImagenChange = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      setForm((prev) => ({ ...prev, imagen: archivo }));
    }
  };

  const handlePrecioCambio = (pres, value) => {
    setForm((prev) => ({
      ...prev,
      precios: {
        ...prev.precios,
        [pres]: value === "" ? undefined : Number(value),
      },
    }));
  };

  const handleGuardarCambios = async () => {
    try {
      const data = new FormData();
      data.append("nombre", form.nombre);
      data.append("descripcion", form.descripcion);
      data.append("categoria", form.categoria || "");
      data.append("marca", form.marca || "");

      Object.entries(form.precios).forEach(([key, value]) => {
        if (value !== undefined) {
          data.append(`precios[${key}]`, value);
        }
      });

      if (form.imagen instanceof File) {
        data.append("imagen", form.imagen);
      }

      const res = await axios.put(
        `http://localhost:5000/api/productos/${id}`,
        data
      );
      setProducto(res.data);
      setForm({ ...res.data, precios: res.data.precios });
      setEditando(false);
    } catch (error) {
      console.error("❌ Error al guardar cambios:", error);
    }
  };

  if (!form) return <p className="text-center mt-10">Cargando producto...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 relative">
      <div className="absolute top-4 right-4">
        <button
          onClick={editando ? handleGuardarCambios : () => setEditando(true)}
          className={`text-white p-2 rounded-full ${
            editando ? "bg-green-600" : "bg-red-700"
          }`}
          title={editando ? "Guardar cambios" : "Editar producto"}
        >
          {editando ? <Check /> : <Pencil />}
        </button>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="flex items-center mb-4 text-black"
      >
        <ArrowLeft className="mr-1 w-5 h-5" /> Regresar
      </button>

      <div className="flex flex-col sm:flex-row gap-4 items-start mb-6">
        <div className="w-36 h-36 bg-gray-200 flex items-center justify-center text-2xl font-bold overflow-hidden">
          {/* Visualizacion del producto 
          Detecta si esta editando o no */}
          {editando ? (
            <label className="cursor-pointer">
              <Upload className="w-8 h-8" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImagenChange}
              />
            </label>
          ) : (
            <div className="w-36 h-36 overflow-hidden rounded-md bg-gray-100">
              <img
                src={
                  typeof form.imagen === "string"
                    ? `http://localhost:5000/${form.imagen}`
                    : URL.createObjectURL(form.imagen)
                }
                alt={form.nombre}
                className="object-contain w-full h-full"
              />
            </div>
          )}
        </div>

        <div className="flex-1 space-y-2">
          {editando ? (
            <>
              {/* VISTA EDICION PRODUCTO */}
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                className="text-xl font-bold w-full bg-gray-200 rounded px-2 py-1"
              />
              <textarea
                name="descripcion"
                value={form.descripcion}
                onChange={handleChange}
                rows={4}
                className="text-gray-700 w-full bg-gray-200 rounded px-2 py-1 resize-none"
              />
            </>
          ) : (
            <>
              {/* VISTA PRODUCTO */}
              <h2 className="text-xl font-bold text-black">{form.nombre}</h2>
              <p className="text-gray-700">{form.descripcion}</p>

              {/* Opciones de presentacion del producto */}
              <select
                name="presentacion"
                onChange={(e) => setPresentationSelect(e.target.value)}
                className="bg-gray-200 px-2 py-1 rounded w-fit"
              >
                <option value="">Cantidad</option>
                {presentaciones
                  .filter((pres) => precios[pres] && !isNaN(precios[pres]))
                  .map((pres) => (
                    <option key={pres} value={pres}>
                      {pres}
                    </option>
                  ))}
              </select>
            </>
          )}
        </div>
      </div>
      {/* Visualizacion de precios */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Precios:</h3>

        {!editando && presentationSelect ? (
          <div className="flex justify-between items-center">
            <p className="font-bold">Precio solo de {presentationSelect}</p>
            <span>
              $
              {form.precios[presentationSelect]?.toLocaleString() ||
                "No disponible"}
            </span>
          </div>
        ) : (
          <p className="mt-4 text-sm text-gray-600 italic">
            Seleccione una cantidad para ver el precio.
          </p>
        )}
        {editando &&
          presentaciones.map((pres) => {
            const tienePrecio = form.precios?.[pres] !== undefined;
            if (!editando && !tienePrecio) return null;

            return (
              <div key={pres} className="flex justify-between items-center">
                <p className="font-bold">{pres}</p>
                <div className="flex items-center gap-2">
                  {editando ? (
                    <input
                      type="number"
                      value={form.precios[pres] || ""}
                      onChange={(e) => handlePrecioCambio(pres, e.target.value)}
                      className="bg-gray-200 px-2 py-1 rounded text-right"
                    />
                  ) : (
                    <span className="font-bold">
                      ${form.precios[pres]?.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
