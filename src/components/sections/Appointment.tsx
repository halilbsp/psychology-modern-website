"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Appointment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [selectedDay, setSelectedDay] = useState<number | null>(5);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const days = [
    { day: 27, currentMonth: false }, { day: 28, currentMonth: false }, { day: 29, currentMonth: false }, { day: 30, currentMonth: false },
    { day: 1, currentMonth: true }, { day: 2, currentMonth: true }, { day: 3, currentMonth: true }, { day: 4, currentMonth: true },
    { day: 5, currentMonth: true }, { day: 6, currentMonth: true }, { day: 7, currentMonth: true }, { day: 8, currentMonth: true },
    { day: 9, currentMonth: true }, { day: 10, currentMonth: true }, { day: 11, currentMonth: true }, { day: 12, currentMonth: true },
    { day: 13, currentMonth: true }, { day: 14, currentMonth: true }, { day: 15, currentMonth: true }, { day: 16, currentMonth: true }
  ];

  const timeSlots: { [key: number]: string[] } = {
    1: ["09:00", "11:30", "14:00"],
    2: ["10:00", "15:00", "17:30"],
    3: ["11:00", "13:00", "16:00"],
    4: ["09:30", "14:30", "15:30"],
    5: ["10:00", "14:30", "16:30"], 
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && service && selectedDay && selectedTime) {
      setIsLoading(true);
      
      try {
        // API'ye POST isteği atıyoruz
        const response = await fetch("/api/appointment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name, email, service, day: selectedDay, time: selectedTime
          }),
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          alert("Bir hata oluştu. Lütfen tekrar deneyin.");
        }
      } catch (error) {
        console.error("Hata:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Lütfen tüm alanları, gün ve saat seçimini eksiksiz tamamlayın.");
    }
  };

  return (
    <section id="randevu" className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto glass-panel rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden bg-white/40">
        
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div 
              key="appointment-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="text-4xl font-display font-bold text-on-surface mb-4">İlk Adımı Atın.</h2>
                <p className="text-on-surface-variant font-medium mb-10">
                  Ücretsiz 15 dakikalık ön görüşme için formu doldurun, size en uygun zamanı birlikte belirleyelim.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <input
                    type="text" required value={name} onChange={(e) => setName(e.target.value)}
                    placeholder="Adınız Soyadınız"
                    className="w-full bg-white/50 border border-outline focus:border-primary focus:bg-white rounded-2xl px-5 py-4 font-medium text-on-surface placeholder:text-on-surface-variant/60 outline-none transition-all shadow-sm"
                  />
                  <input
                    type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-posta Adresiniz"
                    className="w-full bg-white/50 border border-outline focus:border-primary focus:bg-white rounded-2xl px-5 py-4 font-medium text-on-surface placeholder:text-on-surface-variant/60 outline-none transition-all shadow-sm"
                  />
                  <select
                    required value={service} onChange={(e) => setService(e.target.value)}
                    className="w-full bg-white/50 border border-outline focus:border-primary focus:bg-white rounded-2xl px-5 py-4 font-medium text-on-surface outline-none transition-all shadow-sm cursor-pointer appearance-none"
                  >
                    <option value="" disabled>İlgilendiğiniz Hizmet</option>
                    <option value="anksiyete">Anksiyete Terapisi</option>
                    <option value="cift">Çift Terapisi</option>
                    <option value="online">Online Terapi</option>
                    <option value="cocuk">Çocuk & Ergen Terapisi</option>
                  </select>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-white py-4 rounded-2xl font-semibold text-lg hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-glow active:scale-[0.98] transition-all duration-300 mt-4 disabled:opacity-70"
                  >
                    {isLoading ? "Gönderiliyor..." : "Randevu Talebi Gönder"}
                  </button>
                </form>
              </div>

              {/* Takvim Kısmı */}
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 w-full max-w-sm shadow-xl border border-white/60">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-display font-bold text-on-surface">Mayıs 2026</h3>
                    <div className="flex gap-1">
                      <button className="p-2 hover:bg-secondary rounded-full transition-colors text-on-surface-variant hover:text-primary"><ChevronLeft size={18} /></button>
                      <button className="p-2 hover:bg-secondary rounded-full transition-colors text-on-surface-variant hover:text-primary"><ChevronRight size={18} /></button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold tracking-widest text-on-surface-variant/70 mb-4">
                    <div>Pzt</div><div>Sal</div><div>Çar</div><div>Per</div><div>Cum</div><div>Cmt</div><div>Paz</div>
                  </div>

                  <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold">
                    {days.map((item, index) => {
                      const isSelected = selectedDay === item.day && item.currentMonth;
                      const hasSlots = item.currentMonth && timeSlots[item.day];

                      return (
                        <div
                          key={index}
                          onClick={() => {
                            if (item.currentMonth) {
                              setSelectedDay(item.day);
                              setSelectedTime(null); 
                            }
                          }}
                          className={`p-2.5 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-center select-none ${
                            !item.currentMonth 
                              ? "text-on-surface-variant/20 cursor-not-allowed" 
                              : isSelected
                                ? "bg-primary text-white shadow-md shadow-primary-glow scale-110"
                                : hasSlots
                                  ? "hover:bg-primary-glow text-primary font-bold"
                                  : "hover:bg-secondary text-on-surface"
                          }`}
                        >
                          {item.day}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 pt-6 border-t border-outline">
                    <div className="text-[10px] font-bold tracking-widest text-on-surface-variant mb-3 uppercase">
                      {selectedDay ? `${selectedDay} Mayıs İçin Uygun Saatler` : "Lütfen bir gün seçin"}
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {selectedDay && timeSlots[selectedDay] ? (
                        timeSlots[selectedDay].map((time) => (
                          <button
                            key={time} type="button" onClick={() => setSelectedTime(time)}
                            className={`px-4 py-1.5 border rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                              selectedTime === time
                                ? "bg-primary border-primary text-white scale-105 shadow-sm"
                                : "border-primary text-primary hover:bg-primary hover:text-white"
                            }`}
                          >
                            {time}
                          </button>
                        ))
                      ) : (
                        <span className="text-xs text-on-surface-variant/50 italic">Bu tarih için online randevu kapalı.</span>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="success-screen"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="text-center py-12 flex flex-col items-center justify-center"
            >
              <div className="text-primary mb-6 animate-pulse">
                <CheckCircle2 size={80} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-display font-bold text-on-surface mb-4">Talebiniz Başarıyla Alındı!</h3>
              <p className="text-lg text-on-surface-variant max-w-md mx-auto mb-8 font-medium">
                Sevgili <span className="text-primary font-semibold">{name}</span>, {selectedDay} Mayıs günü saat <span className="text-primary font-semibold">{selectedTime}</span> için ön görüşme talebiniz sıraya alınmıştır. Onay e-postası adresinize gönderildi.
              </p>
              <button 
                onClick={() => {
                  setIsSubmitted(false); setName(""); setEmail(""); setService(""); setSelectedTime(null);
                }}
                className="glass-panel text-on-surface font-semibold px-8 py-3 rounded-full hover:bg-surface transition-all duration-300"
              >
                Yeni Randevu Oluştur
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
