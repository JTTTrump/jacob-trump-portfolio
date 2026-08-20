import { SectionShell } from "../components/SectionShell";

const entries = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Vestibulum feugiat ex ut erat luctus, quis luctus nisl vehicula.",
  "Mauris eleifend erat ut nulla volutpat, vel consequat neque luctus.",
  "Integer ut sapien non lectus facilisis luctus nec ac lectus.",
];

export function SocialsSection() {
  return <SectionShell id="socials" label="Socials" className="page-section--light socials-section bg-socials">
    <div className="section-content section-heading-wrap">
      <span className="mini-divider" />
      <h2>Socials</h2>
      <p className="section-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis mauris quis magna volutpat pharetra.</p>
    </div>
    <div className="section-content timeline">
      {entries.map((text, i) => <div className="timeline-item" key={text}>
        <span className="timeline-marker" />
        <div className="timeline-content">
          <h3>Entry {i + 1}</h3>
          <p>{text}</p>
        </div>
      </div>)}
    </div>
  </SectionShell>;
}
