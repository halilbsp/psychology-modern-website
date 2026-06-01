"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Fizik motoruyla yumuşatılmış akışkan kaydırma hissi
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 right-0 w-1 md:w-1.5 h-full bg-[#1c648e]/10 z-[99998] origin-top"
      style={{ scaleY }}
    >
      {/* İnce parlama (Glow) efekti */}
      <div className="absolute top-0 w-full h-full bg-[#1c648e] blur-[1px] opacity-60"></div>
    </motion.div>
  );
}
