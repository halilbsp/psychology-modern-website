"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08, // Kaydırmanın yumuşaklık oranı (Apple standartlarına yakın)
        duration: 1.5, // Kaydırma animasyonunun süresi
        smoothWheel: true, // Mouse tekerleği ile yağ gibi akma
      }}
    >
      {children}
    </ReactLenis>
  );
}
