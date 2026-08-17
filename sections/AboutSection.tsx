import { DecorativeAsset } from "../components/DecorativeAsset";
import { LineIcon } from "../components/Icons";
import { SectionShell } from "../components/SectionShell";

const items = ["athletics", "technology", "strategy", "community"] as const;
export function AboutSection() {
  return <SectionShell id="about" label="About" className="page-section--light about-section">
    <DecorativeAsset src="gold-branch-top-right.webp" className="decor--gold-branch" />
    <div className="section-content about-upper"><div className="portrait-placeholder" aria-label="Portrait placeholder"/><div className="about-copy" aria-hidden="true"><i/><i/><i/><i/></div></div>
    <div className="section-content feature-row">{items.map((item) => <article className="feature" key={item}><LineIcon kind={item}/><div className="placeholder-heading"/><div className="placeholder-lines"><i/><i/><i/></div></article>)}</div>
  </SectionShell>;
}
