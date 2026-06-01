"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MagneticElement from "../animations/MagneticElement";
import { useGlow } from "@/hooks/useGlow";
import { useNeuroSound } from "@/hooks/useNeuroSound";

export default function Contact() {
  const glowRef = useGlow();
  const { playHover, playClick } = useNeuroSound();
  
  // Takvim ve saat için interaktif state'ler (Lüks hissiyat için)
  const [selectedDate, setSelectedDate] = useState(5);
  const [selectedTime, setSelectedTime] = useState("10:00");

  return (
    <section id="randevu" className="py-32 px-6 relative z-10 overflow-hidden min-h-screen flex items-center justify-center bg-[#fbfbfd]">
      
      {/* 🛸 Arka Plan: Tertemiz, aydınlık ve ferah zemin (Video yok!) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fbfbfd] to-[#e6f0f5]/30 -z-20"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Ana Kart: Orijinal tasarımına sadık kalınan, cam ve soft gölgeli taşıyıcı */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="bg-[#f4f7f9]/80 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-14 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/60 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* SOL SÜTUN: Form Alanı */}
          <div>
            <h2 className="text-5xl font-display font-bold text-[#1d1d1f] mb-4 tracking-tight">
              İlk Adımı Atın.
            </h2>
            <p className="text-[#86868b] font-medium text-lg mb-10 leading-relaxed max-w-md">
              Ücretsiz 15 dakikalık ön görüşme için form doldurun, size en uygun zamanı birlikte belirleyelim.
            </p>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Adınız Soyadınız"
                onMouseEnter={playHover}
                onClick={playClick}
                className="w-full bg-white px-6 py-4 rounded-xl border border-[#e1e1f5] focus:outline-none focus:ring-2 focus:ring-[#1c648e]/20 focus:border-[#1c648e] transition-all text-[#1d1d1f] placeholder:text-[#86868b]/70"
              />
              <input
                type="email"
                placeholder="E-posta Adresiniz"
                onMouseEnter={playHover}
                onClick={playClick}
                className="w-full bg-white px-6 py-4 rounded-xl border border-[#e1e1f5] focus:outline-none focus:ring-2 focus:ring-[#1c648e]/20 focus:border-[#1c648e] transition-all text-[#1d1d1f] placeholder:text-[#86868b]/70"
              />
              <input
                type="text"
                placeholder="İlgilendiğiniz Hizmet"
                onMouseEnter={playHover}
                onClick={playClick}
                className="w-full bg-white px-6 py-4 rounded-xl border border-[#e1e1f5] focus:outline-none focus:ring-2 focus:ring-[#1c648e]/20 focus:border-[#1c648e] transition-all text-[#1d1d1f] placeholder:text-[#86868b]/70"
              />

              {/* 🧲 SENIOR DOKUNUŞU: Orijinal Form Butonuna Manyetik & Işık Eklendi */}
              <div className="mt-4">
                <MagneticElement className="w-full">
                  <div ref={glowRef} className="spotlight-border rounded-xl w-full">
                    <button
                      onMouseEnter={playHover}
                      onClick={playClick}
                      className="w-full bg-[#1c648e] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-[#1c648e]/20 transition-all duration-300"
                    >
                      Randevu Talebi Gönder
                    </button>
                  </div>
                </MagneticElement>
              </div>
            </form>
          </div>

          {/* SAĞ SÜTUN: İnteraktif Takvim Alanı (Görselindeki tasarımın kodlanmış hali) */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-[#e1e1f5]/50">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-display font-medium text-[#1d1d1f]">Ekim 2024</h3>
              <div className="flex gap-4 text-[#86868b]">
                <button onMouseEnter={playHover} onClick={playClick} className="hover:text-[#1c648e] transition-colors"><ChevronLeft size={20} /></button>
                <button onMouseEnter={playHover} onClick={playClick} className="hover:text-[#1c648e] transition-colors"><ChevronRight size={20} /></button>
              </div>
            </div>

            {/* Haftanın Günleri */}
            <div className="grid grid-cols-7 gap-2 text-center text-[#86868b] text-sm font-medium mb-4">
              <span>Pzt</span><span>Sal</span><span>Çar</span><span>Per</span><span>Cum</span><span>Cmt</span><span>Paz</span>
            </div>

            {/* Takvim Günleri */}
            <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center text-[#1d1d1f] font-medium mb-8">
              <span className="text-[#86868b]/40">28</span>
              <span className="text-[#86868b]/40">29</span>
              <span className="text-[#86868b]/40">30</span>
              {[1, 2, 3, 4, 5, 6].map((day) => (
                <button
                  key={day}
                  onMouseEnter={playHover}
                  onClick={() => { playClick(); setSelectedDate(day); }}
                  className={`w-10 h-10 mx-auto flex items-center justify-center rounded-xl transition-all duration-300 ${
                    selectedDate === day
                      ? "bg-[#1c648e] text-white shadow-md shadow-[#1c648e]/30"
                      : "hover:bg-[#e6f0f5] text-[#1d1d1f]"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            <div className="w-full h-[1px] bg-[#e1e1f5] mb-6"></div>

            {/* Saat Seçimi */}
            <div>
              <h4 className="text-sm font-bold text-[#86868b] uppercase tracking-wider mb-4">
                {selectedDate} EKİM İÇİN UYGUN SAATLER
              </h4>
              <div className="flex flex-wrap gap-3">
                {["10:00", "14:30", "16:00"].map((time) => (
                  <button
                    key={time}
                    onMouseEnter={playHover}
                    onClick={() => { playClick(); setSelectedTime(time); }}
                    className={`px-5 py-2 rounded-full border transition-all duration-300 font-medium ${
                      selectedTime === time
                        ? "border-[#1c648e] text-[#1c648e] bg-[#1c648e]/5"
                        : time === "16:00"
                        ? "border-[#e1e1f5] text-[#86868b]/50 cursor-not-allowed" // Görseldeki silik/dolu saat detayı
                        : "border-[#e1e1f5] text-[#86868b] hover:border-[#1c648e]/50 hover:text-[#1c648e]"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}