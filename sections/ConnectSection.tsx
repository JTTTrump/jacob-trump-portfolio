import { DecorativeAsset } from "../components/DecorativeAsset";
import { SectionShell } from "../components/SectionShell";

export function ConnectSection() {
  return <SectionShell id="connect" label="Connect" className="page-section--light connect-section">
    <DecorativeAsset src="small-corner-bottom-right.webp" className="decor--small-corner"/>
    <div className="section-content connect-grid">{Array.from({length:10}, (_, i) => <article className="connect-item" key={i}><div className={i < 5 ? "badge-shape" : "circle-shape"}/><div className="micro-lines"><i/><i/></div></article>)}</div>
  </SectionShell>;
}
