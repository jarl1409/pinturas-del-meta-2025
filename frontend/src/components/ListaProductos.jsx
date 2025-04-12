// /pinturas-del-meta/front/src/components/ListaProductos.jsx

export default function ListaProductos({ producto }) {
  if (!producto) return null;

  return (
    <div className="flex items-stretch justify-between border-b border-gray-200 px-3 py-4">
      <div className="flex items-center gap-4 w-full">
        <div className="pr-4 h-full flex items-center">
          <img
            src={`http://localhost:5000/${producto.imagen}`}
            alt={producto.nombre}
            className="w-14 h-14 object-cover"
          />
        </div>
        <div className="flex flex-col w-full">
          <h2 className="text-sm font-bold text-black">{producto.nombre}</h2>
          <p className="text-xs text-gray-600 line-clamp-3">
            {producto.descripcion || "Sin descripción"}
          </p>
        </div>
      </div>

      <div className="text-sm font-bold text-right text-black min-w-[90px]">
        ${producto.precio?.toLocaleString() ?? "0"}
      </div>
    </div>
  );
}
