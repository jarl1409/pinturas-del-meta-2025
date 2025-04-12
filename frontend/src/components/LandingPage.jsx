import UbicacionCard from "./layout/UbicacionCard";
import Cards from "./ui/Cards";
import HorarioAtencion from "./layout/HorarioAtencion";
import fotoFachadaPdm from "../assets/FotoFachadaPDM.png"

export default function LandingPage() {
  return (
    <>
      {/* Sección principal */}
      <section className="relative w-full overflow-hidden min-h-[60vh]">
        <div className="flex flex-col md:flex-row h-full w-full">
          {/* Texto principal */}
          <div className="flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20 md:w-1/2 space-y-4 z-10 py-8 md:py-0">
            <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight uppercase italic text-gray-900">
              Un nuevo concepto <br /> en pinturas
            </h1>
            <h2 className="text-xs sm:text-sm md:text-base lg:text-lg leading-snug text-gray-800">
              Buscamos las últimas tecnologías en los sectores de repintado
              automotriz, protección industrial y pintura arquitectónica.
            </h2>
          </div>

          {/* Imagen con degradado */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center overflow-hidden group min-h-[300px] sm:min-h-[400px] md:min-h-[auto]">
            <img
              src= {fotoFachadaPdm}
              alt="Foto Fachada"
              className="w-full h-auto object-contain"
            />
            <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-transparent to-white transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Banda informativa inferior */}
      <article className="bg-red-900 text-white flex flex-col justify-center items-center py-10 px-6 md:px-12 space-y-3">
        <p className="font-bold text-lg md:text-lg text-center max-w-4xl">
          Encuentra las soluciones que Pinturas del Meta ofrece para tus
          proyectos
        </p>
        <p className="text-center text-[12px] sm:text-sm md:text-base lg:text-lg leading-snug max-w-4xl mx-auto px-4">
          Descubre el producto ideal para pintar y hacer realidad tus proyectos.
          En Pinturas del Meta te brindamos una completa línea de productos de
          primera calidad y te asesoramos en la correcta selección de los
          mismos.
        </p>
      </article>
      <Cards />
      <UbicacionCard />
      <HorarioAtencion/>
    </>
  );
}
