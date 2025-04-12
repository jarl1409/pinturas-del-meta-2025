import { Link } from "react-router-dom";

export default function ListaProductos({ producto }) {
  return (
    <Link to={`/precios/${producto._id}`} className="block hover:bg-gray-100 transition">
      <div className="flex items-stretch justify-between border-b border-gray-200 px-3 py-4">
        {/* Imagen y datos */}
        <div className="flex items-center gap-4 w-full">
          <div className="pr-4 flex items-center">
            <img
              src={`http://localhost:5000/${producto.imagen}`}
              alt={producto.nombre}
              className="w-14 h-14 object-cover"
            />
          </div>
          <div className="flex flex-col w-full">
            <h2 className="text-sm font-bold text-black">{producto.nombre}</h2>
            <p className="text-xs text-gray-600 line-clamp-3">{producto.descripcion}</p>
          </div>
        </div>

        {/* Precio */}
        <div className="text-sm font-bold text-right text-black min-w-[90px]">
          ${producto.precio.toLocaleString()}
        </div>
      </div>
    </Link>
  );
}
