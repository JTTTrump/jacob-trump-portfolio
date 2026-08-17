import type { Metadata } from "next";
import { Bodoni_Moda, Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const display = Bodoni_Moda({ subsets: ["latin"], weight: ["500"], display: "swap", variable: "--font-display" });
const brand = Cinzel({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-brand" });
const nav = Montserrat({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-nav" });

export const metadata: Metadata = {
  title: "Jacob Trump — Designing for Impact",
  description: "The portfolio of Jacob Trump.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${brand.variable} ${nav.variable}`}>
      <body>{children}</body>
    </html>
  );
}
