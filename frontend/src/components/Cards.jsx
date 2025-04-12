import automotrizImg from "../assets/Automotriz_card.png";
import industrialImg from "../assets/industrial_card.png";
import arquitectonicaImg from "../assets/arquitectonica_card.png";

export default function Cards() {
  const cards = [
    {
      title: "Automotriz",
      image: automotrizImg,
    },
    {
      title: "Industrial",
      image: industrialImg,
    },
    {
      title: "Arquitectonica",
      image: arquitectonicaImg,
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Nuestras Lineas De Pintura
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative w-full h-[489px] rounded-[30px] overflow-hidden shadow-lg"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              ></div>
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-center py-6">
                <h3 className="text-xl font-bold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
