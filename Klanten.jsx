/* Klanten page — stat band, two featured founder/owner quotes, a testimonial
   wall, a short-quote marquee and the trusted-gym logo row. */
function Klanten() {
  useReveal();
  useLucide();
  const m = useIsMobile();
  const D = GOP.klanten;
  const shorts = D.shorts.concat(D.shorts);
  const logos = D.trusted.concat(D.trusted);
  return (
    <React.Fragment>
      <PageHero eyebrow={D.hero.eyebrow} title={D.hero.title} sub={D.hero.sub} />

      {/* Featured quotes */}
      <section className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: 24 }}>
          {D.featured.map((f, i) => (
            <div key={i} className="card" data-reveal style={{ padding: m ? 28 : 40, display: 'flex', flexDirection: 'column' }}>
              <i data-lucide="quote" style={{ width: 30, height: 30, color: 'var(--mint)' }}></i>
              <p style={{ fontSize: m ? 19 : 22, lineHeight: 1.5, fontWeight: 600, letterSpacing: '-.01em', color: 'var(--fg1)', marginTop: 18 }}>{f.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 26, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <img src={GO.A + f.photo} alt={f.name} style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--fg1)' }}>{f.name}</div>
                  <div style={{ fontSize: 14, color: 'var(--fg3)' }}>{f.role}</div>
                </div>
                <img src={GO.A + f.logo} alt="" style={{ height: 34, width: 'auto', opacity: .8 }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial wall */}
      <section className="section section-soft">
        <div className="wrap">
          <SectionHead eyebrow="Wat ze zeggen" title="Gym owners door heel Nederland." />
          <div style={{ columnCount: m ? 1 : 3, columnGap: 24, marginTop: 52 }} data-reveal>
            {D.wall.map((t, i) => (
              <div key={i} className="card" style={{ padding: 26, breakInside: 'avoid', marginBottom: 24 }}>
                {t.metric && <div style={{ display: 'inline-block', fontSize: 13, fontWeight: 700, color: 'var(--mint-deep)', background: 'var(--mint-tint)', padding: '4px 10px', borderRadius: 999, marginBottom: 14 }}>{t.metric}</div>}
                <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--fg2)' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginTop: 18 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--ink)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 700 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--fg1)' }}>{t.name}</div>
                    <div style={{ fontSize: 13, color: 'var(--fg3)' }}>{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short-quote marquee */}
      <section style={{ padding: m ? '40px 0' : '56px 0', overflow: 'hidden' }}>
        <div className="marquee">
          <div className="marquee-track" style={{ gap: 18 }}>
            {shorts.map((q, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', borderRadius: 999, border: '1px solid var(--border)', background: '#fff', fontSize: 15, fontWeight: 600, color: 'var(--fg2)', whiteSpace: 'nowrap', boxShadow: 'var(--shadow-sm)' }}>
                <i data-lucide="star" style={{ width: 15, height: 15, color: 'var(--amber)', fill: 'currentColor' }}></i>{q}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted logos */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="wrap">
          <p style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--fg3)', marginBottom: 30 }}>Vertrouwd door</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {logos.map((l, i) => (
              <div key={i} style={{ width: 150, height: 52, marginRight: 60, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={GO.A + l.src} alt={l.name} style={{ maxHeight: 46, maxWidth: 130, objectFit: 'contain', filter: 'grayscale(1)', opacity: .6 }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
window.Klanten = Klanten;
