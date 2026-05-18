"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full h-[100vh] min-h-[600px] md:min-h-[800px] bg-rebasa-bg-dark overflow-hidden flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-40">
        <Image
          src="/images/hero_bg.png"
          alt="Estructura de techo industrial y arquitectura"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rebasa-bg-dark via-rebasa-bg-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-rebasa-bg-dark via-transparent to-transparent"></div>
      </div>
      
      {/* Content Box */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rebasa-bg-card border border-rebasa-card-border mb-6"
          >
            <Building2 className="w-4 h-4 text-rebasa-green" />
            <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wide uppercase">Estudio de Arquitectura y Construcción</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6"
          >
            Construimos espacios funcionales, <span className="text-rebasa-green">modernos y pensados para ti</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl border-l-2 border-rebasa-card-border pl-6"
          >
            Somos una firma joven de arquitectura y construcción enfocada en diseño, planeación y ejecución de proyectos residenciales y comerciales.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#contacto" className="group flex items-center justify-center gap-2 bg-rebasa-green text-black px-8 py-4 text-sm font-bold tracking-wide transition-all rounded-sm hover:bg-rebasa-green-hover hover:scale-105 shadow-[0_0_20px_rgba(0,217,143,0.3)]">
              Solicitar cotización
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#servicios" className="group flex items-center justify-center gap-2 border-2 border-rebasa-card-border text-white px-8 py-4 text-sm font-bold tracking-wide transition-all rounded-sm hover:border-rebasa-green hover:text-rebasa-green hover:bg-rebasa-green/5">
              Conocer servicios
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Aesthetic geometric elements */}
      <div className="absolute right-0 bottom-0 w-1/3 h-2/3 bg-gradient-to-tl from-rebasa-green/5 to-transparent blur-3xl rounded-full pointer-events-none"></div>
    </section>
  );
}
