/* Phone frame + low-fi screen mockups for the PinnedPhoneStory.
   iPhone-style black frame, no hand/thumb (B2B tone). Exposes to window. */

function Phone({ children, w = 236, style = {}, className = '' }) {
  const h = Math.round(w * 2.04);
  const BASE = 220;                 // design width of the inner screen
  const innerW = w - 16, innerH = h - 16;
  const scale = innerW / BASE;      // scale all content to the frame width
  const baseH = innerH / scale;     // base canvas height so it fills after scaling
  return (
    <div className={className} style={{ width: w, height: h, background: '#0A0A0F', borderRadius: Math.round(w * 0.165), padding: 8,
      boxShadow: '0 30px 70px -24px rgba(10,10,15,.5), 0 0 0 1px rgba(255,255,255,.04)', ...style }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', background: '#fff', borderRadius: Math.round(w * 0.12), overflow: 'hidden' }}>
        {/* fixed-design canvas, scaled to the frame so content never clips */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: BASE, height: baseH, transformOrigin: 'top left', transform: `scale(${scale})` }}>
          <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 58, height: 15, background: '#0A0A0F', borderRadius: 999, zIndex: 8 }}></div>
          {children}
        </div>
      </div>
    </div>
  );
}

/* tiny status bar */
function StatusBar({ dark }) {
  const c = dark ? '#fff' : '#0A0A0F';
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 16px 5px', fontSize: 10, fontWeight: 700, color: c }}>
      <span>9:41</span>
      <span style={{ display: 'flex', gap: 4, alignItems: 'center', opacity: .9 }}>
        <i data-lucide="signal" style={{ width: 12, height: 12 }}></i>
        <i data-lucide="battery-full" style={{ width: 14, height: 14 }}></i>
      </span>
    </div>
  );
}

