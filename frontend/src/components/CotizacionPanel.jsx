// src/components/CotizacionPanel.jsx

export default function CotizacionPanel() {
    return (
      <div className="w-full md:max-w-md md:block bg-white shadow-md p-4 rounded-md h-fit">
        <h2 className="text-xl font-extrabold text-red-600 mb-4 text-center uppercase">
          Cotización
        </h2>
        <div className="text-sm space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between border-b pb-2">
              <div>
                <p className="font-bold">Nombre del Producto</p>
                <p className="text-xs text-gray-500">Descripción corta del producto</p>
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
  