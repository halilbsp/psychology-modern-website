"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Animasyon oynarken sayfanın kaydırılmasını (scroll) kilitliyoruz 🔒
    document.body.style.overflow = "hidden";
    
    // 3 saniyelik sinematik deneyim süresi
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = ""; // Scroll kilidini aç
    }, 3000); 

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="intro-loader"
          // Çıkış anında ekranın blur ile eriyerek yok olması efekti 🧊
          exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#fbfbfd] pointer-events-none"
        >
          <motion.div
            // Logoya başlangıçta blur ve aşağıdan gelme efekti veriyoruz
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <motion.h1
              // Nefes alma (Breathing) animasyonu 🫁
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl md:text-6xl font-display font-bold text-[#1c648e] tracking-tight"
            >
              Luminous.
            </motion.h1> {/* 🚨 HATA BURADAYDI: /motion.div yerine /motion.h1 olarak düzeltildi ✅ */}
            
            <motion.div
              // Altında zarifçe uzayan lüks bir çizgi (Glow) ✨
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#1c648e]/50 to-transparent mt-6"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
