/* Shared building blocks for the GymOps feature detail pages
   (leadopvolging / ledenervaring / team-aansturing).
   FeatureRow = alternating checkerboard row; MiniGrid = compact feature grid;
   ConversionBand = the 22% -> 61% signature stat; plus a few flat mockups. */

function FeatureRow({ icon, title, body, flip, visual, soft }) {
  const m = useIsMobile();
  const text = (
    <div data-reveal style={{ flex: 1 }}>
      <div className="icon-chip" style={{ width: 56, height: 56, borderRadius: 16, marginBottom: 22 }}><i data-lucide={icon}></i></div>
      <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>{title}</h2>
      {body.split('\n\n').map((p, i) => (
        <p key={i} style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg3)', marginTop: 14, maxWidth: 460 }}>{p}</p>
      ))}
    </div>
  );
  const vis = (
    <div data-reveal className="gfx-warm" style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: 0 }}>{visual}</div>
  );
  return (
    <section className={'section' + (soft ? ' section-soft' : '')} style={{ padding: m ? '44px 0' : '72px 0' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: m ? 'column-reverse' : 'row', gap: m ? 36 : 72, alignItems: 'center' }}>
        {(!m && flip) ? <React.Fragment>{vis}{text}</React.Fragment> : <React.Fragment>{text}{vis}</React.Fragment>}
      </div>
    </section>
  );
}

function MiniGrid({ eyebrow, title, items, plain }) {
  const m = useIsMobile();
  return (
    <section className={'section' + (plain ? '' : ' section-soft')}>
      <div className="wrap">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: 24, marginTop: 48 }} data-reveal-stagger>
          {items.map((it, i) => (
            <div key={i} className="card" style={{ padding: 28, display: 'flex', flexDirection: 'column' }}>
              <div className="icon-chip" style={{ marginBottom: 16 }}><i data-lucide={it.icon}></i></div>
              <h4 style={{ fontSize: 18 }}>{it.title}</h4>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg3)', marginTop: 9 }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 22% -> 61% conversion band + a simple funnel. Dark. */
function ConversionBand() {
  const m = useIsMobile();
  const funnel = [
    { label: 'Leads binnen', val: '1.000', w: 100 },
    { label: 'Gereageerd', val: '920', w: 86 },
    { label: 'Proefles geboekt', val: '740', w: 70 },
    { label: 'Nieuw lid', val: '610', w: 54, hot: true },
  ];
  return (
    <section className="section-dark" style={{ padding: m ? '56px 0' : '88px 0' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 40 : 64, alignItems: 'center' }}>
        <div data-reveal>
          <div className="eyebrow eyebrow-dark" style={{ marginBottom: 12 }}>Leadconversie</div>
          <h2 style={{ color: '#fff', fontSize: 'clamp(26px,3.4vw,42px)' }}>Van interesse naar ingeschreven</h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,.6)', marginTop: 16, maxWidth: 420 }}>Snelheid en consistentie maken het verschil. GymOps gyms zien hun leadconversie meetbaar omhoog gaan in het eerste kwartaal.</p>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 22 }}>
            {[['Zonder GymOps', 22, 'rgba(255,255,255,.3)', 'rgba(255,255,255,.7)'], ['Met GymOps', 61, 'var(--mint)', 'var(--mint-light)']].map(([lab, pct, bar, txt]) => (
              <div key={lab}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, marginBottom: 8 }}>
                  <span style={{ color: 'rgba(255,255,255,.7)' }}>{lab}</span>
                  <span style={{ fontWeight: 800, color: txt }}>{pct}%</span>
                </div>
                <div style={{ height: 12, borderRadius: 999, background: 'rgba(255,255,255,.1)', overflow: 'hidden' }}>
                  <div style={{ width: pct + '%', height: '100%', borderRadius: 999, background: bar }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          {funnel.map((f, i) => (
            <React.Fragment key={i}>
              <div style={{ width: f.w + '%', minWidth: 180, background: f.hot ? 'var(--mint)' : 'rgba(255,255,255,.06)', border: f.hot ? 'none' : '1px solid rgba(255,255,255,.1)', borderRadius: 16, padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: f.hot ? 'var(--shadow-mint)' : 'none' }}>
                <span style={{ fontSize: 14, fontWeight: f.hot ? 800 : 600, color: '#fff' }}>{f.label}</span>
                <span style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>{f.val}</span>
              </div>
              {i < funnel.length - 1 && <i data-lucide="chevron-down" style={{ width: 18, height: 18, color: 'rgba(255,255,255,.3)' }}></i>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- small flat mockups (used as FeatureRow visuals) ---- */
function MockCard({ children, w = 360 }) {
  return <div className="card" style={{ width: '100%', maxWidth: w, padding: 22 }}>{children}</div>;
}

function ChannelsMock() {
  const rows = [['globe', 'Website-formulier', 'net nu'], ['megaphone', 'Meta Ads lead form', '8 min'], ['qr-code', 'QR-code in de gym', '2 uur'], ['at-sign', 'Instagram DM', 'vanmorgen']];
  return (
    <MockCard>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontWeight: 800, fontSize: 16, color: 'var(--fg1)' }}>Nieuwe leads vandaag</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--mint-deep)', background: 'var(--mint-tint)', borderRadius: 999, padding: '4px 10px' }}>4 binnen</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {rows.map(([ic, t, when]) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: 11, background: 'var(--bg-soft)', borderRadius: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 999, background: 'var(--ink)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide={ic} style={{ width: 16, height: 16 }}></i></div>
            <span style={{ flex: 1, fontSize: 14, fontWeight: 700, color: 'var(--fg1)' }}>{t}</span>
            <span style={{ fontSize: 12, color: 'var(--fg3)' }}>{when}</span>
          </div>
        ))}
      </div>
    </MockCard>
  );
}

function SlotsMock() {
  const slots = [['ma 9:00', false], ['ma 18:00', false], ['di 10:30', true], ['wo 19:00', false]];
  return (
    <MockCard w={340}>
      <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--fg1)' }}>Plan je proefles</div>
      <p style={{ fontSize: 13, color: 'var(--fg3)', margin: '4px 0 16px' }}>Alleen tijden die jou en je coach uitkomen</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {slots.map(([t, on]) => (
          <div key={t} style={{ textAlign: 'center', padding: '14px 0', borderRadius: 12, fontSize: 14, fontWeight: 700,
            background: on ? 'var(--mint)' : 'var(--bg-soft)', color: on ? '#fff' : 'var(--fg2)', border: on ? 'none' : '1px solid var(--border)', boxShadow: on ? 'var(--shadow-mint)' : 'none' }}>{t}</div>
        ))}
      </div>
      <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--fg3)' }}>
        <i data-lucide="calendar-check" style={{ width: 16, height: 16, color: 'var(--mint-deep)' }}></i> Bevestigd bij Sander én coach Sanne
      </div>
    </MockCard>
  );
}

function FollowupMock() {
  const steps = [['Dag 0 — Eerste WhatsApp en e-mail', true], ['Dag 1 — Herinnering WhatsApp', true], ['Dag 3 — Persoonlijk bericht coach', true], ['Dag 7 — Laatste check via e-mail', false]];
  return (
    <MockCard w={360}>
      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--mint-deep)', marginBottom: 18 }}>Opvolging Sander V. · geen reactie</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {steps.map(([t, done]) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: 999, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: done ? 'var(--mint)' : 'var(--bg-soft)', border: done ? 'none' : '2px dashed var(--border-strong)' }}>
              {done && <i data-lucide="check" style={{ width: 15, height: 15, color: '#fff' }}></i>}
            </div>
            <span style={{ fontSize: 14, fontWeight: 700, color: done ? 'var(--fg1)' : 'var(--fg3)' }}>{t}</span>
          </div>
        ))}
      </div>
    </MockCard>
  );
}

