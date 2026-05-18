"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-rebasa-bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rebasa-green/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              ¿Tienes una idea para <span className="text-rebasa-green">construir o remodelar?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Agenda una asesoría inicial y te ayudamos a definir el mejor camino para tu proyecto. Estamos listos para escucharte.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-rebasa-bg-dark rounded-full flex items-center justify-center border border-rebasa-card-border group-hover:border-rebasa-green group-hover:text-rebasa-green text-gray-300 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Llámanos o escríbenos (WhatsApp)</p>
                  <p className="text-white text-lg font-bold mt-1">+52 (55) 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-rebasa-bg-dark rounded-full flex items-center justify-center border border-rebasa-card-border group-hover:border-rebasa-green group-hover:text-rebasa-green text-gray-300 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Envíanos un correo</p>
                  <p className="text-white text-lg font-bold mt-1">contacto@rebasa.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-rebasa-bg-dark rounded-full flex items-center justify-center border border-rebasa-card-border group-hover:border-rebasa-green group-hover:text-rebasa-green text-gray-300 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Zona de atención principal</p>
                  <p className="text-white text-lg font-bold mt-1">Ciudad Constitucion, Baja California Sur</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-rebasa-bg-dark p-8 md:p-10 rounded-2xl border border-rebasa-card-border shadow-2xl relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rebasa-green/5 to-transparent rounded-2xl pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-white mb-6 font-heading">Envíanos un mensaje</h3>

            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-rebasa-bg-card border border-rebasa-card-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rebasa-green focus:ring-1 focus:ring-rebasa-green transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-rebasa-bg-card border border-rebasa-card-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rebasa-green focus:ring-1 focus:ring-rebasa-green transition-colors"
                    placeholder="Tu teléfono"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-400 mb-2">Tipo de proyecto</label>
                  <select
                    id="type"
                    className="w-full bg-rebasa-bg-card border border-rebasa-card-border rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-rebasa-green focus:ring-1 focus:ring-rebasa-green transition-colors appearance-none"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="casa">Casa habitación</option>
                    <option value="remodelacion">Remodelación</option>
                    <option value="comercial">Local / Comercial</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje o idea</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-rebasa-bg-card border border-rebasa-card-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rebasa-green focus:ring-1 focus:ring-rebasa-green transition-colors resize-none"
                  placeholder="Cuéntanos brevemente sobre tu proyecto..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-rebasa-green text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-rebasa-green-hover transition-colors group"
              >
                Enviar solicitud
                <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
