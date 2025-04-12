// /pinturas-del-meta/front/src/components/Header.tsx

import { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, Search, X } from "lucide-react";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const pages = [
    { id: "lista", name: "Lista de precios" },
    { id: "pintura", name: "Pintura" },
    { id: "complementarios", name: "Complementarios" },
    { id: "contacto", name: "Contacto" },
    { id: "sobre", name: "Sobre nosotros" },
  ];

  return (
    <>
      <header className="bg-black w-full h-16 flex items-center justify-between text-white px-6 md:px-8">
        {/* Logo */}
        <div className="flex items-center h-full">
          <Link to="/" className="flex items-center h-full">
            <img
              src="/LogoPDM 1.png"
              alt="LogoPDM"
              className="h-9 object-contain"
            />
          </Link>
        </div>

        {/* Navegación (escritorio) */}
        <nav className="hidden md:flex h-full">
          {pages.map((page) => (
            <Link
              key={page.id}
              to={`/${page.id}`}
              className="h-full px-6 flex items-center justify-center hover:bg-red-900 transition-colors duration-200 text-xs"
            >
              {page.name}
            </Link>
          ))}
        </nav>

        {/* Buscador (escritorio) */}
        <div className="hidden md:flex items-center h-full relative w-64 max-w-xs ml-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-4 py-2 pr-10 rounded-full bg-white text-black focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black w-4 h-4" />
        </div>

        {/* Botones móviles */}
        <div className="flex md:hidden space-x-4">
          <button onClick={() => setShowSearch(true)}>
            <Search className="w-5 h-5" />
          </button>
          <button onClick={() => setShowNav(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Modal navegación móvil */}
      {showNav && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center text-white space-y-6">
          <button
            onClick={() => setShowNav(false)}
            className="absolute top-4 right-4"
          >
            <X className="w-6 h-6" />
          </button>
          {pages.map((page) => (
            <Link
              key={page.id}
              to={`/${page.id}`}
              className="text-lg font-medium hover:text-red-400"
              onClick={() => setShowNav(false)}
            >
              {page.name}
            </Link>
          ))}
        </div>
      )}

      {/* Modal buscador móvil */}
      {showSearch && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center px-6">
          <button
            onClick={() => setShowSearch(false)}
            className="absolute top-4 right-4 text-black"
          >
            <X className="w-6 h-6" />
          </button>
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-4 py-3 rounded-full border border-gray-400 text-black text-base focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      )}
    </>
  );
}
