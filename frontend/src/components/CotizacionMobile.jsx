// src/components/CotizacionMobile.jsx

export default function CotizacionMobile({ onClose }) {
  return (
    <div className="fixed inset-0 bg-white z-50 p-4 overflow-y-auto md:hidden">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-black text-xl"
      >
        ✖
      </button>

      <h2 className="text-xl font-extrabold text-red-600 mb-4 text-center uppercase mt-10">
        Cotización
      </h2>

      <div className="text-sm space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex justify-between border-b pb-2">
            <div>
              <p className="font-bold">Nombre del Producto</p>
              <p className="text-xs text-gray-500">
                Descripción corta del producto
              </p>
            </div>
            <div className="text-right text-sm">
              <div className="flex items-center gap-1 justify-end">
                <button className="px-1 bg-gray-200">-</button>
                <span>1</span>
                <button className="px-1 bg-gray-200">+</button>
              </div>
              <p>$000.000</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right font-bold mt-6 text-lg">
        Valor total: <span className="text-green-600">$0.000.000</span>
      </div>
    </div>
  );
}
