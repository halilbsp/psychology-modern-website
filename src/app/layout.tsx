import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import IntroLoader from "@/components/animations/IntroLoader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SmoothScroll from "@/components/animations/SmoothScroll"; // 🧈 YENİ: Yağ gibi kaydırma motoru

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Luminous Precision Psychology | Kütahya | Zihinsel İyi Oluş",
  description: "Dr. Ayşe Yılmaz ile lüks ve teknolojik zihinsel esenlik deneyimi. Kütahya'nın öncü psikoloji kliniği.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      {/* CSS'teki scroll-smooth'u kaldırdık çakışmasın diye ✅ */}
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {/* Tüm siteyi lüks akışkan kaydırma motoruyla sarmaladık */}
        <SmoothScroll>
          <IntroLoader />
          <ScrollProgress />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
