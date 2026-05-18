"use client";

import { motion, Variants } from "framer-motion";
import { HardHat, Home, Lightbulb, PaintBucket, PencilRuler, Ruler } from "lucide-react";

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
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex justify-center items-center mb-4"
          >
            <span className="bg-rebasa-green/10 text-rebasa-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-rebasa-green/20">Nuestros Servicios</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Soluciones integrales para tu proyecto
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Desde el primer trazo hasta la entrega de llaves. Te acompañamos en cada etapa con profesionalismo y atención al detalle.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group bg-rebasa-bg-card p-8 rounded-xl border border-rebasa-card-border hover:border-rebasa-green/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,217,143,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rebasa-green/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 bg-rebasa-bg-dark rounded-2xl flex items-center justify-center text-rebasa-green mb-6 border border-rebasa-card-border group-hover:scale-110 group-hover:bg-rebasa-green group-hover:text-black transition-all duration-300 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-rebasa-green transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
