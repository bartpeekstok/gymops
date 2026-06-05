/* Over ons page — founder stories (checkerboard), values, and the
   "why gym owners choose GymOps" grid. */
function FounderRow({ f, flip, m }) {
  const photo = (
    <div style={{ flex: m ? 'none' : '0 0 340px' }}>
      <div data-reveal style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-card)', background: 'var(--bg-soft)' }}>
        <img src={GO.A + f.photo} alt={f.name} style={{ width: '100%', height: m ? 320 : 420, objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '40px 22px 18px', background: 'linear-gradient(to top, rgba(10,10,15,.85), transparent)' }}>
          <img src={GO.A + f.gym} alt="" style={{ height: 30, width: 'auto', filter: 'brightness(0) invert(1)', opacity: .9 }} />
        </div>
      </div>
    </div>
  );
  const text = (
    <div style={{ flex: 1 }}>
      <div data-reveal>
        <h3 style={{ fontSize: 28 }}>{f.name}</h3>
        <div className="eyebrow" style={{ marginTop: 8 }}>{f.role}</div>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {f.bio.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--fg2)' }}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
  return (
    <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: m ? 28 : 56, alignItems: 'flex-start' }}>
      {(!m && flip) ? <React.Fragment>{text}{photo}</React.Fragment> : <React.Fragment>{photo}{text}</React.Fragment>}
    </div>
  );
}

function OverOns() {
  useReveal();
  useLucide();
  const m = useIsMobile();
  const D = GOP.overons;
  return (
    <React.Fragment>
      <PageHero eyebrow={D.hero.eyebrow} title={D.hero.title} sub={D.hero.sub} />

      {/* Founders */}
      <section className="section">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: m ? 56 : 88 }}>
          {D.founders.map((f, i) => <FounderRow key={i} f={f} flip={i % 2 === 1} m={m} />)}
        </div>
      </section>

      {/* Values */}
      <section className="section section-dark">
        <div className="wrap">
          <SectionHead title={D.valuesTitle} dark />
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: m ? 28 : 40, marginTop: 52 }} data-reveal-stagger>
            {D.values.map((v, i) => (
              <div key={i}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--mint-light)' }}>{v.number}</div>
                <h4 style={{ fontSize: 20, color: '#fff', marginTop: 14 }}>{v.title}</h4>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,.65)', marginTop: 10 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GymOps */}
      <section className="section section-soft">
        <div className="wrap">
          <SectionHead eyebrow="Waarom GymOps" title={D.whyTitle} />
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: 24, marginTop: 52 }} data-reveal-stagger>
            {D.why.map((w, i) => (
              <div key={i} className="card" style={{ padding: m ? 26 : 32, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div className="icon-chip" style={{ marginTop: 2 }}><i data-lucide={w.icon}></i></div>
                <div>
                  <h4 style={{ fontSize: 19 }}>{w.title}</h4>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--fg3)', marginTop: 8 }}>{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
window.OverOns = OverOns;
