import { SectionShell } from "../components/SectionShell";

const cards = [
  { icon: "✦", title: "Systems", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit risus vel lorem suscipit, vitae convallis sapien auctor." },
  { icon: "✦", title: "Development", text: "Vestibulum non nibh nec elit luctus luctus. Duis in nisi vel libero malesuada pellentesque a in sapien." },
  { icon: "✦", title: "Communication", text: "Curabitur non magna ac justo consequat posuere. Mauris et lorem non justo volutpat gravida vel nec ligula." },
  { icon: "✦", title: "Community", text: "Donec id nibh eget libero aliquam tincidunt. Quisque ac leo quis nisi mattis tincidunt non ac augue." },
];

export function BrandingStrategySection() {
  return <SectionShell id="marketing" label="Marketing and Branding Strategy" className="page-section--light strategy-section bg-strategy">
    <div className="section-content section-heading-wrap">
      <span className="mini-divider" />
      <h2>Marketing &amp; Branding Strategy</h2>
      <p className="section-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit, velit non lacinia tristique, tellus nibh tempus risus, quis vulputate lorem est sed justo.</p>
    </div>
    <div className="section-content strategy-grid">
      {cards.map((c) => <article className="strategy-card" key={c.title}>
        <span className="strategy-icon" aria-hidden="true">{c.icon}</span>
        <span className="gold-rule" />
        <h3>{c.title}</h3>
        <p>{c.text}</p>
      </article>)}
    </div>
  </SectionShell>;
}
