/* GymOps product dashboard mockup — modelled on the real GymOps environment
   (opportunity-status donut + sales funnel), restyled to V2 brand
   (white surface, ink sidebar, mint accents) and rebranded to CrossFit Leiden. */

function DashDonut({ segments, total, size = 124, stroke = 17, center, sub }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const sum = total || segments.reduce((a, s) => a + s.value, 0);
  let off = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ flexShrink: 0 }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--bg-soft)" strokeWidth={stroke} />
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        {segments.map((s, i) => {
          const len = c * (s.value / sum);
          const seg = (
            <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none" stroke={s.color}
              strokeWidth={stroke} strokeDasharray={`${Math.max(len - 2, 0)} ${c - Math.max(len - 2, 0)}`}
              strokeDashoffset={-off} strokeLinecap="round" />
          );
          off += len;
          return seg;
        })}
      </g>
      <text x="50%" y={sub ? '46%' : '52%'} textAnchor="middle" dominantBaseline="middle"
        style={{ fontSize: size * 0.28, fontWeight: 800, fill: 'var(--ink)', letterSpacing: '-.03em' }}>{center}</text>
      {sub && <text x="50%" y="63%" textAnchor="middle" dominantBaseline="middle"
        style={{ fontSize: size * 0.092, fontWeight: 600, fill: 'var(--fg3)' }}>{sub}</text>}
    </svg>
  );
}

function Dashboard({ scale = 1 }) {
  useLucide();
  const p = GO.product;
  const card = { background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: 14 };
  const cardTitle = { fontSize: 11.5, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em', marginBottom: 12 };

  const nav = [
    ['layout-dashboard', 'Dashboard', true], ['message-circle', 'Gesprekken'], ['calendar', 'Kalenders'],
    ['users', 'Contacten'], ['shuffle', 'Leads'], ['__div', ''],
    ['megaphone', 'Marketing'], ['globe', 'Sites'], ['star', 'Reputatie'],
  ];

  return (
    <div style={{ width: 560, transform: `scale(${scale})`, transformOrigin: 'top left',
      background: '#fff', borderRadius: 20, boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{ background: 'var(--ink)', color: '#fff', width: 150, flexShrink: 0, padding: '14px 12px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '0 4px', marginBottom: 14 }}>
          <img src={GO.A + 'gear.png'} style={{ width: 20, height: 20 }} alt="" />
          <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: '-.02em' }}>GymOps</span>
        </div>

        {/* workspace switcher */}
        <div style={{ background: 'var(--surface-dark-2)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 9, padding: '7px 8px', display: 'flex', alignItems: 'center', gap: 7, marginBottom: 9 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: 'var(--mint)', color: '#fff', fontSize: 9, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{p.initials}</div>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontSize: 10.5, fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.workspace}</div>
            <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,.5)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.location}</div>
          </div>
          <i data-lucide="chevrons-up-down" style={{ width: 12, height: 12, color: 'rgba(255,255,255,.5)', flexShrink: 0 }}></i>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,.06)', borderRadius: 8, padding: '6px 8px', marginBottom: 12 }}>
          <i data-lucide="search" style={{ width: 12, height: 12, color: 'rgba(255,255,255,.45)' }}></i>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,.45)' }}>Zoeken</span>
          <span style={{ marginLeft: 'auto', fontSize: 8.5, color: 'rgba(255,255,255,.35)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 4, padding: '1px 4px' }}>⌘K</span>
        </div>

        {nav.map(([i, t, a], k) => i === '__div'
          ? <div key={k} style={{ height: 1, background: 'rgba(255,255,255,.08)', margin: '8px 4px' }} />
          : (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11.5, padding: '7px 8px', borderRadius: 8, marginBottom: 2,
              fontWeight: a ? 700 : 500, background: a ? 'rgba(52,211,153,.14)' : 'transparent', color: a ? 'var(--mint-light)' : 'rgba(255,255,255,.7)' }}>
              <i data-lucide={i} style={{ width: 14, height: 14 }}></i><span>{t}</span>
            </div>
          ))}

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8, padding: '12px 4px 0' }}>
          <i data-lucide="settings" style={{ width: 14, height: 14, color: 'rgba(255,255,255,.6)' }}></i>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,.6)' }}>Instellingen</span>
        </div>
      </aside>

      {/* Content */}
      <div style={{ background: 'var(--bg-soft)', flex: 1, padding: 14, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h4 style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>Dashboard</h4>
          <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--fg2)', background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: '5px 9px', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <i data-lucide="calendar" style={{ width: 11, height: 11, color: 'var(--fg3)' }}></i> Laatste 30 dagen
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 9, marginBottom: 9 }}>
          {/* Opportunity status */}
          <div style={card}>
            <div style={cardTitle}>Opportunity-status</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <DashDonut segments={p.oppStatus} total={p.oppTotal} center={p.oppTotal} sub="opportunities" />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7, flex: 1, minWidth: 0 }}>
                {p.oppStatus.map(s => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 9, height: 9, borderRadius: 3, background: s.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 10.5, color: 'var(--fg2)', flex: 1, whiteSpace: 'nowrap' }}>{s.label}</span>
                    <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--ink)' }}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Conversion */}
          <div style={{ ...card, display: 'flex', flexDirection: 'column' }}>
            <div style={cardTitle}>Leadconversie</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <DashDonut segments={[{ value: p.conversion, color: 'var(--mint)' }, { value: 100 - p.conversion, color: 'var(--bg-soft)' }]}
                total={100} size={104} stroke={15} center={p.conversion + '%'} />
            </div>
            <div style={{ textAlign: 'center', marginTop: 4 }}>
              <div style={{ fontSize: 9.5, color: 'var(--fg3)' }}>Gewonnen omzet</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>€37.228</div>
            </div>
          </div>
        </div>

        {/* Funnel */}
        <div style={card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--ink)' }}>Funnel</div>
            <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--mint-deep)', background: 'var(--mint-tint)', borderRadius: 6, padding: '3px 7px' }}>Free intro pijplijn</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {p.funnel.map((f, i) => (
              <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 10, color: 'var(--fg2)', width: 118, flexShrink: 0, whiteSpace: 'nowrap' }}>{f.label}</span>
                <div style={{ flex: 1, height: 16, background: 'var(--bg-soft)', borderRadius: 5, overflow: 'hidden' }}>
                  <div style={{ width: f.pct + '%', height: '100%', borderRadius: 5,
                    background: 'linear-gradient(90deg, var(--mint-deep), var(--mint-light))' }} />
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink)', width: 30, textAlign: 'right' }}>{f.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
window.Dashboard = Dashboard;
