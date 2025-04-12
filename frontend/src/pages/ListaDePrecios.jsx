import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

// Components
import ListaProductos from "../components/ListaProductos";
import CotizacionMobile from "../components/CotizacionMobile";
import CotizacionPanel from "../components/CotizacionPanel";

export default function ListaDePrecios() {
  const [productos, setProductos] = useState([]);
  const [searchParams] = useSearchParams();
  const [busqueda, setBusqueda] = useState("");
  const [mostrarCotizacion, setMostrarCotizacion] = useState(false);

  useEffect(() => {
    const query = searchParams.get("q") || "";
    setBusqueda(query);
  }, [searchParams]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/productos")
      .then((res) => setProductos(res.data))
      .catch((err) => console.error("Error al obtener productos:", err));
  }, []);

  const productosFiltrados = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.marca?.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.categoria?.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-center text-black mb-8 uppercase">
        Lista de Precios
      </h1>

      {/* 🔍 Barra de búsqueda (solo visible en mobile) */}
      <div className="relative mb-4 md:hidden">
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre, marca o categoría..."
          className="w-full border-2 border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* 🧱 Lista de productos */}
        <div className="w-full md:w-2/3">
          <div className="border border-gray-300 rounded-sm max-h-[70vh] overflow-y-auto">
            {productosFiltrados.map((producto) => (
              <ListaProductos key={producto._id} producto={producto} />
            ))}
          </div>
        </div>

        {/* 🧾 Cotización panel escritorio */}
        <div className="w-full md:w-1/3 hidden md:block">
          <CotizacionPanel />
        </div>
      </div>

      {/* 🛒 Botón flotante para abrir cotización en mobile */}
      <button
        onClick={() => setMostrarCotizacion(true)}
        className="fixed bottom-4 right-4 z-50 bg-red-600 text-white p-3 rounded-full shadow-md md:hidden"
        title="Ver cotización"
      >
        🛒
      </button>

      {/* 📱 Cotización modal mobile */}
      {mostrarCotizacion && (
  <CotizacionMobile onClose={() => setMostrarCotizacion(false)} />
)}

    </div>
  );
}
