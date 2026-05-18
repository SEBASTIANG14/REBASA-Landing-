"use client";

import { motion, Variants } from "framer-motion";
import { HardHat, Home, Lightbulb, PaintBucket, PencilRuler, Ruler, Square } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <PencilRuler className="w-8 h-8" />,
      title: "Diseño arquitectónico",
      desc: "Desarrollo de propuestas, distribución de espacios, fachadas y soluciones funcionales."
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Proyecto ejecutivo",
      desc: "Elaboración de documentación técnica para llevar tu idea a una etapa construible."
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Construcción",
      desc: "Acompañamiento durante la ejecución del proyecto, cuidando avances, calidad y detalles."
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: "Remodelaciones",
      desc: "Renovación, ampliación y mejora estética o estructural de espacios existentes."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Renders 3D",
      desc: "Visualización fotorrealista para conocer el resultado final antes de construir."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Asesoría inicial",
      desc: "Orientación experta para definir alcances, presupuesto y primeros pasos."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="servicios" className="py-24 bg-rebasa-bg-dark relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,53,66,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,53,66,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex justify-center items-center gap-2 mb-6 border border-rebasa-green bg-rebasa-green/5 px-4 py-2 shadow-[2px_2px_0_0_rgba(0,217,143,0.3)] rounded-none"
          >
            <Square className="w-3 h-3 text-rebasa-green fill-rebasa-green" />
            <span className="text-rebasa-green text-xs font-heading tracking-[0.2em] uppercase">Nuestros Servicios</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight"
          >
            Soluciones integrales
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-sans"
          >
            Desde el primer trazo hasta la entrega de llaves. Te acompañamos en cada etapa con profesionalismo y precisión milimétrica.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group bg-rebasa-bg-card p-8 border border-rebasa-card-border hover:border-rebasa-green transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0_0_rgba(0,217,143,0.15)] relative rounded-none"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-rebasa-green/5 border-l border-b border-rebasa-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none"></div>
              
              <div className="w-16 h-16 bg-rebasa-bg-dark flex items-center justify-center text-rebasa-green mb-8 border border-rebasa-card-border group-hover:bg-rebasa-green group-hover:text-black transition-all duration-300 shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] rounded-none">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-heading tracking-wider uppercase group-hover:text-rebasa-green transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors font-sans">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
