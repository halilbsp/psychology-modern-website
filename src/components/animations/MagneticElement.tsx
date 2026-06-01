"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticElement({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const rect = ref.current?.getBoundingClientRect();
    
    if (rect) {
      // Farenin butonun merkezine olan uzaklığını hesaplıyoruz 📐
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);
      
      // Butonu farenin olduğu yöne doğru %20 oranında (tatlı bir esnemeyle) çekiyoruz 🧲
      setPosition({ x: x * 0.2, y: y * 0.2 });
    }
  };

  const reset = () => {
    // Fare üzerinden gidince buton orijinal yerine "yay" gibi sekerek geri döner 🪄
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      whileHover={{ scale: 1.05 }} // Tailwind scale'i buraya taşıdık ki animasyonlar çakışmasın
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
