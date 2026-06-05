/* Sticky navbar — transparent over the dark hero, white+blur after scroll.
   On mobile: logo + hamburger that opens a full-width menu panel. */
const { useState: useNavState, useEffect: useNavEffect } = React;

function Nav({ current }) {
  const [scrolled, setScrolled] = useNavState(false);
  const [open, setOpen] = useNavState(false);
  const m = useIsMobile();
  useNavEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useNavEffect(() => { if (!m) setOpen(false); }, [m]);
  useLucide();

  const V1 = typeof window !== 'undefined' && window.__V1;
  const lnk = (h) => (V1 && h && h.indexOf('.html') > -1 && h.indexOf('-v1') === -1) ? h.replace('.html', '-v1.html') : h;

  const light = scrolled || open; // light bg = dark text/icons
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 60,
      transition: 'background .3s, box-shadow .3s, border-color .3s',
      background: light ? 'rgba(255,255,255,.92)' : 'transparent',
      backdropFilter: light ? 'blur(14px)' : 'none',
      WebkitBackdropFilter: light ? 'blur(14px)' : 'none',
      borderBottom: '1px solid ' + (light && !open ? 'var(--border)' : 'transparent'),
    }}>
      <div className="wrap" style={{ height: 74, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href={lnk('index.html')}><img src={GO.A + (light ? 'logo.png' : 'logo-wit.png')} alt="GymOps" style={{ height: 46, width: 'auto', display: 'block' }} /></a>

        {!m && (
          <React.Fragment>
            <div style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
              {GO.nav.map(l => {
                const active = l.href === current;
                const base = active ? 'var(--mint-deep)' : (light ? 'var(--fg2)' : 'rgba(255,255,255,.9)');
                return (
                  <a key={l.label} href={lnk(l.href)} style={{ fontSize: 15, fontWeight: active ? 700 : 500, color: active && !light ? 'var(--mint-light)' : base, transition: 'color .2s' }}
                     onMouseEnter={e => e.currentTarget.style.color = light ? 'var(--mint-deep)' : '#fff'}
                     onMouseLeave={e => e.currentTarget.style.color = active && !light ? 'var(--mint-light)' : base}>{l.label}</a>
                );
              })}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <a href="#" style={{ fontSize: 15, fontWeight: 600, color: light ? 'var(--fg2)' : 'rgba(255,255,255,.9)' }}>Inloggen</a>
              <button className="btn btn-primary" style={{ padding: '11px 20px', fontSize: 15 }}>Plan een demo</button>
            </div>
          </React.Fragment>
        )}

        {m && (
          <button className="hamburger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
            <i data-lucide={open ? 'x' : 'menu'} style={{ color: light ? 'var(--ink)' : '#fff' }}></i>
          </button>
        )}
      </div>

      {m && open && (
        <div className="mobile-menu">
          {GO.nav.map(l => <a key={l.label} href={lnk(l.href)} onClick={() => setOpen(false)} style={l.href === current ? { color: 'var(--mint-deep)' } : undefined}>{l.label}</a>)}
          <a href="#" onClick={() => setOpen(false)} style={{ color: 'var(--mint-deep)' }}>Inloggen</a>
          <button className="btn btn-primary" style={{ marginTop: 14, justifyContent: 'center' }}>Plan een demo</button>
        </div>
      )}
    </nav>
  );
}
window.Nav = Nav;
