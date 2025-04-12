// /pinturas-del-meta/front/src/components/Footer.tsx

import { Facebook, Instagram, Youtube, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

import WhatsappIcon from "../ui/WhatsappSvg";

//Importando logo
import logoPdm from "../../assets/LogoPDM 1.png"


export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-10 sm:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
        {/* Columna 1: Logo + redes */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="flex items-center h-full">
            <img
              src= {logoPdm}
              alt="Logo"
              className="h-12 object-contain"
            />
          </Link>

          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm font-semibold">Síguenos en redes:</p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/pinturasdelmet4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 hover:text-blue-500" />
              </a>
              <a
                href="https://www.instagram.com/pinturasdelmeta/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 hover:text-pink-500" />
              </a>
              <a
                href="http://www.youtube.com/@pinturasdelmeta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5 hover:text-red-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Columna 2: Botón + ubicación */}
        <div className="text-center md:text-left flex flex-col gap-4 items-center md:items-start">
          {/* Botón Lista de precios */}
          <Link
            to="/precios"
            className="bg-red-600 text-white px-4 py-2 text-sm rounded-full hover:bg-red-700 transition text-center"
          >
            Lista de precios
          </Link>

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-white" />
            <p className="text-sm font-semibold">Ubicación</p>
          </div>
          <p className="text-sm">
            Cra 35 N°26a-21, Villavicencio, Meta <br />
            Al respaldo del CC Unicentro, frente al hotel el Caimito
          </p>
        </div>

        {/* Columna 3: Contacto */}
        <div className="text-center md:text-left flex flex-col gap-2 items-center md:items-start">
          <p className="text-sm font-semibold">Contacto</p>

          {/* WhatsApp 1 */}
          <a
            href="https://wa.me/573105702782"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <WhatsappIcon />
            <span className="text-sm">+57 310 5702782</span>
          </a>

          {/* WhatsApp 2 */}
          <a
            href="https://wa.me/573193495544"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <WhatsappIcon />
            <span className="text-sm">+57 319 3495544</span>
          </a>

          {/* WhatsApp 3 */}
          <a
            href="https://wa.me/573108186735"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <WhatsappIcon />
            <span className="text-sm">+57 310 8186735</span>
          </a>

          {/* Email */}
          <a
            href="mailto:pinturasdelmeta@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            <Mail className="w-5 h-5 text-white" />
            <span className="text-sm">pinturasdelmeta@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

