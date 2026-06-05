/* HighlightRow — reusable home checkerboard: eyebrow + title + three items
   beside a graphic, with a "meer over …" link. Mirrors the LedenervaringHome
   layout so the lead / lid / team blocks read consistently.
   flip = graphic on the left; soft = light section background. */
function HighlightRow({ eyebrow, title, items, link, visual, flip, soft }) {
  useReveal();
  useLucide();
  const m = useIsMobile();

  const vis = (
    <div data-reveal style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: 0 }}>{visual}</div>
  );
  const text = (
    <div data-reveal style={{ flex: 1 }}>
      <div className="eyebrow" style={{ marginBottom: 16 }}>{eyebrow}</div>
      <h2 style={{ fontSize: 'clamp(26px,3.2vw,40px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--ink)', maxWidth: 460 }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 32 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div className="icon-chip" style={{ width: 44, height: 44, borderRadius: 13, flexShrink: 0 }}><i data-lucide={it.icon} style={{ width: 20, height: 20, color: 'var(--mint-deep)' }}></i></div>
            <div>
              <h4 style={{ fontSize: 17, fontWeight: 700, color: 'var(--fg1)' }}>{it.title}</h4>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg3)', marginTop: 5, maxWidth: 420 }}>{it.body}</p>
            </div>
          </div>
        ))}
      </div>
      {link && <a href={link.href} className="btn-ghost" style={{ marginTop: 28 }}>{link.label}<i data-lucide="arrow-right"></i></a>}
    </div>
  );

  return (
    <section className={'section' + (soft ? ' section-soft' : '')} style={{ padding: m ? '52px 0' : '88px 0' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: m ? 40 : 80, alignItems: m ? 'stretch' : 'center' }}>
        {(!m && flip) ? <React.Fragment>{vis}{text}</React.Fragment> : <React.Fragment>{text}{vis}</React.Fragment>}
      </div>
    </section>
  );
}
window.HighlightRow = HighlightRow;
