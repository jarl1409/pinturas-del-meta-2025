import { Link } from "react-router-dom";

export default function ProductoItem({ producto }) {
  return (
    <div
      to={`/precios/${producto._id}`}
      className="block hover:bg-gray-100 transition"
    >
      <div className="flex items-center justify-between border-b border-gray-200 px-3 py-4">
        <div className="flex items-center gap-4 w-full">
          
          <div className="pr-4 flex">
            <img
              src={`http://localhost:5000/${producto.imagen}`}
              alt={producto.nombre}
              className="w-14 h-14 object-cover"
            />
          </div>
          <div className="flex flex-col w-full">
            <h2 className="text-sm md:text-2xl font-bold text-black">
              {producto.nombre}
            </h2>
            <p className="text-xs  text-gray-600 line-clamp-3">
              {producto.descripcion}
            </p>
          </div>
        </div>

        <Link
          to={`/precios/${producto._id}`}
          className="flex items-center bg-green-600  text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          <p className="text-xs md:text-base whitespace-nowrap">Ver precio</p>
        </Link>
      </div>
    </div>
  );
}
