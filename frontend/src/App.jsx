import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/LandingPage";
import EnConstruccion from "./pages/EnConstruccion";
import ListaPrecios from "./pages/precios/ListaDePrecios";
import CrearProducto from "./pages/precios/CrearProducto";
import ProductoDetalle from "./components/productos/ProductoDetalle";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/precios" element={<ListaPrecios />} />
        <Route path="/crear-producto" element={<CrearProducto />} />
        <Route path="/precios/:id" element={<ProductoDetalle />} />
        <Route path="/pintura" element={<EnConstruccion />} />
        <Route path="/complementarios" element={<EnConstruccion />} />
        <Route path="/contacto" element={<EnConstruccion />} />
        <Route path="/sobre" element={<EnConstruccion />} />
        <Route path="*" element={<EnConstruccion />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
