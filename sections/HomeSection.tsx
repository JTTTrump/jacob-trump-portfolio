import { SectionShell } from "../components/SectionShell";

export function HomeSection() {
  return <SectionShell id="home" label="Home" className="page-section--home">
    <div className="hero-title"><h1>DESIGNING<br/>FOR IMPACT</h1></div>
    <button className="scroll-cue" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} aria-label="Scroll to about">↓</button>
  </SectionShell>;
}
