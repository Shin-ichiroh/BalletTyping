import type { Metadata } from "next";
import { Cinzel_Decorative, Playfair_Display, Alex_Brush } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const alexBrush = Alex_Brush({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
});

export const metadata: Metadata = {
  title: "バレエ打 - The Classical Theater -",
  description: "クラシックバレエの演目や用語をタイピングして鑑賞満足度を高めるタイピング測定ゲームです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${cinzel.variable} ${playfair.variable} ${alexBrush.variable}`}>
      <body>{children}</body>
    </html>
  );
}

