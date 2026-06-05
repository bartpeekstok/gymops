/* Postcard — the handwritten "ansichtkaart" graphic, shared by the home
   ledenervaring section and the ledenervaring detail page. The message writes
   itself line-by-line when scrolled into view (.pc-wrap.in .write). */
function Postcard() {
  useLucide();
  const L = GO.leden;
  const msg = [
    { t: 'Hey Lisa,', s: 28, w: 600, c: 'var(--ink)', mt: 0, d: 0.35, du: 0.5 },
    { t: 'Wat ben jij goed bezig.', s: 21, w: 500, c: '#3a4150', mt: 12, d: 0.9, du: 0.55 },
    { t: 'Je werkt hard en het', s: 21, w: 500, c: '#3a4150', mt: 3, d: 1.5, du: 0.5 },
    { t: 'resultaat mag er zijn.', s: 21, w: 500, c: '#3a4150', mt: 3, d: 2.05, du: 0.5 },
    { t: 'Wij zijn trots op je!', s: 21, w: 500, c: '#3a4150', mt: 3, d: 2.6, du: 0.5 },
    { t: 'Team CF Zuidlaren', s: 20, w: 600, c: '#3a4150', mt: 18, d: 3.25, du: 0.5 },
  ];
  const address = ['Lisa de Boer', 'Stationsweg 7', '9471 AB  Zuidlaren'];
  return (
    <div className="pc-wrap" data-reveal style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: 0 }}>
      <div style={{ position: 'relative', width: '100%', maxWidth: 490, display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: -16, background: 'radial-gradient(120% 120% at 28% 18%, var(--mint-tint), transparent 68%)', borderRadius: 30, zIndex: 0 }} />
        <div className="postcard" style={{ position: 'relative', zIndex: 1, transform: 'rotate(-1.6deg)' }}>
          <div className="stamp">
            <i data-lucide="trophy" style={{ width: 22, height: 22, color: 'var(--mint-deep)' }}></i>
            <span style={{ fontSize: 8, fontWeight: 800, letterSpacing: '.1em', color: 'var(--mint-deep)' }}>GYMOPS</span>
          </div>
          <div className="postmark">
            <span style={{ fontSize: 8, fontWeight: 800, letterSpacing: '.05em' }}>ZUIDLAREN</span>
            <span style={{ fontSize: 10, fontWeight: 700 }}>31 · 05</span>
            <span style={{ fontSize: 7, letterSpacing: '.16em' }}>NEDERLAND</span>
          </div>
          <div style={{ display: 'flex', height: '100%', gap: 18 }}>
            <div style={{ flex: 1.25, display: 'flex', flexDirection: 'column', paddingRight: 4 }}>
              {msg.map((l, i) => (
                <span key={i} className="handwriting write" style={{ display: 'block', whiteSpace: 'nowrap', fontSize: l.s, fontWeight: l.w, color: l.c, lineHeight: 1.3, marginTop: l.mt, animationDelay: l.d + 's', animationDuration: l.du + 's' }}>{l.t}</span>
              ))}
            </div>
            <div style={{ width: 1, background: 'rgba(10,10,15,.13)', alignSelf: 'stretch' }}></div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 13, paddingBottom: 2 }}>
              {address.map((a, i) => (
                <div key={i} style={{ borderBottom: '1px solid rgba(10,10,15,.18)', paddingBottom: 2 }}>
                  <span className="handwriting write" style={{ display: 'block', fontSize: 16, fontWeight: 500, color: '#3a4150', animationDelay: (3.4 + i * 0.25) + 's', animationDuration: '0.4s' }}>{a}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'absolute', left: -14, bottom: -16, display: 'flex', alignItems: 'center', gap: 7, background: '#fff', border: '1px solid var(--border)', borderRadius: 999, padding: '8px 14px', boxShadow: 'var(--shadow-card)', zIndex: 2 }}>
            <i data-lucide="sparkles" style={{ width: 15, height: 15, color: 'var(--mint-deep)' }}></i>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--fg2)' }}>{L.card.foot}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
window.Postcard = Postcard;
