"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Siempre mostrar si estamos muy cerca del tope
    if (latest < 50) {
      setIsVisible(true);
    } 
    // Ocultar si hacemos scroll hacia abajo
    else if (latest > previous && latest > 50) {
      setIsVisible(false);
    } 
    // Mostrar si hacemos scroll hacia arriba
    else if (latest < previous) {
      setIsVisible(true);
    }
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Get the navbar height (approx 80px) to offset the scroll so the navbar doesn't cover the title
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.div 
      initial={{ y: 0, x: "-50%" }}
      animate={{ y: isVisible ? 0 : -150, x: "-50%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-6 left-1/2 w-[95%] max-w-5xl bg-rebasa-bg-card/95 backdrop-blur-md rounded-full px-6 py-3 shadow-2xl shadow-black/40 z-50 flex items-center justify-between border border-rebasa-card-border/50"
    >
      <div className="flex items-center">
        <Image
          src="/images/Original.png"
          alt="REBASA"
          width={340}
          height={166}
          className="h-16 md:h-[42px] w-auto object-contain"
          priority
        />
      </div>
      <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-widest text-gray-300 uppercase">
        <a href="#inicio" onClick={(e) => handleScroll(e, "inicio")} className="hover:text-rebasa-green transition-colors">Inicio</a>
        <a href="#nosotros" onClick={(e) => handleScroll(e, "nosotros")} className="hover:text-rebasa-green transition-colors">Nosotros</a>
        <a href="#servicios" onClick={(e) => handleScroll(e, "servicios")} className="hover:text-rebasa-green transition-colors">Servicios</a>
        <a href="#proyectos" onClick={(e) => handleScroll(e, "proyectos")} className="hover:text-rebasa-green transition-colors">Proyectos</a>
      </nav>
      <div className="hidden md:block">
        <a href="#contacto" onClick={(e) => handleScroll(e, "contacto")} className="bg-rebasa-green text-black px-6 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-rebasa-green-hover transition-colors shadow-lg shadow-rebasa-green/20">
          Contacto
        </a>
      </div>
    </motion.div>
  );
}
