/* Integrations — primary partners highlighted, secondary logo grid,
   and the Leadcapture → Proefles → Welkomstflow → Reviews flow strip. */
function Integrations() {
  useLucide();
  const m = useIsMobile();
  const I = GO.integrations;
  return (
    <section className="section" style={{ padding: '50px 0 104px' }}>
      <div className="wrap" style={{ textAlign: 'center', marginBottom: 52 }}>
        <div className="eyebrow" data-reveal style={{ marginBottom: 16 }}>{I.eyebrow}</div>
        <h2 data-reveal style={{ fontSize: 'clamp(28px,3.4vw,44px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--ink)', maxWidth: 720, margin: '0 auto' }}>{I.title}</h2>
      </div>

      {/* primary partners */}
      <div className="wrap" data-reveal-stagger style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 14 : 20, maxWidth: 760, marginBottom: 22 }}>
        {I.primary.map((p, i) => (
          <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 20, transitionDelay: (i * 0.08) + 's' }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: '#fff', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 9, flexShrink: 0 }}>
              <img src={GO.A + p.src} alt={p.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)' }}>{p.name}</div>
              <div style={{ fontSize: 13.5, color: 'var(--fg3)', marginTop: 2 }}>{p.desc}</div>
            </div>
            <div style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 700, color: 'var(--mint-deep)', background: 'var(--mint-tint)', padding: '5px 11px', borderRadius: 999 }}>Primair</div>
          </div>
        ))}
      </div>

      {/* secondary grid */}
      <div className="wrap" data-reveal style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, maxWidth: 760 }}>
        {I.secondary.map((s, i) => (
          <div key={i} title={s.name} style={{ width: 60, height: 60, borderRadius: 14, background: '#fff', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 11 }}>
            <img src={GO.A + s.src} alt={s.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </section>
  );
}
window.Integrations = Integrations;
