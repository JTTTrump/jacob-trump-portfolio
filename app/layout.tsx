import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacob Trump — Designing for Impact",
  description: "The portfolio of Jacob Trump.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
