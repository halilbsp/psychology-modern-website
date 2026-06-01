"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const { cursorType } = useCursor();
  const [isMobile, setIsMobile] = useState(false);
  
  // Fare koordinatları için motion value'lar
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Yumuşak takip için spring fizikleri (Premium hissetiren gecikme) ✨
  // Stiffness 300 / Damping 30 lüks sitelerin standart ayarıdır.
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    // Mobil cihazda imleci gizle (Performans ve UI)
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      // Manyetik etki için eğer bir buton üzerindeysek x/y'yi buton merkezine sabitlememiz gerekir.
      // Şimdilik basit takip yapalım, magnetic etkiyi interaktif elemanlarda kuracağız.
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  // İmleç Varyantları (Duruma göre şekil değiştirme) 💎
  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "rgba(28, 100, 142, 0.4)", // Şeffaf Primary
      border: "1px solid rgba(255, 255, 255, 0.6)",
    },
    pointer: {
      width: 60,
      height: 60,
      backgroundColor: "rgba(174, 226, 255, 0.15)", // Lüks buz mavis glow
      border: "1px solid rgba(174, 226, 255, 0.3)",
      backdropFilter: "blur(4px)", // Lüks cam efekti imlecde de var! 🧊
    }
  };

  return (
    <motion.div
      initial="default"
      animate={cursorType}
      variants={variants}
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      // Z-index 99999 vererek her şeyin üzerinde olmasını sağlıyoruz 🛡️
      className={cn(
        "fixed top-0 left-0 rounded-full pointer-events-none z-[99999] transition-colors duration-300"
      )}
    />
  );
}
