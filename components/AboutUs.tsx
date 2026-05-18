"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Compass, PenTool, Users } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: <PenTool className="w-6 h-6 text-rebasa-green" />,
      title: "Diseño funcional",
      desc: "Creamos espacios que se adaptan a tu estilo de vida o modelo de negocio."
    },
    {
      icon: <Users className="w-6 h-6 text-rebasa-green" />,
      title: "Atención directa",
      desc: "Trato personalizado y cercano en cada etapa de tu proyecto."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-rebasa-green" />,
      title: "Compromiso total",
      desc: "Cuidamos cada detalle como si el proyecto fuera nuestro."
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-rebasa-bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-rebasa-green/5 blur-3xl rounded-full mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Compass className="w-5 h-5 text-rebasa-green" />
              <span className="text-rebasa-green font-bold tracking-widest uppercase text-sm">Sobre Nosotros</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Visión fresca, <span className="text-transparent bg-clip-text bg-gradient-to-r from-rebasa-green to-emerald-400">técnica y comprometida</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Somos un equipo de arquitectos con una visión fresca. Creamos soluciones arquitectónicas funcionales, estéticas y adaptadas a las necesidades de cada cliente, acompañando cada proyecto desde la idea inicial hasta su desarrollo.
            </p>
            
            <div className="flex flex-col gap-6">
              {values.map((val, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div className="mt-1 bg-rebasa-bg-dark p-3 rounded-lg border border-rebasa-card-border shadow-sm">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{val.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-full min-h-[500px] w-full rounded-2xl overflow-hidden border border-rebasa-card-border"
          >
            {/* Using a subtle abstract pattern to convey design/architecture without faking a project */}
            <div className="absolute inset-0 bg-rebasa-bg-dark/80 z-10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-rebasa-green/20 via-transparent to-rebasa-bg-card/80 z-20"></div>
            
            <div className="absolute inset-0 flex items-center justify-center z-30">
              <div className="w-64 h-64 border-[1px] border-rebasa-green/30 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 border-[1px] border-rebasa-green/50 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 border-[2px] border-rebasa-green rounded-full shadow-[0_0_30px_rgba(0,217,143,0.2)]"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 z-30 bg-rebasa-bg-dark/90 backdrop-blur-sm p-6 rounded-xl border border-rebasa-card-border">
              <p className="text-gray-300 italic">"Cada línea trazada tiene un propósito. Diseñamos con intención y construimos con precisión."</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
