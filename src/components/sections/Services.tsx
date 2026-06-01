"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView, useMotionTemplate } from "framer-motion";
import { BrainCircuit, HeartHandshake, MonitorSmartphone, Baby } from "lucide-react";
import StaggeredText from "../animations/StaggeredText";
import NeuralWave from "../animations/NeuralWave"; // 🌊 YENİ: Nöro-Estetik Dalga Eklendi
import { cn } from "@/lib/utils";

// 3D Eğilme + Dinamik Işık Efektli Kart Bileşeni ✨ (Mevcut yapı %100 korundu)
function TiltCard({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    x.set(clientX / rect.width - 0.5);
    y.set(clientY / rect.height - 0.5);
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave} 
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "glass-panel rounded-3xl p-8 flex flex-col justify-between group transition-all duration-500 hover:shadow-2xl hover:shadow-[#1c648e]/10 relative overflow-hidden", 
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.6),
              transparent 80%
            )
          `,
          mixBlendMode: "overlay"
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(174, 226, 255, 0.15),
              transparent 70%
            )
          `
        }}
      />
      <div style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }} className="h-full flex flex-col justify-between relative z-10 pointer-events-none">
        {children}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c648e]/5 to-transparent rounded-3xl -z-10 group-hover:scale-110 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="hizmetler" className="py-32 px-6 relative z-10 overflow-hidden">
      
      {/* 🚀 SENIOR DOKUNUŞU: Nöro-Estetik Veri Dalgası Arka Plana Eklendi */}
      <NeuralWave />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20 relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#1c648e] font-bold tracking-widest uppercase text-xs block mb-4"
          >
            UZMANLIK ALANLARIMIZ
          </motion.span>
          
          <StaggeredText 
            text="Size Özel Destek" 
            as="h2"
            className="text-4xl md:text-5xl font-display font-bold text-[#1d1d1f]"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          <TiltCard className="md:col-span-2 bg-white/40" delay={0.1}>
            <div className="flex justify-between items-start">
              <div className="bg-[#1c648e]/10 p-4 rounded-2xl text-[#1c648e] group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <BrainCircuit size={32} />
              </div>
              <span className="bg-[#e6f0f5] text-[#1c648e] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest">EN ÇOK TERCİH EDİLEN</span>
            </div>
            <div className="mt-8 relative z-10">
              <h3 className="text-2xl font-display font-bold text-[#1d1d1f] mb-3 group-hover:text-[#1c648e] transition-colors">Anksiyete Terapisi</h3>
              <p className="text-[#86868b] font-medium leading-relaxed">Kaygıyı yönetmeyi öğrenin ve günlük yaşamınızda kontrolü yeniden elinize alın.</p>
            </div>
          </TiltCard>

          <TiltCard className="bg-white/40" delay={0.2}>
            <div className="bg-[#1c648e]/10 w-fit p-4 rounded-2xl text-[#1c648e] group-hover:scale-110 transition-transform duration-500 shadow-inner">
              <HeartHandshake size={32} />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-display font-bold text-[#1d1d1f] mb-3 group-hover:text-[#1c648e] transition-colors">Çift Terapisi</h3>
              <p className="text-[#86868b] font-medium text-sm leading-relaxed">İlişkinizi onarın ve daha güçlü bir bağ kurun.</p>
            </div>
          </TiltCard>

          <TiltCard className="bg-white/40" delay={0.3}>
            <div className="bg-[#1c648e]/10 w-fit p-4 rounded-2xl text-[#1c648e] group-hover:scale-110 transition-transform duration-500 shadow-inner">
              <MonitorSmartphone size={32} />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-display font-bold text-[#1d1d1f] mb-3 group-hover:text-[#1c648e] transition-colors">Online Terapi</h3>
              <p className="text-[#86868b] font-medium text-sm leading-relaxed">Nerede olursanız olun, uzman desteği bir tık uzağınızda.</p>
            </div>
          </TiltCard>

          <TiltCard className="md:col-span-2 relative bg-white/40" delay={0.4}>
            <div className="bg-[#1c648e]/10 w-fit p-4 rounded-2xl text-[#1c648e] group-hover:scale-110 transition-transform duration-500 shadow-inner">
              <Baby size={32} />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-display font-bold text-[#1d1d1f] mb-3 group-hover:text-[#1c648e] transition-colors">Çocuk & Ergen</h3>
              <p className="text-[#86868b] font-medium leading-relaxed">Gelişim dönemindeki zorlukları aşmaları için güvenli bir alan ve profesyonel rehberlik.</p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