function ReviewMock() {
  return (
    <MockCard w={340}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
        <img src={GO.A + 'integ-google.webp'} alt="Google" style={{ height: 22, width: 'auto' }} />
        <div style={{ display: 'flex', gap: 2, color: 'var(--amber)' }}>
          {Array.from({ length: 5 }).map((_, i) => <i key={i} data-lucide="star" style={{ width: 16, height: 16, fill: 'currentColor' }}></i>)}
        </div>
      </div>
      <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--fg2)' }}>"Beste gym van Zuidlaren. Persoonlijke coaching en een topcommunity. Aanrader!"</p>
      <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--fg1)' }}>Sanne K.</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--mint-deep)', background: 'var(--mint-tint)', borderRadius: 999, padding: '4px 10px' }}>253 reviews</span>
      </div>
    </MockCard>
  );
}

function NoteMock() {
  return (
    <div data-reveal style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', inset: -16, background: 'linear-gradient(135deg, var(--mint-tint), rgba(16,185,129,.08))', borderRadius: 28, zIndex: 0 }} />
      <div style={{ position: 'relative', zIndex: 1, background: '#FBFAF7', border: '1px solid #ECE7DD', borderRadius: 16, padding: 34, maxWidth: 360, transform: 'rotate(-1.2deg)', boxShadow: 'var(--shadow-card)' }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--ink)' }}>Lieve Lisa,</div>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--fg2)', marginTop: 14 }}>Gefeliciteerd met je 100ste les! Geniet ervan, en tot dinsdag in de gym.</p>
        <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg3)', marginTop: 20 }}>— Sanne &amp; team Zuidlaren</p>
      </div>
    </div>
  );
}

function ReassignMock() {
  return (
    <MockCard w={360}>
      <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--fg3)', marginBottom: 14 }}>Coach Sanne · afwezig</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, background: 'var(--bg-soft)', borderRadius: 12 }}>
        <div style={{ width: 38, height: 38, borderRadius: 999, background: 'var(--ink)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14 }}>RH</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg1)' }}>Ruby Henselmans bellen</div>
          <div style={{ fontSize: 12, color: 'var(--fg3)' }}>Openstaande taak</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, margin: '14px 0', fontSize: 13, fontWeight: 700, color: 'var(--mint-deep)' }}>
        <i data-lucide="arrow-down" style={{ width: 16, height: 16 }}></i> overgenomen door
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, background: 'var(--mint-tint)', border: '1px solid rgba(16,185,129,.25)', borderRadius: 12 }}>
        <div style={{ width: 38, height: 38, borderRadius: 999, background: 'var(--mint)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14 }}>SB</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg1)' }}>Stefan Bakker</div>
          <div style={{ fontSize: 12, color: 'var(--mint-deep)', fontWeight: 600 }}>In één klik overgenomen</div>
        </div>
        <i data-lucide="check-check" style={{ width: 18, height: 18, color: 'var(--mint-deep)' }}></i>
      </div>
    </MockCard>
  );
}

Object.assign(window, { FeatureRow, MiniGrid, ConversionBand, ChannelsMock, SlotsMock, FollowupMock, ReviewMock, NoteMock, ReassignMock });
