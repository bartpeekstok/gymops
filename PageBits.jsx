/* Shared building blocks for the inner GymOps pages. Dark hero that matches
   the home hero's treatment (dot-grid + faint mint glow), plus a small
   section-heading helper. Exposes to window. */

function PageHero({ eyebrow, title, accent, sub, cta }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--ink)', color: '#fff' }}>
      {/* faint mint radial glow */}
      <div style={{ position: 'absolute', top: -180, right: -120, width: 640, height: 640, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,.20), transparent 62%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: -160, left: -140, width: 520, height: 520, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(52,211,153,.10), transparent 60%)', filter: 'blur(30px)', pointerEvents: 'none' }} />
      {/* dot grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '26px 26px', pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, #000 40%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, #000 40%, transparent)' }} />
      <div className="wrap" style={{ position: 'relative', paddingTop: 150, paddingBottom: 96, textAlign: 'center' }}>
        <div className="eyebrow eyebrow-dark" data-reveal style={{ marginBottom: 18 }}>{eyebrow}</div>
        {accent
          ? <h1 data-reveal style={{ fontSize: 'clamp(34px,5vw,62px)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.06, maxWidth: 920, margin: '0 auto', color: '#fff' }}>{title} <span style={{ color: 'var(--mint-light)' }}>{accent}</span></h1>
          : <SplitHeadline lines={[title]} style={{ fontSize: 'clamp(34px,5vw,62px)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.06, maxWidth: 920, margin: '0 auto', color: '#fff' }} />}
        {sub && <p data-reveal style={{ fontSize: 19, lineHeight: 1.6, color: 'rgba(255,255,255,.72)', maxWidth: 620, margin: '24px auto 0' }}>{sub}</p>}
        {cta && (
          <div data-reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 36 }}>
            <button className="btn btn-primary">{cta.primary}<i data-lucide="arrow-right"></i></button>
            {cta.secondary && <button className="btn btn-outline-light">{cta.secondary}</button>}
          </div>
        )}
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, sub, align = 'center', dark = false, max = 640 }) {
  return (
    <div data-reveal style={{ textAlign: align, maxWidth: align === 'center' ? max : 'none', margin: align === 'center' ? '0 auto' : 0 }}>
      {eyebrow && <div className={'eyebrow' + (dark ? ' eyebrow-dark' : '')} style={{ marginBottom: 14 }}>{eyebrow}</div>}
      <h2 style={{ color: dark ? '#fff' : 'var(--fg1)' }}>{title}</h2>
      {sub && <p style={{ fontSize: 18, lineHeight: 1.6, marginTop: 16, color: dark ? 'rgba(255,255,255,.7)' : 'var(--fg3)' }}>{sub}</p>}
    </div>
  );
}

Object.assign(window, { PageHero, SectionHead });
