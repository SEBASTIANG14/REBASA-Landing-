import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] md:min-h-[800px] bg-black overflow-hidden flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        <Image
          src="/images/hero_bg.png"
          alt="Estructura de techo industrial"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* Content Box */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16">
        <div className="bg-[#0b1b23] max-w-2xl p-10 md:p-14 border-l-4 border-rebasa-green shadow-2xl shadow-black/60 rounded-sm">
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[1.1] text-rebasa-green uppercase mb-6">
            Ingeniería y<br /> Construcción de<br /> Alto Nivel
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            Precisión milimétrica y fuerza industrial. Entregamos soluciones
            estructurales que definen el paisaje moderno, combinando experiencia
            técnica con una ejecución impecable.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-rebasa-green text-black px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-rebasa-green-hover transition-colors rounded-sm shadow-xl shadow-rebasa-green/10">
              Cotizar Proyecto
            </a>
            <a href="#" className="border border-rebasa-green text-rebasa-green px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-rebasa-green/10 transition-colors rounded-sm">
              Ver Portafolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
