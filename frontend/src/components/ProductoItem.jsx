// src/components/ProductoItem.jsx

export default function ProductoItem({ producto }) {
    return (
      <div className="flex items-center justify-between border-b border-gray-200 px-3 py-4">
        <div className="flex gap-4 w-full">
          <img
            src={`http://localhost:5000/${producto.imagen}`}
            alt={producto.nombre}
            className="w-14 h-14 object-cover"
          />
          <div className="flex flex-col justify-center w-full">
            <h2 className="text-sm font-bold text-black">{producto.nombre}</h2>
            <p className="text-xs text-gray-600 line-clamp-3">
              {producto.descripcion}
            </p>
          </div>
        </div>
  
        <div className="text-sm font-bold text-right text-black min-w-[90px] flex items-center justify-end">
          ${producto.precio.toLocaleString()}
        </div>
      </div>
    );
  }
  