/* SCENE 2 — incoming lead, WhatsApp-style + coach-task notification */
function LeadScreen() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#ECEFF1', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#0b8f63', paddingTop: 4 }}>
        <StatusBar dark />
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '6px 14px 12px' }}>
          <i data-lucide="chevron-left" style={{ width: 18, height: 18, color: '#fff' }}></i>
          <div style={{ width: 30, height: 30, borderRadius: 999, background: 'rgba(255,255,255,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i data-lucide="dumbbell" style={{ width: 15, height: 15, color: '#fff' }}></i>
          </div>
          <div><div style={{ color: '#fff', fontWeight: 700, fontSize: 12.5, whiteSpace: 'nowrap' }}>CrossFit Zuidlaren</div><div style={{ color: 'rgba(255,255,255,.7)', fontSize: 9.5 }}>via WhatsApp</div></div>
        </div>
      </div>

      <div style={{ flex: 1, padding: '12px 13px', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {/* coach-task notification banner */}
        <div className="lead-banner" style={{ background: 'var(--ink)', borderRadius: 12, padding: '10px 12px', display: 'flex', alignItems: 'flex-start', gap: 9, boxShadow: '0 8px 20px -10px rgba(10,10,15,.4)' }}>
          <div style={{ width: 24, height: 24, borderRadius: 7, background: 'rgba(52,211,153,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <i data-lucide="bell" style={{ width: 13, height: 13, color: 'var(--mint-light)' }}></i>
          </div>
          <div><div style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--mint-light)', marginBottom: 2 }}>NIEUWE TAAK VOOR COACH SANNE</div><div style={{ fontSize: 11, color: '#fff', lineHeight: 1.35 }}>Bel Mark Janssen binnen 24u</div></div>
        </div>

        <div style={{ alignSelf: 'flex-end', maxWidth: '88%', background: '#D9FDD3', borderRadius: '14px 14px 4px 14px', padding: '10px 12px', marginTop: 4 }}>
          <p style={{ fontSize: 11.5, lineHeight: 1.45, color: '#0A0A0F' }}>Hi Mark! Bedankt voor je interesse in CrossFit Zuidlaren. Wanneer kom je langs voor een proefles?</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 3, marginTop: 4, fontSize: 9, color: '#557' }}>09:14 <i data-lucide="check-check" style={{ width: 12, height: 12, color: 'var(--mint-deep)' }}></i></div>
        </div>
        <div style={{ alignSelf: 'center', fontSize: 9, color: '#7A8691', background: 'rgba(255,255,255,.75)', padding: '4px 10px', borderRadius: 999, fontWeight: 600 }}>47 seconden na aanvraag</div>
      </div>
    </div>
  );
}

/* SCENE 2 — member milestone + handwritten card preview */
function MilestoneScreen() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <div style={{ padding: '6px 16px 4px', display: 'flex', alignItems: 'center', gap: 7 }}>
        <i data-lucide="chevron-left" style={{ width: 17, height: 17, color: 'var(--fg3)' }}></i>
        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink)' }}>Ledenprofiel</span>
      </div>

      <div style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 11 }}>
        <div style={{ width: 42, height: 42, borderRadius: 999, background: 'var(--ink)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16 }}>L</div>
        <div><div style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em' }}>Lisa de Vries</div><div style={{ fontSize: 10.5, color: 'var(--fg3)' }}>Lid sinds maart 2024 · 99 lessen</div></div>
      </div>

      <div style={{ margin: '6px 14px', background: 'var(--mint-tint)', border: '1px solid rgba(16,185,129,.25)', borderRadius: 13, padding: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
          <i data-lucide="trophy" style={{ width: 15, height: 15, color: 'var(--mint-deep)' }}></i>
          <span style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--mint-deep)' }}>100ste les morgen</span>
        </div>
        <p style={{ fontSize: 11, color: 'var(--fg2)', lineHeight: 1.4, marginBottom: 10 }}>Verstuur een handgeschreven kaart om de mijlpaal te vieren?</p>
        <div style={{ background: 'var(--mint)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '8px 0', borderRadius: 9, textAlign: 'center' }}>Verstuur handgeschreven kaart</div>
      </div>

      <div style={{ margin: '8px 18px', background: '#FBFAF7', border: '1px solid #ECE7DD', borderRadius: 12, padding: 13, transform: 'rotate(-1.4deg)', boxShadow: '0 8px 18px -10px rgba(10,10,15,.25)' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 5 }}>Lieve Lisa,</div>
        <p style={{ fontSize: 11, color: 'var(--fg2)', lineHeight: 1.5 }}>Gefeliciteerd met je 100ste les! Geniet ervan, en tot dinsdag in de gym.</p>
        <p style={{ fontSize: 10.5, fontWeight: 600, color: 'var(--fg3)', marginTop: 7 }}>- Sanne en team Zuidlaren</p>
      </div>
    </div>
  );
}

/* Mobile dashboard — metric cards (this month) + funnel.
   Modelled on the real GymOps mobile dashboard, rebranded to CrossFit Zuidlaren. */
function DashboardScreen() {
  const p = GO.product;
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-soft)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <StatusBar />
      <div style={{ padding: '4px 14px 11px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>Dashboard</span>
            <i data-lucide="chevron-down" style={{ width: 13, height: 13, color: 'var(--fg3)' }}></i>
          </div>
          <div style={{ fontSize: 9.5, color: 'var(--fg3)' }}>Deze maand</div>
        </div>
        <div style={{ display: 'flex', gap: 9 }}>
          <i data-lucide="refresh-cw" style={{ width: 15, height: 15, color: 'var(--fg2)' }}></i>
          <i data-lucide="calendar" style={{ width: 15, height: 15, color: 'var(--fg2)' }}></i>
        </div>
      </div>

      <div style={{ padding: '0 12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {p.metrics.map(mt => (
          <div key={mt.label} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '10px 11px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }}>
              <span style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.25, paddingRight: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{mt.label}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                <i data-lucide="sparkles" style={{ width: 11, height: 11, color: 'var(--mint)' }}></i>
                <i data-lucide="maximize-2" style={{ width: 9, height: 9, color: 'var(--fg3)' }}></i>
              </div>
            </div>
            <div style={{ height: 1, background: 'var(--border)', margin: '0 0 9px' }}></div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
              <span style={{ fontSize: 21, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.03em', lineHeight: 1 }}>{mt.value}</span>
              <span style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--mint-deep)', display: 'flex', alignItems: 'center', gap: 1 }}>
                <i data-lucide="triangle" style={{ width: 8, height: 8, fill: 'var(--mint-deep)' }}></i>{mt.delta}
              </span>
            </div>
            <div style={{ fontSize: 7.5, color: 'var(--fg3)', marginTop: 6 }}>{p.mobileRange}</div>
          </div>
        ))}
      </div>

      <div style={{ margin: '9px 12px 0', background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '10px 11px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
          <span style={{ fontSize: 10.5, fontWeight: 800, color: 'var(--ink)' }}>Funnel</span>
          <span style={{ fontSize: 8, fontWeight: 700, color: 'var(--mint-deep)', background: 'var(--mint-tint)', borderRadius: 5, padding: '2px 6px' }}>Free intro pijplijn</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {p.funnel.slice(0, 4).map(f => (
            <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ fontSize: 8, color: 'var(--fg2)', width: 74, flexShrink: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{f.label}</span>
              <div style={{ flex: 1, height: 11, background: 'var(--bg-soft)', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ width: f.pct + '%', height: '100%', borderRadius: 4, background: 'linear-gradient(90deg, var(--mint-deep), var(--mint-light))' }} />
              </div>
              <span style={{ fontSize: 8, fontWeight: 700, color: 'var(--ink)', width: 22, textAlign: 'right' }}>{f.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Mobile Task Manager — pending tasks with member name, assignee + status badge.
   Modelled on the real GymOps mobile task manager, rebranded to our flow. */
function StaffScreen({ animate }) {
  const p = GO.product;
  const chips = [['Alles', false], ['Openstaand', true], ['Afgerond', false]];
  const [n, setN] = React.useState(animate ? 0 : p.tasks.length);
  const rootRef = React.useRef(null);
  const [started, setStarted] = React.useState(false);
  React.useEffect(() => {
    if (!animate) return;
    const el = rootRef.current; if (!el) return;
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setStarted(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [animate]);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [n]);
  React.useEffect(() => {
    if (!animate) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(p.tasks.length); return; }
    if (!started) return;
    let alive = true; const timers = [];
    const wait = (ms) => new Promise(r => timers.push(setTimeout(r, ms)));
    const run = async () => {
      while (alive) {
        setN(0); await wait(650);
        for (let k = 1; k <= p.tasks.length && alive; k++) { setN(k); await wait(950); }
        await wait(3000);
      }
    };
    run();
    return () => { alive = false; timers.forEach(clearTimeout); };
  }, [animate, started]);
  return (
    <div ref={rootRef} style={{ position: 'absolute', inset: 0, background: '#fff', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <StatusBar />
      <div style={{ padding: '4px 14px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>Taken</span>
        <div style={{ display: 'flex', gap: 11 }}>
          <i data-lucide="sliders-horizontal" style={{ width: 15, height: 15, color: 'var(--fg2)' }}></i>
          <i data-lucide="search" style={{ width: 15, height: 15, color: 'var(--fg2)' }}></i>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 6, padding: '0 14px 10px' }}>
        {chips.map(([t, a]) => (
          <span key={t} style={{ fontSize: 9.5, fontWeight: 700, padding: '5px 11px', borderRadius: 999,
            background: a ? 'var(--mint-tint)' : 'var(--bg-soft)', color: a ? 'var(--mint-deep)' : 'var(--fg3)',
            display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            {a && <span style={{ width: 5, height: 5, borderRadius: 999, background: 'var(--mint)' }} />}{t}
          </span>
        ))}
      </div>

      <div style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden' }}>
        {(animate ? p.tasks.slice(0, n) : p.tasks).map((tk, i) => (
          <div key={i} style={{ background: 'var(--bg-soft-2)', border: '1px solid var(--border)', borderRadius: 12, padding: 11, animation: animate ? 'taskIn .5s cubic-bezier(.16,1,.3,1) both' : undefined }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <span style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--mint-deep)' }}>{tk.who}</span>
              <span style={{ fontSize: 8.5, color: 'var(--fg3)' }}>· {tk.when}</span>
            </div>
            <div style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--ink)', lineHeight: 1.25, marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tk.title}</div>
            <p style={{ fontSize: 9.5, color: 'var(--fg3)', lineHeight: 1.4, marginBottom: 9, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{tk.body}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 8.5, fontWeight: 600, color: 'var(--fg2)', background: '#fff', border: '1px solid var(--border)', borderRadius: 999, padding: '3px 9px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <i data-lucide="user" style={{ width: 9, height: 9, color: 'var(--fg3)' }}></i> {tk.coach || p.coach}
              </span>
              <span style={{ fontSize: 8.5, fontWeight: 700, color: tk.badge === 'Verlopen' ? '#B45309' : 'var(--mint-deep)',
                background: tk.badge === 'Verlopen' ? 'rgba(245,158,11,.14)' : 'var(--mint-tint)', borderRadius: 999, padding: '3px 9px' }}>{tk.badge}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: 'absolute', right: 14, bottom: 16, width: 38, height: 38, borderRadius: 12, background: 'var(--mint)', boxShadow: 'var(--shadow-mint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <i data-lucide="plus" style={{ width: 18, height: 18, color: '#fff' }}></i>
      </div>
    </div>
  );
}

/* Mobile contact card — member profile, action row, tabs + a task.
   Modelled on the real GymOps mobile contact view, rebranded to our flow. */
function ContactScreen() {
  const c = GO.product.contact;
  const actions = [['phone', 'Bel'], ['message-circle', 'Bericht'], ['mail', 'E-mail'], ['calendar', 'Afspraak'], ['circle-dollar-sign', 'Betaling']];
  const tabs = [['Details', false], ['Taken', true], ['Afspraken', false], ['Kansen', false, '2']];
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <StatusBar />
      <div style={{ padding: '4px 14px 8px', display: 'flex', alignItems: 'center', gap: 9 }}>
        <i data-lucide="chevron-left" style={{ width: 18, height: 18, color: 'var(--fg2)', flexShrink: 0 }}></i>
        <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em', flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</span>
        <i data-lucide="more-vertical" style={{ width: 16, height: 16, color: 'var(--fg3)', flexShrink: 0 }}></i>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 14px 2px' }}>
        <span style={{ fontSize: 8.5, fontWeight: 700, color: 'var(--mint-deep)', background: 'var(--mint-tint)', borderRadius: 999, padding: '4px 9px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <i data-lucide="tag" style={{ width: 9, height: 9 }}></i>{c.tags} {c.tagMore}
        </span>
        <span style={{ fontSize: 8.5, fontWeight: 600, color: 'var(--fg2)', background: 'var(--bg-soft)', borderRadius: 999, padding: '4px 9px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <i data-lucide="user" style={{ width: 9, height: 9, color: 'var(--fg3)' }}></i>{GO.product.owner.split(' ')[0]} B.
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0 4px' }}>
        <div style={{ width: 66, height: 66, borderRadius: 999, background: 'var(--mint-tint)', color: 'var(--mint-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 23, letterSpacing: '-.02em' }}>{c.initials}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 9 }}>
          <span style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em', whiteSpace: 'nowrap' }}>{c.name}</span>
          <i data-lucide="copy" style={{ width: 12, height: 12, color: 'var(--mint-deep)' }}></i>
          <i data-lucide="map-pin" style={{ width: 12, height: 12, color: 'var(--mint-deep)' }}></i>
        </div>
        <div style={{ fontSize: 10, color: 'var(--fg3)', marginTop: 3, whiteSpace: 'nowrap' }}>{c.phone}</div>
        <div style={{ fontSize: 10, color: 'var(--fg3)', whiteSpace: 'nowrap' }}>{c.email}</div>
        <div style={{ fontSize: 9.5, color: 'var(--fg3)', marginTop: 6 }}>Volgers: <span style={{ color: 'var(--mint-deep)', fontWeight: 700 }}>+ Volgers toewijzen</span></div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 14px 10px' }}>
        {actions.map(([ic, t]) => (
          <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--bg-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i data-lucide={ic} style={{ width: 15, height: 15, color: 'var(--mint-deep)' }}></i>
            </div>
            <span style={{ fontSize: 7.5, color: 'var(--fg2)', fontWeight: 600 }}>{t}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 14, padding: '0 14px', borderBottom: '1px solid var(--border)' }}>
        {tabs.map(([t, a, n]) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '7px 0', borderBottom: '2px solid ' + (a ? 'var(--mint)' : 'transparent'), marginBottom: -1 }}>
            <span style={{ fontSize: 10, fontWeight: a ? 800 : 600, color: a ? 'var(--mint-deep)' : 'var(--fg3)' }}>{t}</span>
            {n && <span style={{ fontSize: 7.5, fontWeight: 700, color: 'var(--fg2)', background: 'var(--bg-soft)', borderRadius: 999, padding: '1px 5px' }}>{n}</span>}
          </div>
        ))}
      </div>

      <div style={{ padding: 13 }}>
        <div style={{ background: 'var(--bg-soft-2)', border: '1px solid var(--border)', borderRadius: 12, padding: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 7 }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.task.title}</span>
            <span style={{ fontSize: 8, fontWeight: 700, color: '#B45309', background: 'rgba(245,158,11,.14)', borderRadius: 999, padding: '3px 8px', flexShrink: 0 }}>Vandaag verlopen</span>
          </div>
          <p style={{ fontSize: 9.5, color: 'var(--fg3)', lineHeight: 1.45, marginBottom: 10 }}>{c.task.body}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: 8 }}>
            <div><div style={{ fontSize: 8, color: 'var(--fg3)' }}>Toegewezen aan</div><div style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--mint-deep)' }}>{GO.product.owner}</div></div>
            <div style={{ textAlign: 'right' }}><div style={{ fontSize: 8, color: 'var(--fg3)' }}>Uiterste datum</div><div style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--fg2)' }}>{c.task.due}</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* SCENE 1 — laptop with a gym website + pop-up lead form (HTML overlay so the
   form fields can "type" via scroll progress). `filled` pre-fills for static use. */
function WebsiteBg() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg, #0e1f19 0%, #0a0a0f 70%)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: '#fff', fontWeight: 800, fontSize: 13, letterSpacing: '-.01em' }}>
          <i data-lucide="dumbbell" style={{ width: 15, height: 15, color: 'var(--mint-light)' }}></i> CrossFit Zuidlaren
        </div>
        <div style={{ display: 'flex', gap: 16, color: 'rgba(255,255,255,.65)', fontSize: 11, fontWeight: 500 }}>
          <span>Lessen</span><span>Tarieven</span><span>Team</span>
          <span style={{ color: 'var(--ink)', background: 'var(--mint)', padding: '5px 11px', borderRadius: 7, fontWeight: 700 }}>Proefles</span>
        </div>
      </div>
      <div style={{ padding: '34px 28px' }}>
        <div style={{ color: 'var(--mint-light)', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', marginBottom: 10 }}>SAMEN STERKER IN ZUIDLAREN</div>
        <div style={{ color: '#fff', fontSize: 30, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.05, maxWidth: 320 }}>Word fitter, sterker en onderdeel van de gym.</div>
      </div>
    </div>
  );
}

function PopupForm({ filled }) {
  const field = (label, cls, val, req) => (
    <div style={{ marginBottom: 9 }}>
      <div style={{ fontSize: 9.5, fontWeight: 600, color: 'var(--fg3)', marginBottom: 4 }}>{label}{req && ' *'}</div>
      <div style={{ border: '1px solid var(--border-strong)', borderRadius: 8, padding: '8px 10px', minHeight: 30, fontSize: 11.5, color: 'var(--fg1)', background: '#fff', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>
        <span className={cls}>{filled ? val : ''}</span>
      </div>
    </div>
  );
  return (
    <div className="s1-popup" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '62%', maxWidth: 320, background: '#fff', borderRadius: 16, padding: 18, boxShadow: '0 30px 70px -20px rgba(0,0,0,.6)' }}>
      <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>Plan je gratis kennismaking</div>
      <p style={{ fontSize: 10.5, lineHeight: 1.5, color: 'var(--fg3)', margin: '7px 0' }}>Het is vrijblijvend, duurt 20 minuten en je hoeft niet te sporten. Na het invullen kies je direct zelf een tijd die jou past.</p>
      <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--mint-deep)', marginBottom: 13 }}>Gewoon kennismaken met een kop koffie.</p>
      {field('Volledige naam', 's1-val-name', 'Mark Janssen')}
      {field('Telefoonnummer', 's1-val-phone', '06 12 34 56 78', true)}
      {field('E-mailadres', 's1-val-email', 'mark.janssen@email.nl', true)}
      <div className="s1-btn" style={{ background: 'var(--ink)', color: '#fff', fontSize: 12.5, fontWeight: 700, padding: '11px 0', borderRadius: 9, textAlign: 'center', marginTop: 4 }}>Aanvragen</div>
    </div>
  );
}

function ConfirmCard() {
  return (
    <div className="s1-confirm" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '62%', maxWidth: 320, background: '#fff', borderRadius: 16, padding: '26px 20px', boxShadow: '0 30px 70px -20px rgba(0,0,0,.6)', textAlign: 'center' }}>
      <div style={{ width: 46, height: 46, borderRadius: 999, background: 'var(--mint-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
        <i data-lucide="check" style={{ width: 24, height: 24, color: 'var(--mint-deep)' }}></i>
      </div>
      <div style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em' }}>Bedankt Mark,</div>
      <p style={{ fontSize: 12, color: 'var(--fg3)', marginTop: 5 }}>we nemen direct contact op.</p>
    </div>
  );
}

function Laptop({ w = 580, filled = false, className = '' }) {
  const screenH = Math.round(w * 0.6);
  return (
    <div className={className} style={{ width: w }}>
      <div style={{ background: '#0A0A0F', borderRadius: '16px 16px 5px 5px', padding: 11, boxShadow: '0 40px 80px -30px rgba(10,10,15,.55), 0 0 0 1px rgba(255,255,255,.05)' }}>
        <div style={{ position: 'relative', width: '100%', height: screenH, borderRadius: 6, overflow: 'hidden', background: '#0a0a0f' }}>
          <WebsiteBg />
          <div className="s1-dim" style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,15,.5)' }}></div>
          <PopupForm filled={filled} />
          {!filled && <ConfirmCard />}
        </div>
      </div>
      {/* base / hinge */}
      <div style={{ width: w + 44, marginLeft: -22, height: 13, background: 'linear-gradient(#d4d7dd, #a9adb6)', borderRadius: '0 0 12px 12px', position: 'relative', boxShadow: '0 14px 22px -12px rgba(10,10,15,.5)' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 100, height: 6, background: '#9498a1', borderRadius: '0 0 7px 7px' }}></div>
      </div>
    </div>
  );
}

/* SCENE 1 (mobile) — phone showing the gym website with the lead form.
   Reuses the .s1-* classes so the scroll-coupled typing timeline drives it. */
function WebPhone() {
  const field = (label, cls, req) => (
    <div style={{ marginBottom: 7 }}>
      <div style={{ fontSize: 8.5, fontWeight: 600, color: 'var(--fg3)', marginBottom: 3 }}>{label}{req && ' *'}</div>
      <div style={{ border: '1px solid var(--border-strong)', borderRadius: 7, padding: '6px 9px', minHeight: 25, fontSize: 10.5, color: 'var(--fg1)', background: '#fff', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>
        <span className={cls}></span>
      </div>
    </div>
  );
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <StatusBar />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 14px 10px' }}>
        <div style={{ display: 'flex', gap: 5, alignItems: 'center', fontWeight: 800, fontSize: 11, letterSpacing: '-.01em', color: 'var(--ink)' }}>
          <i data-lucide="dumbbell" style={{ width: 13, height: 13, color: 'var(--mint-deep)' }}></i> CrossFit Zuidlaren
        </div>
        <i data-lucide="menu" style={{ width: 16, height: 16, color: 'var(--fg2)' }}></i>
      </div>
      <div style={{ background: 'linear-gradient(150deg, #0e1f19, #0a0a0f)', padding: '16px 16px 18px' }}>
        <div style={{ color: 'var(--mint-light)', fontSize: 9, fontWeight: 700, letterSpacing: '.1em', marginBottom: 6 }}>SAMEN STERKER IN ZUIDLAREN</div>
        <div style={{ color: '#fff', fontSize: 18, fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.1 }}>Word fitter en sterker in de gym.</div>
      </div>
      <div style={{ position: 'relative', flex: 1, padding: '12px 13px' }}>
        <div className="s1-popup" style={{ background: '#fff', borderRadius: 14, padding: 14, boxShadow: '0 18px 40px -16px rgba(10,10,15,.3)', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>Plan je gratis kennismaking</div>
          <p style={{ fontSize: 9.5, lineHeight: 1.45, color: 'var(--fg3)', margin: '6px 0' }}>Vrijblijvend, 20 minuten en je hoeft niet te sporten. Daarna kies je zelf een tijd.</p>
          <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--mint-deep)', marginBottom: 11 }}>Gewoon kennismaken met een kop koffie.</p>
          {field('Volledige naam', 's1-val-name')}
          {field('Telefoonnummer', 's1-val-phone', true)}
          {field('E-mailadres', 's1-val-email', true)}
          <div className="s1-btn" style={{ background: 'var(--ink)', color: '#fff', fontSize: 11.5, fontWeight: 700, padding: '10px 0', borderRadius: 8, textAlign: 'center', marginTop: 3 }}>Aanvragen</div>
        </div>
        <div className="s1-confirm" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '88%', background: '#fff', borderRadius: 14, padding: '22px 16px', boxShadow: '0 18px 40px -16px rgba(10,10,15,.35)', textAlign: 'center', border: '1px solid var(--border)' }}>
          <div style={{ width: 40, height: 40, borderRadius: 999, background: 'var(--mint-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 11px' }}>
            <i data-lucide="check" style={{ width: 21, height: 21, color: 'var(--mint-deep)' }}></i>
          </div>
          <div style={{ fontSize: 13.5, fontWeight: 800, color: 'var(--ink)' }}>Bedankt Mark,</div>
          <p style={{ fontSize: 11, color: 'var(--fg3)', marginTop: 4 }}>we nemen direct contact op.</p>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Phone, LeadScreen, MilestoneScreen, DashboardScreen, StaffScreen, ContactScreen, Laptop, PopupForm, ConfirmCard, WebPhone });
