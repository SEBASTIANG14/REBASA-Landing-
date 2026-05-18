"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest < 50) {
      setIsVisible(true);
    } else if (latest > previous && latest > 50) {
      setIsVisible(false);
    } else if (latest < previous) {
      setIsVisible(true);
    }
  });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: 0, x: "-50%" }}
      animate={{ y: isVisible ? 0 : -150, x: "-50%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-6 md:top-8 left-1/2 w-[95%] max-w-5xl z-50 rounded-none"
    >
      <div className="flex items-center justify-between bg-rebasa-bg-dark/95 backdrop-blur-md border border-rebasa-card-border shadow-[8px_8px_0_0_rgba(20,53,66,0.8)] h-[64px] md:h-[64px]">

        {/* Left: Logo (Boxed and maximized) */}
        <div className="h-full flex items-center justify-center px-4 md:px-6 border-r border-rebasa-card-border bg-rebasa-bg-card/50">
          <Image
            src="/images/Original.png"
            alt="REBASA"
            width={340}
            height={166}
            className="h-[50px] md:h-[70px] w-auto object-contain"
            priority
          />
        </div>

        {/* Center: Navigation (Symmetric) */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-10 h-full">
          <a href="#inicio" onClick={(e) => handleScroll(e, "inicio")} className="text-[11px] font-heading tracking-[0.25em] text-gray-300 uppercase hover:text-rebasa-green transition-colors relative group">
            Inicio
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-rebasa-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#nosotros" onClick={(e) => handleScroll(e, "nosotros")} className="text-[11px] font-heading tracking-[0.25em] text-gray-300 uppercase hover:text-rebasa-green transition-colors relative group">
            Nosotros
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-rebasa-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#servicios" onClick={(e) => handleScroll(e, "servicios")} className="text-[11px] font-heading tracking-[0.25em] text-gray-300 uppercase hover:text-rebasa-green transition-colors relative group">
            Servicios
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-rebasa-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a href="#proyectos" onClick={(e) => handleScroll(e, "proyectos")} className="text-[11px] font-heading tracking-[0.25em] text-gray-300 uppercase hover:text-rebasa-green transition-colors relative group">
            Proyectos
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-rebasa-green scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </nav>

        {/* Right: Contact Button (Boxed) */}
        <div className="h-full flex items-center justify-center">
          <a href="#contacto" onClick={(e) => handleScroll(e, "contacto")} className="h-full flex items-center px-6 md:px-8 bg-rebasa-green text-black text-[11px] md:text-xs font-heading font-bold tracking-[0.2em] uppercase hover:bg-rebasa-green-hover transition-colors border-l border-rebasa-card-border cursor-pointer">
            Contacto
          </a>
        </div>

      </div>
    </motion.header>
  );
}
