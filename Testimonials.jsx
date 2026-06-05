/* Testimonials — masonry-style wall on a soft band. */
function Testimonials() {
  useLucide();
  const m = useIsMobile();
  const tab = useIsMobile(1080);
  return (
    <section className="section section-soft">
      <div className="wrap" style={{ textAlign: 'center', marginBottom: 50 }}>
        <div className="eyebrow" data-reveal style={{ marginBottom: 16 }}>Klanten</div>
        <h2 data-reveal style={{ fontSize: 'clamp(28px,3.4vw,44px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--ink)', maxWidth: 700, margin: '0 auto' }}>
          Gebouwd voor en door gym-owners. Hier is wat ze zeggen.
        </h2>
      </div>
      <div className="wrap" data-reveal-stagger style={{ columnCount: m ? 1 : (tab ? 2 : 3), columnGap: 20, maxWidth: 1080 }}>
        {GO.testimonials.map((t, i) => (
          <div key={i} className="card" style={{ breakInside: 'avoid', marginBottom: 20, padding: 24 }}>
            {t.metric && <div style={{ display: 'inline-block', fontSize: 13, fontWeight: 800, color: 'var(--mint-deep)', background: 'var(--mint-tint)', padding: '5px 12px', borderRadius: 999, marginBottom: 14 }}>{t.metric}</div>}
            <p style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 500, color: 'var(--fg1)', letterSpacing: '-.01em' }}>{t.quote}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginTop: 18 }}>
              <div style={{ width: 38, height: 38, borderRadius: 999, background: 'var(--ink)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13.5 }}>{t.initials}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{t.name}</div>
                <div style={{ fontSize: 13, color: 'var(--fg3)' }}>{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
