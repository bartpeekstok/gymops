/* SiteBrowser — a desktop-browser mockup of the custom CrossFit Zuidlaren
   website, used as the visual for the home "Jouw website" block. Responsive
   (scales with its column), static. */
function SiteBrowser() {
  useLucide();
  return (
    <div style={{ width: '100%', maxWidth: 540, margin: '0 auto' }}>
      <div style={{ borderRadius: 14, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)', background: '#fff' }}>
        {/* browser chrome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: '#F3F4F6', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {['#FF5F57', '#FEBC2E', '#28C840'].map(c => <span key={c} style={{ width: 11, height: 11, borderRadius: 999, background: c }} />)}
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid var(--border)', borderRadius: 999, padding: '5px 16px', fontSize: 12, color: 'var(--fg3)', fontWeight: 600 }}>
              <i data-lucide="lock" style={{ width: 11, height: 11 }}></i> crossfitzuidlaren.nl
            </div>
          </div>
        </div>

        {/* nav */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontWeight: 800, fontSize: 15, color: 'var(--ink)', letterSpacing: '-.01em' }}>
            <i data-lucide="dumbbell" style={{ width: 16, height: 16, color: 'var(--mint-deep)' }}></i> CrossFit Zuidlaren
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', fontSize: 12.5, color: 'var(--fg3)', fontWeight: 600 }}>
            <span>Lessen</span><span>Tarieven</span><span>Team</span>
            <span style={{ background: 'var(--mint)', color: '#fff', padding: '7px 13px', borderRadius: 8, fontWeight: 700 }}>Gratis proefles</span>
          </div>
        </div>

        {/* hero */}
        <div style={{ background: 'linear-gradient(150deg, #0e1f19, #0a0a0f 80%)', padding: '34px 24px', color: '#fff' }}>
          <div style={{ color: 'var(--mint-light)', fontSize: 11, fontWeight: 700, letterSpacing: '.12em', marginBottom: 10 }}>SAMEN STERKER IN ZUIDLAREN</div>
          <div style={{ fontSize: 'clamp(24px,4.4vw,34px)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.05, maxWidth: 340 }}>Word fitter, sterker en onderdeel van de gym.</div>
          <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
            <span style={{ background: 'var(--mint)', color: '#fff', fontWeight: 700, fontSize: 13, padding: '10px 18px', borderRadius: 9 }}>Plan je proefles</span>
            <span style={{ border: '1.5px solid rgba(255,255,255,.3)', color: '#fff', fontWeight: 700, fontSize: 13, padding: '10px 18px', borderRadius: 9 }}>Bekijk rooster</span>
          </div>
        </div>

        {/* feature strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, padding: '16px 18px 20px' }}>
          {[['flame', 'WOD van vandaag'], ['users', 'Community'], ['trophy', 'Jouw resultaten']].map(([ic, t]) => (
            <div key={t} style={{ border: '1px solid var(--border)', borderRadius: 10, padding: '13px 10px', textAlign: 'center' }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--mint-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 7px' }}><i data-lucide={ic} style={{ width: 15, height: 15, color: 'var(--mint-deep)' }}></i></div>
              <div style={{ fontSize: 11.5, fontWeight: 700, color: 'var(--fg1)' }}>{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.SiteBrowser = SiteBrowser;
