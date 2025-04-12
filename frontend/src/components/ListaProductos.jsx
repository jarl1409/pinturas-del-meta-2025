import { Link } from "react-router-dom";

export default function ListaProductos({ producto, onClick }) {
  return (
    <div
      onClick={onClick}
      className="block hover:bg-gray-100 transition cursor-pointer"
    >
      <div className="flex items-stretch justify-between border-b border-gray-200 px-3 py-4">
        {/* 🖼️ Imagen + Info */}
        <div className="flex items-center gap-4 w-full">
          <div className="pr-4 flex items-center">
            <img
              src={`http://localhost:5000/${producto.imagen}`}
              alt={producto.nombre}
              className="w-14 h-14 object-cover"
            />
          </div>
          <div className="flex flex-col w-full">
            <h2 className="text-sm font-bold text-black">
              {producto.nombre}
            </h2>
            <p className="text-xs text-gray-600 line-clamp-3">
              {producto.descripcion}
            </p>
          </div>
        </div>

        {/* 💰 Precio con enlace directo */}
        <Link
          to={`/precios/${producto._id}`}
          className="text-sm font-bold text-right text-black min-w-[90px] hover:underline"
          onClick={(e) => e.stopPropagation()} // Evita disparar el onClick del contenedor
        >
          ${producto.precio.toLocaleString()}
        </Link>
      </div>
    </div>
  );
}
