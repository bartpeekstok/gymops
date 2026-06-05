/* Pricing — single GymOps Flow plan, dark card, mint CTA. */
function Pricing() {
  useLucide();
  const m = useIsMobile();
  const P = GO.pricing;
  return (
    <section className="section">
      <div className="wrap" style={{ textAlign: 'center', marginBottom: 50 }}>
        <div className="eyebrow" data-reveal style={{ marginBottom: 16 }}>{P.eyebrow}</div>
        <h2 data-reveal style={{ fontSize: 'clamp(28px,3.4vw,44px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--ink)' }}>{P.title}</h2>
      </div>

      <div className="wrap" style={{ maxWidth: 760 }}>
        <div data-reveal className="card" style={{ background: 'var(--ink)', borderColor: 'var(--ink)', borderRadius: 26, padding: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1.1fr' }}>
          {/* left: price */}
          <div style={{ padding: m ? '32px 26px' : '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: m ? 'none' : '1px solid rgba(255,255,255,.1)', borderBottom: m ? '1px solid rgba(255,255,255,.1)' : 'none' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 700, color: 'var(--mint-light)', background: 'rgba(52,211,153,.14)', padding: '6px 13px', borderRadius: 999 }}>
                <i data-lucide="circle-check-big" style={{ width: 14, height: 14 }}></i> Beschikbaar
              </div>
              <div style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginTop: 22, letterSpacing: '-.02em' }}>GymOps Flow</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 18 }}>
                <span style={{ fontSize: 52, fontWeight: 800, color: '#fff', letterSpacing: '-.03em' }}>{P.price}</span>
                <span style={{ fontSize: 15, color: 'rgba(255,255,255,.6)' }}>{P.period}</span>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,.6)', marginTop: 16 }}>{P.disclaimer}</p>
            </div>
            <button className="btn btn-primary" style={{ marginTop: 28, width: '100%', justifyContent: 'center' }}>{P.cta}<i data-lucide="arrow-right"></i></button>
          </div>
          {/* right: features */}
          <div style={{ padding: m ? '32px 26px' : '40px 36px', background: 'var(--surface-dark-2)' }}>
            <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 20 }}>Inbegrepen</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {P.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 11 }}>
                  <i data-lucide="check" style={{ width: 17, height: 17, color: 'var(--mint-light)', flexShrink: 0, marginTop: 2 }}></i>
                  <span style={{ fontSize: 14.5, color: 'rgba(255,255,255,.85)', lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
