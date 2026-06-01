"use client";

import { useCallback, useEffect, useRef } from "react";

export function useNeuroSound() {
  const audioCtx = useRef<AudioContext | null>(null);

  useEffect(() => {
    const init = () => {
      if (!audioCtx.current) {
        audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
    };
    window.addEventListener("click", init, { once: true });
    window.addEventListener("mousemove", init, { once: true });
    return () => {
      window.removeEventListener("click", init);
      window.removeEventListener("mousemove", init);
    };
  }, []);

  // 1. Hover Sesi (Su damlası / Kristal sesi - KORUNDU ✅)
  const playHover = useCallback(() => {
    if (!audioCtx.current) return;
    try {
      const ctx = audioCtx.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(432, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.015, ctx.currentTime + 0.02);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {}
  }, []);

  // 2. Click Sesi ve YENİ: Haptic Titreşim (Fiziksel Geri Bildirim 📱⚡)
  const playClick = useCallback(() => {
    // 🚀 SENIOR DOKUNUŞU: Mobil cihazlarda fiziksel olarak çok hafif titreşim (haptic feedback) ver!
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(30); // 30 milisaniyelik premium bir dokunma hissi
    }

    if (!audioCtx.current) return;
    try {
      const ctx = audioCtx.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = "triangle";
      osc.frequency.setValueAtTime(150, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.15);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.02);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.2);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch (e) {}
  }, []);

  return { playHover, playClick };
}
