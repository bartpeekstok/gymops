/* EventFlowStage — autoplaying "Bring-a-Friend event" graphic for the home
   website block. A laptop shows the CrossFit Zuidlaren BFF-event page; a mouse
   cursor clicks "Meld je aan", a form fills itself in (naam + met welk lid),
   then the phone slides in with a WhatsApp ("wat tof dat je komt!") and a task
   is created for the coach. Loops. Self-contained; scales to its container. */

const EVT_W = 580, EVT_H = 452;

function EventFlowStage() {
  const reduce = (typeof window !== 'undefined') && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [phase, setPhase] = React.useState('site');   // site | form | confirm | chat
  const [vals, setVals] = React.useState({ name: '', buddy: '' });
  const [active, setActive] = React.useState(null);
  const [tap, setTap] = React.useState(null);
  const [cursorOn, setCursorOn] = React.useState(false);
  const [wa, setWa] = React.useState(0);
  const wrapRef = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setStarted(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  React.useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const fit = () => {
      const big = (typeof window !== 'undefined' && window.innerWidth > 900) ? 1.12 : 1;
      setScale(Math.min(1.14, (el.clientWidth / EVT_W) * big));
    };
    fit();
    const ro = new ResizeObserver(fit); ro.observe(el);
    return () => ro.disconnect();
  }, []);

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [phase, wa, cursorOn, tap]);

  React.useEffect(() => {
    if (reduce) {
      setPhase('confirm'); setVals({ name: 'Tom de Groot', buddy: 'Mark Janssen' }); setWa(3);
      return;
    }
    if (!started) return;
    let alive = true; const timers = [];
    const wait = (ms) => new Promise(r => timers.push(setTimeout(r, ms)));
    const type = async (key, val) => {
      setActive(key);
      for (let i = 1; i <= val.length && alive; i++) { setVals(v => ({ ...v, [key]: val.slice(0, i) })); await wait(38); }
    };
    const run = async () => {
      while (alive) {
        setPhase('site'); setVals({ name: '', buddy: '' }); setActive(null); setTap(null); setCursorOn(false); setWa(0);
        await wait(800);
        setCursorOn(true); await wait(850);
        setTap('cta'); await wait(520); setTap(null);
        setPhase('form'); await wait(620);
        await type('name', 'Tom de Groot'); await wait(180);
        await type('buddy', 'Mark Janssen'); setActive(null); await wait(280);
        setTap('submit'); await wait(520); setTap(null);
        setPhase('confirm'); await wait(1000);
        setPhase('chat');
        await wait(300); setWa(1);
        await wait(300); setWa(2);
        await wait(360); setWa(3);
        await wait(2400);
        setPhase('call');
        await wait(3600);
      }
    };
    run();
    return () => { alive = false; timers.forEach(clearTimeout); };
  }, [started]);

  const formOpen = phase === 'form' || phase === 'confirm';

  const website = React.useMemo(() => (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: 'var(--ink)', fontWeight: 800, fontSize: 14, letterSpacing: '-.01em' }}>
          <i data-lucide="dumbbell" style={{ width: 15, height: 15, color: 'var(--mint-deep)' }}></i> CrossFit Zuidlaren
        </div>
        <div style={{ display: 'flex', gap: 15, color: 'var(--fg3)', fontSize: 11.5, fontWeight: 600, alignItems: 'center' }}>
          <span>Lessen</span><span>Events</span><span>Team</span>
        </div>
      </div>
      <div style={{ flex: 1, background: 'linear-gradient(105deg, rgba(8,11,10,.93) 0%, rgba(8,11,10,.72) 52%, rgba(8,11,10,.42) 100%), url(' + GO.A + 'gym-bg.jpg) center/cover', padding: '24px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ color: 'var(--mint-light)', fontSize: 11, fontWeight: 700, letterSpacing: '.12em', marginBottom: 10 }}>BRING-A-FRIEND EVENT · 14 JUNI</div>
        <div style={{ color: '#fff', fontSize: 26, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.05, maxWidth: 330 }}>Neem je buddy mee naar de gym.</div>
        <p style={{ color: 'rgba(255,255,255,.6)', fontSize: 12.5, marginTop: 8, maxWidth: 300 }}>Eén training, twee buddies. Gratis en zonder ervaring.</p>
        <div style={{ marginTop: 16, position: 'relative', alignSelf: 'flex-start' }} data-cta>
          <div style={{ background: 'var(--mint)', color: '#fff', fontWeight: 700, fontSize: 14, padding: '11px 20px', borderRadius: 10, boxShadow: 'var(--shadow-mint)' }}>Meld je aan</div>
        </div>
      </div>
    </div>
  ), []);

  const field = (label, key) => (
    <div style={{ marginBottom: 10 }}>
      <div style={{ fontSize: 9.5, fontWeight: 600, color: 'var(--fg3)', marginBottom: 3 }}>{label}</div>
      <div style={{ border: '1px solid ' + (active === key ? 'var(--mint)' : 'var(--border-strong)'), borderRadius: 7, padding: '6px 9px', height: 28, fontSize: 11.5, color: 'var(--fg1)', background: '#fff', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>
        {vals[key]}
        {active === key && <span style={{ width: 1.5, height: 13, background: 'var(--mint)', marginLeft: 1, display: 'inline-block' }}></span>}
      </div>
    </div>
  );

  const chat = (
    <div style={{ position: 'absolute', inset: 0, background: '#ECEFF1', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#0b8f63', paddingTop: 4 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 14px 3px', fontSize: 9.5, fontWeight: 700, color: '#fff' }}>
          <span>9:41</span>
          <span style={{ display: 'flex', gap: 4, alignItems: 'center', opacity: .9 }}>
            <i data-lucide="signal" style={{ width: 11, height: 11 }}></i>
            <i data-lucide="battery-full" style={{ width: 13, height: 13 }}></i>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 13px 11px' }}>
          <i data-lucide="chevron-left" style={{ width: 17, height: 17, color: '#fff' }}></i>
          <div style={{ width: 28, height: 28, borderRadius: 999, background: 'rgba(255,255,255,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i data-lucide="dumbbell" style={{ width: 14, height: 14, color: '#fff' }}></i>
          </div>
          <div><div style={{ color: '#fff', fontWeight: 700, fontSize: 12, whiteSpace: 'nowrap' }}>CrossFit Zuidlaren</div><div style={{ color: 'rgba(255,255,255,.7)', fontSize: 9 }}>via WhatsApp</div></div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '12px 12px', display: 'flex', flexDirection: 'column', gap: 9 }}>
        <div style={{ background: 'var(--ink)', borderRadius: 11, padding: '9px 11px', display: 'flex', alignItems: 'flex-start', gap: 8, boxShadow: '0 8px 20px -10px rgba(10,10,15,.4)', opacity: wa >= 1 ? 1 : 0, transform: wa >= 1 ? 'translateY(0)' : 'translateY(8px)', transition: 'opacity .4s, transform .4s' }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(52,211,153,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <i data-lucide="bell" style={{ width: 12, height: 12, color: 'var(--mint-light)' }}></i>
          </div>
          <div><div style={{ fontSize: 9, fontWeight: 700, color: 'var(--mint-light)', marginBottom: 2 }}>NIEUWE TAAK VOOR COACH SANNE</div><div style={{ fontSize: 10.5, color: '#fff', lineHeight: 1.3 }}>Bel Tom even · komt met Mark</div></div>
        </div>
        <div style={{ alignSelf: 'flex-end', maxWidth: '90%', background: '#D9FDD3', borderRadius: '13px 13px 4px 13px', padding: '9px 11px', opacity: wa >= 2 ? 1 : 0, transform: wa >= 2 ? 'translateY(0)' : 'translateY(10px)', transition: 'opacity .4s, transform .4s' }}>
          <p style={{ fontSize: 11, lineHeight: 1.4, color: '#0A0A0F' }}>Hey Tom! Wat tof dat je naar ons Bring-a-Friend Event komt. Tot zaterdag in de gym!</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 3, marginTop: 3, fontSize: 8.5, color: '#557' }}>09:14 <i data-lucide="check-check" style={{ width: 11, height: 11, color: 'var(--mint-deep)' }}></i></div>
        </div>
        <div style={{ alignSelf: 'center', fontSize: 8.5, color: '#7A8691', background: 'rgba(255,255,255,.8)', padding: '4px 10px', borderRadius: 999, fontWeight: 600, opacity: wa >= 3 ? 1 : 0, transition: 'opacity .4s' }}>automatisch verstuurd na aanmelding</div>
      </div>
    </div>
  );

  const screenH = Math.round(500 * 0.64);

  const call = (
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #0e1f19, #0a0a0f)', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff', padding: '0 16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '8px 2px 0', fontSize: 9.5, fontWeight: 700 }}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 4, opacity: .9 }}><i data-lucide="signal" style={{ width: 11, height: 11 }}></i><i data-lucide="battery-full" style={{ width: 13, height: 13 }}></i></span>
      </div>
      <div style={{ marginTop: 16, fontSize: 9, fontWeight: 800, letterSpacing: '.12em', color: 'var(--mint-light)' }}>1 DAG NA HET EVENT</div>
      <div style={{ marginTop: 22, width: 70, height: 70, borderRadius: 999, background: 'var(--mint)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 27, boxShadow: 'var(--shadow-mint)' }}>S</div>
      <div style={{ marginTop: 13, fontSize: 16, fontWeight: 800 }}>Coach Sanne</div>
      <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,.6)', marginTop: 3, display: 'flex', alignItems: 'center', gap: 5 }}><i data-lucide="phone-call" style={{ width: 11, height: 11, color: 'var(--mint-light)' }}></i> belt je nu</div>
      <div style={{ marginTop: 18, background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 13, padding: '11px 13px', fontSize: 11, lineHeight: 1.45, textAlign: 'center', color: 'rgba(255,255,255,.92)' }}>"Hey Tom! Wat vond je van het event? Zin om eens langs te komen voor een intake of proefles?"</div>
      <div style={{ marginTop: 'auto', marginBottom: 24, display: 'flex', gap: 28 }}>
        <div style={{ width: 44, height: 44, borderRadius: 999, background: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide="phone-off" style={{ width: 19, height: 19, color: '#fff' }}></i></div>
        <div style={{ width: 44, height: 44, borderRadius: 999, background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><i data-lucide="phone" style={{ width: 19, height: 19, color: '#fff' }}></i></div>
      </div>
    </div>
  );

  return (
    <div data-reveal ref={wrapRef} className="gfx-warm" style={{ width: '100%', position: 'relative' }}>
      <div style={{ width: EVT_W * scale, height: EVT_H * scale, margin: '0 auto', position: 'relative' }}>
      <div style={{ width: EVT_W, height: EVT_H, position: 'absolute', top: 0, left: 0, transformOrigin: 'top left', transform: `scale(${scale})` }}>

        {/* laptop */}
        <div style={{ position: 'absolute', left: 40, top: 8, width: 500, zIndex: 1 }}>
          <div style={{ background: '#0A0A0F', borderRadius: '16px 16px 6px 6px', padding: 10, boxShadow: '0 40px 70px -32px rgba(10,10,15,.5), 0 0 0 1px rgba(255,255,255,.05)' }}>
            <div style={{ position: 'relative', width: '100%', height: screenH, borderRadius: 6, overflow: 'hidden', background: '#fff' }}>
              {website}
              {/* mouse cursor */}
              <div style={{ position: 'absolute', left: 96, top: 214, zIndex: 6, transform: cursorOn ? 'translate(0,0)' : 'translate(78px,52px)', opacity: phase === 'site' ? 1 : 0, transition: 'transform .6s cubic-bezier(.16,1,.3,1), opacity .3s', pointerEvents: 'none' }}>
                <i data-lucide="mouse-pointer-2" style={{ width: 24, height: 24, color: '#fff', display: 'block', filter: 'drop-shadow(0 2px 5px rgba(0,0,0,.5))', transform: tap === 'cta' ? 'scale(.8)' : 'scale(1)', transition: 'transform .12s' }}></i>
              </div>
              {tap === 'cta' && <div style={{ position: 'absolute', left: 92, top: 214 }}><div className="lf-ripple"></div></div>}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,15,.5)', opacity: formOpen ? 1 : 0, transition: 'opacity .4s', pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: `translate(-50%,-50%) scale(${formOpen ? 1 : 0.94})`, opacity: formOpen ? 1 : 0, transition: 'opacity .4s, transform .4s', width: 256, background: '#fff', borderRadius: 13, padding: 16, boxShadow: '0 26px 60px -18px rgba(0,0,0,.55)' }}>
                {phase === 'confirm' ? (
                  <div style={{ textAlign: 'center', padding: '10px 0' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 999, background: 'var(--mint-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                      <i data-lucide="party-popper" style={{ width: 22, height: 22, color: 'var(--mint-deep)' }}></i>
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)' }}>Tot 14 juni, Tom!</div>
                    <p style={{ fontSize: 11.5, color: 'var(--fg3)', marginTop: 4 }}>Jij en Mark staan op de lijst.</p>
                  </div>
                ) : (
                  <React.Fragment>
                    <div style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>Meld je aan voor het BFF Event</div>
                    <p style={{ fontSize: 10, lineHeight: 1.4, color: 'var(--fg3)', margin: '5px 0 12px' }}>Zaterdag 14 juni · 10:00. Gratis.</p>
                    {field('Jouw naam', 'name')}
                    {field('Met welk lid kom je mee?', 'buddy')}
                    <div style={{ position: 'relative', marginTop: 4 }}>
                      <div style={{ background: 'var(--ink)', color: '#fff', fontSize: 12.5, fontWeight: 700, padding: '11px 0', borderRadius: 9, textAlign: 'center' }}>Aanmelden</div>
                      {tap === 'submit' && <div className="lf-ripple"></div>}
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
          <div style={{ width: 540, marginLeft: -20, height: 12, background: 'linear-gradient(#d4d7dd, #a9adb6)', borderRadius: '0 0 12px 12px', position: 'relative', boxShadow: '0 12px 22px -12px rgba(10,10,15,.5)' }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 110, height: 6, background: '#9498a1', borderRadius: '0 0 7px 7px' }}></div>
          </div>
        </div>

        {/* connector */}
        <div className="lf-connector" style={{ position: 'absolute', left: 234, top: 2, zIndex: 4, display: 'flex', alignItems: 'center', gap: 6, background: 'var(--mint)', color: '#fff', borderRadius: 999, padding: '7px 14px', fontSize: 11.5, fontWeight: 800, opacity: (phase === 'chat' || phase === 'call') ? 1 : 0, transform: (phase === 'chat' || phase === 'call') ? 'translateY(0)' : 'translateY(6px)', transition: 'opacity .45s .15s, transform .45s .15s' }}>
          <i data-lucide="zap" style={{ width: 13, height: 13 }}></i> direct opgevolgd
        </div>

        {/* phone — slides to the middle, in front of the laptop, for the appje + call */}
        <div style={{ position: 'absolute', left: 190, top: 34, zIndex: 3, opacity: (phase === 'chat' || phase === 'call') ? 1 : 0, transform: (phase === 'chat' || phase === 'call') ? 'translate(0,0) scale(1)' : 'translate(0,48px) scale(.82)', transition: 'opacity .5s cubic-bezier(.16,1,.3,1), transform .55s cubic-bezier(.16,1,.3,1)', pointerEvents: 'none' }}>
          <div className={phase === 'call' ? 'evt-ring' : ''} style={{ filter: 'drop-shadow(0 28px 46px rgba(10,10,15,.5))' }}>
            <Phone w={200}>{phase === 'call' ? call : chat}</Phone>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}

window.EventFlowStage = EventFlowStage;
