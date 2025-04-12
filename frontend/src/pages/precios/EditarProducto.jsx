import { useState, useEffect } from "react";
import { Pencil, Check, Upload, ArrowLeft, Plus } from "lucide-react";

export default function EditarProducto({ producto, onVolver }) {
  const [editando, setEditando] = useState(false);
  const [form, setForm] = useState({ ...producto });

  useEffect(() => {
    setForm({ ...producto });
  }, [producto]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImagenChange = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      setForm({ ...form, imagen: URL.createObjectURL(archivo) });
    }
  };

  if (!producto)
    return <p className="text-center mt-10">Cargando producto...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 relative">
      {/* Botón editar arriba derecha */}
      <button
        onClick={() => setEditando(!editando)}
        className="absolute top-4 right-4 bg-red-700 text-white p-2 rounded-full"
        title="Editar producto"
      >
        {editando ? <Check /> : <Pencil />}
      </button>

      <button onClick={onVolver} className="flex items-center mb-4 text-black">
        <ArrowLeft className="mr-1 w-5 h-5" /> Regresar
      </button>

      <div className="flex flex-col sm:flex-row gap-4 items-start mb-6">
        <div className="w-36 h-36 bg-gray-200 flex items-center justify-center text-2xl font-bold overflow-hidden">
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
            <img
              src={`http://localhost:5000/${form.imagen}`}
              alt={form.nombre}
              className="object-cover w-full h-full"
            />
          )}
        </div>

        <div className="flex-1 space-y-2">
          {editando ? (
            <>
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
              <select
                name="cantidad"
                value={form.cantidad || ""}
                onChange={handleChange}
                className="bg-gray-200 rounded px-2 py-1 text-sm"
              >
                <option value="">Cantidad</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold text-black">{form.nombre}</h2>
              <select
                name="presentacion"
                value={form.presentacion || ""}
                onChange={handleChange}
                className="bg-gray-200 rounded px-2 py-1 text-sm"
              >
                <option value="">Presentacion</option>
                <option value="1">1/32</option>
                <option value="2">1/16</option>
                <option value="3">1/8</option>
                <option value="4">1/4</option>
                <option value="5">Galon</option>
                <option value="6">Cuñete</option>
              </select>
            </>
          )}
        </div>
      </div>

      {/* Precios */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold">Precios:</h3>

        <div className="flex justify-between items-center">
          <p className="font-bold">Precio solo:</p>
          <div className="flex items-center gap-2">
            {editando ? (
              <input
                type="text"
                name="precioSolo"
                value={form.precio || ""}
                onChange={handleChange}
                className="bg-gray-200 px-2 py-1 rounded text-right"
              />
            ) : (
              <span className="font-bold">
                ${form.precio?.toLocaleString() || "00.000"}
              </span>
            )}
            <Plus className="w-5 h-5 border rounded p-0.5" />
          </div>
        </div>

        <p className="font-bold">Precio con catalizador:</p>
        {["Endurecedor X-20", "Endurecedor IXELL"].map((cat, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <p>{cat}</p>
            <div className="flex items-center gap-2">
              <span className="font-bold">$00.000</span>
              <Plus className="w-5 h-5 border rounded p-0.5" />
            </div>
          </div>
        ))}

        <p className="font-bold">Precio con disolvente:</p>
        {["U-203", "D-807"].map((dis, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <p>{dis}</p>
            <div className="flex items-center gap-2">
              <span className="font-bold">$00.000</span>
              <Plus className="w-5 h-5 border rounded p-0.5" />
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-bold text-black py-3">Sobre el producto:</h3>
      <p className="text-gray-700 line-clamp-5 sm:line-clamp-none">
        {form.descripcion}
      </p>
    </div>
  );
}
