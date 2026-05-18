export default function Footer() {
  return (
    <footer className="bg-rebasa-bg-footer mt-auto border-t border-white/5 py-16">
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="font-heading text-4xl font-bold text-rebasa-green tracking-wider">
          REBASA
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold tracking-widest uppercase text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
        </div>
        <div className="text-gray-500 text-xs font-medium">
          © {new Date().getFullYear()} REBASA Diseño y Construcciones. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
