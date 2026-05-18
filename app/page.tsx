import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectTypes from "@/components/ProjectTypes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-rebasa-bg-dark">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <ProjectTypes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
