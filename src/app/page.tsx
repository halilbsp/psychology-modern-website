import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact"; // 💎 YENİ EKLENDİ
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative selection:bg-[#1c648e] selection:text-white bg-[#fbfbfd]">
      <Navbar />
      <Hero />
      <Services />
      <About />
      
      {/* Mükemmel Kapanış Sahnesi */}
      <Contact />
      
      <Footer />
    </main>
  );
}
