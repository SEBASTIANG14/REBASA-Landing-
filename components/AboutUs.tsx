"use client";

import { motion } from "framer-motion";
import { CheckSquare, PenTool, Users, Square } from "lucide-react";

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
      icon: <CheckSquare className="w-6 h-6 text-rebasa-green" />,
      title: "Compromiso total",
      desc: "Cuidamos cada detalle como si el proyecto fuera nuestro."
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Square className="w-4 h-4 text-rebasa-green fill-rebasa-green/20" />
              <span className="text-rebasa-green font-heading tracking-[0.2em] uppercase text-sm font-bold">Sobre Nosotros</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-rebasa-bg-dark leading-tight uppercase">
              Visión fresca, <br/> <span className="text-rebasa-green">técnica y comprometida</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-sans border-l-4 border-gray-300 pl-6">
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
                  className="flex gap-5 items-start"
                >
                  <div className="mt-1 bg-white p-4 border border-rebasa-green shadow-[4px_4px_0_0_rgba(0,217,143,0.2)] rounded-none shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h4 className="text-rebasa-bg-dark font-heading tracking-widest uppercase font-bold text-xl mb-2">{val.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-full min-h-[500px] w-full border border-rebasa-green bg-white p-4 shadow-[12px_12px_0_0_rgba(20,53,66,1)] rounded-none"
          >
            <div className="relative w-full h-full border border-gray-200 bg-white overflow-hidden">
              {/* Tighter Grid to simulate blueprint paper on white */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(20,53,66,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(20,53,66,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(20,53,66,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(20,53,66,0.15)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
              
              {/* Floor Plan Container */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] h-[360px] z-10">
                {/* Main Perimeter Walls (Thick lines) */}
                <div className="absolute inset-0 border-[3px] border-rebasa-green bg-rebasa-green/5"></div>
                
                {/* Internal Walls */}
                <div className="absolute top-[140px] left-0 right-[120px] h-[3px] bg-rebasa-green"></div>
                <div className="absolute top-[140px] right-[120px] bottom-0 w-[3px] bg-rebasa-green"></div>
                
                {/* Door Opening (Masking the wall to create a gap) */}
                <div className="absolute top-[138px] right-[120px] w-[50px] h-[7px] bg-white z-20"></div>
                
                {/* Door Swing Symbol (Arc) */}
                <div className="absolute top-[140px] right-[120px] z-10">
                  <div className="w-[50px] h-[50px] border-l border-t border-rebasa-green/60 rounded-tl-full opacity-60"></div>
                  {/* Door Panel */}
                  <div className="absolute top-0 right-0 w-[2px] h-[50px] bg-rebasa-green origin-top rotate-[-90deg]"></div>
                </div>

                {/* Double Door at the bottom */}
                <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-[80px] h-[7px] bg-white z-20"></div>
                <div className="absolute bottom-[0px] left-1/2 -translate-x-1/2 flex z-10">
                  <div className="w-[40px] h-[40px] border-r border-t border-rebasa-green/60 rounded-tr-full opacity-60"></div>
                  <div className="w-[40px] h-[40px] border-l border-t border-rebasa-green/60 rounded-tl-full opacity-60"></div>
                  {/* Left Door panel */}
                  <div className="absolute bottom-0 left-0 w-[2px] h-[40px] bg-rebasa-green origin-bottom rotate-[-45deg]"></div>
                  {/* Right Door panel */}
                  <div className="absolute bottom-0 right-0 w-[2px] h-[40px] bg-rebasa-green origin-bottom rotate-[45deg]"></div>
                </div>

                {/* Architectural Column (Cross Hatch) */}
                <div className="absolute top-[130px] left-[10px] w-[20px] h-[20px] border-[2px] border-rebasa-green bg-white flex items-center justify-center overflow-hidden">
                   <div className="w-[150%] h-[1px] bg-rebasa-green/50 rotate-45"></div>
                   <div className="absolute w-[150%] h-[1px] bg-rebasa-green/50 -rotate-45"></div>
                </div>

                {/* Room Labels (NPT, names) */}
                <div className="absolute top-[60px] left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                  <p className="text-rebasa-bg-dark font-bold text-[11px] font-heading tracking-[0.15em] uppercase">Sala de Juntas</p>
                  <p className="text-gray-500 text-[9px] font-mono">NPT +3.20</p>
                </div>
                
                <div className="absolute bottom-[100px] left-[60px] text-center whitespace-nowrap">
                  <p className="text-rebasa-bg-dark font-bold text-[11px] font-heading tracking-[0.15em] uppercase">Recepción</p>
                  <p className="text-gray-500 text-[9px] font-mono">NPT +0.00</p>
                </div>

                {/* Staircase representation */}
                <div className="absolute bottom-0 right-0 w-[120px] h-[160px] border-l-[3px] border-t-[3px] border-rebasa-green bg-white flex flex-col">
                  {/* Stairs steps */}
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="flex-1 border-b border-rebasa-green/30"></div>
                  ))}
                  {/* Stair direction arrow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 h-[80%] w-[1px] bg-rebasa-green/80 -translate-y-1/2">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[8px] border-transparent border-b-rebasa-green/80"></div>
                  </div>
                </div>

                {/* Dimension Lines (Cotizaciones) */}
                <div className="absolute -top-[20px] left-0 right-0 h-[1px] bg-rebasa-bg-dark/40">
                  <div className="absolute -top-1 left-0 w-[1px] h-[9px] bg-rebasa-bg-dark -rotate-45"></div>
                  <div className="absolute -top-1 right-0 w-[1px] h-[9px] bg-rebasa-bg-dark -rotate-45"></div>
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[10px] text-rebasa-bg-dark font-mono font-bold">15.00</span>
                </div>
                
                <div className="absolute top-0 -right-[20px] bottom-0 w-[1px] bg-rebasa-bg-dark/40">
                  <div className="absolute top-0 -left-1 w-[9px] h-[1px] bg-rebasa-bg-dark -rotate-45"></div>
                  <div className="absolute bottom-0 -left-1 w-[9px] h-[1px] bg-rebasa-bg-dark -rotate-45"></div>
                  <span className="absolute top-1/2 -right-6 -translate-y-1/2 text-[10px] text-rebasa-bg-dark font-mono font-bold rotate-90">18.00</span>
                </div>
              </div>

              {/* Title Block (Cuadro de datos - Solapa arquitectónica) */}
              <div className="absolute bottom-0 right-0 w-[160px] border-t border-l border-rebasa-green bg-white z-30 flex flex-col shadow-[-4px_-4px_0_0_rgba(20,53,66,0.05)]">
                <div className="border-b border-rebasa-green/30 p-2">
                  <p className="text-[8px] text-gray-500 font-mono uppercase tracking-wider">Proyecto</p>
                  <p className="text-[10px] text-rebasa-bg-dark font-bold font-heading tracking-widest mt-0.5">V-ARC CORP</p>
                </div>
                <div className="border-b border-rebasa-green/30 p-2">
                  <p className="text-[8px] text-gray-500 font-mono uppercase tracking-wider">Plano</p>
                  <p className="text-[10px] text-rebasa-bg-dark font-bold font-heading tracking-widest mt-0.5">ARQ-01 (PLANTA BAJA)</p>
                </div>
                <div className="flex">
                  <div className="flex-1 border-r border-rebasa-green/30 p-2">
                    <p className="text-[8px] text-gray-500 font-mono uppercase tracking-wider">Escala</p>
                    <p className="text-[10px] text-rebasa-bg-dark font-mono mt-0.5 font-bold">1:100</p>
                  </div>
                  <div className="flex-1 p-2">
                    <p className="text-[8px] text-gray-500 font-mono uppercase tracking-wider">Fecha</p>
                    <p className="text-[10px] text-rebasa-bg-dark font-mono mt-0.5 font-bold">NOV 25</p>
                  </div>
                </div>
              </div>

              {/* Blueprint Notes */}
              <div className="absolute top-6 left-6 z-30 max-w-[220px]">
                <p className="text-rebasa-bg-dark text-[10px] sm:text-[11px] font-mono font-bold uppercase leading-relaxed tracking-wider">
                  &gt; NOTAS GENERALES: <br/><br/>
                  01. CADA LÍNEA TRAZADA TIENE UN PROPÓSITO.<br/>
                  02. DISEÑAMOS CON INTENCIÓN.<br/>
                  03. CONSTRUIMOS CON PRECISIÓN.
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
