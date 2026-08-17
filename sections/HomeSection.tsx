import { SectionShell } from "../components/SectionShell";

export function HomeSection() {
  return <SectionShell id="home" label="Home" className="page-section--home">
    <div className="hero-copy">
      <p className="hero-eyebrow">Digital Transformations and Marketing Strategy</p>
      <span className="hero-eyebrow-rule" />
      <h1 className="hero-title">DESIGN<br/>WITH<br/>PURPOSE<span className="hero-title-accent">.</span></h1>
      <p className="hero-description">Building meaningful platforms and strategy at the intersection of industries, culture, and stories.</p>
      <a className="hero-work-link" href="#digital">View Work <span className="hero-work-arrow" aria-hidden="true">→</span></a>
    </div>
    <button className="scroll-cue" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} aria-label="Scroll to about">↓</button>
  </SectionShell>;
}
