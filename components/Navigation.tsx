import { InstagramIcon, LinkedInIcon, MailIcon } from "./Icons";
import { sections } from "../app/page";
import { useState } from "react";

export function Navigation({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = useState(false);
  const goTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  return (
    <aside className={`navigation ${activeSection === "home" ? "navigation--dark" : "navigation--light"}`}>
      <div className="nav-brand">
        <button className="nav-monogram" onClick={() => goTo("home")} aria-label="Go to home"><img alt="" src="/assets/jt-monogram.webp" /></button>
        <div className="nav-name">Jacob Trump</div>
        <div className="nav-role">Solutions Architect · Marketing Strategy</div>
      </div>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><i /><i /></button>
      <nav className={open ? "nav-list is-open" : "nav-list"} aria-label="Portfolio sections">
        {sections.map((section) => <button key={section.id} className={activeSection === section.id ? "active" : ""} onClick={() => goTo(section.id)}><span>{section.label.split("\n").map((line, i) => <span key={line}>{line}{i === 0 && section.label.includes("\n") && <br/>}</span>)}</span></button>)}
      </nav>
      <div className="social-links">
        <a href="https://www.linkedin.com" aria-label="LinkedIn"><LinkedInIcon /></a>
        <a href="mailto:hello@example.com" aria-label="Email"><MailIcon /></a>
        <a href="https://www.instagram.com" aria-label="Instagram"><InstagramIcon /></a>
      </div>
    </aside>
  );
}
