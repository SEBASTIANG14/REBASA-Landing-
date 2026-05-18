import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-2xl z-50 flex items-center justify-between border border-black/5">
      <div className="flex items-center">
        <Image
          src="/images/logo-reb.jpeg"
          alt="REBASA"
          width={140}
          height={36}
          className="h-9 w-auto object-contain rounded-sm"
        />
      </div>
      <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-widest text-zinc-800 uppercase">
        <a href="#" className="hover:text-rebasa-green transition-colors">Services</a>
        <a href="#" className="hover:text-rebasa-green transition-colors">Equipment</a>
        <a href="#" className="hover:text-rebasa-green transition-colors">Industries</a>
        <a href="#" className="hover:text-rebasa-green transition-colors">Contact</a>
      </nav>
      <div className="hidden md:block">
        <a href="#" className="bg-rebasa-green text-black px-6 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-rebasa-green-hover transition-colors shadow-lg shadow-rebasa-green/20">
          Get Quote
        </a>
      </div>
    </div>
  );
}
