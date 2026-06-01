"use client";

import { motion } from "framer-motion";

export default function NeuralWave() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-[0.12]">
      <svg viewBox="0 0 1000 400" className="w-[200%] md:w-full h-full" preserveAspectRatio="none">
        {/* Sakinleştirici Alfa Frekans Dalgası (Kalın ve Bulanık Glow) */}
        <motion.path
          fill="none"
          stroke="#1c648e"
          strokeWidth="4"
          style={{ filter: "blur(6px)" }}
          animate={{
            d: [
              "M0,200 Q250,100 500,200 T1000,200",
              "M0,200 Q250,300 500,200 T1000,200",
              "M0,200 Q250,100 500,200 T1000,200",
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Keskin Teta Frekans Dalgası (Net Buz Mavisi Çizgi) */}
        <motion.path
          fill="none"
          stroke="#aee2ff"
          strokeWidth="1.5"
          animate={{
            d: [
              "M0,200 Q250,300 500,200 T1000,200",
              "M0,200 Q250,100 500,200 T1000,200",
              "M0,200 Q250,300 500,200 T1000,200",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
