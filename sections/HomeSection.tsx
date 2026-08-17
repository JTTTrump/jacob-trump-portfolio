import { DecorativeAsset } from "../components/DecorativeAsset";
import { SectionShell } from "../components/SectionShell";

export function HomeSection() {
  return <SectionShell id="home" label="Home" className="page-section--home">
    <DecorativeAsset src="sun-branch-top-right.webp" className="decor--sun-branch" />
    <DecorativeAsset src="mountain-lacquer-bottom-left.webp" className="decor--mountains" />
    <div className="hero-title"><h1>DESIGNING<br/>FOR IMPACT</h1></div>
    <button className="scroll-cue" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} aria-label="Scroll to about">↓</button>
  </SectionShell>;
}
