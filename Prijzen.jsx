/* Prijzen page — two plan cards (Flow highlighted, Flow+Pulse coming soon),
   G2 rating, four-week onboarding timeline, and an FAQ accordion. */
function PlanCard({ p, m }) {
  const soon = p.comingSoon;
  return (
    <div data-reveal style={{
      position: 'relative', display: 'flex', flexDirection: 'column',
      background: '#fff', borderRadius: 24, padding: m ? '32px 24px' : 36,
      border: soon ? '1.5px dashed var(--border-strong)' : '2px solid var(--mint)',
      boxShadow: soon ? 'none' : 'var(--shadow-card)',
    }}>
      {p.highlighted && (
        <div style={{ position: 'absolute', top: -13, left: 32, background: 'var(--mint)', color: '#fff',
          fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 999 }}>Meest gekozen</div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: soon ? 'var(--fg3)' : 'var(--mint-deep)' }}>{p.productLabel}</span>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', padding: '4px 9px', borderRadius: 999,
          background: soon ? '#F3F4F6' : 'var(--mint-tint)', color: soon ? 'var(--fg3)' : 'var(--mint-deep)' }}>{p.status}</span>
      </div>
      <h3 style={{ fontSize: 30, color: soon ? 'var(--fg3)' : 'var(--fg1)' }}>{p.name}</h3>
      <div style={{ marginTop: 16, display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span style={{ fontSize: soon ? 30 : 48, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1, color: soon ? 'var(--fg3)' : 'var(--fg1)' }}>{p.price}</span>
        {p.period && <span style={{ fontSize: 18, color: 'var(--fg3)' }}>{p.period}</span>}
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg3)', marginTop: 16 }}>{p.disclaimer}</p>
      {p.yearly && <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg3)', marginTop: 8 }}>{p.yearly}</p>}
      <button className={'btn ' + (soon ? 'btn-outline' : 'btn-primary')} style={{ marginTop: 22, justifyContent: 'center', width: '100%' }}>
        {p.cta}<i data-lucide={p.ctaIcon}></i>
      </button>
      <ul style={{ listStyle: 'none', margin: '28px 0 0', padding: '24px 0 0', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {p.features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.5, color: soon ? 'var(--fg3)' : 'var(--fg2)' }}>
            <i data-lucide="check" style={{ width: 18, height: 18, color: soon ? 'var(--border-strong)' : 'var(--mint)', flexShrink: 0, marginTop: 2 }}></i>{f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <details style={{ borderBottom: '1px solid var(--border)' }}>
      <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '22px 0', cursor: 'pointer', listStyle: 'none' }}>
        <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg1)' }}>{q}</span>
        <i data-lucide="chevron-down" className="faq-chev" style={{ width: 20, height: 20, color: 'var(--mint-deep)', flexShrink: 0 }}></i>
      </summary>
      <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--fg3)', padding: '0 0 22px' }}>{a}</p>
    </details>
  );
}

function Prijzen() {
  useReveal();
  useLucide();
  const m = useIsMobile();
  const D = GOP.prijzen;
  return (
    <React.Fragment>
      <PageHero eyebrow={D.hero.eyebrow} title={D.hero.title} />

      {/* Plans */}
      <section className="section section-soft" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: 1000 }}>
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '520px', justifyContent: 'center', gap: 24, alignItems: 'start' }}>
            {D.plans.map((p, i) => <PlanCard key={i} p={p} m={m} />)}
          </div>
          <div data-reveal style={{ textAlign: 'center', marginTop: 44 }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, color: 'var(--amber)' }}>
              {Array.from({ length: 5 }).map((_, i) => <i key={i} data-lucide="star" style={{ width: 20, height: 20, fill: 'currentColor' }}></i>)}
            </div>
            <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--fg2)', marginTop: 12 }}>{D.rating}</p>
          </div>
        </div>
      </section>

      {/* ROI — terugverdienen */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Wat het oplevert" title="€450 per maand verdien je zo terug." sub="Geen kostenpost, maar een investering die zichzelf betaalt. Op drie manieren tegelijk." max={640} />
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: 24, marginTop: 52 }} data-reveal-stagger>
            {[
              { icon: 'heart', title: 'Leden blijven langer', body: 'Eén lid dat een maand langer blijft, verdient al een groot deel van je abonnement terug. GymOps houdt leden betrokken en niemand valt stil uit beeld.' },
              { icon: 'trending-up', title: 'Meer leads worden lid', body: 'Snellere, consistente opvolging levert meer proeflessen en inschrijvingen op. Een paar extra leden per maand dekt de kosten ruim.' },
              { icon: 'clock', title: 'Je team werkt efficiënter', body: 'Minder handwerk en losse appjes. De uren die je terugkrijgt steek je in coaching, niet in administratie.' },
            ].map((c, i) => (
              <div key={i} className="card" style={{ padding: 30, display: 'flex', flexDirection: 'column' }}>
                <div className="icon-chip" style={{ width: 52, height: 52, borderRadius: 15, marginBottom: 22 }}><i data-lucide={c.icon} style={{ width: 23, height: 23, color: 'var(--mint-deep)' }}></i></div>
                <h4 style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)', marginBottom: 12 }}>{c.title}</h4>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--fg3)' }}>{c.body}</p>
              </div>
            ))}
          </div>
          <div data-reveal style={{ marginTop: 32, textAlign: 'center', background: 'var(--mint-tint)', border: '1px solid var(--border)', borderRadius: 18, padding: m ? '24px 22px' : '30px 32px' }}>
            <p style={{ fontSize: m ? 17 : 21, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--ink)' }}>De meeste gyms verdienen GymOps al terug met <span style={{ color: 'var(--mint-deep)' }}>1 à 2 extra leden</span> per maand.</p>
          </div>
        </div>
      </section>

      {/* Onboarding timeline */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow={D.onboarding.eyebrow} title={D.onboarding.title} sub={D.onboarding.sub} max={620} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-soft">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2 style={{ textAlign: 'center' }} data-reveal>{D.faqTitle}</h2>
          <div style={{ marginTop: 44, borderTop: '1px solid var(--border)' }} data-reveal>
            {D.faqs.map((f, i) => <Faq key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
window.Prijzen = Prijzen;
