"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link"; 
import { useGlow } from "@/hooks/useGlow"; // Dinamik kenar ışığı (KORUNDU ✅)
import { useNeuroSound } from "@/hooks/useNeuroSound"; // YENİ SES MOTORU EKLENDİ 🔊

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const glowRef = useGlow(); 
  
  // Ses fonksiyonlarımızı çekiyoruz
  const { playHover, playClick } = useNeuroSound();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Yaklaşım", href: "/yaklasim" },
    { name: "Hizmetler", href: "/#hizmetler" },
    { name: "Uzmanlar", href: "/#uzmanlar" },
    { name: "Randevu", href: "/#randevu" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? "glass-panel spotlight-border !border-x-0 !border-t-0" 
            : "bg-transparent"
        }`}
        ref={glowRef}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* 🚀 SENIOR DOKUNUŞU: Tıklamada playClick efekti */}
          <Link href="/" onClick={playClick} onMouseEnter={playHover} className="text-2xl font-display font-bold text-[#1c648e] cursor-pointer hover:scale-105 transition-transform duration-300">
            Luminous.
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                // 🚀 SENIOR DOKUNUŞU: Linkin üzerine gelince playHover efekti
                onMouseEnter={playHover}
                onClick={playClick}
                className="text-[#86868b] text-sm font-medium hover:text-[#1c648e] transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#1c648e] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </div>

          <Link href="/#randevu" onClick={playClick} onMouseEnter={playHover} className="hidden md:block bg-[#1c648e] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300">
            Randevu Al
          </Link>

          <button
            onClick={() => { playClick(); setMobileMenuOpen(!mobileMenuOpen); }}
            onMouseEnter={playHover}
            className="md:hidden text-[#1c648e] p-2 hover:bg-[#1c648e]/10 rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-white/95 backdrop-blur-3xl z-40 md:hidden flex flex-col px-6 py-10"
          >
            <div className="flex flex-col gap-6 text-xl font-display font-semibold">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => { playClick(); setMobileMenuOpen(false); }}
                  className="text-[#1d1d1f] hover:text-[#1c648e] transition-colors border-b border-[#e1e1f5] pb-4"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/#randevu" onClick={() => { playClick(); setMobileMenuOpen(false); }} className="bg-[#1c648e] text-white py-4 rounded-2xl mt-4 active:scale-95 transition-transform text-center">
                Randevu Al
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
