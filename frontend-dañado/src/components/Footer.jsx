// /pinturas-del-meta/front/src/components/Footer.tsx

import { Facebook, Instagram, Youtube, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-10 sm:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8 md:flex-row md:justify-between md:items-start">
        {/* Columna 1: Logo + redes */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link to="/" className="flex items-center h-full">
            <img
              src="/LogoPDM 1.png"
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
            to="/lista"
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
            <WhatsAppIcon />
            <span className="text-sm">+57 310 5702782</span>
          </a>

          {/* WhatsApp 2 */}
          <a
            href="https://wa.me/573193495544"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <WhatsAppIcon />
            <span className="text-sm">+57 319 3495544</span>
          </a>

          {/* WhatsApp 3 */}
          <a
            href="https://wa.me/573108186735"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <WhatsAppIcon />
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

// ✅ Icono de WhatsApp (SVG inline)
function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      className="w-5 h-5 text-green-500"
    >
      <path d="M380.9 97.1C339.1 55.4 282 32 224.2 32c-106.1 0-192.1 85.9-192.1 191.8 0 33.7 8.9 66.4 25.6 95.3L32 480l164.3-43.1c27.5 15 58.5 23.1 90 23.1h.1c106 0 192.1-85.9 192.1-191.8 0-50.6-19.8-98.2-55.6-134.1zM224.2 426c-27.2 0-53.9-7.3-77.1-21.1l-5.5-3.3-97.6 25.6 26-95.2-3.6-5.8c-15.9-25.9-24.3-55.8-24.3-86.3 0-91.5 74.7-166.1 166.2-166.1 44.4 0 86.1 17.3 117.6 48.8s48.6 73.3 48.6 117.6c0 91.5-74.7 166.1-166.3 166.1zm101.7-138.9c-5.5-2.8-32.6-16.1-37.7-17.9-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 17.9-17.5 21.6-3.2 3.7-6.5 4.2-12 1.4s-23.4-8.6-44.5-27.5c-16.4-14.6-27.4-32.7-30.6-38.3-3.2-5.6-.3-8.6 2.4-11.4 2.5-2.6 5.6-6.6 8.5-9.9 2.8-3.2 3.7-5.6 5.6-9.3s.9-7-0.5-9.9c-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.8-.2s-10 1.4-15.2 7c-5.1 5.6-20.1 19.6-20.1 47.9s20.6 55.5 23.5 59.3c2.8 3.7 40.6 61.9 98.4 86.8 13.7 5.9 24.4 9.4 32.7 12.1 13.8 4.4 26.4 3.8 36.3 2.3 11.1-1.7 32.6-13.3 37.2-26.2 4.6-12.8 4.6-23.9 3.2-26.2-1.3-2.2-5-3.5-10.5-6.2z" />
    </svg>
  );
}
