"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

interface ParallaxSectionProps {
  children: ReactNode;
  offset?: number;
  className?: string;
  as?: React.ElementType;
}

export default function ParallaxSection({ 
  children, 
  offset = 50, 
  className, 
  as: Element = "div" 
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useParallax(scrollYProgress, offset);

  // HATA ÇÖZÜMÜ: motion() yerine motion.create() kullanıldı ✅
  const MotionElement = motion.create(Element as any);

  return (
    <Element ref={ref} className={cn("relative", className)}>
      <MotionElement style={{ y }} className="relative z-0">
        {children}
      </MotionElement>
    </Element>
  );
}
