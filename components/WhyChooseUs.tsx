"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
    <section className="py-24 bg-rebasa-bg-card relative">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rebasa-green/10 to-transparent blur-2xl rounded-full"></div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="bg-rebasa-bg-dark border border-rebasa-card-border p-5 rounded-xl flex items-start gap-3 hover:border-rebasa-green/50 transition-colors"
                >
                  <div className="mt-0.5 bg-rebasa-green/10 p-1.5 rounded-full border border-rebasa-green/20 shrink-0">
                    <Check className="w-4 h-4 text-rebasa-green" strokeWidth={3} />
                  </div>
                  <span className="text-gray-200 text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Una firma joven con <span className="text-rebasa-green">ideas frescas</span> y compromiso profesional
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              No arrastramos viejos vicios de la industria. Cada proyecto que tomamos es nuestra carta de presentación, por lo que invertimos todo nuestro talento, energía y dedicación para superar tus expectativas. 
            </p>
            <a href="#contacto" className="inline-flex items-center justify-center border-2 border-rebasa-green text-rebasa-green px-8 py-3.5 font-bold tracking-widest uppercase text-xs rounded-sm hover:bg-rebasa-green hover:text-black transition-all">
              Hablemos de tu proyecto
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
