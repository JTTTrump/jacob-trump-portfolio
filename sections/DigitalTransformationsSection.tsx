import { DecorativeAsset } from "../components/DecorativeAsset";
import { SectionShell } from "../components/SectionShell";

export function DigitalTransformationsSection() {
  return <SectionShell id="digital" label="Digital Transformations" className="page-section--light grid-section">
    <DecorativeAsset src="corner-lacquer-top-right.webp" className="decor--corner-top"/><DecorativeAsset src="corner-lacquer-bottom-right.webp" className="decor--corner-bottom"/>
    <div className="section-content project-grid">{Array.from({length: 6}, (_, i) => <article className="project-card" key={i}><div className="media-placeholder"/><div className="placeholder-heading"/><div className="placeholder-lines"><i/><i/></div></article>)}</div>
  </SectionShell>;
}
