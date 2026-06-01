"use client";

import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-outline py-16 px-6 relative z-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Sol Sütun: Marka ve Slogan */}
        <div className="col-span-1 md:col-span-1">
          <div className="text-3xl font-display font-bold text-primary mb-3">Luminous.</div>
          <p className="text-on-surface-variant text-sm font-medium mb-6">
            Zihinsel İyi Oluşta Mükemmellik Deneyimi. İleri teknoloji ve insan odaklı modern terapi yaklaşımı.
          </p>
        </div>
        
        {/* Orta Sütun: Hızlı Linkler */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-3">
          <h4 className="text-on-surface font-bold tracking-widest text-xs uppercase mb-2">Kurumsal</h4>
          {["Hakkımızda", "Gizlilik Politikası", "Kullanım Şartları", "Kriz Desteği"].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors duration-300 w-fit"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Sağ Sütun: İletişim ve Adres */}
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <h4 className="text-on-surface font-bold tracking-widest text-xs uppercase mb-1">İletişim</h4>
          <div className="flex items-center gap-3 text-on-surface-variant text-sm font-medium">
            <MapPin size={18} className="text-primary" />
            <span>Merkez, Kütahya</span>
          </div>
          <div className="flex items-center gap-3 text-on-surface-variant text-sm font-medium">
            <Mail size={18} className="text-primary" />
            <a href="mailto:merhaba@luminouspsikoloji.com" className="hover:text-primary transition-colors">
              merhaba@luminouspsikoloji.com
            </a>
          </div>
        </div>
        
      </div>

      {/* Alt Çizgi ve Telif */}
      <div className="max-w-5xl mx-auto mt-16 pt-8 border-t border-outline flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-on-surface-variant/60">
        <div>© 2026 Luminous Precision Psychology. Tüm hakları saklıdır.</div>
        <div>Tasarım ve Altyapı: Premium Dijital Deneyim</div>
      </div>
    </footer>
  );
}
