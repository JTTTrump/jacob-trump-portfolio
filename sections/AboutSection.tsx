import { LineIcon } from "../components/Icons";
import { SectionShell } from "../components/SectionShell";

const features = [
  { kind: "athletics", title: "Athletics", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { kind: "technology", title: "Technology", text: "Vestibulum feugiat ex ut erat luctus, quis luctus nisl." },
  { kind: "strategy", title: "Strategy", text: "Curabitur non magna ac justo consequat posuere vel nec." },
  { kind: "community", title: "Community", text: "Donec id nibh eget libero aliquam tincidunt non ac augue." },
] as const;

export function AboutSection() {
  return <SectionShell id="about" label="About" className="page-section--light about-section bg-about">
    <div className="section-content about-top">
      <div className="about-circle" aria-label="Portrait placeholder" />
      <div className="about-copy">
        <span className="mini-divider" />
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu odio eget augue varius tincidunt. Integer posuere, mauris a fermentum pretium, erat erat tristique turpis, vitae ultrices sem urna vel lorem.</p>
        <p>Aliquam erat volutpat. Nam sit amet risus vel justo viverra rhoncus. Curabitur auctor, erat at feugiat tristique, augue nunc laoreet urna, ut ultrices sapien metus id nibh.</p>
      </div>
    </div>
    <div className="section-content about-grid">
      {features.map((f) => <article className="icon-card" key={f.kind}>
        <LineIcon kind={f.kind} />
        <h3>{f.title}</h3>
        <p>{f.text}</p>
      </article>)}
    </div>
  </SectionShell>;
}
