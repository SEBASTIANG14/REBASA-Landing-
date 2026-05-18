"use client";

import { motion } from "framer-motion";
import { Building, Hammer, Home, Store, Trees, Warehouse } from "lucide-react";

export default function ProjectTypes() {
  const types = [
    { name: "Casas habitación", icon: <Home className="w-5 h-5" /> },
    { name: "Remodelaciones", icon: <Hammer className="w-5 h-5" /> },
    { name: "Locales comerciales", icon: <Store className="w-5 h-5" /> },
    { name: "Oficinas", icon: <Building className="w-5 h-5" /> },
    { name: "Ampliaciones", icon: <Warehouse className="w-5 h-5" /> },
    { name: "Terrazas / Exteriores", icon: <Trees className="w-5 h-5" /> }
  ];

  return (
    <section id="proyectos" className="py-24 bg-rebasa-bg-dark border-y border-rebasa-card-border relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,53,66,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,53,66,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Tipos de <span className="text-rebasa-green">proyectos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 font-sans">
            Nos adaptamos a diferentes escalas y necesidades, manteniendo siempre nuestro estándar de calidad, rigor técnico y diseño.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {types.map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className="group flex items-center gap-4 bg-rebasa-bg-card border border-rebasa-card-border px-6 py-4 hover:border-rebasa-green hover:bg-rebasa-green/5 transition-colors cursor-default rounded-none shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]"
            >
              <div className="text-gray-400 group-hover:text-rebasa-green transition-colors bg-rebasa-bg-dark p-2 border border-rebasa-card-border rounded-none">
                {type.icon}
              </div>
              <span className="text-gray-200 font-heading tracking-wider uppercase text-sm">{type.name}</span>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
