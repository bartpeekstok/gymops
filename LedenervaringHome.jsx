/* Home "Ledenervaring" checkerboard section. Self-contained (no DetailBits /
   PageBits dependency) so the home page never needs the inner-page building
   blocks. Uses GO.leden copy: eyebrow + title + three items + handwritten card.
   Links through to the full ledenervaring.html detail page. */
function LedenervaringHome() {
  useReveal();
  useLucide();
  const m = useIsMobile();
  const L = GO.leden;

  // message split into visual lines so each writes sequentially (nowrap = no reflow)
  const msg = [
    { t: 'Hey Lisa,', s: 28, w: 600, c: 'var(--ink)', mt: 0, d: 0.35, du: 0.5 },
    { t: 'Wat ben jij goed bezig.', s: 21, w: 500, c: '#3a4150', mt: 12, d: 0.9, du: 0.55 },
    { t: 'Je werkt hard en het', s: 21, w: 500, c: '#3a4150', mt: 3, d: 1.5, du: 0.5 },
    { t: 'resultaat mag er zijn.', s: 21, w: 500, c: '#3a4150', mt: 3, d: 2.05, du: 0.5 },
    { t: 'Wij zijn trots op je!', s: 21, w: 500, c: '#3a4150', mt: 3, d: 2.6, du: 0.5 },
    { t: 'Team CF Zuidlaren', s: 20, w: 600, c: '#3a4150', mt: 18, d: 3.25, du: 0.5 },
  ];
  const address = ['Lisa de Boer', 'Stationsweg 7', '9471 AB  Zuidlaren'];

  const card = <div className="gfx-warm" style={{ display: 'contents' }}><Postcard /></div>;

  const text = (
    <div data-reveal style={{ flex: 1 }}>
      <div className="eyebrow" style={{ marginBottom: 16 }}>{L.eyebrow}</div>
      <h2 style={{ fontSize: 'clamp(26px,3.2vw,40px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--ink)', maxWidth: 460 }}>{L.title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
        {L.items.map((it, i) => (
          <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div className="icon-chip" style={{ width: 44, height: 44, borderRadius: 13, flexShrink: 0 }}><i data-lucide={it.icon} style={{ width: 20, height: 20, color: 'var(--mint-deep)' }}></i></div>
            <div>
              <h4 style={{ fontSize: 17, fontWeight: 700, color: 'var(--fg1)' }}>{it.title}</h4>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg3)', marginTop: 5, maxWidth: 420 }}>{it.body}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="ledenervaring.html" className="btn-ghost" style={{ marginTop: 28 }}>meer over ledenervaring<i data-lucide="arrow-right"></i></a>
    </div>
  );

  return (
    <section className="section section-soft" style={{ padding: m ? '52px 0' : '88px 0' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: m ? 40 : 80, alignItems: m ? 'stretch' : 'center' }}>
        {m ? <React.Fragment>{text}{card}</React.Fragment> : <React.Fragment>{card}{text}</React.Fragment>}
      </div>
    </section>
  );
}
window.LedenervaringHome = LedenervaringHome;
