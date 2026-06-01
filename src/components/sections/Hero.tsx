"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import StaggeredText from "../animations/StaggeredText";
import FloatingParticles from "../animations/FloatingParticles"; 
import MagneticElement from "../animations/MagneticElement";
import { useGlow } from "@/hooks/useGlow"; 
import { useNeuroSound } from "@/hooks/useNeuroSound"; // YENİ SES MOTORU EKLENDİ 🔊

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const glowRef = useGlow(); 
  
  // Ses fonksiyonlarını çekiyoruz
  const { playHover, playClick } = useNeuroSound();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="relative isolate min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      
      {/* 1. KATMAN: Arka Plan Videosu */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          src="/videos/hero-bg.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-[#fbfbfd]"></div>
      </div>

      {/* 2. KATMAN: Nöro-Estetik Parçacıklar (Korundu ✅) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <FloatingParticles />
      </div>

      {/* 3. KATMAN: İçerik */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block px-5 py-2 rounded-full glass-panel text-[#1c648e] text-xs font-bold tracking-widest uppercase mb-10 shadow-sm"
        >
          PREMIUM WELLNESS DENEYİMİ
        </motion.div>

        {/* Nefes Alan Dalgalı Vurgulu Başlık (Korundu ✅) */}
        <StaggeredText 
          text="Zihinsel iyi oluş yolculuğunuz burada başlıyor." 
          as="h1"
          className="text-5xl md:text-[5rem] lg:text-[5.5rem] font-display font-medium text-[#1d1d1f] mb-8 tracking-tight leading-[1.1] drop-shadow-sm w-full"
          delay={0.4}
          wordDelay={0.06}
          highlightWords={["iyi", "oluş", "yolculuğunuz"]}
          highlightClass="text-[#aee2ff] font-semibold drop-shadow-[0_0_15px_rgba(174,226,255,0.3)] transition-colors duration-500"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-[#86868b] mb-14 max-w-3xl mx-auto font-medium leading-relaxed"
        >
          İleri teknoloji ve insan odaklı modern yaklaşımımızla, potansiyelinizi keşfetmeniz ve içsel dengenizi bulmanız için buradayız.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full"
        >
          {/* Manyetik Buton 1 (Korundu ✅) */}
          <MagneticElement className="w-full sm:w-auto">
            {/* 🚀 SENIOR DOKUNUŞU: Tıklama ve Üzerine Gelme Sesleri Eklendi */}
            <button 
              onMouseEnter={playHover}
              onClick={playClick}
              className="w-full bg-[#1c648e] text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#1c648e]/20 transition-shadow duration-300 relative overflow-hidden group"
            >
              Hemen Başlayın
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"></div>
            </button>
          </MagneticElement>
          
          {/* Manyetik ve Kenar Işıklı Buton 2 (Korundu ✅) */}
          <MagneticElement className="w-full sm:w-auto">
            <div ref={glowRef} className="spotlight-border rounded-full w-full h-full">
              {/* 🚀 SENIOR DOKUNUŞU: Tıklama ve Üzerine Gelme Sesleri Eklendi */}
              <button 
                onMouseEnter={playHover}
                onClick={playClick}
                className="w-full glass-panel text-[#1d1d1f] px-10 py-5 rounded-full font-semibold text-lg hover:bg-white/80 hover:shadow-inner transition-colors duration-300"
              >
                Yaklaşımımızı Keşfedin
              </button>
            </div>
          </MagneticElement>
        </motion.div>
      </div>
    </section>
  );
}
