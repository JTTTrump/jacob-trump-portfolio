import type { Metadata } from "next";
import { Bodoni_Moda, Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({ subsets: ["latin"], weight: ["500"], display: "swap", variable: "--font-display" });
const brand = Cinzel({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-brand" });
const nav = Montserrat({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-nav" });

export const metadata: Metadata = {
  title: "Jacob Trump — Designing for Impact",
  description: "The portfolio of Jacob Trump.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${brand.variable} ${nav.variable}`}>
      <body>{children}</body>
    </html>
  );
}
