const process = [
  ['01', 'Business need', 'A practical operational objective begins the mission.'],
  ['02', 'Mission definition', 'The desired outcome, boundaries, and escalation points are defined.'],
  ['03', 'Orchestration', 'ValisMesh coordinates work across appropriate specialized AI workers.'],
  ['04', 'Governed execution', 'Permissions and human checkpoints shape how work proceeds.'],
  ['05', 'Business result', 'People retain visibility into the mission, decisions, and outcome.'],
];

const governance = [
  ['Defined permissions', 'Workers operate within explicitly assigned boundaries—not unrestricted access.'],
  ['Human oversight', 'People remain involved where review, approval, or judgment is appropriate.'],
  ['Auditability', 'Operational activity is designed to remain visible and reviewable.'],
  ['Controlled execution', 'Autonomy is bounded by the mission, available tools, and business policy.'],
  ['Escalation', 'Workers can surface uncertainty and route consequential decisions to people.'],
  ['Accountability', 'Clear ownership and operational context support responsible outcomes.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ValisMesh home"><img src="/brand/approved-valismesh-horizontal.png" alt="ValisMesh" /></a>
        <nav aria-label="Primary navigation">
          <a href="#what">What is ValisMesh</a><a href="#how">How it works</a><a href="#workforce">AI workforce</a><a href="#governance">Governance</a><a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="#contact">Contact us</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Built for governed execution</p>
          <h1>Governed AI workforces for real business operations.</h1>
          <p className="hero-text">ValisMesh is developing a platform for deploying specialized AI teams that can perform operational work within or alongside human teams—with permissions, oversight, and accountability built in.</p>
          <div className="hero-actions"><a className="button button-primary" href="#what">Learn about ValisMesh</a><a className="button button-secondary" href="mailto:contact@valismesh.com">Contact ValisMesh</a></div>
          <p className="development-note"><span /> Currently under active development and preparing toward future pilot deployments.</p>
        </div>
        <div className="hero-visual" aria-label="ValisMesh logo"><div className="visual-grid" /><img src="/brand/approved-valismesh-v.png" alt="" /><div className="visual-caption"><span>Specialized workers</span><span>Governed collaboration</span><span>Human oversight</span></div></div>
      </section>

      <section className="intro section" id="what">
        <p className="section-label">Not simply a chatbot</p>
        <div><h2>An operational layer for coordinated AI work.</h2><p>ValisMesh is being designed to turn business needs into governed missions, coordinate specialized AI workers, and keep people in control of consequential decisions.</p></div>
      </section>

      <section className="section process-section" id="how">
        <div className="section-heading"><p className="section-label">How it works</p><h2>From business need to governed result.</h2><p>The platform is designed to give operational work structure, continuity, and visible control from beginning to end.</p></div>
        <div className="process-list">{process.map(([n,title,text]) => <article className="process-card" key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="section workforce" id="workforce">
        <div className="workforce-copy"><p className="section-label">AI workforce</p><h2>Specialized workers. Coordinated as a team.</h2><p>Instead of relying on one general-purpose assistant, ValisMesh is being designed around specialized AI workers that can take on distinct roles, share mission context, and collaborate toward a defined operational outcome.</p><p>Capabilities will be introduced and verified as development progresses. The goal is practical support for recurring business operations—not novelty automation.</p></div>
        <div className="workforce-diagram" aria-label="A mission coordinated across specialized AI workers"><div className="mission-node"><small>Mission</small><strong>Defined outcome</strong></div><div className="worker-row"><div><small>Worker 01</small><strong>Specialized role</strong></div><div><small>Worker 02</small><strong>Specialized role</strong></div><div><small>Worker 03</small><strong>Specialized role</strong></div></div><div className="oversight-bar"><span>Governance layer</span><span>Human oversight</span></div></div>
      </section>

      <section className="section governance" id="governance">
        <div className="section-heading"><p className="section-label">Governance by design</p><h2>Useful autonomy requires clear control.</h2><p>ValisMesh is being built around the idea that operational AI should be understandable, bounded, and accountable to the people and businesses it serves.</p></div>
        <div className="governance-grid">{governance.map(([title,text],i) => <article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section business">
        <p className="section-label">Built for business</p>
        <div><h2>Practical operations for growing teams.</h2><p>ValisMesh is initially focused on the needs of small-to-midsized businesses—especially organizations in Statesboro, Savannah, and across the lower Southeast. The platform is intended to work alongside the business systems and human teams companies already rely on.</p><div className="region-tags"><span>Small & midsized businesses</span><span>Operational teams</span><span>Lower Southeast</span></div></div>
      </section>

      <section className="section about" id="about">
        <div className="about-mark"><img src="/brand/approved-valismesh-stacked.png" alt="" /></div>
        <div><p className="section-label">About ValisMesh LLC</p><h2>A Georgia technology company building a more governable way to deploy AI workforces.</h2><p>ValisMesh LLC is developing ValisMesh, a governed multi-agent AI workforce platform. The company is currently focused on product development and preparation toward future pilot deployments.</p></div>
      </section>

      <section className="contact section" id="contact"><p className="section-label">Start a conversation</p><h2>Interested in the future of governed AI operations?</h2><p>We welcome conversations with prospective pilot companies, business owners, and potential partners.</p><a className="email-link" href="mailto:contact@valismesh.com">contact@valismesh.com <span>↗</span></a></section>
      <footer><img src="/brand/approved-valismesh-full-lockup.png" alt="ValisMesh — AI workforce. Business execution. Governed." /><p>© 2026 ValisMesh LLC. All rights reserved.</p><p>Georgia, United States</p></footer>
    </main>
  );
}
