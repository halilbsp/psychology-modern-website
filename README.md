# Luminous Precision Psychology

Luminous, zihinsel iyi oluş ve psikoloji alanında hizmet veren klinikler için tasarlanmış ultra-premium bir web platformudur. Amaç yalnızca bilgi veren bir kurumsal site üretmek değil; kullanıcıya sakin, güven veren, mekansal derinliği olan ve Apple lansmanı hissiyatına yaklaşan rafine bir dijital deneyim sunmaktır.

Platform; akışkan kaydırma, manyetik arayüz davranışları, cam efektleri, nöro-akustik mikro etkileşimler ve dikkatli katmanlanmış görsel atmosfer ile modern psikoloji hizmetlerini daha güçlü ve seçkin bir çerçevede sunar.

## Deneyim Vizyonu

Bu proje standart bir klinik web sitesi gibi ele alınmamalıdır. Luminous; hız, sadelik, premium görsel dil ve duyusal mikro etkileşimlerin birlikte çalıştığı bir deneyim sistemidir.

- Kullanıcıyı yormayan, açık ve ferah bir görsel atmosfer.
- Psikoloji ve wellness alanına yakışan güven, sakinlik ve kalite hissi.
- Metin, hareket, ses ve katmanların birbirini tamamladığı bütünlüklü bir arayüz.
- Gereksiz süs yerine ölçülü, işlevsel ve rafine animasyonlar.

## Öne Çıkan Özellikler

- **Lenis Smooth Scroll:** Sayfa geçişlerinde fiziksel ağırlık hissi veren akışkan kaydırma deneyimi.
- **Magnetic UI:** Ana butonlarda fareyi takip eden, yumuşak ve doğal manyetik hareket.
- **Nöro-Akustik Ses Motoru:** Web Audio API ile üretilen hover ve tıklama sesleri. Harici `.mp3` yüküne ihtiyaç duymaz.
- **Mobil Haptic Geri Bildirim:** Destekleyen cihazlarda tıklama etkileşimlerini fiziksel titreşim hissiyle güçlendirir.
- **Glassmorphism Paneller:** `glass-panel` sınıfı ile tutarlı, aydınlık ve premium cam yüzeyler.
- **Dinamik Border Spotlight:** Cam yüzeylerde fareyi takip eden kristal kenar ışığı.
- **Hero Video Atmosferi:** `public/videos/hero-bg.mp4` ile üst bölümde sakin ve derinlikli video arka planı.
- **Nöro-Estetik Parçacıklar ve Dalgalar:** Arka planda nefes hızında hareket eden hafif görsel katmanlar.

## Teknoloji Yığını

- **Framework:** Next.js 16 App Router
- **Dil:** TypeScript
- **UI:** React 19
- **Stil:** Tailwind CSS v4
- **Animasyon:** Framer Motion
- **Smooth Scroll:** `@studio-freight/react-lenis`
- **3D / Görsel Derinlik:** Three.js, React Three Fiber, Drei
- **İkonlar:** Lucide React
- **E-posta:** Nodemailer

## Proje Yapısı

```text
src/
  app/                  App Router sayfaları, layout ve API route'ları
  components/
    animations/         Motion, parallax, intro ve parçacık bileşenleri
    layout/             Navbar ve Footer
    sections/           Hero, Services, About, Contact, Appointment
    ui/                 Paylaşılan arayüz yardımcıları
  context/              Global arayüz durumları
  hooks/                useGlow, useNeuroSound gibi deneyim hook'ları
  lib/                  Yardımcı fonksiyonlar

public/
  videos/hero-bg.mp4    Hero arka plan videosu
```

## Kurulum

Projeyi yerel ortamda çalıştırmak için:

```bash
npm install --legacy-peer-deps
npm run dev
```

Ardından tarayıcıda şu adresi açın:

```text
http://localhost:3000
```

## Komutlar

```bash
npm run dev      # Geliştirme sunucusunu başlatır
npm run build    # Üretim build'i alır
npm run start    # Üretim sunucusunu başlatır
npm run lint     # ESLint kontrollerini çalıştırır
```

## Geliştirme Notları

- Bu proje Next.js 16 kullanır. Kod yazmadan önce yerel dokümanlar `node_modules/next/dist/docs/` altından kontrol edilmelidir.
- Tailwind CSS v4 kullanıldığı için eski Tailwind alışkanlıklarıyla yapılandırma eklenmemelidir.
- Lenis zaten layout seviyesinde çalışır. CSS tarafında `scroll-smooth` kullanılmamalıdır.
- Ana CTA butonlarında `MagneticElement`, etkileşimli kontrollerde `useNeuroSound`, cam yüzeylerde `glass-panel` ve gerekli yerlerde `useGlow` tercih edilmelidir.
- Katman yapısı hassastır. Hero arka planı, parçacıklar ve içerik z-index hiyerarşisi korunarak geliştirilmelidir.
- Saf siyah yerine `#1d1d1f`, ana marka rengi olarak `#1c648e`, arka plan için `#fbfbfd` kullanılmalıdır.

## Kalite Standardı

Yeni eklenen her bölüm, Luminous'un premium tasarım dilini sürdürmelidir: sakin, ferah, kontrollü hareketli, yüksek kontrastlı ama sert olmayan, psikoloji ve wellness alanına güven veren bir deneyim.

Geliştirme sırasında amaç yalnızca çalışan bir arayüz üretmek değil; sitenin bütünsel hissini koruyarak daha rafine hale getirmektir.

## Geliştirici

Halil Baspi  
GitHub: [github.com/halilbsp](https://github.com/halilbsp)

<img width="1257" height="891" alt="Ekran görüntüsü 2026-06-01 143412" src="https://github.com/user-attachments/assets/84f90647-1def-427c-99f2-df80c8faea33" />
<img width="1281" height="883" alt="Ekran görüntüsü 2026-06-01 143257" src="https://github.com/user-attachments/assets/31cacfe4-aed6-4ca8-935a-768fd097ce1c" />
<img width="1226" height="891" alt="Ekran görüntüsü 2026-06-01 143428" src="https://github.com/user-attachments/assets/048a5cb6-0218-49e3-a949-f57114dbb5a6" />
<img width="1141" height="690" alt="Ekran görüntüsü 2026-06-01 140101" src="https://github.com/user-attachments/assets/66e852c0-2b63-4a61-91f2-a35cd2cdb5b1" />
