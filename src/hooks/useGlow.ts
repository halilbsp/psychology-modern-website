"use client";

import { useRef, useEffect } from "react";

export function useGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Fare koordinatlarını CSS değişkeni olarak elemente set ediyoruz 🪄
      element.style.setProperty("--mouse-x", `${x}px`);
      element.style.setProperty("--mouse-y", `${y}px`);
    };

    element.addEventListener("mousemove", handleMouseMove);
    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return ref;
}
