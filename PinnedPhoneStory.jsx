/* PinnedPhoneStory — pinned, scrubbed FOUR-scene story (GSAP ScrollTrigger).
   1 Laptop + lead form (scroll-coupled typing) -> 2 WhatsApp opvolging ->
   3 Lid-milestone (zoom) -> 4 Alles op één plek (fan).
   Desktop pins + scrubs; mobile stacks; reduced-motion renders scene 4 static. */
const { useRef: useStoryRef, useEffect: useStoryEffect, useState: useStoryState } = React;

const STORY = {
  scenes: [
    { eyebrow: 'LEADCAPTURE', h: 'Het begint bij een lead.', sub: 'Via je website, social of QR-code. Wij vangen elke aanvraag op.' },
    { eyebrow: 'OPVOLGING', h: 'Geen lead meer kwijt.', sub: 'Binnen één minuut WhatsApp en e-mail. Coach krijgt direct een taak om persoonlijk contact op te nemen.' },
    { eyebrow: 'LEDENBEHOUD', h: 'Geen lid meer vergeten.', sub: 'Milestones, verjaardagen en stille periodes: automatisch gesignaleerd via SportBit.' },
    { eyebrow: 'ALLES VERBONDEN', h: 'Alles op één plek.', sub: 'Lead, lid en taak in dezelfde flow. Niks staat los van elkaar.' },
  ],
};

const TYPE_FIELDS = [
  { sel: '.s1-val-name', text: 'Mark Janssen' },
  { sel: '.s1-val-phone', text: '06 12 34 56 78' },
  { sel: '.s1-val-email', text: 'mark.janssen@email.nl' },
];

function Headline({ s, cls }) {
  return (
    <div className={cls} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', willChange: 'transform, opacity' }}>
      <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '.12em', color: 'var(--mint-deep)', marginBottom: 12 }}>{s.eyebrow}</div>
      <h2 style={{ fontSize: 'clamp(28px,3.8vw,50px)', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--ink)', lineHeight: 1.04 }}>{s.h}</h2>
      <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--fg2)', maxWidth: 540, marginTop: 14 }}>{s.sub}</p>
    </div>
  );
}

function FanPhone({ rot, x, z, w = 224, children }) {
  return (
    <div className="fan-slot" style={{ position: 'absolute', transform: `translateX(${x}px) rotate(${rot}deg)`, zIndex: z, willChange: 'transform, opacity' }}>
      <div className="fan-card" style={{ willChange: 'transform, opacity' }}>
        <Phone w={w}>{children}</Phone>
      </div>
    </div>
  );
}

