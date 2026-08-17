import { DecorativeAsset } from "../components/DecorativeAsset";
import { SectionShell } from "../components/SectionShell";

const icons = ["⚙", "⌘", "⌁", "◎"];
export function BrandingStrategySection() {
  return <SectionShell id="marketing" label="Marketing and Branding Strategy" className="page-section--light strategy-section">
    <DecorativeAsset src="gold-branch-top-right.webp" className="decor--gold-branch"/><DecorativeAsset src="lacquer-sweep-bottom-left.webp" className="decor--lacquer-sweep"/>
    <div className="section-content strategy-grid">{icons.map((icon, i) => <article className="strategy-card" key={i}><span className="strategy-icon" aria-hidden="true">{icon}</span><span className="gold-rule"/><div className="placeholder-heading"/><div className="placeholder-lines"><i/><i/><i/><i/></div></article>)}</div>
  </SectionShell>;
}
