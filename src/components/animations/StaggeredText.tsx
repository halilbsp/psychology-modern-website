"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface StaggeredTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  wordDelay?: number;
  highlightWords?: string[]; // Vurgulanacak kelimeler dizisi
  highlightClass?: string;   // Vurguya uygulanacak CSS sınıfları
}

export default function StaggeredText({ 
  text, 
  className, 
  as: Element = "h2", 
  delay = 0, 
  wordDelay = 0.05,
  highlightWords = [],
  highlightClass = ""
}: StaggeredTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = text.split(" ");

  // Kapsayıcı animasyonu (Kelimeleri sırayla tetikler)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (customDelay: number) => ({
      opacity: 1,
      transition: { 
        staggerChildren: wordDelay, 
        delayChildren: customDelay 
      }
    }),
  };

  // İlk giriş animasyonu (Aşağıdan süzülerek gelme)
  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    },
  };

  return (
    <Element ref={ref} className={cn("inline-block w-full", className)} style={{ display: "inline-block" }}>
      <span className="sr-only">{text}</span>
      
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={delay}
        aria-hidden="true"
        className="flex flex-wrap justify-center text-center"
      >
        {words.map((word, index) => {
          // Noktalama işaretlerini temizleyerek kilit kelimeleri buluyoruz
          const cleanWord = word.replace(/[.,!?]/g, "");
          const isHighlighted = highlightWords.includes(cleanWord);

          return (
            <motion.span
              key={index}
              variants={childVariants}
              // Orijinal renk ve boşluk ayarları korundu ✅
              className={cn("inline-block mr-[0.25em] transition-colors duration-500", isHighlighted && highlightClass)}
              style={{ display: "inline-block" }}
            >
              {/* 🚀 SENIOR DOKUNUŞU: Sadece vurgulu kelimelere Meditatif Nefes (Breathing) efekti ekledik */}
              {isHighlighted ? (
                <motion.span
                  animate={{ 
                    y: [0, -4, 0], // Çok yumuşak yukarı-aşağı salınım
                    opacity: [0.7, 1, 0.7] // Işığın hafifçe yanıp sönmesi
                  }}
                  transition={{ 
                    duration: 4, // Psikolojideki rahatlatıcı 4 saniye nefes ritmi
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.2 // Kelimeler arası zincirleme dalga etkisi
                  }}
                  style={{ display: "inline-block" }}
                >
                  {word}
                </motion.span>
              ) : (
                word
              )}
            </motion.span>
          );
        })}
      </motion.span>
    </Element>
  );
}
