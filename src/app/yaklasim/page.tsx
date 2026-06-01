"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StaggeredText from "@/components/animations/StaggeredText";
import ParallaxSection from "@/components/animations/ParallaxSection";
import { motion } from "framer-motion";
import { Sparkles, Brain } from "lucide-react";

export default function YaklasimPage() {
  return (
    <main className="relative min-h-screen selection:bg-[#1c648e] selection:text-white bg-[#fbfbfd]">
      <Navbar />
      
      {/* 🌌 Zarif Paralaks Arka Plan Blobları 
          Ana sayfadaki video yerine, burada sayfaya derinlik katan devasa, bulanık lüks renk lekeleri kullanıyoruz */}
      <ParallaxSection offset={60} className="absolute inset-0 -z-20 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-[#1c648e]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[60vw] h-[60vw] bg-[#aee2ff]/15 rounded-full blur-[150px]"></div>
      </ParallaxSection>

      {/* 🎯 Detay Sayfası Hero Alanı */}
      <section className="pt-48 pb-32 px-6 relative z-10 min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-5 py-2 rounded-full glass-panel text-[#1c648e] text-xs font-bold tracking-widest uppercase mb-10 shadow-sm"
          >
            FELSEFEMİZ & VİZYONUMUZ
          </motion.div>
          
          {/* 🌊 Zarif Dalgalı Metin ve Ana Sayfadaki Gibi Vurgulu Kelimeler */}
          <StaggeredText 
            text="Bilimin ışığında, insanın özünde." 
            as="h1"
            className="text-5xl md:text-[4.5rem] lg:text-[5.5rem] font-display font-medium text-[#1d1d1f] mb-8 tracking-tight leading-[1.1] drop-shadow-sm w-full"
            delay={0.2}
            wordDelay={0.06}
            highlightWords={["ışığında", "özünde"]}
            highlightClass="text-[#1c648e] font-semibold drop-shadow-[0_0_15px_rgba(28,100,142,0.15)] transition-colors duration-500"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-[#86868b] font-medium max-w-3xl mx-auto leading-relaxed mb-20"
          >
            Luminous olarak, psikoterapiyi sadece bir tedavi süreci değil, bireyin kendi içsel potansiyeline ulaştığı modern bir dönüşüm yolculuğu olarak görüyoruz.
          </motion.p>
        </div>

        {/* 🧱 Etkileşimli, 3D Hissiyatlı Cam İçerik Blokları */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:shadow-[#1c648e]/5"
          >
            {/* Kart içi hover parlama efekti */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1c648e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            
            <div className="bg-[#1c648e]/10 w-fit p-4 rounded-2xl text-[#1c648e] mb-8 group-hover:scale-110 transition-transform duration-500">
              <Brain size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-display font-bold text-[#1d1d1f] mb-4 group-hover:text-[#1c648e] transition-colors">Kanıta Dayalı Yaklaşım</h3>
            <p className="text-[#86868b] font-medium leading-relaxed text-lg">
              Çalışmalarımızın merkezinde uluslararası standartlarda kabul görmüş Bilişsel Davranışçı Terapi (BDT) ve EMDR gibi bilimsel kuramlar yer alır. Spekülasyondan uzak, ölçülebilir ilerleme hedefliyoruz.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden group hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:shadow-[#1c648e]/5"
          >
            {/* Kart içi hover parlama efekti */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#aee2ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            
            <div className="bg-[#1c648e]/10 w-fit p-4 rounded-2xl text-[#1c648e] mb-8 group-hover:scale-110 transition-transform duration-500">
              <Sparkles size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-display font-bold text-[#1d1d1f] mb-4 group-hover:text-[#1c648e] transition-colors">Kişiselleştirilmiş Deneyim</h3>
            <p className="text-[#86868b] font-medium leading-relaxed text-lg">
              Her zihin benzersiz bir mimariye sahiptir. Bu yüzden şablon çözümler yerine, tamamen sizin hikayenize, hızınıza ve ihtiyaçlarınıza göre optimize edilmiş lüks bir klinik deneyim sunuyoruz.
            </p>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
