export default function HorarioAtencion() {
  return (
    <div className="bg-gray-100 text-gray-900 w-full flex flex-col items-center py-8 px-4 sm:px-8">
      <div className="max-w-md w-full text-center">
        {/* TÍTULO */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-red-600 mb-4">
          Horario de atención al cliente
        </h2>

        {/* HORARIOS */}
        <div className="flex flex-col text-base sm:text-lg leading-relaxed space-y-1 mb-6">
          <p className="font-semibold">Lunes a Viernes</p>
          <p>8:00 AM - 5:30 PM</p>

          <p className="font-semibold mt-2">Sábado</p>
          <p>8:00 AM - 3:00 PM</p>

          <p className="font-semibold mt-2">Festivos</p>
          <p>8:00 AM - 12:00 M</p>

          <p className="font-bold mt-4">Jornada continua</p>
        </div>
      </div>
    </div>
  );
}
