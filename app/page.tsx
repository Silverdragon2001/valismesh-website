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

const businessOperations = [
  ['Operations', 'Coordinate recurring workflows, monitor work in progress, surface exceptions, and help keep operational tasks moving.'],
  ['Administrative work', 'Gather information, prepare reports, organize recurring processes, and route work that requires attention.'],
  ['Customer operations', 'Support defined customer workflows, gather relevant context, prepare work for review, and escalate decisions that require a person.'],
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
        <div><h2>An operational layer for coordinated AI work.</h2><p>ValisMesh connects business needs to governed missions, coordinates specialized AI workers, and keeps people in control of consequential decisions.</p></div>
      </section>

      <section className="section process-section" id="how">
        <div className="section-heading"><p className="section-label">How it works</p><h2>From business need to governed result.</h2><p>The platform is designed to give operational work structure, continuity, and visible control from beginning to end.</p></div>
        <div className="mission-pipeline" aria-label="ValisMesh governed mission workflow">
          <article className="pipeline-stage pipeline-stage-compact">
            <span>{process[0][0]}</span><div><small>Input</small><h3>{process[0][1]}</h3><p>{process[0][2]}</p></div>
          </article>
          <div className="pipeline-connector" aria-hidden="true"><span /></div>
          <article className="pipeline-stage pipeline-stage-compact">
            <span>{process[1][0]}</span><div><small>Mission</small><h3>{process[1][1]}</h3><p>{process[1][2]}</p></div>
          </article>
          <div className="pipeline-connector pipeline-connector-split" aria-hidden="true"><span /></div>
          <article className="pipeline-stage pipeline-orchestration">
            <span>{process[2][0]}</span>
            <div className="pipeline-stage-copy"><small>AI workforce</small><h3>{process[2][1]}</h3><p>{process[2][2]}</p></div>
            <div className="pipeline-workers" aria-label="Coordinated example workers"><div><small>Worker 01</small><strong>Operations</strong></div><div><small>Worker 02</small><strong>Finance</strong></div><div><small>Worker 03</small><strong>Support</strong></div></div>
          </article>
          <div className="pipeline-connector" aria-hidden="true"><span /></div>
          <article className="pipeline-stage pipeline-governance">
            <span>{process[3][0]}</span>
            <div className="pipeline-stage-copy"><small>Control checkpoint</small><h3>{process[3][1]}</h3><p>{process[3][2]}</p></div>
            <div className="checkpoint-indicators" aria-label="Governance controls"><span>Permissions</span><span>Human approval</span><span>Auditability</span></div>
          </article>
          <div className="pipeline-connector" aria-hidden="true"><span /></div>
          <article className="pipeline-stage pipeline-stage-compact pipeline-result">
            <span>{process[4][0]}</span><div><small>Outcome</small><h3>{process[4][1]}</h3><p>{process[4][2]}</p></div>
          </article>
        </div>
      </section>

      <section className="section workforce" id="workforce">
        <div className="workforce-copy"><p className="section-label">AI workforce</p><h2>Specialized workers. Coordinated as a team.</h2><p>Instead of relying on one general-purpose assistant, ValisMesh centers on specialized AI workers that can take on distinct roles, share mission context, and collaborate toward a defined operational outcome.</p><p>Capabilities will be verified as development progresses. The goal is practical support for recurring business operations—not novelty automation.</p></div>
        <div className="workforce-diagram" aria-label="Illustrative mission coordinated by Atlas across specialized AI workers"><div className="mission-node"><small>Mission</small><strong>Defined outcome</strong></div><div className="atlas-node"><small>Atlas</small><strong>Mission coordination</strong></div><div className="worker-row"><div><small>Worker 01</small><strong>Operations Worker</strong><p>Process coordination</p></div><div><small>Worker 02</small><strong>Finance Worker</strong><p>Financial operations</p></div><div><small>Worker 03</small><strong>Support Worker</strong><p>Customer operations</p></div></div><div className="oversight-bar"><span>Governance layer</span><span>Human oversight</span></div></div>
      </section>

      <section className="section operations-section">
        <div className="section-heading"><p className="section-label">Built for real operations</p><h2>AI workers for the work businesses already do.</h2><p>ValisMesh is being designed to support practical operational workflows by coordinating specialized AI workers within defined permissions, human oversight, and business rules.</p></div>
        <div className="governance-grid operations-grid">{businessOperations.map(([title,text],i) => <article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className="operations-note">These are examples of the kinds of operational workflows ValisMesh is being designed to support. ValisMesh connects specialized roles into governed AI teams rather than relying on one general-purpose assistant.</p>
      </section>

      <section className="section governance" id="governance">
        <div className="section-heading"><p className="section-label">Governance by design</p><h2>Useful autonomy requires clear control.</h2><p>ValisMesh follows the principle that operational AI should be understandable, bounded, and accountable to the people and businesses it serves.</p></div>
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
