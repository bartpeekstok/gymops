/* Closing CTA banner + footer. */
function CtaFooter() {
  useLucide();
  const m = useIsMobile();
  const C = GO.cta;
  const V1 = typeof window !== 'undefined' && window.__V1;
  const lnk = (h) => (V1 && h && h.indexOf('.html') > -1 && h.indexOf('-v1') === -1) ? h.replace('.html', '-v1.html') : h;
  return (
    <React.Fragment>
      {/* CTA banner */}
      <section style={{ background: '#fff', padding: '0 0 96px' }}>
        <div className="wrap">
          <div data-reveal style={{ position: 'relative', overflow: 'hidden', background: 'var(--ink)', borderRadius: 28, padding: m ? '48px 24px' : '72px 48px', textAlign: 'center' }}>
            <div style={{ position: 'absolute', bottom: -160, left: '50%', transform: 'translateX(-50%)', width: 640, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,.28), transparent 60%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
            <h2 style={{ position: 'relative', fontSize: 'clamp(30px,3.6vw,48px)', fontWeight: 800, letterSpacing: '-.03em', color: '#fff', maxWidth: 680, margin: '0 auto' }}>{C.title}</h2>
            <p style={{ position: 'relative', fontSize: 18, color: 'rgba(255,255,255,.7)', marginTop: 18, maxWidth: 520, margin: '18px auto 0' }}>{C.sub}</p>
            <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 34 }}>
              <button className="btn btn-primary">{C.primary}<i data-lucide="arrow-right"></i></button>
              {C.secondary && <button className="btn btn-outline-light">{C.secondary}</button>}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: 'var(--ink)', color: '#fff', padding: '64px 0 40px' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : '1.4fr 1fr 1fr 1fr', gap: m ? 30 : 40 }}>
          <div style={{ gridColumn: m ? '1 / -1' : 'auto' }}>
            <img src={GO.A + 'logo-wit.png'} alt="GymOps" style={{ height: 32, width: 'auto', marginBottom: 18 }} />
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.55)', maxWidth: 280 }}>Het CRM voor leadopvolging, ledenbehoud en team-aansturing. Gebouwd voor en door gym-owners.</p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,.4)', marginTop: 18 }}>Operationeel door Curly BV</p>
          </div>
          {[['Product', ['Leadopvolging', 'Ledenervaring', 'Integraties', 'Prijzen']], ['Bedrijf', ['Over ons', 'Klanten', 'Demo plannen', 'Contact']], ['Volg ons', ['Instagram', 'Facebook', 'LinkedIn']]].map(([h, items]) => (
            <div key={h}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 16 }}>{h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {items.map(it => <a key={it} href={lnk(({ 'Prijzen': 'prijzen.html', 'Over ons': 'over-ons.html', 'Klanten': 'klanten.html', 'Leadopvolging': 'leadopvolging.html', 'Ledenervaring': 'ledenervaring.html' })[it] || '#')} style={{ fontSize: 14.5, color: 'rgba(255,255,255,.75)' }}>{it}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.1)', display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'space-between', fontSize: 13, color: 'rgba(255,255,255,.4)' }}>
          <span>© 2026 GymOps · Curly BV</span>
          <span style={{ display: 'flex', gap: 22 }}><a href="#" style={{ color: 'inherit' }}>Privacy</a><a href="#" style={{ color: 'inherit' }}>Voorwaarden</a></span>
        </div>
      </footer>
    </React.Fragment>
  );
}
window.CtaFooter = CtaFooter;
