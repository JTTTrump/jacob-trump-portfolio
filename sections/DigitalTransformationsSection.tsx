import { SectionShell } from "../components/SectionShell";

const projects = Array.from({ length: 6 }, (_, i) => ({
  title: `Project ${i + 1}`,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat, augue sed bibendum cursus, nisl orci porta lorem.",
}));

export function DigitalTransformationsSection() {
  return <SectionShell id="digital" label="Digital Transformations" className="page-section--light grid-section bg-digital">
    <div className="section-content section-heading-wrap">
      <span className="mini-divider" />
      <h2>Digital Transformations</h2>
      <p className="section-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat, justo quis interdum volutpat, sem sem laoreet nisi, vel gravida nisl massa vitae nulla.</p>
    </div>
    <div className="section-content project-grid">
      {projects.map((p) => <article className="project-card" key={p.title}>
        <div className="project-media" aria-hidden="true" />
        <h3>{p.title}</h3>
        <p>{p.text}</p>
      </article>)}
    </div>
  </SectionShell>;
}
