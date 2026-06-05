/* Pinned section — dashboard sticks on the left while the three pillars
   (Lead → Lid → Taak) scroll through on the right. Active pillar is
   highlighted via scroll position (scrub coupling). */
const { useState: usePinState, useEffect: usePinEffect, useRef: usePinRef } = React;

function Pillars() {
  useLucide();
  const m = useIsMobile();
  const [active, setActive] = usePinState(0);
  const pillarLinks = [
    { label: 'leadopvolging', href: 'leadopvolging.html' },
    { label: 'ledenervaring', href: 'ledenervaring.html' },
    { label: 'team-aansturing', href: 'team-aansturing.html' },
  ];
  const wrapRef = usePinRef(null);
  const panels = usePinRef([]);

  usePinEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight * 0.5;
      let cur = 0;
      panels.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= mid) cur = i;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={wrapRef} style={{ background: '#fff' }}>
      <div className="wrap" style={{ paddingTop: 96, paddingBottom: 40, textAlign: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }} data-reveal>Alles op één plek</div>
        <h2 data-reveal style={{ fontSize: 'clamp(30px,3.6vw,46px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--ink)', maxWidth: 760, margin: '0 auto' }}>
          Eén systeem dat je leadopvolging, ledenbehoud en team-aansturing draait.
        </h2>
      </div>

      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 8 : 56, alignItems: 'start', paddingBottom: m ? 24 : 80 }}>
        {/* sticky left: dashboard + active indicator (static on mobile) */}
        <div style={{ position: m ? 'static' : 'sticky', top: 100, height: 'min-content', display: 'flex', flexDirection: 'column', gap: 22, overflow: m ? 'hidden' : 'visible', marginBottom: m ? 8 : 0 }}>
          {m
            ? <div style={{ display: 'flex', justifyContent: 'center' }}><Phone w={236}><DashboardScreen /></Phone></div>
            : <div style={{ transform: 'scale(0.96)', transformOrigin: 'top left' }}><Dashboard scale={1} /></div>}
          {!m && (
          <div style={{ display: 'flex', gap: 10 }}>
            {GO.pillars.map((p, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 9, padding: '11px 13px', borderRadius: 12,
                border: '1px solid ' + (active === i ? 'var(--mint)' : 'var(--border)'),
                background: active === i ? 'var(--mint-tint)' : '#fff', transition: 'all .35s' }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: active === i ? 'var(--mint)' : 'var(--bg-soft)', transition: 'background .35s' }}>
                  <i data-lucide={p.icon} style={{ width: 15, height: 15, color: active === i ? '#fff' : 'var(--fg3)' }}></i>
                </div>
                <span style={{ fontSize: 13, fontWeight: 700, color: active === i ? 'var(--mint-deep)' : 'var(--fg3)' }}>{p.tag}</span>
              </div>
            ))}
          </div>
          )}
        </div>

        {/* scrolling right: pillar panels */}
        <div>
          {GO.pillars.map((p, i) => (
            <div key={i} ref={el => panels.current[i] = el}
              style={{ minHeight: m ? 'auto' : '74vh', padding: m ? '26px 0' : 0, borderTop: m && i > 0 ? '1px solid var(--border)' : 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', opacity: m ? 1 : (active === i ? 1 : 0.4), transition: 'opacity .4s' }}>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '.1em', color: 'var(--mint-deep)', marginBottom: m ? 14 : 18 }}>{p.step} · {p.tag.toUpperCase()}</div>
              <div className="icon-chip" style={{ width: 56, height: 56, borderRadius: 16, marginBottom: m ? 18 : 22 }}>
                <i data-lucide={p.icon} style={{ width: 26, height: 26, color: 'var(--mint-deep)' }}></i>
              </div>
              <h3 style={{ fontSize: 'clamp(26px,3vw,40px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--ink)', marginBottom: 16 }}>{p.title}</h3>
              <p style={{ fontSize: m ? 16 : 18, lineHeight: 1.6, color: 'var(--fg3)', maxWidth: 440 }}>{p.body}</p>
              <a href={pillarLinks[i].href} className="btn-ghost" style={{ marginTop: 20 }}>meer over {pillarLinks[i].label}<i data-lucide="arrow-right"></i></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Pillars = Pillars;
