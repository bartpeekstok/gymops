/* Hero — deep-black contrast block. Split-word headline, two CTAs,
   dashboard mockup floated right, trusted-by marquee at the base. */
function Hero() {
  useLucide();
  const m = useIsMobile();
  const h = GO.hero;
  return (
    <header style={{ position: 'relative', background: 'var(--ink)', color: '#fff', overflow: 'hidden', paddingTop: 74 }}>
      {/* faint mint radial glow */}
      <div style={{ position: 'absolute', top: -160, right: -120, width: 620, height: 620, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,.22), transparent 62%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '26px 26px', pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, #000, transparent 70%)', WebkitMaskImage: 'linear-gradient(to bottom, #000, transparent 70%)' }} />

      <div className="wrap" style={{ position: 'relative', paddingTop: m ? 44 : 92, paddingBottom: m ? 48 : 104, textAlign: 'center' }}>
        <div className="eyebrow eyebrow-dark" data-reveal style={{ marginBottom: m ? 16 : 22 }}>{h.eyebrow}</div>
        <SplitHeadline lines={h.headline} style={{ fontSize: 'clamp(36px, 8vw, 74px)', fontWeight: 800, letterSpacing: '-.035em', lineHeight: 1.03, color: '#fff', maxWidth: 940, margin: '0 auto' }} />
        <p data-reveal style={{ fontSize: m ? 17 : 20, lineHeight: 1.6, whiteSpace: 'pre-line', color: 'rgba(255,255,255,.72)', maxWidth: 600, margin: (m ? 20 : 28) + 'px auto 0', transitionDelay: '.15s' }}>{h.sub}</p>
        <div data-reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: m ? 28 : 38, justifyContent: 'center', transitionDelay: '.25s' }}>
          <button className="btn btn-primary">{h.primary}<i data-lucide="arrow-right"></i></button>
          {h.secondary && <button className="btn btn-outline-light">{h.secondary}</button>}
        </div>
      </div>

      {/* trusted-by marquee */}
      <div style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,.08)', padding: '26px 0 34px' }}>
        <div className="wrap"><p style={{ textAlign: 'center', fontSize: 12.5, fontWeight: 600, letterSpacing: '.04em', color: 'rgba(255,255,255,.45)', marginBottom: 22 }}>Vertrouwd door Nederlandse gyms</p></div>
        <div className="marquee">
          <div className="marquee-track">
            {[...GO.trusted, ...GO.trusted].map((l, i) => (
              <div key={i} className="mq-item"><img src={GO.A + l.src} alt={l.name} title={l.name} /></div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
window.Hero = Hero;
