import Image from "next/image";

export default function Equipment() {
  return (
    <section className="w-full max-w-7xl mx-auto px-8 md:px-16 py-32">
      <div className="mb-16">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-rebasa-green uppercase mb-4">
          Flota y Equipamiento
        </h2>
        <div className="w-20 h-1 bg-rebasa-green mb-8 rounded-full"></div>
        <p className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed">
          Maquinaria de última generación para proyectos de alta
          exigencia. Nuestra flota garantiza eficiencia operativa y precisión
          en terreno.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Card 1 */}
        <div className="bg-rebasa-bg-card flex flex-col transition-all hover:-translate-y-2 duration-300 border border-rebasa-card-border overflow-hidden group rounded-xl shadow-2xl shadow-black/20">
          <div className="relative h-64 md:h-80 w-full bg-zinc-50 overflow-hidden p-6 flex items-center justify-center">
            <Image
              src="/images/excavadora.png"
              alt="Excavadora de orugas"
              fill
              className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8 md:p-10">
            <h3 className="font-heading text-3xl font-bold text-rebasa-green uppercase mb-8">
              Excavadora de Orugas
            </h3>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div>
                <p className="text-[#00d98f] text-[10px] font-bold tracking-widest uppercase mb-2">Peso Operativo</p>
                <p className="text-white font-medium">22,000 kg</p>
              </div>
              <div>
                <p className="text-[#00d98f] text-[10px] font-bold tracking-widest uppercase mb-2">Potencia</p>
                <p className="text-white font-medium">160 HP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-rebasa-bg-card flex flex-col transition-all hover:-translate-y-2 duration-300 border border-rebasa-card-border overflow-hidden group rounded-xl shadow-2xl shadow-black/20">
          <div className="relative h-64 md:h-80 w-full bg-zinc-50 overflow-hidden p-6 flex items-center justify-center">
            <Image
              src="/images/cargador.png"
              alt="Cargador frontal"
              fill
              className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8 md:p-10">
            <h3 className="font-heading text-3xl font-bold text-rebasa-green uppercase mb-8">
              Cargador Frontal
            </h3>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div>
                <p className="text-[#00d98f] text-[10px] font-bold tracking-widest uppercase mb-2">Capacidad Cuchara</p>
                <p className="text-white font-medium">3.5 m³</p>
              </div>
              <div>
                <p className="text-[#00d98f] text-[10px] font-bold tracking-widest uppercase mb-2">Carga Útil</p>
                <p className="text-white font-medium">6,500 kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
