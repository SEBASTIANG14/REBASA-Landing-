import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Equipment from "@/components/Equipment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-rebasa-bg-dark">
      <Navbar />
      <main>
        <Hero />
        <Equipment />
      </main>
      <Footer />
    </div>
  );
}
