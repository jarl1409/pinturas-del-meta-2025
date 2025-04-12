// src/components/CotizacionPanel.jsx

export default function CotizacionPanel() {
  return (
    <div className="w-full md:max-w-md bg-white shadow-md p-4 rounded-md h-fit">
      {/* Título */}
      <h2 className="text-xl font-extrabold text-red-600 mb-4 text-center uppercase">
        Cotización
      </h2>

      {/* Scroll SOLO para productos */}
      <div className="text-sm space-y-4 max-h-[60vh] overflow-y-auto pr-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 border-b pb-2"
          >
            {/* Imagen */}
            <img
              src="/Automotriz_card.png"
              alt={`Producto ${i + 1}`}
              className="w-14 h-14 object-cover rounded"
            />

            {/* Información */}
            <div className="flex-1">
              <p className="font-bold text-gray-800">Producto #{i + 1}</p>
              <p className="text-xs text-gray-500">
                Descripción corta del producto
              </p>
            </div>

            {/* Cantidad y precio */}
            <div className="text-right">
              <div className="flex items-center gap-2 justify-end mb-1">
                <button className="px-2 bg-gray-200 rounded">-</button>
                <span className="w-6 text-center">1</span>
                <button className="px-2 bg-gray-200 rounded">+</button>
              </div>
              <p className="text-sm font-semibold">${(i + 1) * 10000}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Total (fuera del scroll) */}
      <div className="text-right font-bold mt-6 text-lg">
        Valor total: <span className="text-green-600">$100.000</span>
      </div>
    </div>
  );
}
