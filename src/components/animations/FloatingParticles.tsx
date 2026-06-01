"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingParticles() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Sadece client-side'da oluşturuyoruz (Next.js Hydration uyumu için)
    // 25 adet rastgele boyut, konum ve hızda lüks parçacık üretiyoruz ✨
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 3, // 3px ile 9px arası zarif boyutlar
      x: Math.random() * 100, // Ekranın % kaçında olacağı (Yatay)
      y: Math.random() * 100, // Ekranın % kaçında olacağı (Dikey)
      duration: Math.random() * 15 + 15, // 15 ile 30 saniye arası (Çok yavaş ve meditatif)
      delay: Math.random() * 5, // Başlangıç gecikmesi
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          // Lüks buz mavisi parlaması ve cam bulanıklığı (blur) efekti 🧊
          className="absolute rounded-full bg-white/60 blur-[1px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            boxShadow: "0 0 15px rgba(174, 226, 255, 0.6)"
          }}
          // Parçacıkların suyun içindeymiş gibi yavaşça süzülme animasyonu 🌊
          animate={{
            y: [`${p.y}%`, `${p.y - 20}%`, `${p.y}%`],
            x: [`${p.x}%`, `${p.x + (Math.random() > 0.5 ? 3 : -3)}%`, `${p.x}%`],
            opacity: [0, 0.8, 0], // Doğar, parlar ve usulca kaybolur
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
