"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import StaggeredText from "../animations/StaggeredText";
import ParallaxSection from "../animations/ParallaxSection";

export default function About() {
  return (
    <section id="uzmanlar" className="py-32 px-6 relative z-10 bg-white/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Sol Taraf: Çift Katmanlı Paralaks Efektli Görsel ve İstatistikler 🌌 */}
          {/* pr ve pb sınıfları kartın sağa taşarken ekrandan kırpılmasını önleyen senior emniyet kemeridir */}
          <div className="relative pr-8 pb-8 lg:pr-12 lg:pb-12 w-full max-w-[540px] mx-auto lg:mx-0">
            
            {/* Arkadaki zarif parlama efekti */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#1c648e]/15 to-transparent rounded-[4rem] blur-3xl -z-10 opacity-70"></div>
            
            {/* 1. KATMAN: Uzman Görseli (Hafif yukarı doğru paralaks) 📸 */}
            <ParallaxSection offset={25} className="relative aspect-[3/4] lg:aspect-[4/5] w-full rounded-[3rem] overflow-hidden glass-panel p-2 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Ayşe Yılmaz" 
                className="w-full h-full object-cover rounded-[2.5rem] filter contrast-[0.95]"
              />
            </ParallaxSection>
            
            {/* 2. KATMAN: Görselin üzerine binen TERS PARALAKS mini istatistik kartı 📊✨ */}
            {/* offset={-35} vererek resim yukarı kayarken kartın aşağı/farklı hızda kaymasını sağlıyoruz. Tam Apple tarzı akışkan derinlik! */}
            <ParallaxSection offset={-35} className="absolute bottom-0 right-0 md:-right-4 lg:-right-6 z-20">
              <div className="glass-panel p-6 rounded-3xl shadow-2xl border border-white/60 hover:scale-105 transition-transform duration-500 bg-white/80 backdrop-blur-xl">
                <div className="flex gap-10">
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-[#1c648e] mb-1 tracking-tight">5000+</div>
                    <div className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Görüşme</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-display font-bold text-[#1c648e] mb-1 tracking-tight">%98</div>
                    <div className="text-[10px] font-bold tracking-widest text-[#86868b] uppercase">Memnuniyet</div>
                  </div>
                </div>
              </div>
            </ParallaxSection>
            
          </div>

          {/* Sağ Taraf: İçerik ve Profil */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0 relative z-10"
          >
            <span className="text-[#1c648e] font-bold tracking-widest uppercase text-xs block mb-6">
              KURUCU PSİKOLOG
            </span>
            
            {/* Efsanevi Dalgalı Metin Başlığı 🌊 */}
            <StaggeredText 
                text="Sakinliğe Giden Modern Yol." 
                as="h2"
                className="text-5xl md:text-6xl font-display font-extrabold text-[#1d1d1f] mb-8 leading-tight tracking-tighter drop-shadow-sm"
                delay={0.2}
            />
            
            <div className="space-y-6 text-lg text-[#86868b] font-medium leading-relaxed relative z-10">
              <p className="pl-5 border-l-4 border-[#1c648e]/30 italic text-[#1d1d1f] bg-[#1c648e]/5 py-3 rounded-r-lg">
                "İyileşme, kendinize şefkat göstermeye başladığınız an başlar."
              </p>
              <p>
                Dr. Ayşe Yılmaz, 15 yıllık klinik deneyimiyle, Bilişsel Davranışçı Terapi (BDT) ve Mindfulness temelli yaklaşımları entegre ederek çalışmaktadır.
              </p>
              <p>
                Amacı, her bireyin benzersiz hikayesine saygı duyarak, onların kendi içsel kaynaklarını keşfetmelerine rehberlik etmektir.
              </p>
            </div>

            {/* Yaklaşım Etiketleri */}
            <div className="flex flex-wrap gap-3.5 mt-12 mb-14 relative z-10">
              {['BDT', 'EMDR', 'MINDFULNESS'].map((tag) => (
                <span key={tag} className="px-6 py-2.5 rounded-full border border-[#e1e1f5] bg-white text-sm font-semibold tracking-wider text-[#86868b] hover:border-[#1c648e] hover:text-[#1c648e] transition-all duration-300 cursor-default hover:-translate-y-0.5">
                  {tag}
                </span>
              ))}
            </div>

            {/* Aksiyon Butonu */}
            <button className="flex items-center gap-3 text-[#1c648e] font-bold text-lg group w-fit relative z-10">
              Detaylı Özgeçmiş 
              <span className="bg-[#1c648e]/10 p-2 rounded-full group-hover:translate-x-3 transition-all duration-300 transform shadow-inner">
                <ArrowRight size={20} />
              </span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
