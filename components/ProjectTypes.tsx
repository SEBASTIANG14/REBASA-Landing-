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
    { name: "Terrazas y exteriores", icon: <Trees className="w-5 h-5" /> }
  ];

  return (
    <section id="proyectos" className="py-24 bg-rebasa-bg-dark border-y border-rebasa-card-border">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Tipos de proyectos que desarrollamos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Nos adaptamos a diferentes escalas y necesidades, manteniendo siempre nuestro estándar de calidad y diseño.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {types.map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              className="flex items-center gap-3 bg-rebasa-bg-card border border-rebasa-card-border px-6 py-4 rounded-full hover:border-rebasa-green hover:text-rebasa-green transition-colors cursor-default"
            >
              <div className="text-gray-400 group-hover:text-rebasa-green transition-colors">
                {type.icon}
              </div>
              <span className="text-gray-200 font-medium">{type.name}</span>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
