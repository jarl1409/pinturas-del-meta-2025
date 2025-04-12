// src/context/ProductosContext.jsx
import { createContext, useState, useContext } from "react";

const ProductosContext = createContext();

export function ProductosProvider({ children }) {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const agregarProducto = (producto) => {
    setProductosSeleccionados((prev) => [...prev, producto]);
  };

  const quitarProducto = (id) => {
    setProductosSeleccionados((prev) => prev.filter((p) => p._id !== id));
  };

  const actualizarCantidad = (id, cantidad) => {
    setProductosSeleccionados((prev) =>
      prev.map((p) => (p._id === id ? { ...p, cantidad } : p))
    );
  };

  const limpiarCotizacion = () => {
    setProductosSeleccionados([]);
  };

  return (
    <ProductosContext.Provider
      value={{ productosSeleccionados, agregarProducto, quitarProducto, actualizarCantidad, limpiarCotizacion }}
    >
      {children}
    </ProductosContext.Provider>
  );
}

export const useProductos = () => useContext(ProductosContext);
    