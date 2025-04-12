import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import EnConstruccion from "./pages/EnConstruccion";
import ListaPrecios from "./pages/ListaDePrecios";
import ProductoDetalle from "./components/ProductoDetalle";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/precios" element={<ListaPrecios />} />
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
