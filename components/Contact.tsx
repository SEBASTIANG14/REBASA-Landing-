"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Square } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,53,66,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(20,53,66,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Square className="w-4 h-4 text-rebasa-green fill-rebasa-green/20" />
              <span className="text-rebasa-green font-heading tracking-[0.2em] uppercase text-sm font-bold">Contacto</span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl font-bold text-rebasa-bg-dark mb-8 leading-tight uppercase tracking-tight">
              ¿Tienes una idea para <br/><span className="text-rebasa-green">construir?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-12 font-sans border-l-4 border-gray-300 pl-6">
              Agenda una asesoría inicial y te ayudamos a definir el mejor camino para tu proyecto. Estamos listos para escucharte.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white rounded-none flex items-center justify-center border border-gray-300 group-hover:border-rebasa-green group-hover:text-rebasa-green text-gray-500 transition-colors shadow-[4px_4px_0_0_rgba(20,53,66,0.1)]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-heading tracking-widest uppercase mb-1 font-bold">Llámanos (WhatsApp)</p>
                  <p className="text-rebasa-bg-dark text-xl font-bold font-sans">+52 (55) 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white rounded-none flex items-center justify-center border border-gray-300 group-hover:border-rebasa-green group-hover:text-rebasa-green text-gray-500 transition-colors shadow-[4px_4px_0_0_rgba(20,53,66,0.1)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-heading tracking-widest uppercase mb-1 font-bold">Envíanos un correo</p>
                  <p className="text-rebasa-bg-dark text-xl font-bold font-sans">contacto@rebasa.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white rounded-none flex items-center justify-center border border-gray-300 group-hover:border-rebasa-green group-hover:text-rebasa-green text-gray-500 transition-colors shadow-[4px_4px_0_0_rgba(20,53,66,0.1)]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-heading tracking-widest uppercase mb-1 font-bold">Zona de atención</p>
                  <p className="text-rebasa-bg-dark text-lg font-bold font-sans">Ciudad Constitucion, B.C.S.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 border border-gray-200 shadow-[12px_12px_0_0_rgba(0,217,143,0.15)] rounded-none relative"
          >
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-rebasa-green pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-rebasa-green pointer-events-none"></div>
            
            <h3 className="text-3xl font-bold text-rebasa-bg-dark mb-8 font-heading uppercase tracking-wide">Envíanos un mensaje</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs font-heading tracking-widest uppercase font-bold text-gray-500 mb-2">Nombre completo</label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-none px-4 py-4 text-rebasa-bg-dark font-sans focus:outline-none focus:border-rebasa-green focus:ring-1 focus:ring-rebasa-green transition-colors"
                  placeholder="TU NOMBRE"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-heading tracking-widest uppercase font-bold text-gray-500 mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full bg-gray-50 border border-gray-200 rounded-none px-4 py-4 text-rebasa-bg-dark font-sans focus:outline-none focus:border-rebasa-green focus:ring-1 focus:ring-rebasa-green transition-colors"
                    placeholder="TU TELÉFONO"
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-xs font-heading tracking-widest uppercase font-bold text-gray-500 mb-2">Tipo de proyecto</label>
                  <select 
                    id="type"
                    className="w-full bg-gray-50 border border-gray-200 rounded-none px-4 py-4 text-gray-600 font-sans focus:outline-none focus:border-rebasa-green focus:ring-1 focus:ring-rebasa-green transition-colors appearance-none"
                  >
                    <option value="">SELECCIONA UNA OPCIÓN</option>
                    <option value="casa">CASA HABITACIÓN</option>
                    <option value="remodelacion">REMODELACIÓN</option>
                    <option value="comercial">LOCAL / COMERCIAL</option>
                    <option value="otro">OTRO</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-heading tracking-widest uppercase font-bold text-gray-500 mb-2">Mensaje o idea</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded-none px-4 py-4 text-rebasa-bg-dark font-sans focus:outline-none focus:border-rebasa-green focus:ring-1 focus:ring-rebasa-green transition-colors resize-none"
                  placeholder="CUÉNTANOS BREVEMENTE SOBRE TU PROYECTO..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-rebasa-green text-black font-heading tracking-[0.2em] uppercase py-5 flex items-center justify-center gap-3 font-bold hover:bg-rebasa-green-hover transition-all group rounded-none shadow-[6px_6px_0_0_rgba(20,53,66,1)] active:shadow-[0_0_0_0_rgba(20,53,66,1)] active:translate-x-1 active:translate-y-1"
              >
                Enviar solicitud
                <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
