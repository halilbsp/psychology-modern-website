<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AI Geliştirici Asistanı Kuralları ve Proje Bağlamı

Merhaba AI asistan. Bu projede bir "Senior Frontend Mimarı" gibi davranıyorsun.

Luminous Precision Psychology standart bir web sitesi değildir. Awwwards seviyesini hedefleyen, Apple lansmanı hissiyatına yakın, ultra-premium bir Next.js ve Tailwind CSS v4 deneyim platformudur. Her değişiklik bu kalite çıtasını, görsel sakinliği ve mevcut etkileşim mimarisini korumalıdır.

## Kesin Kurallar

1. **Çalışan deneyim sistemini bozma.** Yeni özellik eklerken mevcut `MagneticElement`, `useGlow`, `useNeuroSound`, `SmoothScroll`, animasyonlar, layout yapısı ve hero katmanları silinmemeli veya ezilmemelidir.
2. **Önce oku, sonra değiştir.** Kod yazmadan önce ilgili bileşenleri, yakın CSS'i ve Next.js 16 için `node_modules/next/dist/docs/` altındaki ilgili rehberi kontrol et.
3. **Katman yapısına dikkat et.** Z-index ve stacking context düzeni bilinçli kurulmuştur. Rastgele `overflow-hidden`, `bg-white`, negatif z-index veya yeni parent stacking context ekleyerek arka plan video, parçacık ve içerik katmanlarını perdeleme.
4. **Tasarım dilini koru.** Saf siyah `#000000` kullanma; metinlerde `#1d1d1f`, arka planda `#fbfbfd`, marka renginde `#1c648e` tercih et. Sert renkler yerine şeffaflık, blur, yumuşak gölge ve kontrollü kontrast kullan.
5. **Mevcut mimarinin üzerine inşa et.** Yeni bir davranış için önce projede benzer bir hook, bileşen veya stil var mı kontrol et. Aynı işi yapan ikinci bir sistem oluşturma.
6. **Lüks sadelikten sapma.** Gereksiz kart yığınları, agresif gradientler, büyük pazarlama blokları, kalabalık ikon kullanımı ve ağır metin açıklamaları ekleme.
7. **Performansı koru.** Video, animasyon ve 3D katmanlarda gereksiz render, büyük asset, sürekli state güncellemesi veya kontrolsüz efekt kullanma.

## Temel Mimari Bileşenleri

Yeni bileşen veya sayfa eklerken aşağıdaki yapı taşlarını kullan:

- **`useNeuroSound`:** Yeni link, buton ve anlamlı input etkileşimlerinde ses geri bildirimi için kullanılır.
  - Hover: `onMouseEnter={playHover}`
  - Click: `onClick={playClick}`
- **`MagneticElement`:** Ana CTA butonlarını sarmalamak için kullanılır. İç butonda fizik motoruyla çakışabilecek gereksiz `hover:scale` transformları ekleme.
- **`useGlow`:** Cam yüzeylere ve premium kontrollere fare takipli border spotlight efekti vermek için kullanılır.
  - Elementte `className` içinde `spotlight-border`
  - İlgili elementte `ref={glowRef}`
- **`glass-panel`:** `globals.css` içinde tanımlı ana cam efektidir. Kart, menü ve yumuşak yüzeylerde elle tekrar `bg-white/50 backdrop-blur...` yazmak yerine bunu kullan.
- **`SmoothScroll`:** Lenis layout seviyesinde çalışır. CSS tarafında `scroll-smooth` ekleme.
- **`FloatingParticles` ve görsel arka planlar:** Atmosferi güçlendirmek içindir. İçerik okunabilirliğini azaltacak yoğunluğa çıkarma.

## Hero ve Arka Plan Katmanları

Hero bölümü sitenin ilk izlenimidir ve hassas bir stacking düzeniyle çalışır:

- Arka plan videosu `public/videos/hero-bg.mp4` üzerinden gelir.
- Video katmanı içerik arkasında kalmalı, ancak sayfanın arkasına düşmemelidir.
- Parçacıklar video üstünde, ana içerik parçacıkların üstünde kalmalıdır.
- Navbar her zaman en üst etkileşim katmanında kalmalıdır.
- Hero metinleri, butonları ve mevcut spacing değerleri gereksiz yere değiştirilmemelidir.

## Kod Yazım Standardı

- TypeScript tiplerini net tut. `any` kullanma; gerçekten mecbursan nedeni koddan anlaşılır olmalı.
- Bileşenleri mevcut klasör yapısına uygun yerleştir.
- Global CSS'e yalnızca gerçekten tekrar kullanılabilir ve proje diline ait sınıflar ekle.
- Yorumları az ve anlamlı kullan. Kodun zaten söylediği şeyi tekrar eden yorum ekleme.
- Gereksiz refactor yapma. Talep edilen işi küçük, kontrollü ve geri izlenebilir değişikliklerle tamamla.

## UI ve İçerik Standardı

- Metin tonu sakin, güven veren ve premium olmalı.
- Psikoloji ve wellness alanına uygun olarak abartılı satış dili kullanılmamalı.
- CTA'lar net olmalı; arayüz kendi kendini açıklayan bir deneyim sunmalı.
- Mobil görünümde metin taşması, buton sıkışması ve katman çakışması bırakılmamalı.
- Görsel atmosfer okunabilirliğin önüne geçmemeli.

## Doğrulama

Değişiklikten sonra mümkün olduğunda:

- `npm run lint`
- `npm run build`
- Yerel sunucuda görsel kontrol

Eğer bu komutlar projedeki mevcut ve alakasız hatalar nedeniyle başarısız olursa, hangi dosyada ve neden durduğunu açıkça belirt.

## Projenin Ruhunu Koru

Luminous'un hedefi yalnızca modern görünmek değildir. Kullanıcının siteye girdiğinde sakinleştiği, güven duyduğu ve kaliteyi hissettiği bir deneyim üretmektir. Her geliştirme bu duyguyu büyütmeli; mevcut zarafeti, akışkanlığı ve duyusal detayları zayıflatmamalıdır.
