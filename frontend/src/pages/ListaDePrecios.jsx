// src/pages/ListaDePrecios.jsx
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

import ListaProductos from "../components/ListaProductos";
import ProductoDetalle from "../components/ProductoDetalle";
import CotizacionPanel from "../components/CotizacionPanel";
import CotizacionMobile from "../components/CotizacionMobile";
import Buscador from "../components/Buscador";

export default function ListaDePrecios() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarCotizacion, setMostrarCotizacion] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // useEffect se ejecuta cuando cambia el objeto searchParams (parámetros de búsqueda en la URL)
  useEffect(() => {
    // Obtiene el valor del parámetro "q" de la URL. Si no existe, se asigna una cadena vacía.
    const query = searchParams.get("q") || "";

    // Actualiza el estado local 'busqueda' con el valor del parámetro 'q'
    setBusqueda(query);
  }, [searchParams]); // Dependencia: se vuelve a ejecutar si 'searchParams' cambia

  // Obtiene todos los productos de la base de datos al montar el componente
  useEffect(() => {
    axios
      // Realiza la solicitud GET al endpoint de productos
      .get("http://localhost:5000/api/productos")
      // Actualiza el estado 'productos' con los datos obtenidos
      .then((res) => setProductos(res.data))
      // Captura y muestra cualquier error que ocurra durante la solicitud
      .catch((err) => console.error("Error al obtener productos:", err));
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  // Filtro de productos
  const productosFiltrados = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.marca?.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.categoria?.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-black uppercase text-center md:text-left">
          Lista de Precios
        </h1>
        <button
          onClick={() => navigate("/crear-producto")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Agregar producto
        </button>
      </div>
      {/*Busqueda Desktop*/}
      <div className="hidden md:block relative mb-4 ">
        <Buscador placeholder={"Buscar por nombre, marca o categoría..."} />
      </div>

      {/* Busqueda mobile */}
      <div className="relative mb-4 md:hidden">
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre, marca o categoría..."
          className="w-full border-2 border-gray-300 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
      </div>

      {/* Contenedor de Listado de Productos y Cotizacion */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Lista Productos o Producto Detalle */}
        <div className="w-full md:w-2/3">
          {productoSeleccionado ? (
            <ProductoDetalle
              producto={productoSeleccionado}
              onVolver={() => setProductoSeleccionado(null)}
            />
          ) : (
            <div className="border border-gray-300 rounded-sm max-h-[70vh] overflow-y-auto">
              {productosFiltrados.map((producto) => (
                <ListaProductos
                  key={producto._id}
                  producto={producto}
                  onClick={() => setProductoSeleccionado(producto)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Cotización escritorio */}
        <div className="w-full md:w-1/3 hidden md:block">
          <CotizacionPanel />
        </div>
      </div>

      {/* Botón flotante (sólo mobile) */}
      <button
        onClick={() => setMostrarCotizacion(true)}
        className="fixed bottom-4 right-4 z-50 bg-red-600 text-white p-3 rounded-full shadow-md md:hidden"
        title="Ver cotización"
      >
        🛒
      </button>

      {/* Cotización móvil */}
      {mostrarCotizacion && (
        <CotizacionMobile onClose={() => setMostrarCotizacion(false)} />
      )}
    </div>
  );
}
