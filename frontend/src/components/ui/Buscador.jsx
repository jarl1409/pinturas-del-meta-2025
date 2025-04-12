// /pinturas-del-meta/front/src/components/Buscador.jsx

import { Search } from "lucide-react";

export default function Buscador({ valor, onCambio, onSubmit, placeholder = "Buscar..." }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center h-full relative w-64 max-w-xs"
    >
      <input
        type="text"
        value={valor}
        onChange={(e) => onCambio(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 pr-10 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
      >
        <Search className="w-4 h-4" />
      </button>
    </form>
  );
}