/* ---- pinned + scrubbed (desktop + mobile, responsive sizes) ---- */
function PinnedStory() {
  const root = useStoryRef(null);
  const small = useIsMobile(768);
  useLucide();
  const webW = small ? 230 : 300;
  const phoneW = small ? 224 : 236;
  const fanW = small ? 150 : 232;
  const fanX = small ? 118 : 250;
  const headlineH = small ? 156 : 188;
  useStoryEffect(() => {
    const g = window.gsap, ST = window.ScrollTrigger;
    if (!g || !ST) return;
    g.registerPlugin(ST);
    const zoom = small ? 1.78 : 2.4;
    const exitScale = small ? 2.0 : 2.7;
    const ctx = g.context(() => {
      g.set('.ps-h2, .ps-h3, .ps-h4', { opacity: 0, y: 26 });
      g.set('.s1-popup', { opacity: 0, scale: 0.95 });
      g.set('.s1-confirm', { opacity: 0 });
      g.set('.ps-solo', { opacity: 0, xPercent: 118, scale: 0.82 });
      g.set('.scr-milestone', { opacity: 0 });
      g.set('.ps-fan', { opacity: 0 });
      g.set('.fan-card', { opacity: 0, y: 46 });

      const typeTotal = TYPE_FIELDS.reduce((a, f) => a + f.text.length, 0);
      const proxy = { p: 0 };

      const tl = g.timeline({
        scrollTrigger: { trigger: '.ps-pin', start: 'top top', end: '+=400%', pin: true, scrub: 0.6, anticipatePin: 1 },
      });

      // SCENE 1 — form pops, types via scroll, confirms
      tl.to('.s1-popup', { opacity: 1, scale: 1, duration: 0.06 }, 0.01);
      tl.to(proxy, {
        p: 1, duration: 0.09, ease: 'none',
        onUpdate: () => {
          let n = Math.round(proxy.p * typeTotal);
          TYPE_FIELDS.forEach(f => {
            const el = root.current && root.current.querySelector(f.sel);
            const show = Math.max(0, Math.min(f.text.length, n));
            if (el) el.textContent = f.text.slice(0, show);
            n -= f.text.length;
          });
        },
      }, 0.08);
      tl.to('.s1-btn', { scale: 1.05, duration: 0.015, yoyo: true, repeat: 1 }, 0.18);
      tl.to('.s1-popup', { opacity: 0, scale: 0.97, duration: 0.03 }, 0.19);
      tl.to('.s1-confirm', { opacity: 1, duration: 0.03 }, 0.195);
      tl.to({}, { duration: 0.02 }, 0.2);

      // SCENE 1 -> 2 — laptop out left, phone in from right, headline swap
      tl.to('.s1-laptop', { xPercent: -120, scale: 0.7, opacity: 0, duration: 0.12, ease: 'power2.in' }, 0.22);
      tl.to('.s1-confirm', { opacity: 0, duration: 0.05 }, 0.22);
      tl.to('.ps-solo', { opacity: 1, xPercent: 0, scale: 1, duration: 0.13, ease: 'power2.out' }, 0.24);
      tl.to('.ps-h1', { opacity: 0, y: -26, duration: 0.08 }, 0.24);
      tl.to('.ps-h2', { opacity: 1, y: 0, duration: 0.1 }, 0.31);
      tl.to({}, { duration: 0.1 }, 0.35); // hold scene 2

      // SCENE 2 -> 3 — zoom into member detail
      tl.to('.ps-solo', { scale: zoom, yPercent: -12, duration: 0.16, ease: 'power2.inOut' }, 0.45);
      tl.to('.scr-lead', { opacity: 0, duration: 0.1 }, 0.49);
      tl.to('.scr-milestone', { opacity: 1, duration: 0.1 }, 0.51);
      tl.to('.ps-h2', { opacity: 0, y: -26, duration: 0.08 }, 0.46);
      tl.to('.ps-h3', { opacity: 1, y: 0, duration: 0.1 }, 0.54);
      tl.to({}, { duration: 0.08 }, 0.6); // hold scene 3

      // SCENE 3 -> 4 — solo out, fan in
      tl.to('.ps-solo', { opacity: 0, scale: exitScale, duration: 0.1 }, 0.68);
      tl.to('.ps-h3', { opacity: 0, y: -26, duration: 0.08 }, 0.68);
      tl.set('.ps-fan', { opacity: 1 }, 0.69);
      tl.to('.fan-card', { opacity: 1, y: 0, stagger: 0.08, duration: 0.14, ease: 'power2.out' }, 0.73);
      tl.to('.ps-h4', { opacity: 1, y: 0, duration: 0.1 }, 0.8);
    }, root);
    return () => ctx.revert();
  }, [small]);

  return (
    <section ref={root} className="ps-section" style={{ background: 'var(--bg-soft)' }}>
      <div className="ps-pin" style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: 660, height: headlineH, flexShrink: 0, padding: small ? '0 18px' : 0 }}>
          {STORY.scenes.map((s, i) => <Headline key={i} s={s} cls={'ps-h ps-h' + (i + 1)} />)}
        </div>

        <div className="ps-stage" style={{ position: 'relative', flex: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* scene 1 — phone with the gym website + lead form (desktop + mobile) */}
          <div className="s1-laptop" style={{ position: 'absolute', willChange: 'transform, opacity' }}>
            <Phone w={webW}><WebPhone /></Phone>
          </div>

          {/* scene 2 + 3 phone */}
          <div className="ps-solo" style={{ position: 'absolute', willChange: 'transform, opacity' }}>
            <Phone w={phoneW}>
              <div className="scr-lead" style={{ position: 'absolute', inset: 0 }}><LeadScreen /></div>
              <div className="scr-milestone" style={{ position: 'absolute', inset: 0 }}><MilestoneScreen /></div>
            </Phone>
          </div>

          {/* scene 4 fan */}
          <div className="ps-fan" style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FanPhone rot={-8} x={-fanX} z={1} w={fanW}><DashboardScreen /></FanPhone>
              <FanPhone rot={8} x={fanX} z={1} w={fanW}><StaffScreen /></FanPhone>
              <FanPhone rot={0} x={0} z={3} w={fanW}><ContactScreen /></FanPhone>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- mobile: four stacked blocks, no pin ---- */
function StackedStory() {
  useLucide();
  return (
    <section className="section section-soft">
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 66 }}>
        {STORY.scenes.map((s, i) => (
          <div key={i} data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 24 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '.12em', color: 'var(--mint-deep)', marginBottom: 10 }}>{s.eyebrow}</div>
              <h2 style={{ fontSize: 'clamp(25px,6.6vw,36px)', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--ink)', lineHeight: 1.06 }}>{s.h}</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.55, color: 'var(--fg2)', maxWidth: 440, margin: '12px auto 0' }}>{s.sub}</p>
            </div>
            {i === 0 && <Phone w={228}><WebPhone /></Phone>}
            {i === 1 && <Phone w={228}><LeadScreen /></Phone>}
            {i === 2 && <Phone w={228}><MilestoneScreen /></Phone>}
            {i === 3 && (
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{ transform: 'rotate(-6deg)' }}><Phone w={150}><DashboardScreen /></Phone></div>
                <div style={{ transform: 'rotate(6deg)' }}><Phone w={150}><ContactScreen /></Phone></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---- reduced motion: scene 4 static ---- */
function StaticStory() {
  useLucide();
  const s = STORY.scenes[3];
  return (
    <section className="section section-soft">
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 40 }}>
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '.12em', color: 'var(--mint-deep)', marginBottom: 12 }}>{s.eyebrow}</div>
          <h2 style={{ fontSize: 'clamp(30px,4vw,50px)', fontWeight: 800, letterSpacing: '-.03em', color: 'var(--ink)' }}>{s.h}</h2>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--fg2)', maxWidth: 540, margin: '14px auto 0' }}>{s.sub}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ transform: 'rotate(-8deg) translateX(28px)', zIndex: 1 }}><Phone w={210}><DashboardScreen /></Phone></div>
          <div style={{ zIndex: 3 }}><Phone w={224}><ContactScreen /></Phone></div>
          <div style={{ transform: 'rotate(8deg) translateX(-28px)', zIndex: 1 }}><Phone w={210}><StaffScreen /></Phone></div>
        </div>
      </div>
    </section>
  );
}

function PinnedPhoneStory() {
  const [reduce, setReduce] = useStoryState(false);
  useStoryEffect(() => { setReduce(window.matchMedia('(prefers-reduced-motion: reduce)').matches); }, []);
  if (reduce) return <StaticStory />;
  return <PinnedStory />;
}
window.PinnedPhoneStory = PinnedPhoneStory;
