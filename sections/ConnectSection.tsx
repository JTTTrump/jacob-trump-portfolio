import { SectionShell } from "../components/SectionShell";

const topRow = ["Email", "LinkedIn", "Instagram", "Resume", "Calendly"];
const bottomRow = ["Cloud", "Strategy", "Systems", "Branding", "Projects"];

export function ConnectSection() {
  return <SectionShell id="connect" label="Connect" className="page-section--light connect-section bg-connect">
    <div className="section-content section-heading-wrap">
      <span className="mini-divider" />
      <h2>Connect</h2>
      <p className="section-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non ligula ut mauris bibendum gravida.</p>
    </div>
    <div className="section-content connect-grid">
      <div className="connect-row">
        {topRow.map((label) => <article className="connect-item" key={label}>
          <span className="shape shape-octagon" aria-hidden="true" />
          <h3>{label}</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </article>)}
      </div>
      <div className="connect-row">
        {bottomRow.map((label) => <article className="connect-item" key={label}>
          <span className="shape shape-circle" aria-hidden="true" />
          <h3>{label}</h3>
          <p>Vestibulum feugiat ex ut erat luctus.</p>
        </article>)}
      </div>
    </div>
  </SectionShell>;
}
