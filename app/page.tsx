"use client";

import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import { AboutSection } from "../sections/AboutSection";
import { BrandingStrategySection } from "../sections/BrandingStrategySection";
import { ConnectSection } from "../sections/ConnectSection";
import { DigitalTransformationsSection } from "../sections/DigitalTransformationsSection";
import { HomeSection } from "../sections/HomeSection";
import { SocialsSection } from "../sections/SocialsSection";

export const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "digital", label: "Digital\nTransformations" },
  { id: "marketing", label: "Marketing &\nBranding Strategy" },
  { id: "socials", label: "Socials" },
  { id: "connect", label: "Connect" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -25% 0px", threshold: [0.1, 0.35, 0.6] },
    );
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Navigation activeSection={activeSection} />
      <div className="panel-stack">
        <HomeSection />
        <AboutSection />
        <DigitalTransformationsSection />
        <BrandingStrategySection />
        <SocialsSection />
        <ConnectSection />
      </div>
    </main>
  );
}
