// src/components/CotizacionMobile.jsx

import { X } from "lucide-react";
import WhatsappIcon from "../layouts/WhatsappSvg";

export default function CotizacionMobile({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm flex items-end md:hidden">
      {/* Panel blanco con sombra */}
      <div className="w-full bg-white rounded-t-3xl p-5 max-h-[85vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-extrabold text-red-600 uppercase">
            Cotización
          </h2>
          <button
            onClick={onClose}
            aria-label="Cerrar cotización"
            className="text-gray-600 hover:text-red-500 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Lista de productos en cotización */}
        <div className="text-sm space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex justify-between border-b pb-2 gap-3 items-center"
            >
              <div className="flex-1">
                <p className="font-bold text-gray-800">Nombre del Producto</p>
                <p className="text-xs text-gray-500">
                  Descripción corta del producto
                </p>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-2 justify-end mb-1">
                  <button className="px-2 bg-gray-200 rounded">-</button>
                  <span className="w-6 text-center">1</span>
                  <button className="px-2 bg-gray-200 rounded">+</button>
                </div>
                <p className="text-sm font-semibold">$000.000</p>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="mt-6 text-right">
          <p className="text-base font-bold text-gray-800">
            Total: <span className="text-green-600">$0.000.000</span>
          </p>
        </div>

        {/* Botón enviar cotización */}
        <button
          className="
        mt-6 w-full bg-green-600 text-white py-3 rounded-full 
        active:scale-95 transition flex items-center justify-center gap-2"
        >
          <WhatsappIcon className="text-white" />
          <span>Enviar cotización</span>
        </button>
      </div>
    </div>
  );
}
