"use client";

import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    "Atención directa con arquitectos.",
    "Diseño moderno y funcional.",
    "Proyectos adaptados a tus necesidades.",
    "Comunicación clara durante el proceso.",
    "Acompañamiento personalizado.",
    "Compromiso con cada detalle."
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 relative"
          >
            {/* Geometric accents instead of soft blurs */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-rebasa-green/20 z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-rebasa-green/10 z-0"></div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 z-10">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="bg-white border border-gray-200 p-6 flex items-start gap-4 hover:border-rebasa-green transition-colors rounded-none shadow-[4px_4px_0_0_rgba(20,53,66,0.1)] hover:translate-x-1 hover:-translate-y-1"
                >
                  <div className="shrink-0 text-rebasa-green mt-0.5">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 text-sm font-sans leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 pl-0 lg:pl-10"
          >
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-rebasa-bg-dark mb-8 leading-[1.1] uppercase tracking-tight">
              Una firma joven con <br/><span className="text-rebasa-green">ideas frescas</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed font-sans border-l-4 border-rebasa-green pl-6">
              No arrastramos viejos vicios de la industria. Cada proyecto que tomamos es nuestra carta de presentación, por lo que invertimos todo nuestro talento, energía y dedicación para superar tus expectativas. 
            </p>
            <a href="#contacto" className="inline-flex items-center justify-center bg-white border border-rebasa-green text-rebasa-green font-bold px-10 py-4 font-heading tracking-[0.2em] uppercase text-xs hover:bg-rebasa-green hover:text-black transition-all rounded-none shadow-[6px_6px_0_0_rgba(0,217,143,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
              Hablemos de tu proyecto
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
