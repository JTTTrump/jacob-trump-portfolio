import { DecorativeAsset } from "../components/DecorativeAsset";
import { SectionShell } from "../components/SectionShell";

export function SocialsSection() {
  return <SectionShell id="socials" label="Socials" className="page-section--light socials-section">
    <DecorativeAsset src="small-corner-bottom-right.webp" className="decor--small-corner"/>
    <div className="section-content timeline">{Array.from({length:4}, (_, i) => <div className="timeline-item" key={i}><span className="timeline-dot"/><div className="timeline-content"><i/><i/></div></div>)}</div>
  </SectionShell>;
}
