import React, { useState } from "react";

export function usePresentaciones(defaultValues = {}) {
  const [precios, setPrecios] = useState({
    unidad: "",
    "1/32": "",
    "1/16": "",
    "1/8": "",
    "1/4": "",
    galon: "",
    cunete: "",
    ...defaultValues,
  });

  const handlePrecioChange = (e) => {
    const { name, value } = e.target;
    setPrecios((prev) => ({ ...prev, [name]: value }));
  };
  const presentaciones = Object.keys(precios);

  return { precios, 
    setPrecios, 
    handlePrecioChange, 
    presentaciones };
}
