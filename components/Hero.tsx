"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full h-[100vh] min-h-[700px] md:min-h-[800px] bg-rebasa-bg-dark flex items-center pt-24 overflow-hidden border-b-[8px] border-rebasa-green">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,143,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,143,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      {/* Technical background framing lines */}
      <div className="hidden lg:block absolute top-0 bottom-0 left-16 w-[1px] bg-rebasa-card-border/50"></div>
      <div className="hidden lg:block absolute top-0 bottom-0 left-[50%] w-[1px] bg-rebasa-card-border/50"></div>
      <div className="absolute top-1/2 left-0 w-16 h-[1px] bg-rebasa-green"></div>
      <div className="absolute top-1/2 right-0 w-16 h-[1px] bg-rebasa-green"></div>

      <div className="w-full max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10 h-full">
        
        {/* Left Content Area */}
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-center px-8 md:px-16 lg:pl-32 h-full relative z-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-rebasa-green"></div>
              <span className="text-[10px] md:text-xs text-gray-400 font-heading tracking-[0.3em] uppercase font-bold">Estudio de Arquitectura</span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-heading text-6xl md:text-7xl lg:text-[6rem] font-bold leading-[0.95] text-white mb-8 uppercase tracking-tighter"
            >
              Construimos <br/>
              espacios <br/>
              <span className="text-rebasa-green">pensados <br/> para ti</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-12 max-w-[400px] font-sans font-light border-l-2 border-gray-600 pl-6"
            >
              Firma joven especializada en diseño, planeación y ejecución de proyectos residenciales y comerciales con precisión milimétrica.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-0 border border-rebasa-card-border w-max shadow-[8px_8px_0_0_rgba(0,217,143,0.15)] bg-rebasa-bg-dark"
            >
              <a href="#contacto" className="group flex items-center justify-center gap-3 bg-rebasa-green text-black px-8 py-5 text-xs font-heading tracking-[0.2em] font-bold uppercase transition-all hover:bg-rebasa-green-hover">
                Cotizar proyecto
                <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="#proyectos" className="group flex items-center justify-center px-8 py-5 text-xs font-heading tracking-[0.2em] text-white uppercase transition-all hover:bg-white/5">
                Ver portafolio
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image Area */}
        <div className="hidden lg:block col-span-6 relative h-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="absolute top-1/2 -translate-y-1/2 right-0 w-[110%] h-[80%] border-t border-l border-b border-rebasa-card-border p-3 bg-rebasa-bg-dark shadow-[-20px_0_50px_rgba(0,0,0,0.5)] z-30"
          >
            <div className="relative w-full h-full border border-rebasa-card-border overflow-hidden group">
              <Image
                src="/images/hero_bg.png"
                alt="Proyecto arquitectónico"
                fill
                className="object-cover object-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                priority
              />
              
              {/* Technical framing marks on the image */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-[3px] border-l-[3px] border-rebasa-green"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-[3px] border-r-[3px] border-rebasa-green"></div>
              
              {/* Blueprint details box on image */}
              <div className="absolute bottom-0 left-0 bg-rebasa-bg-dark/95 border-t border-r border-rebasa-card-border p-4 w-[220px]">
                <div className="flex justify-between items-end border-b border-rebasa-card-border pb-2 mb-2">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Estado</span>
                  <span className="text-[11px] font-heading text-rebasa-green tracking-widest font-bold">EN DESARROLLO</span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Dimensiones</span>
                  <span className="text-[11px] font-mono text-white font-bold">ESC: 1:1</span>
                </div>
              </div>

              {/* Decorative crosshair */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="w-[1px] h-12 bg-white/50 absolute"></div>
                <div className="w-12 h-[1px] bg-white/50 absolute"></div>
                <div className="w-4 h-4 border border-white/50 rounded-full absolute"></div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Mobile image background fallback */}
        <div className="lg:hidden absolute bottom-0 right-0 left-0 h-[35%] z-10 opacity-20 pointer-events-none">
          <div className="relative w-full h-full border-t-[3px] border-rebasa-green">
            <Image
              src="/images/hero_bg.png"
              alt="Proyecto arquitectónico"
              fill
              className="object-cover object-center grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rebasa-bg-dark to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
