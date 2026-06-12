'use client';
/* GymOps marketing site, teal V1.
   Ported 1:1 from the static design-system prototype into Next.js:
   same markup/behaviour, but compiled ahead of time with production React
   (no in-browser Babel, no DOM-mutating lucide.createIcons), so it is fast
   and stable on mobile. Components share one module scope, so the original
   cross-references (<Phone>, <FeatureRow>, GO, ...) resolve unchanged. */
import React from 'react';
import { icons } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GO, GOP } from '@/lib/site-data';

const { useState, useEffect, useRef, useMemo, useCallback, useLayoutEffect } = React;

/* Icon: React-safe replacement for the prototype's <Icon data-lucide="x"> + lucide.createIcons().
   Renders the real lucide-react SVG component so React owns the node. */
const toPascal = (s) => String(s || '').split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('');
function Icon({ 'data-lucide': dl, name, ...rest }) {
  const Cmp = icons[toPascal(dl || name)];
  return Cmp ? <Cmp {...rest} /> : null;
}

/* Scroll-reveal: adds .in when an element is in view OR has been scrolled past.
   Re-queries the DOM each pass and never drops the listener, so a fast mobile
   fling can't skip a block (the bug that left whole sections invisible).
   Respects reduced motion. */
function useReveal() {
  useEffect(() => {
    const sel = '[data-reveal],[data-reveal-stagger],.split-line';
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { document.querySelectorAll(sel).forEach((e) => e.classList.add('in')); return; }
    let raf = 0;
    const check = () => {
      const h = window.innerHeight;
      document.querySelectorAll(sel + ':not(.in)').forEach((e) => {
        // reveal as soon as the top crosses 92% of the viewport, and keep it
        // revealed once scrolled past (no bottom>0 gate that skips fast flings)
        if (e.getBoundingClientRect().top < h * 0.92) e.classList.add('in');
      });
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(check); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    check();
    const timers = [60, 200, 500, 1200].map((ms) => setTimeout(check, ms));
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, []);
}

function useLucide() { /* icons now render via <Icon>; nothing to do */ }

function SplitHeadline({ lines, className = '', style = {} }) {
  return (
    <h1 className={className} style={style}>
      {lines.map((line, li) => (
        <span className="split-line" key={li} style={{ display: 'block', transitionDelay: (li * 0.08) + 's' }}>
          {line.split(' ').map((w, wi) => (
            <span className="split-word" key={wi} style={{ transitionDelay: (li * 0.18 + wi * 0.06) + 's', marginRight: '0.28em' }}>{w}</span>
          ))}
        </span>
      ))}
    </h1>
  );
}

/* Viewport hook. SSR-safe: starts false, corrects on mount. */
function useIsMobile(bp) {
  bp = bp || 820;
  const [m, setM] = useState(false);
  useEffect(() => {
    const on = () => setM(window.innerWidth <= bp);
    window.addEventListener('resize', on, { passive: true });
    on();
    return () => window.removeEventListener('resize', on);
  }, [bp]);
  return m;
}

/* Internal link normaliser: prototype .html names -> clean Next routes. */
const route = (h) => !h ? h : h === 'index.html' ? '/' : (h.charAt(0) === '#' || h.indexOf('http') === 0) ? h : '/' + h.replace('-v1', '').replace('.html', '');

/* Externe booking-link: na het invullen van het lead-formulier sturen we de
   bezoeker hierheen om direct een tijd te kiezen. */
const BOOKING_URL = 'https://links.gymops.nl/widget/booking/9peD9aOwQ1sN9F4gOhev';

/* GoHighLevel inbound webhook: het lead-formulier duwt de gegevens hierheen. */
const GHL_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/5o3lAbdsLNLtkKEcTJYU/webhook-trigger/f7dc4dc8-1440-4c19-a9a4-e2faddd1c902';

/* Alle CTA-knoppen openen het lead-formulier i.p.v. direct door te linken.
   We gebruiken een window-event zodat elke knop de centrale modal kan openen
   zonder dat we door alle componenten heen state hoeven te rijgen. */
const LEAD_EVENT = 'gymops:open-lead-form';
const openLeadForm = () => { if (typeof window !== 'undefined') window.dispatchEvent(new Event(LEAD_EVENT)); };
const openLeadFormClick = (e) => { e.preventDefault(); openLeadForm(); };

/* ScrollScene — pins a graphic in place and turns scroll into discrete steps.
   While pinned, every bit of scroll advances `step` (0..steps-1); the graphic
   renders that step. Once the last step is reached you scroll on normally.
   children is a render function (step) => node. Reduced motion / no-JS: shows
   the final step statically and never pins. */
let gsapReady = false;
function ScrollScene({ steps, children, scenePerStep = 0.85, label }) {
  const triggerRef = useRef(null);
  const pinRef = useRef(null);
  const [step, setStep] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || steps <= 1) { setStep(steps - 1); return; }
    if (!gsapReady) { gsap.registerPlugin(ScrollTrigger); gsapReady = true; }

    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: 'center center',
      end: () => '+=' + Math.round(window.innerHeight * scenePerStep * steps),
      pin: pinRef.current,
      pinSpacing: true,
      scrub: true,
      anticipatePin: 1,
      onToggle: (self) => setPinned(self.isActive),
      onUpdate: (self) => {
        const s = Math.max(0, Math.min(steps - 1, Math.floor(self.progress * steps - 1e-6)));
        setStep((prev) => (prev === s ? prev : s));
      },
    });
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);
    const t = setTimeout(() => ScrollTrigger.refresh(), 600);
    return () => { st.kill(); window.removeEventListener('load', onLoad); clearTimeout(t); };
  }, [steps, scenePerStep]);

  return (
    <div ref={triggerRef} className="scrollscene">
      <div ref={pinRef} className={'scrollscene-pin' + (pinned ? ' is-pinned' : '')}>
        {children(step)}
        {steps > 1 && (
          <div className="scrollscene-dots" aria-hidden="true">
            {Array.from({ length: steps }).map((_, i) => (
              <span key={i} className={'ssd' + (i <= step ? ' on' : '')} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* PinnedFeature — home feature block: text on top, graphic below in a pinned
   scroll-scene the visitor scrolls through step by step. */
/* StepBadge — grote genummerde badge (1/2/3) boven de eyebrow van de drie
   home-uitlegblokken, zodat ze aansluiten op "hieronder leggen we elk van de
   drie uit". align bepaalt of de badge gecentreerd of links uitlijnt. */
function StepBadge({ num, align = 'center' }) {
  return (
    <div style={{ display: 'flex', justifyContent: align === 'center' ? 'center' : 'flex-start', marginBottom: 18 }}>
      <div style={{ width: 56, height: 56, borderRadius: 999, background: 'var(--ink)', color: 'var(--mint-light)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, fontWeight: 800, letterSpacing: '-.02em',
        boxShadow: '0 12px 28px -12px rgba(10,10,15,.45)' }}>{num}</div>
    </div>
  );
}

function PinnedFeature({ eyebrow, title, items, link, steps, renderGraphic, soft, staticStep, num }) {
  useReveal();
  const m = useIsMobile();
  const lnk = (h) => route(h);
  return (
    <section className={'section pinned-feature' + (soft ? ' section-soft' : '')} style={{ padding: m ? '52px 0 0' : '88px 0 0' }}>
      <div className="wrap">
        <div data-reveal style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          {num != null && <StepBadge num={num} />}
          <div className="eyebrow" style={{ marginBottom: 16 }}>{eyebrow}</div>
          <h2 style={{ fontSize: 'clamp(26px,3.2vw,40px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--ink)' }}>{title}</h2>
        </div>
        <div data-reveal style={{ maxWidth: 1040, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(' + items.length + ', 1fr)', gap: m ? 18 : 30, marginTop: 28 }}>
            {items.map((it, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', textAlign: 'left' }}>
                <div className="icon-chip" style={{ width: 40, height: 40, borderRadius: 12, flexShrink: 0 }}><Icon data-lucide={it.icon} style={{ width: 19, height: 19, color: 'var(--mint-deep)' }}></Icon></div>
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, color: 'var(--fg1)' }}>{it.title}</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--fg3)', marginTop: 4 }}>{it.body}</p>
                </div>
              </div>
            ))}
          </div>
          {link && <a href={lnk(link.href)} className="btn-soft" style={{ marginTop: 26 }}>{link.label}<Icon data-lucide="arrow-right"></Icon></a>}
        </div>
      </div>
      {staticStep != null ? (
        <div className="wrap" style={{ overflow: 'hidden', paddingTop: m ? 40 : 64 }}>
          <div style={{ width: '100%', maxWidth: 560, margin: '0 auto' }}>
            {renderGraphic(staticStep)}
          </div>
        </div>
      ) : (
        <ScrollScene steps={steps} label={eyebrow}>
          {(step) => (
            <div className="wrap" style={{ overflow: 'hidden' }}>
              <div style={{ width: '100%', maxWidth: 560, margin: '0 auto' }}>
                {renderGraphic(step)}
              </div>
            </div>
          )}
        </ScrollScene>
      )}
    </section>
  );
}


/* ============================ PhoneScreens.jsx ============================ */
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
        <Icon data-lucide="signal" style={{ width: 12, height: 12 }}></Icon>
        <Icon data-lucide="battery-full" style={{ width: 14, height: 14 }}></Icon>
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
          <Icon data-lucide="chevron-left" style={{ width: 18, height: 18, color: '#fff' }}></Icon>
          <div style={{ width: 30, height: 30, borderRadius: 999, background: 'rgba(255,255,255,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon data-lucide="dumbbell" style={{ width: 15, height: 15, color: '#fff' }}></Icon>
          </div>
          <div><div style={{ color: '#fff', fontWeight: 700, fontSize: 12.5, whiteSpace: 'nowrap' }}>CrossFit Zuidlaren</div><div style={{ color: 'rgba(255,255,255,.7)', fontSize: 9.5 }}>via WhatsApp</div></div>
        </div>
      </div>

      <div style={{ flex: 1, padding: '12px 13px', display: 'flex', flexDirection: 'column', gap: 9 }}>
        {/* coach-task notification banner */}
        <div className="lead-banner" style={{ background: 'var(--ink)', borderRadius: 12, padding: '10px 12px', display: 'flex', alignItems: 'flex-start', gap: 9, boxShadow: '0 8px 20px -10px rgba(10,10,15,.4)' }}>
          <div style={{ width: 24, height: 24, borderRadius: 7, background: 'rgba(52,211,153,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon data-lucide="bell" style={{ width: 13, height: 13, color: 'var(--mint-light)' }}></Icon>
          </div>
          <div><div style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--mint-light)', marginBottom: 2 }}>NIEUWE TAAK VOOR COACH SANNE</div><div style={{ fontSize: 11, color: '#fff', lineHeight: 1.35 }}>Bel Mark Janssen binnen 24u</div></div>
        </div>

        <div style={{ alignSelf: 'flex-end', maxWidth: '88%', background: '#D9FDD3', borderRadius: '14px 14px 4px 14px', padding: '10px 12px', marginTop: 4 }}>
          <p style={{ fontSize: 11.5, lineHeight: 1.45, color: '#0A0A0F' }}>Hi Mark! Bedankt voor je interesse in CrossFit Zuidlaren. Wanneer kom je langs voor een kennismaking?</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 3, marginTop: 4, fontSize: 9, color: '#557' }}>09:14 <Icon data-lucide="check-check" style={{ width: 12, height: 12, color: 'var(--mint-deep)' }}></Icon></div>
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
        <Icon data-lucide="chevron-left" style={{ width: 17, height: 17, color: 'var(--fg3)' }}></Icon>
        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink)' }}>Ledenprofiel</span>
      </div>

      <div style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 11 }}>
        <div style={{ width: 42, height: 42, borderRadius: 999, background: 'var(--ink)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16 }}>L</div>
        <div><div style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em' }}>Lisa de Vries</div><div style={{ fontSize: 10.5, color: 'var(--fg3)' }}>Lid sinds maart 2024 · 99 lessen</div></div>
      </div>

      <div style={{ margin: '6px 14px', background: 'var(--mint-tint)', border: '1px solid rgba(16,185,129,.25)', borderRadius: 13, padding: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
          <Icon data-lucide="trophy" style={{ width: 15, height: 15, color: 'var(--mint-deep)' }}></Icon>
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
            <Icon data-lucide="chevron-down" style={{ width: 13, height: 13, color: 'var(--fg3)' }}></Icon>
          </div>
          <div style={{ fontSize: 9.5, color: 'var(--fg3)' }}>Deze maand</div>
        </div>
        <div style={{ display: 'flex', gap: 9 }}>
          <Icon data-lucide="refresh-cw" style={{ width: 15, height: 15, color: 'var(--fg2)' }}></Icon>
          <Icon data-lucide="calendar" style={{ width: 15, height: 15, color: 'var(--fg2)' }}></Icon>
        </div>
      </div>

      <div style={{ padding: '0 12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {p.metrics.map(mt => (
          <div key={mt.label} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '10px 11px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 7 }}>
              <span style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--ink)', lineHeight: 1.25, paddingRight: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{mt.label}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                <Icon data-lucide="sparkles" style={{ width: 11, height: 11, color: 'var(--mint)' }}></Icon>
                <Icon data-lucide="maximize-2" style={{ width: 9, height: 9, color: 'var(--fg3)' }}></Icon>
              </div>
            </div>
            <div style={{ height: 1, background: 'var(--border)', margin: '0 0 9px' }}></div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
              <span style={{ fontSize: 21, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.03em', lineHeight: 1 }}>{mt.value}</span>
              <span style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--mint-deep)', display: 'flex', alignItems: 'center', gap: 1 }}>
                <Icon data-lucide="triangle" style={{ width: 8, height: 8, fill: 'var(--mint-deep)' }}></Icon>{mt.delta}
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

/* Mobile owner overview — open vs done task counts + per-coach progress.
   Shows the owner what's open, what's done and where it stalls. */
function TaskOverviewScreen() {
  const p = GO.product;
  const o = p.taskOverview;
  const tiles = [
    { label: 'Openstaand', value: o.open, icon: 'circle-dot', accent: false },
    { label: 'Afgerond', value: o.done, icon: 'circle-check-big', accent: true },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-soft)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <StatusBar />
      <div style={{ padding: '4px 14px 11px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>Taken</span>
            <Icon data-lucide="chevron-down" style={{ width: 13, height: 13, color: 'var(--fg3)' }}></Icon>
          </div>
          <div style={{ fontSize: 9.5, color: 'var(--fg3)' }}>Deze week</div>
        </div>
        <div style={{ display: 'flex', gap: 9 }}>
          <Icon data-lucide="sliders-horizontal" style={{ width: 15, height: 15, color: 'var(--fg2)' }}></Icon>
          <Icon data-lucide="calendar" style={{ width: 15, height: 15, color: 'var(--fg2)' }}></Icon>
        </div>
      </div>

      <div style={{ padding: '0 12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {tiles.map(t => (
          <div key={t.label} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '10px 11px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 8 }}>
              <Icon data-lucide={t.icon} style={{ width: 12, height: 12, color: t.accent ? 'var(--mint-deep)' : 'var(--fg3)' }}></Icon>
              <span style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--ink)' }}>{t.label}</span>
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: t.accent ? 'var(--mint-deep)' : 'var(--ink)', letterSpacing: '-.03em', lineHeight: 1 }}>{t.value}</div>
            <div style={{ fontSize: 7.5, color: 'var(--fg3)', marginTop: 6 }}>Deze week</div>
          </div>
        ))}
      </div>

      <div style={{ margin: '9px 12px 0', background: '#fff', border: '1px solid var(--border)', borderRadius: 12, padding: '10px 11px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
          <span style={{ fontSize: 10.5, fontWeight: 800, color: 'var(--ink)' }}>Per coach</span>
          <span style={{ fontSize: 8, fontWeight: 700, color: 'var(--mint-deep)', background: 'var(--mint-tint)', borderRadius: 5, padding: '2px 6px' }}>Afgerond</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {o.coaches.map(c => (
            <div key={c.name}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 8.5, fontWeight: 600, color: 'var(--fg2)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexShrink: 0 }}>
                  {c.flag && <span style={{ fontSize: 7.5, fontWeight: 700, color: '#B45309', background: 'rgba(245,158,11,.14)', borderRadius: 999, padding: '2px 6px' }}>{c.flag}</span>}
                  <span style={{ fontSize: 8, fontWeight: 700, color: 'var(--ink)' }}>{c.done}/{c.total}</span>
                </div>
              </div>
              <div style={{ height: 6, background: 'var(--bg-soft)', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ width: (c.done / c.total * 100) + '%', height: '100%', borderRadius: 4, background: c.flag ? 'linear-gradient(90deg, #F59E0B, #FBBF24)' : 'linear-gradient(90deg, var(--mint-deep), var(--mint-light))' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Mobile Task Manager — pending tasks with member name, assignee + status badge.
   Modelled on the real GymOps mobile task manager, rebranded to our flow. */
function StaffScreen({ animate, step, tasks: taskList }) {
  const p = GO.product;
  const tasks = taskList || p.tasks;
  const controlled = step != null;
  const chips = [['Alles', false], ['Openstaand', true], ['Afgerond', false]];
  const [n, setN] = React.useState(controlled ? 0 : (animate ? 0 : tasks.length));
  const rootRef = React.useRef(null);
  const [started, setStarted] = React.useState(false);
  React.useEffect(() => { if (controlled) setN(Math.max(0, Math.min(tasks.length, step))); }, [controlled, step, tasks.length]);
  React.useEffect(() => {
    if (!animate) return;
    const el = rootRef.current; if (!el) return;
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setStarted(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [animate]);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [n]);
  React.useEffect(() => {
    if (!animate || controlled) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(tasks.length); return; }
    if (!started) return;
    let alive = true; const timers = [];
    const wait = (ms) => new Promise(r => timers.push(setTimeout(r, ms)));
    const run = async () => {
      while (alive) {
        setN(0); await wait(650);
        for (let k = 1; k <= tasks.length && alive; k++) { setN(k); await wait(950); }
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
          <Icon data-lucide="sliders-horizontal" style={{ width: 15, height: 15, color: 'var(--fg2)' }}></Icon>
          <Icon data-lucide="search" style={{ width: 15, height: 15, color: 'var(--fg2)' }}></Icon>
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
        {((animate || controlled) ? tasks.slice(0, n) : tasks).map((tk, i) => (
          <div key={i} style={{ background: 'var(--bg-soft-2)', border: '1px solid var(--border)', borderRadius: 12, padding: 11, animation: animate ? 'taskIn .5s cubic-bezier(.16,1,.3,1) both' : undefined }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <span style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--mint-deep)' }}>{tk.who}</span>
              <span style={{ fontSize: 8.5, color: 'var(--fg3)' }}>· {tk.when}</span>
            </div>
            <div style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--ink)', lineHeight: 1.25, marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{tk.title}</div>
            <p style={{ fontSize: 9.5, color: 'var(--fg3)', lineHeight: 1.4, marginBottom: 9, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{tk.body}</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 8.5, fontWeight: 600, color: 'var(--fg2)', background: '#fff', border: '1px solid var(--border)', borderRadius: 999, padding: '3px 9px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <Icon data-lucide="user" style={{ width: 9, height: 9, color: 'var(--fg3)' }}></Icon> {tk.coach || p.coach}
              </span>
              <span style={{ fontSize: 8.5, fontWeight: 700, color: tk.badge === 'Verlopen' ? '#B45309' : 'var(--mint-deep)',
                background: tk.badge === 'Verlopen' ? 'rgba(245,158,11,.14)' : 'var(--mint-tint)', borderRadius: 999, padding: '3px 9px' }}>{tk.badge}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ position: 'absolute', right: 14, bottom: 16, width: 38, height: 38, borderRadius: 12, background: 'var(--mint)', boxShadow: 'var(--shadow-mint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon data-lucide="plus" style={{ width: 18, height: 18, color: '#fff' }}></Icon>
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
        <Icon data-lucide="chevron-left" style={{ width: 18, height: 18, color: 'var(--fg2)', flexShrink: 0 }}></Icon>
        <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em', flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</span>
        <Icon data-lucide="more-vertical" style={{ width: 16, height: 16, color: 'var(--fg3)', flexShrink: 0 }}></Icon>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 14px 2px' }}>
        <span style={{ fontSize: 8.5, fontWeight: 700, color: 'var(--mint-deep)', background: 'var(--mint-tint)', borderRadius: 999, padding: '4px 9px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <Icon data-lucide="tag" style={{ width: 9, height: 9 }}></Icon>{c.tags} {c.tagMore}
        </span>
        <span style={{ fontSize: 8.5, fontWeight: 600, color: 'var(--fg2)', background: 'var(--bg-soft)', borderRadius: 999, padding: '4px 9px', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
          <Icon data-lucide="user" style={{ width: 9, height: 9, color: 'var(--fg3)' }}></Icon>{GO.product.owner.split(' ')[0]} B.
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0 4px' }}>
        <div style={{ width: 66, height: 66, borderRadius: 999, background: 'var(--mint-tint)', color: 'var(--mint-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 23, letterSpacing: '-.02em' }}>{c.initials}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 9 }}>
          <span style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em', whiteSpace: 'nowrap' }}>{c.name}</span>
          <Icon data-lucide="copy" style={{ width: 12, height: 12, color: 'var(--mint-deep)' }}></Icon>
          <Icon data-lucide="map-pin" style={{ width: 12, height: 12, color: 'var(--mint-deep)' }}></Icon>
        </div>
        <div style={{ fontSize: 10, color: 'var(--fg3)', marginTop: 3, whiteSpace: 'nowrap' }}>{c.phone}</div>
        <div style={{ fontSize: 10, color: 'var(--fg3)', whiteSpace: 'nowrap' }}>{c.email}</div>
        <div style={{ fontSize: 9.5, color: 'var(--fg3)', marginTop: 6 }}>Volgers: <span style={{ color: 'var(--mint-deep)', fontWeight: 700 }}>+ Volgers toewijzen</span></div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 14px 10px' }}>
        {actions.map(([ic, t]) => (
          <div key={t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: 'var(--bg-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon data-lucide={ic} style={{ width: 15, height: 15, color: 'var(--mint-deep)' }}></Icon>
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
   form fields can "type" via scroll progress). `filled` pre-fills for static use.
   De site-achtergrond is de gedeelde CrossFit Zuidlaren-look. */
function WebsiteBg() {
  return <GymSiteDesktop />;
}

function PopupForm({ filled }) {
  const field = (label, cls, val, req) => (
    <div style={{ marginBottom: 6 }}>
      <div style={{ fontSize: 9, fontWeight: 600, color: 'var(--fg3)', marginBottom: 3 }}>{label}{req && ' *'}</div>
      <div style={{ border: '1px solid var(--border-strong)', borderRadius: 7, padding: '5px 9px', minHeight: 22, fontSize: 11, color: 'var(--fg1)', background: '#fff', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>
        <span className={cls}>{filled ? val : ''}</span>
      </div>
    </div>
  );
  return (
    <div className="s1-popup" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '64%', maxWidth: 300, background: '#fff', borderRadius: 14, padding: 14, boxShadow: '0 30px 70px -20px rgba(0,0,0,.6)' }}>
      <div style={{ fontSize: 13.5, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>Plan je gratis kennismaking</div>
      <p style={{ fontSize: 9.5, lineHeight: 1.45, color: 'var(--fg3)', margin: '5px 0 9px' }}>Vrijblijvend, 20 minuten en je hoeft niet te sporten.</p>
      {field('Volledige naam', 's1-val-name', 'Mark Janssen')}
      {field('Telefoonnummer', 's1-val-phone', '06 12 34 56 78', true)}
      {field('E-mailadres', 's1-val-email', 'mark.janssen@email.nl', true)}
      <div className="s1-btn" style={{ background: 'var(--ink)', color: '#fff', fontSize: 11.5, fontWeight: 700, padding: '9px 0', borderRadius: 8, textAlign: 'center', marginTop: 5 }}>Aanvragen</div>
    </div>
  );
}

function ConfirmCard() {
  return (
    <div className="s1-confirm" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '62%', maxWidth: 320, background: '#fff', borderRadius: 16, padding: '26px 20px', boxShadow: '0 30px 70px -20px rgba(0,0,0,.6)', textAlign: 'center' }}>
      <div style={{ width: 46, height: 46, borderRadius: 999, background: 'var(--mint-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
        <Icon data-lucide="check" style={{ width: 24, height: 24, color: 'var(--mint-deep)' }}></Icon>
      </div>
      <div style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em' }}>Bedankt Mark,</div>
      <p style={{ fontSize: 12, color: 'var(--fg3)', marginTop: 5 }}>we nemen direct contact op.</p>
    </div>
  );
}

/* Google-zoekresultaat voor de gym , gebruikt op de website-pagina bij
   "Gevonden in Google én AI". */
function GoogleSearchMock() {
  return (
    <MockCard w={380}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, border: '1px solid var(--border)', borderRadius: 999, padding: '11px 16px', boxShadow: 'var(--shadow-sm)' }}>
        <Icon data-lucide="search" style={{ width: 16, height: 16, color: 'var(--fg3)' }}></Icon>
        <span style={{ fontSize: 14, color: 'var(--fg1)', fontWeight: 600 }}>crossfit zuidlaren</span>
        <Icon data-lucide="mic" style={{ width: 15, height: 15, color: 'var(--mint-deep)', marginLeft: 'auto' }}></Icon>
      </div>

      <div style={{ marginTop: 16, background: 'var(--mint-tint)', borderRadius: 14, padding: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
          <Icon data-lucide="sparkles" style={{ width: 14, height: 14, color: 'var(--mint-deep)' }}></Icon>
          <span style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--mint-deep)', letterSpacing: '.02em' }}>AI-overzicht</span>
        </div>
        <p style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--fg2)' }}>CrossFit Zuidlaren is een veelzijdige box met persoonlijke coaching voor alle niveaus. Nieuwe sporters kunnen vrijblijvend een gratis kennismaking plannen.</p>
      </div>

      <div style={{ marginTop: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 7 }}>
          <div style={{ width: 26, height: 26, borderRadius: 999, background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon data-lucide="dumbbell" style={{ width: 13, height: 13, color: 'var(--mint-light)' }}></Icon>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--fg1)', lineHeight: 1.2 }}>CrossFit Zuidlaren</div>
            <div style={{ fontSize: 11, color: '#4a7a3f' }}>crossfitzuidlaren.nl</div>
          </div>
        </div>
        <div style={{ fontSize: 16, fontWeight: 600, color: '#1a3fb8', letterSpacing: '-.01em', lineHeight: 1.3 }}>CrossFit Zuidlaren , Samen sterker in Zuidlaren</div>
        <p style={{ fontSize: 12.5, lineHeight: 1.5, color: 'var(--fg3)', marginTop: 4 }}>Word fitter en sterker met persoonlijke coaching. Plan vrijblijvend je gratis kennismaking, je hoeft niet te sporten.</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 9 }}>
          <div style={{ display: 'flex', gap: 1, color: 'var(--amber)' }}>
            {Array.from({ length: 5 }).map((_, i) => <Icon key={i} data-lucide="star" style={{ width: 12, height: 12, fill: 'currentColor' }}></Icon>)}
          </div>
          <span style={{ fontSize: 11.5, color: 'var(--fg3)' }}>· Sportschool · Open nu</span>
        </div>
      </div>
    </MockCard>
  );
}

/* CrossFit Zuidlaren website-screenshot, gebruikt als scherm op alle
   laptop-graphics. De `cta`-prop wordt genegeerd (was voor de oude HTML-versie). */
function GymSiteDesktop() {
  return <img src={GO.A + 'site-home.png'} alt="CrossFit Zuidlaren website" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', background: '#191919', display: 'block' }} />;
}

/* Desktop-homepage die in de laptop van <HomeShowcase> wordt getoond. */
function SiteHomeDesktop() {
  return <GymSiteDesktop />;
}

/* Mobiele homepage-screenshot voor de telefoon in <HomeShowcase>. */
function SiteHomeMobile() {
  return <img src={GO.A + 'site-home-mobile.png'} alt="CrossFit Zuidlaren website (mobiel)" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', background: '#191919', display: 'block' }} />;
}

/* Laptop + telefoon die dezelfde homepage tonen , voor "Op maat, in jouw merk". */
function HomeShowcase() {
  const m = useIsMobile();
  const Lw = 520;
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: Lw, paddingBottom: 30 }}>
      <div style={{ background: '#0A0A0F', borderRadius: '16px 16px 5px 5px', padding: 11, boxShadow: '0 40px 80px -30px rgba(10,10,15,.55), 0 0 0 1px rgba(255,255,255,.05)' }}>
        <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', borderRadius: 6, overflow: 'hidden', background: '#191919' }}>
          <SiteHomeDesktop />
        </div>
      </div>
      <div style={{ width: 'calc(100% + 44px)', marginLeft: -22, height: 13, background: 'linear-gradient(#d4d7dd, #a9adb6)', borderRadius: '0 0 12px 12px', position: 'relative', boxShadow: '0 14px 22px -12px rgba(10,10,15,.5)' }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 100, height: 6, background: '#9498a1', borderRadius: '0 0 7px 7px' }}></div>
      </div>
      <div style={{ position: 'absolute', right: m ? -2 : -6, bottom: -10 }}>
        <Phone w={m ? 116 : 146}><SiteHomeMobile /></Phone>
      </div>
    </div>
  );
}

/* Laptop met het lead-formulier. De hele laptop (incl. formulier) wordt op een
   vaste design-breedte getekend en als geheel geschaald naar de containerbreedte,
   zodat het formulier op elk scherm netjes meeschaalt en past. */
function Laptop({ w = 580, filled = false, className = '' }) {
  const DESIGN = 580;
  const screenH = Math.round(DESIGN * 0.5625);        // 16:9, gelijk aan de andere laptops
  const LAPTOP_H = 11 + screenH + 11 + 13;            // bezel-padding + scherm + scharnier
  const ref = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const fit = () => setScale(Math.min(1, el.clientWidth / DESIGN));
    fit();
    const ro = new ResizeObserver(fit); ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div className={className} ref={ref} style={{ width: '100%', maxWidth: w, margin: '0 auto' }}>
      <div style={{ width: DESIGN * scale, height: LAPTOP_H * scale, position: 'relative', margin: '0 auto' }}>
        <div style={{ width: DESIGN, position: 'absolute', top: 0, left: 0, transformOrigin: 'top left', transform: `scale(${scale})` }}>
          <div style={{ background: '#0A0A0F', borderRadius: '16px 16px 5px 5px', padding: 11, boxShadow: '0 40px 80px -30px rgba(10,10,15,.55), 0 0 0 1px rgba(255,255,255,.05)' }}>
            <div style={{ position: 'relative', width: '100%', height: screenH, borderRadius: 6, overflow: 'hidden', background: '#191919' }}>
              <WebsiteBg />
              <div className="s1-dim" style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,15,.5)' }}></div>
              <PopupForm filled={filled} />
              {!filled && <ConfirmCard />}
            </div>
          </div>
          {/* base / hinge */}
          <div style={{ width: DESIGN + 44, marginLeft: -22, height: 13, background: 'linear-gradient(#d4d7dd, #a9adb6)', borderRadius: '0 0 12px 12px', position: 'relative', boxShadow: '0 14px 22px -12px rgba(10,10,15,.5)' }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 100, height: 6, background: '#9498a1', borderRadius: '0 0 7px 7px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* SCENE 1 (mobile) — phone die de mobiele website-screenshot toont. */
function WebPhone() {
  return <img src={GO.A + 'site-home-mobile.png'} alt="CrossFit Zuidlaren website (mobiel)" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', background: '#191919', display: 'block' }} />;
}


/* ============================ Dashboard.jsx ============================ */
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

function Dashboard({ scale = 1, variant = 'leads' }) {
  useLucide();
  const p = GO.product;
  const o = p.taskOverview;
  const tasksView = variant === 'tasks';
  const card = { background: '#fff', border: '1px solid var(--border)', borderRadius: 14, padding: 14 };
  const cardTitle = { fontSize: 11.5, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.01em', marginBottom: 12 };

  const nav = tasksView ? [
    ['layout-dashboard', 'Dashboard'], ['message-circle', 'Gesprekken'], ['calendar', 'Kalenders'],
    ['users', 'Contacten'], ['list-checks', 'Taken', true], ['__div', ''],
    ['megaphone', 'Marketing'], ['globe', 'Sites'], ['star', 'Reputatie'],
  ] : [
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
          <Icon data-lucide="chevrons-up-down" style={{ width: 12, height: 12, color: 'rgba(255,255,255,.5)', flexShrink: 0 }}></Icon>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(255,255,255,.06)', borderRadius: 8, padding: '6px 8px', marginBottom: 12 }}>
          <Icon data-lucide="search" style={{ width: 12, height: 12, color: 'rgba(255,255,255,.45)' }}></Icon>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,.45)' }}>Zoeken</span>
          <span style={{ marginLeft: 'auto', fontSize: 8.5, color: 'rgba(255,255,255,.35)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 4, padding: '1px 4px' }}>⌘K</span>
        </div>

        {nav.map(([i, t, a], k) => i === '__div'
          ? <div key={k} style={{ height: 1, background: 'rgba(255,255,255,.08)', margin: '8px 4px' }} />
          : (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 11.5, padding: '7px 8px', borderRadius: 8, marginBottom: 2,
              fontWeight: a ? 700 : 500, background: a ? 'rgba(52,211,153,.14)' : 'transparent', color: a ? 'var(--mint-light)' : 'rgba(255,255,255,.7)' }}>
              <Icon data-lucide={i} style={{ width: 14, height: 14 }}></Icon><span>{t}</span>
            </div>
          ))}

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 8, padding: '12px 4px 0' }}>
          <Icon data-lucide="settings" style={{ width: 14, height: 14, color: 'rgba(255,255,255,.6)' }}></Icon>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,.6)' }}>Instellingen</span>
        </div>
      </aside>

      {/* Content */}
      <div style={{ background: 'var(--bg-soft)', flex: 1, padding: 14, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h4 style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>{tasksView ? 'Taken' : 'Dashboard'}</h4>
          <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--fg2)', background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: '5px 9px', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <Icon data-lucide="calendar" style={{ width: 11, height: 11, color: 'var(--fg3)' }}></Icon> {tasksView ? 'Deze week' : 'Laatste 30 dagen'}
          </span>
        </div>

        {tasksView ? (
        <React.Fragment>
          {/* stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 9, marginBottom: 9 }}>
            {[
              { label: 'Openstaand', value: o.open, icon: 'circle-dot', tone: 'plain' },
              { label: 'Afgerond', value: o.done, icon: 'circle-check-big', tone: 'mint' },
              { label: 'Verlopen', value: 2, icon: 'alert-triangle', tone: 'warn' },
            ].map(t => {
              const col = t.tone === 'warn' ? '#B45309' : t.tone === 'mint' ? 'var(--mint-deep)' : 'var(--ink)';
              return (
                <div key={t.label} style={card}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 9 }}>
                    <Icon data-lucide={t.icon} style={{ width: 13, height: 13, color: t.tone === 'plain' ? 'var(--fg3)' : col }}></Icon>
                    <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--fg2)', whiteSpace: 'nowrap' }}>{t.label}</span>
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1, color: col }}>{t.value}</div>
                </div>
              );
            })}
          </div>

          {/* per coach */}
          <div style={{ ...card, marginBottom: 9 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ fontSize: 11.5, fontWeight: 800, color: 'var(--ink)' }}>Per coach</div>
              <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--mint-deep)', background: 'var(--mint-tint)', borderRadius: 6, padding: '3px 7px' }}>Afgerond</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {o.coaches.map(c => (
                <div key={c.name}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: 10, color: 'var(--fg2)' }}>{c.name}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      {c.flag && <span style={{ fontSize: 8.5, fontWeight: 700, color: '#B45309', background: 'rgba(245,158,11,.14)', borderRadius: 999, padding: '2px 7px' }}>{c.flag}</span>}
                      <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--ink)' }}>{c.done}/{c.total}</span>
                    </div>
                  </div>
                  <div style={{ height: 8, background: 'var(--bg-soft)', borderRadius: 5, overflow: 'hidden' }}>
                    <div style={{ width: (c.done / c.total * 100) + '%', height: '100%', borderRadius: 5, background: c.flag ? 'linear-gradient(90deg, #F59E0B, #FBBF24)' : 'linear-gradient(90deg, var(--mint-deep), var(--mint-light))' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
        ) : (
        <React.Fragment>
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
        </React.Fragment>
        )}
      </div>
    </div>
  );
}

/* ============================ Postcard.jsx ============================ */
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
            <Icon data-lucide="trophy" style={{ width: 22, height: 22, color: 'var(--mint-deep)' }}></Icon>
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
            <Icon data-lucide="sparkles" style={{ width: 15, height: 15, color: 'var(--mint-deep)' }}></Icon>
            <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--fg2)' }}>{L.card.foot}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================ DetailBits.jsx ============================ */
/* Shared building blocks for the GymOps feature detail pages
   (leadopvolging / ledenervaring / team-aansturing).
   FeatureRow = alternating checkerboard row; MiniGrid = compact feature grid;
   ConversionBand = the 22% -> 61% signature stat; plus a few flat mockups. */

function FeatureRow({ icon, title, body, flip, visual, soft }) {
  const m = useIsMobile();
  const text = (
    <div data-reveal style={{ flex: 1 }}>
      <div className="icon-chip" style={{ width: 56, height: 56, borderRadius: 16, marginBottom: 22 }}><Icon data-lucide={icon}></Icon></div>
      <h2 style={{ fontSize: 'clamp(24px,3vw,36px)' }}>{title}</h2>
      {body.split('\n\n').map((p, i) => (
        <p key={i} style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--fg3)', marginTop: 14, maxWidth: 460 }}>{p}</p>
      ))}
    </div>
  );
  const vis = (
    <div data-reveal className="gfx-warm" style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: 0, width: m ? '100%' : undefined }}>{visual}</div>
  );
  return (
    <section className={'section' + (soft ? ' section-soft' : '')} style={{ padding: m ? '44px 0' : '72px 0' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: m ? 36 : 72, alignItems: 'center' }}>
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
              <div className="icon-chip" style={{ marginBottom: 16 }}><Icon data-lucide={it.icon}></Icon></div>
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
    { label: 'Kennismaking geboekt', val: '740', w: 70 },
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
              {i < funnel.length - 1 && <Icon data-lucide="chevron-down" style={{ width: 18, height: 18, color: 'rgba(255,255,255,.3)' }}></Icon>}
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
            <div style={{ width: 36, height: 36, borderRadius: 999, background: 'var(--ink)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon data-lucide={ic} style={{ width: 16, height: 16 }}></Icon></div>
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
      <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--fg1)' }}>Plan je kennismaking</div>
      <p style={{ fontSize: 13, color: 'var(--fg3)', margin: '4px 0 16px' }}>Alleen tijden die jou en je coach uitkomen</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {slots.map(([t, on]) => (
          <div key={t} style={{ textAlign: 'center', padding: '14px 0', borderRadius: 12, fontSize: 14, fontWeight: 700,
            background: on ? 'var(--mint)' : 'var(--bg-soft)', color: on ? '#fff' : 'var(--fg2)', border: on ? 'none' : '1px solid var(--border)', boxShadow: on ? 'var(--shadow-mint)' : 'none' }}>{t}</div>
        ))}
      </div>
      <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--fg3)' }}>
        <Icon data-lucide="calendar-check" style={{ width: 16, height: 16, color: 'var(--mint-deep)' }}></Icon> Bevestigd bij Sander én coach Sanne
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
              {done && <Icon data-lucide="check" style={{ width: 15, height: 15, color: '#fff' }}></Icon>}
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
          {Array.from({ length: 5 }).map((_, i) => <Icon key={i} data-lucide="star" style={{ width: 16, height: 16, fill: 'currentColor' }}></Icon>)}
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
        <Icon data-lucide="arrow-down" style={{ width: 16, height: 16 }}></Icon> overgenomen door
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, background: 'var(--mint-tint)', border: '1px solid rgba(16,185,129,.25)', borderRadius: 12 }}>
        <div style={{ width: 38, height: 38, borderRadius: 999, background: 'var(--mint)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14 }}>SB</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg1)' }}>Stefan Bakker</div>
          <div style={{ fontSize: 12, color: 'var(--mint-deep)', fontWeight: 600 }}>In één klik overgenomen</div>
        </div>
        <Icon data-lucide="check-check" style={{ width: 18, height: 18, color: 'var(--mint-deep)' }}></Icon>
      </div>
    </MockCard>
  );
}


/* ============================ PageBits.jsx ============================ */
/* Shared building blocks for the inner GymOps pages. Dark hero that matches
   the home hero's treatment (dot-grid + faint mint glow), plus a small
   section-heading helper. Exposes to window. */

/* Shared header photo background with a brand-colour haze ("waas"). The gym
   photo sits at the very back via a CSS background-image (not render-blocking,
   so it never slows first paint); an ink->mint gradient washes over it in the
   GymOps brand colours so white headline text stays readable. Rendered as the
   first child of the position:relative hero containers (Hero + PageHero), with
   the existing mint glow + dot-grid layering on top. */
function HeaderBg({ position = 'center 30%' }) {
  return (
    <>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0,
        backgroundImage: 'url(' + GO.A + 'gym-header.jpg)', backgroundSize: 'cover',
        backgroundPosition: position, backgroundRepeat: 'no-repeat', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'linear-gradient(152deg, rgba(10,10,15,.93) 0%, rgba(10,10,15,.82) 46%, rgba(11,16,15,.66) 72%, rgba(16,185,129,.40) 100%)' }} />
    </>
  );
}

function PageHero({ eyebrow, title, accent, sub, cta }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--ink)', color: '#fff' }}>
      <HeaderBg />
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
            <a href={BOOKING_URL} onClick={openLeadFormClick} className="btn btn-primary">{cta.primary}<Icon data-lucide="arrow-right"></Icon></a>
            {cta.secondary && <a href={BOOKING_URL} onClick={openLeadFormClick} className="btn btn-outline-light">{cta.secondary}</a>}
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


/* ============================ LeadFormModal.jsx ============================ */
/* Lead-popup in GymOps-stijl. Opent via het window-event (openLeadForm), vraagt
   naam/e-mail/telefoon (alle verplicht), duwt de lead naar GoHighLevel en stuurt
   de bezoeker daarna door naar de booking-agenda om een tijd te kiezen. */
function LeadFormModal() {
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: '', gym: '', email: '', phone: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  useEffect(() => {
    const on = () => { setForm({ name: '', gym: '', email: '', phone: '' }); setSending(false); setOpen(true); };
    window.addEventListener(LEAD_EVENT, on);
    return () => window.removeEventListener(LEAD_EVENT, on);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;

  const submit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    const name = form.name.trim();
    const parts = name.split(/\s+/);
    const firstName = parts.shift() || '';
    const lastName = parts.join(' ');
    /* GoHighLevel weigert een text/plain body, dus sturen we expliciet JSON.
       GHL beantwoordt de CORS-preflight (Allow-Origin *), dus dit komt netjes aan.
       De reactie hoeven we niet te lezen; we sturen daarna door naar de agenda. */
    try {
      await fetch(GHL_WEBHOOK_URL, {
        method: 'POST',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName, last_name: lastName, full_name: name, name,
          email: form.email.trim(), phone: form.phone.trim(),
          gym_name: form.gym.trim(), company_name: form.gym.trim(),
          source: 'GymOps website', tags: 'website lead', tag: 'website lead',
          page: typeof window !== 'undefined' ? window.location.pathname : '',
        }),
      });
    } catch (_) { /* fire-and-forget: bezoeker mag niet vastlopen */ }
    window.location.href = BOOKING_URL;
  };

  return (
    <div className="lead-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
      <div className="lead-modal" role="dialog" aria-modal="true" aria-label="Plan je gratis kennismaking">
        <div className="lead-modal-head">
          {/* mint-gloed + dot-grid, identiek aan de hero */}
          <div className="lead-glow" />
          <div className="lead-dots" />
          <button type="button" className="lead-close" aria-label="Sluiten" onClick={() => setOpen(false)}>
            <Icon data-lucide="x" style={{ width: 17, height: 17 }}></Icon>
          </button>
          <div className="lead-chip"><Icon data-lucide="calendar-check" style={{ width: 22, height: 22, color: 'var(--mint-light)' }}></Icon></div>
          <div className="eyebrow eyebrow-dark lead-eyebrow" style={{ marginBottom: 10 }}>Gratis demo</div>
          <div style={{ position: 'relative', fontSize: 'clamp(20px,5.2vw,24px)', fontWeight: 800, color: '#fff', letterSpacing: '-.025em', lineHeight: 1.12, paddingRight: 24 }}>Plan een demo van 30 minuten</div>
        </div>
        <div className="lead-modal-body">
          <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--fg3)', margin: '0 0 18px' }}>We laten je zien hoe het systeem kan werken voor jouw gym. Vul je gegevens in, daarna kies je direct zelf een moment dat jou uitkomt.</p>
          <form onSubmit={submit}>
            <div className="lead-grid">
              <div>
                <label className="lead-label" htmlFor="lf-name">Naam *</label>
                <input id="lf-name" className="lead-input" type="text" required placeholder="Voornaam Achternaam" value={form.name} onChange={set('name')} autoComplete="name" />
              </div>
              <div>
                <label className="lead-label" htmlFor="lf-gym">Naam van je gym *</label>
                <input id="lf-gym" className="lead-input" type="text" required placeholder="CrossFit Zuidlaren" value={form.gym} onChange={set('gym')} autoComplete="organization" />
              </div>
              <div>
                <label className="lead-label" htmlFor="lf-email">E-mailadres *</label>
                <input id="lf-email" className="lead-input" type="email" required placeholder="naam@email.nl" value={form.email} onChange={set('email')} autoComplete="email" />
              </div>
              <div>
                <label className="lead-label" htmlFor="lf-phone">Telefoonnummer *</label>
                <input id="lf-phone" className="lead-input" type="tel" required placeholder="06 12 34 56 78" value={form.phone} onChange={set('phone')} autoComplete="tel" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 18 }} disabled={sending}>
              {sending ? 'Versturen…' : <React.Fragment>Aanvragen<Icon data-lucide="arrow-right"></Icon></React.Fragment>}
            </button>
            <p className="lead-foot" style={{ fontSize: 12, lineHeight: 1.5, color: 'var(--fg3)', textAlign: 'center', margin: '12px 0 0' }}>We nemen persoonlijk contact met je op. Geen spam.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

/* ============================ Nav.jsx ============================ */
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
  const lnk = (h) => route(h);

  const light = scrolled || open; // light bg = dark text/icons
  return (
    <React.Fragment>
    <LeadFormModal />
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
              <a href={BOOKING_URL} onClick={openLeadFormClick} className="btn btn-primary" style={{ padding: '11px 20px', fontSize: 15 }}>Plan een demo</a>
            </div>
          </React.Fragment>
        )}

        {m && (
          <button className="hamburger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
            <Icon data-lucide={open ? 'x' : 'menu'} style={{ color: light ? 'var(--ink)' : '#fff' }}></Icon>
          </button>
        )}
      </div>

      {m && open && (
        <div className="mobile-menu">
          {GO.nav.map(l => <a key={l.label} href={lnk(l.href)} onClick={() => setOpen(false)} style={l.href === current ? { color: 'var(--mint-deep)' } : undefined}>{l.label}</a>)}
          <a href={BOOKING_URL} onClick={(e) => { e.preventDefault(); setOpen(false); openLeadForm(); }} className="btn btn-primary" style={{ marginTop: 14, justifyContent: 'center' }}>Plan een demo</a>
        </div>
      )}
    </nav>
    </React.Fragment>
  );
}

/* ============================ CtaFooter.jsx ============================ */
/* Closing CTA banner + footer. noCta laat de banner weg (legal-pagina's). */
function CtaFooter({ noCta }) {
  useLucide();
  const m = useIsMobile();
  const C = GO.cta;
  const V1 = typeof window !== 'undefined' && window.__V1;
  const lnk = (h) => route(h);
  return (
    <React.Fragment>
      {/* CTA banner */}
      {!noCta && <section style={{ background: '#fff', padding: '0 0 96px' }}>
        <div className="wrap">
          <div data-reveal style={{ position: 'relative', overflow: 'hidden', background: 'var(--ink)', borderRadius: 28, padding: m ? '48px 24px' : '72px 48px', textAlign: 'center' }}>
            <div style={{ position: 'absolute', bottom: -160, left: '50%', transform: 'translateX(-50%)', width: 640, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,.28), transparent 60%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
            <h2 style={{ position: 'relative', fontSize: 'clamp(30px,3.6vw,48px)', fontWeight: 800, letterSpacing: '-.03em', color: '#fff', maxWidth: 680, margin: '0 auto' }}>{C.title}</h2>
            <p style={{ position: 'relative', fontSize: 18, color: 'rgba(255,255,255,.7)', marginTop: 18, maxWidth: 520, margin: '18px auto 0' }}>{C.sub}</p>
            <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginTop: 34 }}>
              <a href={BOOKING_URL} onClick={openLeadFormClick} className="btn btn-primary">{C.primary}<Icon data-lucide="arrow-right"></Icon></a>
              {C.secondary && <a href={BOOKING_URL} onClick={openLeadFormClick} className="btn btn-outline-light">{C.secondary}</a>}
            </div>
          </div>
        </div>
      </section>}

      {/* Footer */}
      <footer style={{ background: 'var(--ink)', color: '#fff', padding: '64px 0 40px' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: m ? '1fr 1fr' : '1.4fr 1fr 1fr 1fr', gap: m ? 30 : 40 }}>
          <div style={{ gridColumn: m ? '1 / -1' : 'auto' }}>
            <img src={GO.A + 'logo-wit.png'} alt="GymOps" style={{ height: 32, width: 'auto', marginBottom: 18 }} />
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.55)', maxWidth: 280 }}>Het alles-in-één systeem voor leadopvolging, ledenbehoud en team-aansturing. Gebouwd voor en door gym-owners.</p>
          </div>
          {[['Product', ['Leadopvolging', 'Ledenervaring', 'Website', 'Prijzen']], ['Bedrijf', ['Over ons', 'Klanten', 'Demo plannen', 'Contact']], ['Volg ons', ['Instagram', 'Facebook', 'LinkedIn']]].map(([h, items]) => (
            <div key={h}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 16 }}>{h}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {items.map(it => <a key={it} href={lnk(({ 'Prijzen': 'prijzen.html', 'Over ons': 'over-ons.html', 'Klanten': 'klanten.html', 'Leadopvolging': 'leadopvolging.html', 'Ledenervaring': 'ledenervaring.html', 'Website': 'website.html' })[it] || '#')} style={{ fontSize: 14.5, color: 'rgba(255,255,255,.75)' }}>{it}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.1)', display: 'flex', flexWrap: 'wrap', gap: '6px 12px', justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,.4)' }}>
          <span>© 2026 GymOps BV</span>
          <span aria-hidden="true">·</span>
          <span>KVK-nummer 42079442</span>
          <span aria-hidden="true">·</span>
          <a href="mailto:contact@gymops.nl" style={{ color: 'inherit' }}>contact@gymops.nl</a>
          <span aria-hidden="true">·</span>
          <a href={lnk('privacy.html')} style={{ color: 'inherit' }}>Privacy</a>
        </div>
      </footer>
    </React.Fragment>
  );
}

/* ============================ Hero.jsx ============================ */
/* Hero — deep-black contrast block. Split-word headline, two CTAs,
   dashboard mockup floated right, trusted-by marquee at the base. */
function Hero() {
  useLucide();
  const m = useIsMobile();
  const h = GO.hero;
  return (
    <header style={{ position: 'relative', background: 'var(--ink)', color: '#fff', overflow: 'hidden', paddingTop: 74 }}>
      <HeaderBg />
      {/* faint mint radial glow */}
      <div style={{ position: 'absolute', top: -160, right: -120, width: 620, height: 620, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,.22), transparent 62%)', filter: 'blur(20px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '26px 26px', pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, #000, transparent 70%)', WebkitMaskImage: 'linear-gradient(to bottom, #000, transparent 70%)' }} />

      <div className="wrap" style={{ position: 'relative', paddingTop: m ? 44 : 92, paddingBottom: m ? 48 : 104, textAlign: 'center' }}>
        <div className="eyebrow eyebrow-dark" data-reveal style={{ marginBottom: m ? 16 : 22 }}>{h.eyebrow}</div>
        <SplitHeadline lines={h.headline} style={{ fontSize: 'clamp(36px, 8vw, 74px)', fontWeight: 800, letterSpacing: '-.035em', lineHeight: 1.03, color: '#fff', maxWidth: 940, margin: '0 auto' }} />
        <p data-reveal style={{ fontSize: m ? 17 : 20, lineHeight: 1.6, whiteSpace: 'pre-line', color: 'rgba(255,255,255,.72)', maxWidth: 600, margin: (m ? 20 : 28) + 'px auto 0', transitionDelay: '.15s' }}>{h.sub}</p>
        <div data-reveal style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: m ? 28 : 38, justifyContent: 'center', transitionDelay: '.25s' }}>
          <a href={BOOKING_URL} onClick={openLeadFormClick} className="btn btn-primary">{h.primary}<Icon data-lucide="arrow-right"></Icon></a>
          {h.secondary && <a href={BOOKING_URL} onClick={openLeadFormClick} className="btn btn-outline-light">{h.secondary}</a>}
        </div>
      </div>

      {/* trusted-by marquee */}
      <div style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,.08)', padding: '26px 0 34px' }}>
        <div className="wrap"><p style={{ textAlign: 'center', fontSize: 12.5, fontWeight: 600, letterSpacing: '.04em', color: 'rgba(255,255,255,.45)', marginBottom: 22 }}>Vertrouwd door Nederlandse gyms</p></div>
        <div className="marquee">
          <div className="marquee-track">
            {[...GO.trusted, ...GO.trusted].map((l, i) => (
              <div key={i} className="mq-item"><img src={GO.A + l.src} alt={l.name} title={l.name} /></div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

/* ============================ PromiseCards.jsx ============================ */
/* PromiseSection — "Alles op één plek" section intro (heading + subheading)
   directly under the hero. The three promise cards were removed; the kop +
   subkop stay as the lead-in to the feature blocks below. */
function PromiseCards() {
  useReveal();
  const m = useIsMobile();
  return (
    <section className="section" style={{ background: '#fff', padding: m ? '54px 0 0' : '96px 0 0' }}>
      <div className="wrap">
        <div data-reveal style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Alles op één plek</div>
          <h2 style={{ fontSize: 'clamp(32px,4.6vw,56px)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.04, color: 'var(--ink)' }}>Leadopvolging, ledenervaring en team-aansturing</h2>
          <p style={{ fontSize: m ? 17 : 19, lineHeight: 1.6, color: 'var(--fg3)', maxWidth: 600, margin: '20px auto 0' }}>De drie processen waar het in jouw gym om draait, op één plek en volledig geautomatiseerd. Elke lead opgevolgd, elk lid gezien en elke taak voor je team geregeld. Naadloos gekoppeld aan SportBit. Hieronder leggen we elk van de drie uit.</p>
        </div>
        {/* connector: leidt het oog van de intro naar het eerste genummerde blok */}
        <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: m ? 38 : 56 }}>
          <div style={{ width: 2, height: m ? 44 : 64, borderRadius: 2, background: 'linear-gradient(to bottom, var(--border), var(--mint))' }} />
          <div style={{ width: 9, height: 9, borderRadius: 999, background: 'var(--mint)', boxShadow: '0 0 0 4px var(--mint-tint)' }} />
        </div>
      </div>
    </section>
  );
}

/* ============================ HighlightRow.jsx ============================ */
/* HighlightRow — reusable home checkerboard: eyebrow + title + three items
   beside a graphic, with a "meer over …" link. Mirrors the LedenervaringHome
   layout so the lead / lid / team blocks read consistently.
   flip = graphic on the left; soft = light section background. */
function HighlightRow({ eyebrow, title, items, link, visual, flip, soft }) {
  useReveal();
  useLucide();
  const m = useIsMobile();
  const V1 = typeof window !== 'undefined' && window.__V1;
  const lnk = (h) => route(h);

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
            <div className="icon-chip" style={{ width: 44, height: 44, borderRadius: 13, flexShrink: 0 }}><Icon data-lucide={it.icon} style={{ width: 20, height: 20, color: 'var(--mint-deep)' }}></Icon></div>
            <div>
              <h4 style={{ fontSize: 17, fontWeight: 700, color: 'var(--fg1)' }}>{it.title}</h4>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg3)', marginTop: 5, maxWidth: 420 }}>{it.body}</p>
            </div>
          </div>
        ))}
      </div>
      {link && <a href={lnk(link.href)} className="btn-ghost" style={{ marginTop: 28 }}>{link.label}<Icon data-lucide="arrow-right"></Icon></a>}
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

/* ============================ LedenervaringHome.jsx ============================ */
/* Home "Ledenervaring" checkerboard section. Self-contained (no DetailBits /
   PageBits dependency) so the home page never needs the inner-page building
   blocks. Uses GO.leden copy: eyebrow + title + three items + handwritten card.
   Links through to the full ledenervaring.html detail page. */
function LedenervaringHome() {
  useReveal();
  useLucide();
  const m = useIsMobile();
  const L = GO.leden;
  const V1 = typeof window !== 'undefined' && window.__V1;
  const lnk = (h) => route(h);

  // message split into visual lines so each writes sequentially (nowrap = no reflow)
  const msg = [
    { t: 'Hey Lisa,', s: 28, w: 600, c: 'var(--ink)', mt: 0, d: 0.35, du: 0.5 },
    { t: 'Wat ben jij goed bezig.', s: 21, w: 500, c: '#3a4150', mt: 12, d: 0.9, du: 0.55 },
    { t: 'Je werkt hard en het', s: 21, w: 500, c: '#3a4150', mt: 3, d: 1.5, du: 0.5 },
    { t: 'resultaat mag er zijn.', s: 21, w: 500, c: '#3a4150', mt: 3, d: 2.05, du: 0.5 },
    { t: 'Wij zijn trots op je!', s: 21, w: 500, c: '#3a4150', mt: 3, d: 2.6, du: 0.5 },
    { t: 'Team CF Zuidlaren', s: 20, w: 600, c: '#3a4150', mt: 18, d: 3.25, du: 0.5 },
  ];
  const address = ['Lisa de Boer', 'Stationsweg 7', '9471 AB  Zuidlaren'];

  const card = <div className="gfx-warm" style={{ display: 'contents' }}><Postcard /></div>;

  const head = (
    <div data-reveal style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
      <StepBadge num={2} />
      <div className="eyebrow" style={{ marginBottom: 16 }}>{L.eyebrow}</div>
      <h2 style={{ fontSize: 'clamp(26px,3.2vw,40px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--ink)' }}>{L.title}</h2>
    </div>
  );

  const text = (
    <div data-reveal style={{ flex: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        {L.items.map((it, i) => (
          <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div className="icon-chip" style={{ width: 44, height: 44, borderRadius: 13, flexShrink: 0 }}><Icon data-lucide={it.icon} style={{ width: 20, height: 20, color: 'var(--mint-deep)' }}></Icon></div>
            <div>
              <h4 style={{ fontSize: 17, fontWeight: 700, color: 'var(--fg1)' }}>{it.title}</h4>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--fg3)', marginTop: 5, maxWidth: 420 }}>{it.body}</p>
            </div>
          </div>
        ))}
      </div>
      <a href={lnk('ledenervaring.html')} className="btn-soft" style={{ marginTop: 28 }}>meer over ledenervaring<Icon data-lucide="arrow-right"></Icon></a>
    </div>
  );

  return (
    <section className="section section-soft" style={{ padding: m ? '52px 0' : '88px 0' }}>
      <div className="wrap">
        {head}
        <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: m ? 40 : 80, alignItems: m ? 'stretch' : 'center', marginTop: m ? 40 : 56 }}>
          {m ? <React.Fragment>{text}{card}</React.Fragment> : <React.Fragment>{card}{text}</React.Fragment>}
        </div>
      </div>
    </section>
  );
}

/* ============================ LeadFlow.jsx ============================ */
/* LeadFlowStage — autoplaying "van aanvraag tot eerste appje" graphic for the
   home lead block. A laptop shows the CrossFit Zuidlaren website; the visitor
   taps "Gratis kennismaking", a form fills itself in and submits, then the phone
   beside it lights up with the WhatsApp coming in. Loops. Self-contained:
   own timeline (no GSAP), scales to its container, respects reduced motion. */

const STAGE_W = 580, STAGE_H = 452;

function LeadFlowStage({ step }) {
  const controlled = step != null;
  const reduce = (typeof window !== 'undefined') && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [phase, setPhase] = React.useState('site');   // site | form | confirm | chat
  const [vals, setVals] = React.useState({ name: '', phone: '', email: '' });
  const [active, setActive] = React.useState(null);    // field currently typing
  const [tap, setTap] = React.useState(null);          // 'cta' | 'submit'
  const [wa, setWa] = React.useState(0);               // whatsapp reveal step
  const wrapRef = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { setStarted(true); io.disconnect(); } }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // responsive fit
  React.useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const fit = () => {
      const big = (typeof window !== 'undefined' && window.innerWidth > 900) ? 1.12 : 1;
      setScale(Math.min(1.14, (el.clientWidth / STAGE_W) * big));
    };
    fit();
    const ro = new ResizeObserver(fit); ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // (re)draw lucide icons only when the visible screen changes (not per keystroke)
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); }, [phase, wa]);

  // timeline
  React.useEffect(() => {
    if (controlled) {
      const PH = ['site', 'form', 'confirm', 'chat', 'call'];
      setPhase(PH[Math.max(0, Math.min(4, step))]);
      setVals(step >= 1 ? { name: 'Mark Janssen', phone: '06 12 34 56 78', email: 'mark.janssen@email.nl' } : { name: '', phone: '', email: '' });
      setActive(null); setTap(null); setWa(step >= 3 ? 3 : 0);
      return;
    }
    if (reduce) {
      setPhase('confirm');
      setVals({ name: 'Mark Janssen', phone: '06 12 34 56 78', email: 'mark.janssen@email.nl' });
      setWa(3);
      return;
    }
    if (!started) return;
    let alive = true; const timers = [];
    const wait = (ms) => new Promise(r => timers.push(setTimeout(r, ms)));
    const type = async (key, val) => {
      setActive(key);
      for (let i = 1; i <= val.length && alive; i++) {
        setVals(v => ({ ...v, [key]: val.slice(0, i) }));
        await wait(36);
      }
    };
    const run = async () => {
      while (alive) {
        setPhase('site'); setVals({ name: '', phone: '', email: '' }); setActive(null); setTap(null); setWa(0);
        await wait(1300);
        setTap('cta'); await wait(560); setTap(null);
        setPhase('form'); await wait(620);
        await type('name', 'Mark Janssen'); await wait(170);
        await type('phone', '06 12 34 56 78'); await wait(170);
        await type('email', 'mark.janssen@email.nl'); setActive(null); await wait(280);
        setTap('submit'); await wait(520); setTap(null);
        setPhase('confirm'); await wait(1000);
        setPhase('chat');
        await wait(300); setWa(1);
        await wait(280); setWa(2);
        await wait(360); setWa(3);
        await wait(2400);
        setPhase('call');
        await wait(3600);
      }
    };
    run();
    return () => { alive = false; timers.forEach(clearTimeout); };
  }, [started, step]);

  const formOpen = phase === 'form' || phase === 'confirm';

  /* ---- static website (memoised so typing re-renders don't touch it) ---- */
  const website = React.useMemo(() => <GymSiteDesktop cta="Gratis intake" />, []);

  const field = (label, key, req) => (
    <div style={{ marginBottom: 8 }}>
      <div style={{ fontSize: 9.5, fontWeight: 600, color: 'var(--fg3)', marginBottom: 3 }}>{label}{req ? ' *' : ''}</div>
      <div style={{ border: '1px solid ' + (active === key ? 'var(--mint)' : 'var(--border-strong)'), borderRadius: 7, padding: '6px 9px', height: 28, fontSize: 11.5, color: 'var(--fg1)', background: '#fff', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>
        {vals[key]}
        {active === key && <span style={{ width: 1.5, height: 13, background: 'var(--mint)', marginLeft: 1, display: 'inline-block' }}></span>}
      </div>
    </div>
  );

  /* ---- whatsapp phone content (depends on wa) ---- */
  const chat = (
    <div style={{ position: 'absolute', inset: 0, background: '#ECEFF1', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#0b8f63', paddingTop: 4 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 14px 3px', fontSize: 9.5, fontWeight: 700, color: '#fff' }}>
          <span>9:41</span>
          <span style={{ display: 'flex', gap: 4, alignItems: 'center', opacity: .9 }}>
            <Icon data-lucide="signal" style={{ width: 11, height: 11 }}></Icon>
            <Icon data-lucide="battery-full" style={{ width: 13, height: 13 }}></Icon>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 13px 11px' }}>
          <Icon data-lucide="chevron-left" style={{ width: 17, height: 17, color: '#fff' }}></Icon>
          <div style={{ width: 28, height: 28, borderRadius: 999, background: 'rgba(255,255,255,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon data-lucide="dumbbell" style={{ width: 14, height: 14, color: '#fff' }}></Icon>
          </div>
          <div><div style={{ color: '#fff', fontWeight: 700, fontSize: 12, whiteSpace: 'nowrap' }}>CrossFit Zuidlaren</div><div style={{ color: 'rgba(255,255,255,.7)', fontSize: 9 }}>via WhatsApp</div></div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '12px 12px', display: 'flex', flexDirection: 'column', gap: 9 }}>
        <div style={{ background: 'var(--ink)', borderRadius: 11, padding: '9px 11px', display: 'flex', alignItems: 'flex-start', gap: 8, boxShadow: '0 8px 20px -10px rgba(10,10,15,.4)', opacity: wa >= 1 ? 1 : 0, transform: wa >= 1 ? 'translateY(0)' : 'translateY(8px)', transition: 'opacity .4s, transform .4s' }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(52,211,153,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon data-lucide="bell" style={{ width: 12, height: 12, color: 'var(--mint-light)' }}></Icon>
          </div>
          <div><div style={{ fontSize: 9, fontWeight: 700, color: 'var(--mint-light)', marginBottom: 2 }}>NIEUWE TAAK VOOR COACH SANNE</div><div style={{ fontSize: 10.5, color: '#fff', lineHeight: 1.3 }}>Bel Mark Janssen binnen 24u</div></div>
        </div>
        <div style={{ alignSelf: 'flex-end', maxWidth: '88%', background: '#D9FDD3', borderRadius: '13px 13px 4px 13px', padding: '9px 11px', opacity: wa >= 2 ? 1 : 0, transform: wa >= 2 ? 'translateY(0)' : 'translateY(10px)', transition: 'opacity .4s, transform .4s' }}>
          <p style={{ fontSize: 11, lineHeight: 1.4, color: '#0A0A0F' }}>Hi Mark! Bedankt voor je interesse in CrossFit Zuidlaren. Wanneer kom je langs voor een kennismaking?</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 3, marginTop: 3, fontSize: 8.5, color: '#557' }}>09:14 <Icon data-lucide="check-check" style={{ width: 11, height: 11, color: 'var(--mint-deep)' }}></Icon></div>
        </div>
        <div style={{ alignSelf: 'center', fontSize: 8.5, color: '#7A8691', background: 'rgba(255,255,255,.8)', padding: '4px 10px', borderRadius: 999, fontWeight: 600, opacity: wa >= 3 ? 1 : 0, transition: 'opacity .4s' }}>binnen 1 minuut na aanvraag</div>
      </div>
    </div>
  );

  const screenH = Math.round(500 * 0.5625);

  const call = (
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #0e1f19, #0a0a0f)', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff', padding: '0 16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '8px 2px 0', fontSize: 9.5, fontWeight: 700 }}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 4, opacity: .9 }}><Icon data-lucide="signal" style={{ width: 11, height: 11 }}></Icon><Icon data-lucide="battery-full" style={{ width: 13, height: 13 }}></Icon></span>
      </div>
      <div style={{ marginTop: 16, fontSize: 9, fontWeight: 800, letterSpacing: '.12em', color: 'var(--mint-light)' }}>BINNEN 1 MINUUT</div>
      <div style={{ marginTop: 22, width: 70, height: 70, borderRadius: 999, background: 'var(--mint)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 27, boxShadow: 'var(--shadow-mint)' }}>S</div>
      <div style={{ marginTop: 13, fontSize: 16, fontWeight: 800 }}>Coach Sanne</div>
      <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,.6)', marginTop: 3, display: 'flex', alignItems: 'center', gap: 5 }}><Icon data-lucide="phone-call" style={{ width: 11, height: 11, color: 'var(--mint-light)' }}></Icon> belt je nu</div>
      <div style={{ marginTop: 18, background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 13, padding: '11px 13px', fontSize: 11, lineHeight: 1.45, textAlign: 'center', color: 'rgba(255,255,255,.92)' }}>"Hey Mark! Ik zag dat je je gegevens hebt achtergelaten. Hoe kan ik je helpen?"</div>
      <div style={{ marginTop: 'auto', marginBottom: 24, display: 'flex', gap: 28 }}>
        <div style={{ width: 44, height: 44, borderRadius: 999, background: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon data-lucide="phone-off" style={{ width: 19, height: 19, color: '#fff' }}></Icon></div>
        <div style={{ width: 44, height: 44, borderRadius: 999, background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon data-lucide="phone" style={{ width: 19, height: 19, color: '#fff' }}></Icon></div>
      </div>
    </div>
  );

  return (
    <div data-reveal ref={wrapRef} className="gfx-warm" style={{ width: '100%', position: 'relative' }}>
      <div style={{ width: STAGE_W * scale, height: STAGE_H * scale, margin: '0 auto', position: 'relative' }}>
      <div style={{ width: STAGE_W, height: STAGE_H, position: 'absolute', top: 0, left: 0, transformOrigin: 'top left', transform: `scale(${scale})` }}>

        {/* laptop (shown alone first, larger) */}
        <div style={{ position: 'absolute', left: 40, top: 8, width: 500, zIndex: 1 }}>
          <div style={{ background: '#0A0A0F', borderRadius: '16px 16px 6px 6px', padding: 10, boxShadow: '0 40px 70px -32px rgba(10,10,15,.5), 0 0 0 1px rgba(255,255,255,.05)' }}>
            <div style={{ position: 'relative', width: '100%', height: screenH, borderRadius: 6, overflow: 'hidden', background: '#fff' }}>
              {website}
              {tap === 'cta' && <div style={{ position: 'absolute', left: 100, bottom: 80 }}><div className="lf-ripple"></div></div>}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,15,.5)', opacity: formOpen ? 1 : 0, transition: 'opacity .4s', pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: `translate(-50%,-50%) scale(${formOpen ? 1 : 0.94})`, opacity: formOpen ? 1 : 0, transition: 'opacity .4s, transform .4s', width: 250, background: '#fff', borderRadius: 13, padding: 16, boxShadow: '0 26px 60px -18px rgba(0,0,0,.55)' }}>
                {phase === 'confirm' ? (
                  <div style={{ textAlign: 'center', padding: '10px 0' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 999, background: 'var(--mint-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                      <Icon data-lucide="check" style={{ width: 23, height: 23, color: 'var(--mint-deep)' }}></Icon>
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--ink)' }}>Bedankt Mark,</div>
                    <p style={{ fontSize: 11.5, color: 'var(--fg3)', marginTop: 4 }}>we nemen direct contact op.</p>
                  </div>
                ) : (
                  <React.Fragment>
                    <div style={{ fontSize: 14.5, fontWeight: 800, color: 'var(--ink)', letterSpacing: '-.02em' }}>Plan je gratis kennismaking</div>
                    <p style={{ fontSize: 10, lineHeight: 1.4, color: 'var(--fg3)', margin: '5px 0 12px' }}>Vrijblijvend en in 20 minuten.</p>
                    {field('Volledige naam', 'name')}
                    {field('Telefoonnummer', 'phone', true)}
                    {field('E-mailadres', 'email', true)}
                    <div style={{ position: 'relative', marginTop: 4 }}>
                      <div style={{ background: 'var(--ink)', color: '#fff', fontSize: 12.5, fontWeight: 700, padding: '11px 0', borderRadius: 9, textAlign: 'center' }}>Aanvragen</div>
                      {tap === 'submit' && <div className="lf-ripple"></div>}
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
          {/* hinge */}
          <div style={{ width: 540, marginLeft: -20, height: 12, background: 'linear-gradient(#d4d7dd, #a9adb6)', borderRadius: '0 0 12px 12px', position: 'relative', boxShadow: '0 12px 22px -12px rgba(10,10,15,.5)' }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 110, height: 6, background: '#9498a1', borderRadius: '0 0 7px 7px' }}></div>
          </div>
        </div>

        {/* connector — appears as the phone arrives */}
        <div className="lf-connector" style={{ position: 'absolute', left: 234, top: 2, zIndex: 4, display: 'flex', alignItems: 'center', gap: 6, background: 'var(--mint)', color: '#fff', borderRadius: 999, padding: '7px 14px', fontSize: 11.5, fontWeight: 800, opacity: (phase === 'chat' || phase === 'call') ? 1 : 0, transform: (phase === 'chat' || phase === 'call') ? 'translateY(0)' : 'translateY(6px)', transition: 'opacity .45s .15s, transform .45s .15s' }}>
          <Icon data-lucide="zap" style={{ width: 13, height: 13 }}></Icon> binnen 1 min
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


/* ============================ EventFlow.jsx ============================ */
/* EventFlowStage — autoplaying "Bring-a-Friend event" graphic for the home
   website block. A laptop shows the CrossFit Zuidlaren BFF-event page; a mouse
   cursor clicks "Meld je aan", a form fills itself in (naam + met welk lid),
   then the phone slides in with a WhatsApp ("wat tof dat je komt!") and a task
   is created for the coach. Loops. Self-contained; scales to its container. */

const EVT_W = 580, EVT_H = 452;

function EventFlowStage({ step }) {
  const controlled = step != null;
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
    if (controlled) {
      const PH = ['site', 'form', 'confirm', 'chat', 'call'];
      setPhase(PH[Math.max(0, Math.min(4, step))]);
      setVals(step >= 1 ? { name: 'Tom de Groot', buddy: 'Mark Janssen' } : { name: '', buddy: '' });
      setCursorOn(step >= 1); setActive(null); setTap(null); setWa(step >= 3 ? 3 : 0);
      return;
    }
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
  }, [started, step]);

  const formOpen = phase === 'form' || phase === 'confirm';

  const website = React.useMemo(() => (
    <img src={GO.A + 'site-event.png'} alt="CrossFit Zuidlaren event-pagina" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', background: '#191919', display: 'block' }} />
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
            <Icon data-lucide="signal" style={{ width: 11, height: 11 }}></Icon>
            <Icon data-lucide="battery-full" style={{ width: 13, height: 13 }}></Icon>
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 13px 11px' }}>
          <Icon data-lucide="chevron-left" style={{ width: 17, height: 17, color: '#fff' }}></Icon>
          <div style={{ width: 28, height: 28, borderRadius: 999, background: 'rgba(255,255,255,.22)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon data-lucide="dumbbell" style={{ width: 14, height: 14, color: '#fff' }}></Icon>
          </div>
          <div><div style={{ color: '#fff', fontWeight: 700, fontSize: 12, whiteSpace: 'nowrap' }}>CrossFit Zuidlaren</div><div style={{ color: 'rgba(255,255,255,.7)', fontSize: 9 }}>via WhatsApp</div></div>
        </div>
      </div>
      <div style={{ flex: 1, padding: '12px 12px', display: 'flex', flexDirection: 'column', gap: 9 }}>
        <div style={{ background: 'var(--ink)', borderRadius: 11, padding: '9px 11px', display: 'flex', alignItems: 'flex-start', gap: 8, boxShadow: '0 8px 20px -10px rgba(10,10,15,.4)', opacity: wa >= 1 ? 1 : 0, transform: wa >= 1 ? 'translateY(0)' : 'translateY(8px)', transition: 'opacity .4s, transform .4s' }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: 'rgba(52,211,153,.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon data-lucide="bell" style={{ width: 12, height: 12, color: 'var(--mint-light)' }}></Icon>
          </div>
          <div><div style={{ fontSize: 9, fontWeight: 700, color: 'var(--mint-light)', marginBottom: 2 }}>NIEUWE TAAK VOOR COACH SANNE</div><div style={{ fontSize: 10.5, color: '#fff', lineHeight: 1.3 }}>Bel Tom even · komt met Mark</div></div>
        </div>
        <div style={{ alignSelf: 'flex-end', maxWidth: '90%', background: '#D9FDD3', borderRadius: '13px 13px 4px 13px', padding: '9px 11px', opacity: wa >= 2 ? 1 : 0, transform: wa >= 2 ? 'translateY(0)' : 'translateY(10px)', transition: 'opacity .4s, transform .4s' }}>
          <p style={{ fontSize: 11, lineHeight: 1.4, color: '#0A0A0F' }}>Hey Tom! Wat tof dat je naar ons Bring-a-Friend Event komt. Tot zaterdag in de gym!</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 3, marginTop: 3, fontSize: 8.5, color: '#557' }}>09:14 <Icon data-lucide="check-check" style={{ width: 11, height: 11, color: 'var(--mint-deep)' }}></Icon></div>
        </div>
        <div style={{ alignSelf: 'center', fontSize: 8.5, color: '#7A8691', background: 'rgba(255,255,255,.8)', padding: '4px 10px', borderRadius: 999, fontWeight: 600, opacity: wa >= 3 ? 1 : 0, transition: 'opacity .4s' }}>automatisch verstuurd na aanmelding</div>
      </div>
    </div>
  );

  const screenH = Math.round(500 * 0.5625);

  const call = (
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #0e1f19, #0a0a0f)', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff', padding: '0 16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '8px 2px 0', fontSize: 9.5, fontWeight: 700 }}>
        <span>9:41</span>
        <span style={{ display: 'flex', gap: 4, opacity: .9 }}><Icon data-lucide="signal" style={{ width: 11, height: 11 }}></Icon><Icon data-lucide="battery-full" style={{ width: 13, height: 13 }}></Icon></span>
      </div>
      <div style={{ marginTop: 16, fontSize: 9, fontWeight: 800, letterSpacing: '.12em', color: 'var(--mint-light)' }}>1 DAG NA HET EVENT</div>
      <div style={{ marginTop: 22, width: 70, height: 70, borderRadius: 999, background: 'var(--mint)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 27, boxShadow: 'var(--shadow-mint)' }}>S</div>
      <div style={{ marginTop: 13, fontSize: 16, fontWeight: 800 }}>Coach Sanne</div>
      <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,.6)', marginTop: 3, display: 'flex', alignItems: 'center', gap: 5 }}><Icon data-lucide="phone-call" style={{ width: 11, height: 11, color: 'var(--mint-light)' }}></Icon> belt je nu</div>
      <div style={{ marginTop: 18, background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 13, padding: '11px 13px', fontSize: 11, lineHeight: 1.45, textAlign: 'center', color: 'rgba(255,255,255,.92)' }}>"Hey Tom! Wat vond je van het event? Zin om eens langs te komen voor een kennismaking?"</div>
      <div style={{ marginTop: 'auto', marginBottom: 24, display: 'flex', gap: 28 }}>
        <div style={{ width: 44, height: 44, borderRadius: 999, background: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon data-lucide="phone-off" style={{ width: 19, height: 19, color: '#fff' }}></Icon></div>
        <div style={{ width: 44, height: 44, borderRadius: 999, background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon data-lucide="phone" style={{ width: 19, height: 19, color: '#fff' }}></Icon></div>
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
                <Icon data-lucide="mouse-pointer-2" style={{ width: 24, height: 24, color: '#fff', display: 'block', filter: 'drop-shadow(0 2px 5px rgba(0,0,0,.5))', transform: tap === 'cta' ? 'scale(.8)' : 'scale(1)', transition: 'transform .12s' }}></Icon>
              </div>
              {tap === 'cta' && <div style={{ position: 'absolute', left: 92, top: 214 }}><div className="lf-ripple"></div></div>}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,15,.5)', opacity: formOpen ? 1 : 0, transition: 'opacity .4s', pointerEvents: 'none' }}></div>
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: `translate(-50%,-50%) scale(${formOpen ? 1 : 0.94})`, opacity: formOpen ? 1 : 0, transition: 'opacity .4s, transform .4s', width: 256, background: '#fff', borderRadius: 13, padding: 16, boxShadow: '0 26px 60px -18px rgba(0,0,0,.55)' }}>
                {phase === 'confirm' ? (
                  <div style={{ textAlign: 'center', padding: '10px 0' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 999, background: 'var(--mint-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                      <Icon data-lucide="party-popper" style={{ width: 22, height: 22, color: 'var(--mint-deep)' }}></Icon>
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
          <Icon data-lucide="zap" style={{ width: 13, height: 13 }}></Icon> direct opgevolgd
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


/* ============================ PlatformStrip.jsx ============================ */
/* PlatformStrip — dark emphasis band on home: GymOps draait op je laptop
   (volledig dashboard) én als app op de telefoon van je team. Reuses the
   Dashboard + Phone/StaffScreen mockups in one scaled device cluster. */
const PLAT_W = 640, PLAT_H = 420;

function DeviceCluster() {
  const wrapRef = React.useRef(null);
  const [scale, setScale] = React.useState(1);
  React.useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const fit = () => setScale(Math.min(1, el.clientWidth / PLAT_W));
    fit();
    const ro = new ResizeObserver(fit); ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={wrapRef} className="gfx-warm" style={{ width: '100%', position: 'relative' }}>
      <div style={{ width: PLAT_W * scale, height: PLAT_H * scale, margin: '0 auto', position: 'relative' }}>
        <div style={{ width: PLAT_W, height: PLAT_H, position: 'absolute', top: 0, left: 0, transformOrigin: 'top left', transform: `scale(${scale})` }}>
          {/* laptop */}
          <div style={{ position: 'absolute', left: 0, top: 8, width: 540, zIndex: 1 }}>
            <div style={{ background: '#0A0A0F', borderRadius: '14px 14px 5px 5px', padding: 10, boxShadow: '0 40px 80px -34px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.06)' }}>
              <div style={{ width: '100%', height: 332, borderRadius: 5, overflow: 'hidden', background: 'var(--bg-soft)' }}>
                <Dashboard scale={0.928} variant="tasks" />
              </div>
            </div>
            <div style={{ height: 7, background: 'linear-gradient(#1a1a1f,#0A0A0F)', borderRadius: '0 0 9px 9px', margin: '0 auto', width: '64%' }}></div>
          </div>
          {/* phone */}
          <div style={{ position: 'absolute', right: 0, bottom: 0, zIndex: 2 }}>
            <Phone w={196}><StaffScreen tasks={GO.product.memberTasks} /></Phone>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformStrip() {
  useLucide();
  const m = useIsMobile();
  const points = [
    { icon: 'monitor', title: 'Beheer alles op je laptop', body: 'Het volledige GymOps-dashboard in je browser. Leads, gesprekken, kalenders en cijfers, op elk scherm. Niets om te installeren.' },
    { icon: 'smartphone', title: 'Je team werkt in de app', body: 'Coaches pakken hun taken op via de GymOps-app op de telefoon. Een melding binnen, in één tik afgehandeld, waar ze ook zijn.' },
  ];
  return (
    <section className="section section-dark" style={{ padding: m ? '56px 0' : '92px 0' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: m ? 40 : 64, alignItems: 'center' }}>
        <div data-reveal style={{ flex: 1, minWidth: 0 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Overal bij de hand</div>
          <h2 style={{ fontSize: 'clamp(26px,3.4vw,42px)', fontWeight: 800, letterSpacing: '-.025em', color: '#fff', lineHeight: 1.06 }}>Op je laptop én in je broekzak.</h2>
          <p style={{ fontSize: m ? 16 : 18, lineHeight: 1.6, color: 'rgba(255,255,255,.65)', marginTop: 16, maxWidth: 460 }}>GymOps draait volledig in je browser op de pc, en als eigen app op de telefoon van je team. Eén systeem, overal bij de hand.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 30 }}>
            {points.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(52,211,153,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon data-lucide={p.icon} style={{ width: 20, height: 20, color: 'var(--mint-light)' }}></Icon>
                </div>
                <div>
                  <h4 style={{ fontSize: 17, fontWeight: 700, color: '#fff' }}>{p.title}</h4>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,.6)', marginTop: 5 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div data-reveal style={{ flex: 1, minWidth: 0, width: '100%' }}>
          <DeviceCluster />
        </div>
      </div>
    </section>
  );
}

/* ============================ Integrations.jsx ============================ */
/* Integrations — primary partners highlighted, secondary logo grid,
   and the Leadcapture → Kennismaking → Welkomstflow → Reviews flow strip. */
function Integrations() {
  useLucide();
  const m = useIsMobile();
  const I = GO.integrations;
  return (
    <section className="section" style={{ padding: '50px 0 104px' }}>
      <div className="wrap" style={{ textAlign: 'center', marginBottom: 52 }}>
        <div className="eyebrow" data-reveal style={{ marginBottom: 16 }}>{I.eyebrow}</div>
        <h2 data-reveal style={{ fontSize: 'clamp(28px,3.4vw,44px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--ink)', maxWidth: 720, margin: '0 auto' }}>{I.title}</h2>
      </div>

      {/* primary partners */}
      <div className="wrap" data-reveal-stagger style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 14 : 20, maxWidth: 760, marginBottom: 22 }}>
        {I.primary.map((p, i) => (
          <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 20, transitionDelay: (i * 0.08) + 's' }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: '#fff', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 9, flexShrink: 0 }}>
              <img src={GO.A + p.src} alt={p.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--ink)' }}>{p.name}</div>
              <div style={{ fontSize: 13.5, color: 'var(--fg3)', marginTop: 2 }}>{p.desc}</div>
            </div>
            <div style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 700, color: 'var(--mint-deep)', background: 'var(--mint-tint)', padding: '5px 11px', borderRadius: 999 }}>Primair</div>
          </div>
        ))}
      </div>

      {/* secondary grid */}
      <div className="wrap" data-reveal style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, maxWidth: 760 }}>
        {I.secondary.map((s, i) => (
          <div key={i} title={s.name} style={{ width: 60, height: 60, borderRadius: 14, background: '#fff', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 11 }}>
            <img src={GO.A + s.src} alt={s.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================ Testimonials.jsx ============================ */
/* Testimonials — masonry-style wall on a soft band. */
function Testimonials() {
  useLucide();
  const m = useIsMobile();
  const tab = useIsMobile(1080);
  return (
    <section className="section section-soft">
      <div className="wrap" style={{ textAlign: 'center', marginBottom: 50 }}>
        <div className="eyebrow" data-reveal style={{ marginBottom: 16 }}>Klanten</div>
        <h2 data-reveal style={{ fontSize: 'clamp(28px,3.4vw,44px)', fontWeight: 800, letterSpacing: '-.025em', color: 'var(--ink)', maxWidth: 700, margin: '0 auto' }}>
          Gebouwd voor en door gym-owners. Hier is wat ze zeggen.
        </h2>
      </div>
      <div className="wrap" data-reveal-stagger style={{ columnCount: m ? 1 : (tab ? 2 : 3), columnGap: 20, maxWidth: 1080 }}>
        {GO.testimonials.map((t, i) => (
          <div key={i} className="card" style={{ breakInside: 'avoid', marginBottom: 20, padding: 24 }}>
            {t.metric && <div style={{ display: 'inline-block', fontSize: 13, fontWeight: 800, color: 'var(--mint-deep)', background: 'var(--mint-tint)', padding: '5px 12px', borderRadius: 999, marginBottom: 14 }}>{t.metric}</div>}
            <p style={{ fontSize: 16, lineHeight: 1.5, fontWeight: 500, color: 'var(--fg1)', letterSpacing: '-.01em' }}>{t.quote}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginTop: 18 }}>
              <div style={{ width: 38, height: 38, borderRadius: 999, background: 'var(--ink)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13.5 }}>{t.initials}</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{t.name}</div>
                <div style={{ fontSize: 13, color: 'var(--fg3)' }}>{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================ Leadopvolging.jsx ============================ */
/* Leadopvolging — feature detail page. Recreated from app/leadopvolging
   in the V2 white/black/mint style: hero, 22%->61% conversion band,
   alternating feature rows with mockups, and an "en verder" grid. */
function Leadopvolging() {
  useReveal();
  useLucide();
  return (
    <React.Fragment>
      <PageHero eyebrow="GymOps Flow · Leadopvolging" title="Verander je leads" accent="in leden"
        sub="Snelheid, persoonlijk contact en consistentie. Op alle kanalen waar je leads binnenkomen, en op elk moment in de reis naar abonnement."
        cta={{ primary: 'Plan een demo' }} />

      {/* GEPARKEERD — lead scroll-story tijdelijk van de site af.
          Terugzetten? Vervang deze comment door:  <PinnedPhoneStory /> */}

      <FeatureRow icon="inbox" flip soft title="Leads vanuit elk kanaal automatisch binnen"
        body={'Website-formulier, Meta Ads, QR-codes in je gym, een DM op Instagram. Alles komt automatisch in GymOps binnen, gekoppeld aan dezelfde lead. Geen handmatig overtypen, niets dat verloren gaat tussen kanalen door.'}
        visual={<ChannelsMock />} />

      <FeatureRow icon="layout-dashboard" title="Een dashboard waar je elke lead in beeld hebt"
        body={'Open GymOps en je ziet in één oogopslag wie er nieuw binnenkwam, wie wacht op een kennismaking en wie nog opvolging nodig heeft. Per lead het kanaal, de status en het laatste contactmoment.'}
        visual={<Phone w={258}><DashboardScreen /></Phone>} />

      <FeatureRow icon="user-check" flip soft title="Persoonlijk contact blijft bij jouw coach"
        body={'Automatisering doet het werk, jouw coach maakt het persoonlijk. Bij elke nieuwe lead komt direct een taak binnen bij de juiste coach: bel of app deze persoon even op.'}
        visual={<Phone w={258}><StaffScreen /></Phone>} />

      <FeatureRow icon="calendar-check" title="Direct een kennismaking boeken zonder heen-en-weer"
        body={'Leads krijgen een persoonlijke link naar de beschikbaarheid van jou en je coaches en kiezen zelf een slot. Geen mailtjes over en weer, geen dubbele afspraken, geen lege agenda\u2019s.'}
        visual={<SlotsMock />} />

      <FeatureRow icon="repeat" flip soft title="Persistente opvolging tot er reactie is"
        body={'Krijg je iemand niet meteen te pakken? Dan stopt GymOps niet bij één poging. Opvolgberichten in een natuurlijk ritme, op het juiste tijdstip van de dag. Nooit spammerig, wel net genoeg om bovenop de stapel te blijven.'}
        visual={<FollowupMock />} />

      <MiniGrid eyebrow="En verder" title="Alles wat opvolging compleet maakt." items={[
        { icon: 'bell', title: 'Show-rate omhoog met reminders', body: 'Reminders via WhatsApp en e-mail tot je lead daadwerkelijk in je gym staat. Minder no-shows.' },
        { icon: 'tag', title: 'Jouw branding, niet die van GymOps', body: 'Elke mail, WhatsApp en agenda-uitnodiging komt uit jouw gym. Met jouw logo, toon en kleuren.' },
        { icon: 'trending-up', title: 'Na de kennismaking gaat het door', body: 'GymOps begeleidt de lead na de kennismaking richting een besluit en start automatisch de welkomstflow.' },
        { icon: 'rotate-ccw', title: 'Verloren leads opnieuw in beeld', body: 'Niet elke lead is meteen klaar. GymOps brengt ze later weer in beeld met een passend bericht.' },
        { icon: 'pen-line', title: 'Handgeschreven kaarten', body: 'Stuur met één klik een kaart met persoonlijke tekst naar een ex-lid of koude lead. Fysiek en onverwacht.' },
        { icon: 'message-circle', title: 'WhatsApp én e-mail', body: 'Mensen reageren niet altijd op een mail, maar wel op WhatsApp. Of andersom. GymOps stuurt beide.' },
      ]} />
    </React.Fragment>
  );
}

/* ============================ Ledenervaring.jsx ============================ */
/* Ledenervaring — feature detail page. Recreated from app/ledenervaring in
   the V2 style: hero, alternating feature rows (milestone, handwritten card,
   reviews, welcome flow) with mockups, and an "en verder" grid. */
function Ledenervaring() {
  useReveal();
  useLucide();
  return (
    <React.Fragment>
      <PageHero eyebrow="GymOps Flow · Ledenervaring" title="Elk lid voelt zich" accent="gezien"
        sub="Automatisering doet het werk, jij maakt het persoonlijk. GymOps signaleert het juiste moment en zorgt dat niemand zich vergeten voelt."
        cta={{ primary: 'Plan een demo' }} />

      <FeatureRow icon="trophy" title="Vergeet geen mijlpaal meer"
        body={'GymOps zorgt dat je belangrijke momenten nooit vergeet. De 100ste les, verjaardagen, persoonlijke records en andere speciale momenten worden via de SportBit-koppeling gesignaleerd en nooit meer overgeslagen.'}
        visual={<Phone w={258}><MilestoneScreen /></Phone>} />

      <FeatureRow icon="pen-line" flip soft title="Handgeschreven kaarten in 15 seconden"
        body={'Via ons systeem stuur je een handgeschreven kaart met persoonlijke tekst binnen 15 seconden, via de mobiele app of vanachter je laptop.\n\nHeeft iemand al lang geen kaartje gehad? Dan herinnert GymOps je daaraan.'}
        visual={<Postcard />} />

      <FeatureRow icon="star" title="Google reviews op het juiste moment"
        body={'Tevreden leden willen vaak best een review achterlaten, maar denken er zelf niet aan. GymOps vraagt het automatisch op piekmomenten: na een mijlpaal, na een PR, na een goede les. De meeste GymOps gyms staan al op 250+ reviews.'}
        visual={<ReviewMock />} />

      <FeatureRow icon="heart" flip soft title="Houd je trouwe leden in beeld"
        body={'Via de SportBit-koppeling weet GymOps wie er wanneer traint. Het systeem signaleert wanneer een lid even niet geweest is en zet een taak klaar bij de juiste coach. Geen massamailtje, maar een berichtje van iemand die ze kennen.'}
        visual={<Phone w={258}><ContactScreen /></Phone>} />

      <FeatureRow icon="list-checks" title="Elk ledenmoment wordt een taak voor je coach"
        body={'Een nieuw lid dat twee weken meedraait, de 100ste les, of iemand die interesse toont in personal training. GymOps signaleert het moment en zet automatisch een taak klaar bij de juiste coach. Niets blijft liggen, niemand voelt zich vergeten.'}
        visual={<Phone w={258}><StaffScreen tasks={GO.product.memberTasks} /></Phone>} />

      <MiniGrid eyebrow="En verder" title="De hele ledenervaring, geregeld." items={[
        { icon: 'sparkles', title: 'Welkomstflow voor nieuwe leden', body: 'De eerste weken zijn cruciaal. GymOps stuurt berichten op de juiste momenten en zet taken klaar voor je coach.' },
        { icon: 'mail', title: 'Branded, geen leverancier-template', body: 'Mails, kaarten en agenda-uitnodigingen komen uit jouw gym, niet uit een GymOps-template.' },
        { icon: 'message-circle-heart', title: 'Tevredenheid op het juiste moment peilen', body: 'Vraag automatisch om feedback na een les of mijlpaal. Zo weet je hoe leden het ervaren en kun je op tijd bijsturen.' },
        { icon: 'calendar-check', title: 'Slim afspraken plannen', body: 'Leden zien alleen tijden die jullie het best uitkomen. Scheelt uren per week aan mailtjes.' },
        { icon: 'bell', title: 'Show-rate omhoog met reminders', body: 'Reminders via WhatsApp en e-mail tot iemand in je gym staat. Niet te veel, net genoeg.' },
        { icon: 'rotate-ccw', title: 'Ex-leden terughalen', body: 'Kant-en-klare reactivatie-flows op een toon die past bij jouw gym. Een uitnodiging, geen spam.' },
      ]} />
    </React.Fragment>
  );
}

/* ============================ TeamAansturing.jsx ============================ */
/* Team-aansturing — feature detail page (no V1 source route; built from the
   "Geen taak vergeten" pillar copy). Hero, feature rows with the task /
   contact mockups, and an "en verder" grid. */
function TeamAansturing() {
  useReveal();
  useLucide();
  return (
    <React.Fragment>
      <PageHero eyebrow="GymOps Flow · Team-aansturing" title="Geen taak meer" accent="vergeten"
        sub="Elke taak gaat automatisch naar de juiste coach. Niet opgepakt blijft staan, en bij uitval neemt een collega in één klik over. Jij houdt overzicht."
        cta={{ primary: 'Plan een demo' }} />

      <FeatureRow icon="clock" flip soft title="Niet opgepakt vandaag? Dan blijft de taak staan"
        body={'Te druk geweest? Een taak verdwijnt niet. Hij blijft openstaan en komt morgen weer onder de aandacht, tot hij is afgehandeld. Zo glipt er niemand stilletjes tussendoor.'}
        visual={<Phone w={258}><ContactScreen /></Phone>} />

      <FeatureRow icon="users" title="Valt iemand uit? Een collega neemt over in één klik"
        body={'Gaat een coach op vakantie of valt iemand ziek uit? Openstaande taken neem je in één klik over naar een collega. Het werk loopt door, ook als de bezetting verandert.'}
        visual={<ReassignMock />} />

      <FeatureRow icon="layout-dashboard" flip soft title="Overzicht voor de eigenaar, zonder micromanagen"
        body={'Jij ziet in één oogopslag wat er speelt: welke taken open staan, wat er is afgerond en waar het stokt. Je team werkt voorspelbaar, en jij houdt de regie zonder er bovenop te hoeven zitten.'}
        visual={<Phone w={258}><TaskOverviewScreen /></Phone>} />

      <MiniGrid eyebrow="En verder" title="Een team dat voorspelbaar draait." items={[
        { icon: 'message-circle', title: 'Geen losse WhatsApp-groepjes', body: 'Alle taken en ledencontact op één plek, in plaats van verspreid over chats die niemand terugleest.' },
        { icon: 'repeat', title: 'Voorspelbaar, elke dag', body: 'Vaste flows zorgen dat dezelfde dingen op dezelfde momenten gebeuren. Niet afhankelijk van wie er toevallig aan denkt.' },
        { icon: 'shield-check', title: 'Niets glipt er tussendoor', body: 'Taken blijven staan tot ze af zijn. Geen lead, lid of moment dat ongemerkt verdwijnt.' },
      ]} />
    </React.Fragment>
  );
}

/* ============================ Website.jsx ============================ */
/* Website — feature detail page voor het "Jouw website" blok op home.
   Hero, alternerende feature-rows met de laptop/telefoon/event mockups en
   een "en verder" grid. */
function Website() {
  useReveal();
  useLucide();
  return (
    <React.Fragment>
      <PageHero eyebrow="GymOps Flow · Jouw website" title="Een website die werkt voor" accent="jouw gym"
        sub="Geen standaard thema, maar een site op maat die bezoekers omzet in kennismakingen. Gebouwd in dezelfde techniek als grote merken: snel, vindbaar en helemaal van jou."
        cta={{ primary: 'Plan een demo' }} />

      <FeatureRow icon="search" title="Gevonden in Google én AI"
        body={'Je site is technisch geoptimaliseerd voor zoekmachines en AI-assistenten. Wie zoekt naar een gym in jouw plaats, komt bij jou uit, niet bij de concurrent een dorp verderop.'}
        visual={<GoogleSearchMock />} />

      <FeatureRow icon="palette" flip soft title="Op maat, in jouw merk"
        body={'Geen page builder of WordPress-thema dat eruitziet als dat van honderd andere gyms. Een ontwerp op maat in jouw kleuren en toon, dat er op elk scherm strak uitziet.'}
        visual={<HomeShowcase />} />

      <FeatureRow icon="zap" title="Elke bezoeker wordt een lead"
        body={'Een slim formulier vangt bezoekers op het juiste moment. Wie zich aanmeldt, komt direct in GymOps binnen en wordt automatisch opgevolgd. Geen aanvraag blijft liggen.'}
        visual={<Laptop filled />} />

      <FeatureRow icon="ticket" flip soft title="Eventpagina's in vijf minuten live"
        body={'Bring-a-Friend events, hyrox-simulaties of een open dag: zet een complete eventpagina live, inclusief online betaling, bevestiging en de berichtenflows eromheen.'}
        visual={<EventFlowStage />} />

      <MiniGrid eyebrow="En verder" title="Alles rond je website, geregeld." items={[
        { icon: 'gauge', title: 'Razendsnel, ook op mobiel', body: 'Gebouwd in moderne techniek (dezelfde als bedrijven als Netflix en Spotify). Geen trage laadtijden die bezoekers wegjagen.' },
        { icon: 'wrench', title: 'Aanpassingen binnen een werkweek', body: 'Nieuwe abonnementsvorm, tariefswijziging of een nieuwe coach? Wij passen het binnen een werkweek aan. Inbegrepen, geen offertes.' },
        { icon: 'link', title: 'Naadloos gekoppeld', body: 'Je website werkt samen met SportBit en de flows van GymOps. Inschrijven, betalen en opvolgen lopen automatisch door.' },
        { icon: 'credit-card', title: 'Online betalen en inschrijven', body: 'Bezoekers boeken een kennismaking of rekenen een event direct af via iDEAL. Minder mailtjes, meer inschrijvingen.' },
        { icon: 'shield-check', title: 'Veilig en onderhoudsvrij', body: 'Hosting, beveiliging en updates regelen wij. Jij hebt er geen omkijken naar en je site is altijd up-to-date.' },
        { icon: 'chart-column', title: 'Inzicht in wat werkt', body: 'Zie waar je leads vandaan komen, zodat je weet welke kanalen het meeste opleveren voor jouw gym.' },
      ]} />
    </React.Fragment>
  );
}

/* ============================ Prijzen.jsx ============================ */
/* Prijzen page — two plan cards (Flow highlighted, Flow+Pulse coming soon),
   G2 rating, four-week onboarding timeline, and an FAQ accordion. */
function PlanCard({ p, m }) {
  const soon = p.comingSoon;
  return (
    <div data-reveal style={{
      position: 'relative', display: 'flex', flexDirection: 'column',
      background: '#fff', borderRadius: 24, padding: m ? '32px 24px' : 36,
      border: soon ? '1.5px dashed var(--border-strong)' : '2px solid var(--mint)',
      boxShadow: soon ? 'none' : 'var(--shadow-card)',
    }}>
      {p.highlighted && (
        <div style={{ position: 'absolute', top: -13, left: 32, background: 'var(--mint)', color: '#fff',
          fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 999 }}>Meest gekozen</div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: soon ? 'var(--fg3)' : 'var(--mint-deep)' }}>{p.productLabel}</span>
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', padding: '4px 9px', borderRadius: 999,
          background: soon ? '#F3F4F6' : 'var(--mint-tint)', color: soon ? 'var(--fg3)' : 'var(--mint-deep)' }}>{p.status}</span>
      </div>
      <h3 style={{ fontSize: 30, color: soon ? 'var(--fg3)' : 'var(--fg1)' }}>{p.name}</h3>
      <div style={{ marginTop: 16, display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span style={{ fontSize: soon ? 30 : 48, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1, color: soon ? 'var(--fg3)' : 'var(--fg1)' }}>{p.price}</span>
        {p.period && <span style={{ fontSize: 18, color: 'var(--fg3)' }}>{p.period}</span>}
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg3)', marginTop: 16 }}>{p.disclaimer}</p>
      {p.yearly && <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--fg3)', marginTop: 8 }}>{p.yearly}</p>}
      <a href={BOOKING_URL} onClick={openLeadFormClick} className={'btn ' + (soon ? 'btn-outline' : 'btn-primary')} style={{ marginTop: 22, justifyContent: 'center', width: '100%' }}>
        {p.cta}<Icon data-lucide={p.ctaIcon}></Icon>
      </a>
      {p.featureGroups ? (
        <div style={{ margin: '28px 0 0', padding: '24px 0 0', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 22 }}>
          {p.featureGroups.map((g, gi) => (
            <div key={gi}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 13 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, borderRadius: 8, background: soon ? '#F3F4F6' : 'var(--mint-tint)', flexShrink: 0 }}>
                  <Icon data-lucide={g.icon} style={{ width: 14, height: 14, color: soon ? 'var(--fg3)' : 'var(--mint-deep)' }}></Icon>
                </span>
                <span style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: '.06em', textTransform: 'uppercase', color: soon ? 'var(--fg3)' : 'var(--ink)' }}>{g.title}</span>
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
                {g.items.map((it, ii) => (
                  <li key={ii} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.5, color: soon ? 'var(--fg3)' : 'var(--fg2)' }}>
                    <Icon data-lucide={it.icon} style={{ width: 16, height: 16, color: soon ? 'var(--border-strong)' : 'var(--mint-deep)', flexShrink: 0, marginTop: 2 }}></Icon>{it.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul style={{ listStyle: 'none', margin: '28px 0 0', padding: '24px 0 0', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {p.features.map((f, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.5, color: soon ? 'var(--fg3)' : 'var(--fg2)' }}>
              <Icon data-lucide="check" style={{ width: 18, height: 18, color: soon ? 'var(--border-strong)' : 'var(--mint)', flexShrink: 0, marginTop: 2 }}></Icon>{f}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <details style={{ borderBottom: '1px solid var(--border)' }}>
      <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '22px 0', cursor: 'pointer', listStyle: 'none' }}>
        <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--fg1)' }}>{q}</span>
        <Icon data-lucide="chevron-down" className="faq-chev" style={{ width: 20, height: 20, color: 'var(--mint-deep)', flexShrink: 0 }}></Icon>
      </summary>
      <p style={{ fontSize: 15.5, lineHeight: 1.65, color: 'var(--fg3)', padding: '0 0 22px' }}>{a}</p>
    </details>
  );
}

function Prijzen() {
  useReveal();
  useLucide();
  const m = useIsMobile();
  const D = GOP.prijzen;
  return (
    <React.Fragment>
      <PageHero eyebrow={D.hero.eyebrow} title={D.hero.title} />

      {/* Plans */}
      <section className="section section-soft" style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="wrap" style={{ maxWidth: 1000 }}>
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '520px', justifyContent: 'center', gap: 24, alignItems: 'start' }}>
            {D.plans.map((p, i) => <PlanCard key={i} p={p} m={m} />)}
          </div>
        </div>
      </section>

      {/* ROI — terugverdienen */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Wat het oplevert" title="€450 per maand verdien je zo terug." sub="Geen kostenpost, maar een investering die zichzelf betaalt. Op drie manieren tegelijk." max={640} />
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: 24, marginTop: 52 }} data-reveal-stagger>
            {[
              { icon: 'heart', title: 'Leden blijven langer', body: 'Eén lid dat een maand langer blijft, verdient al een groot deel van je abonnement terug. GymOps houdt leden betrokken en niemand valt stil uit beeld.' },
              { icon: 'trending-up', title: 'Meer leads worden lid', body: 'Snellere, consistente opvolging levert meer kennismakingen en inschrijvingen op. Een paar extra leden per maand dekt de kosten ruim.' },
              { icon: 'clock', title: 'Je team werkt efficiënter', body: 'Minder handwerk en losse appjes. De uren die je terugkrijgt steek je in coaching, niet in administratie.' },
            ].map((c, i) => (
              <div key={i} className="card" style={{ padding: 30, display: 'flex', flexDirection: 'column' }}>
                <div className="icon-chip" style={{ width: 52, height: 52, borderRadius: 15, marginBottom: 22 }}><Icon data-lucide={c.icon} style={{ width: 23, height: 23, color: 'var(--mint-deep)' }}></Icon></div>
                <h4 style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--ink)', marginBottom: 12 }}>{c.title}</h4>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--fg3)' }}>{c.body}</p>
              </div>
            ))}
          </div>
          <div data-reveal style={{ marginTop: 32, textAlign: 'center', background: 'var(--mint-tint)', border: '1px solid var(--border)', borderRadius: 18, padding: m ? '24px 22px' : '30px 32px' }}>
            <p style={{ fontSize: m ? 17 : 21, fontWeight: 700, letterSpacing: '-.01em', color: 'var(--ink)' }}>De meeste gyms verdienen GymOps al terug met <span style={{ color: 'var(--mint-deep)' }}>1 à 2 extra leden</span> per maand.</p>
          </div>
        </div>
      </section>

      {/* Onboarding timeline */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow={D.onboarding.eyebrow} title={D.onboarding.title} sub={D.onboarding.sub} max={620} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-soft">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <h2 style={{ textAlign: 'center' }} data-reveal>{D.faqTitle}</h2>
          <div style={{ marginTop: 44, borderTop: '1px solid var(--border)' }} data-reveal>
            {D.faqs.map((f, i) => <Faq key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ============================ Klanten.jsx ============================ */
/* Klanten page — stat band, two featured founder/owner quotes, a testimonial
   wall, a short-quote marquee and the trusted-gym logo row. */
function Klanten() {
  useReveal();
  useLucide();
  const m = useIsMobile();
  const D = GOP.klanten;
  const logos = D.trusted.concat(D.trusted);
  return (
    <React.Fragment>
      <PageHero eyebrow={D.hero.eyebrow} title={D.hero.title} sub={D.hero.sub} />

      {/* Featured quotes */}
      <section className="section">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: 24 }}>
          {D.featured.map((f, i) => (
            <div key={i} className="card" data-reveal style={{ padding: m ? 28 : 40, display: 'flex', flexDirection: 'column' }}>
              <Icon data-lucide="quote" style={{ width: 30, height: 30, color: 'var(--mint)' }}></Icon>
              <p style={{ fontSize: m ? 19 : 22, lineHeight: 1.5, fontWeight: 600, letterSpacing: '-.01em', color: 'var(--fg1)', marginTop: 18 }}>{f.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 26, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
                <img src={GO.A + f.photo} alt={f.name} style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--fg1)' }}>{f.name}</div>
                  <div style={{ fontSize: 14, color: 'var(--fg3)' }}>{f.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted logos */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="wrap">
          <p style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--fg3)', marginBottom: 30 }}>Vertrouwd door</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {logos.map((l, i) => (
              <div key={i} style={{ width: 150, height: 52, marginRight: 60, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={GO.A + l.src} alt={l.name} style={{ maxHeight: 46, maxWidth: 130, objectFit: 'contain', filter: 'grayscale(1)', opacity: .6 }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ============================ OverOns.jsx ============================ */
/* Over ons page — founder stories (checkerboard), values, and the
   "why gym owners choose GymOps" grid. */
function FounderRow({ f, flip, m }) {
  const photo = (
    <div style={{ flex: m ? 'none' : '0 0 340px' }}>
      <div data-reveal style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', boxShadow: 'var(--shadow-card)', background: 'var(--bg-soft)' }}>
        <img src={GO.A + f.photo} alt={f.name} style={{ width: '100%', height: m ? 320 : 420, objectFit: 'cover', display: 'block' }} />
      </div>
    </div>
  );
  const text = (
    <div style={{ flex: 1 }}>
      <div data-reveal>
        <h3 style={{ fontSize: 28 }}>{f.name}</h3>
        <div className="eyebrow" style={{ marginTop: 8 }}>{f.role}</div>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {f.bio.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--fg2)' }}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
  return (
    <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: m ? 28 : 56, alignItems: 'flex-start' }}>
      {(!m && flip) ? <React.Fragment>{text}{photo}</React.Fragment> : <React.Fragment>{photo}{text}</React.Fragment>}
    </div>
  );
}

function OverOns() {
  useReveal();
  useLucide();
  const m = useIsMobile();
  const D = GOP.overons;
  return (
    <React.Fragment>
      <PageHero eyebrow={D.hero.eyebrow} title={D.hero.title} sub={D.hero.sub} />

      {/* Founders */}
      <section className="section">
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: m ? 56 : 88 }}>
          {D.founders.map((f, i) => <FounderRow key={i} f={f} flip={i % 2 === 1} m={m} />)}
        </div>
      </section>

      {/* Values */}
      <section className="section section-dark">
        <div className="wrap">
          <SectionHead title={D.valuesTitle} dark />
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: m ? 28 : 40, marginTop: 52 }} data-reveal-stagger>
            {D.values.map((v, i) => (
              <div key={i}>
                <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--mint-light)' }}>{v.number}</div>
                <h4 style={{ fontSize: 20, color: '#fff', marginTop: 14 }}>{v.title}</h4>
                <p style={{ fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,.65)', marginTop: 10 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GymOps */}
      <section className="section section-soft">
        <div className="wrap">
          <SectionHead eyebrow="Waarom GymOps" title={D.whyTitle} />
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: 24, marginTop: 52 }} data-reveal-stagger>
            {D.why.map((w, i) => (
              <div key={i} className="card" style={{ padding: m ? 26 : 32, display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div className="icon-chip" style={{ marginTop: 2 }}><Icon data-lucide={w.icon}></Icon></div>
                <div>
                  <h4 style={{ fontSize: 19 }}>{w.title}</h4>
                  <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--fg3)', marginTop: 8 }}>{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ============================ Privacy.jsx ============================ */
/* Privacyverklaring: statische tekstpagina in huisstijl. */
const legalH2 = { fontSize: 24, fontWeight: 800, letterSpacing: '-.02em', color: 'var(--fg1)', marginTop: 48, marginBottom: 14 };
const legalH3 = { fontSize: 18, fontWeight: 700, color: 'var(--fg1)', marginTop: 28, marginBottom: 8 };
const legalP = { fontSize: 16, lineHeight: 1.7, color: 'var(--fg3)', marginTop: 12 };
const legalUl = { margin: '12px 0 0', paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 16, lineHeight: 1.7, color: 'var(--fg3)' };
const legalMail = <a href="mailto:contact@gymops.nl" style={{ color: 'var(--mint-deep)', fontWeight: 600 }}>contact@gymops.nl</a>;

function Privacy() {
  useReveal();
  return (
    <React.Fragment>
      <PageHero eyebrow="GymOps · Privacy" title="Privacyverklaring" sub="Laatst bijgewerkt: 12 juni 2026" />
      <section className="section" style={{ background: '#fff' }}>
        <div className="wrap" style={{ maxWidth: 760 }}>
          <p style={legalP}>GymOps is een product van GymOps BV, gevestigd te Alkmaar, ingeschreven bij de Kamer van Koophandel onder nummer 42079442. In deze privacyverklaring leggen wij uit welke persoonsgegevens wij verzamelen via onze website gymops.nl en in het kader van onze dienstverlening, waarom wij dat doen en welke rechten je hebt.</p>
          <p style={legalP}>Vragen over deze privacyverklaring of over de verwerking van je gegevens kun je stellen via {legalMail}.</p>

          <h2 style={legalH2}>1. Wie is verantwoordelijk voor je gegevens?</h2>
          <p style={legalP}>GymOps BV is de verwerkingsverantwoordelijke voor de persoonsgegevens die wij verzamelen via onze website en bij het aangaan en uitvoeren van overeenkomsten met onze klanten.</p>
          <p style={legalP}><strong style={{ color: 'var(--fg1)' }}>Let op:</strong> ben jij lid van een sportschool of CrossFit box die gebruikmaakt van GymOps? Dan is die sportschool de verwerkingsverantwoordelijke voor jouw gegevens. Wij verwerken die gegevens uitsluitend in opdracht van de sportschool, als verwerker. Voor vragen over jouw gegevens kun je in dat geval terecht bij je eigen sportschool.</p>

          <h2 style={legalH2}>2. Welke gegevens verzamelen wij en waarom?</h2>
          <h3 style={legalH3}>Website en contact</h3>
          <p style={legalP}>Wanneer je contact met ons opneemt via de website, een demo aanvraagt of informatie opvraagt, verwerken wij:</p>
          <ul style={legalUl}>
            <li>Naam</li>
            <li>E-mailadres</li>
            <li>Telefoonnummer</li>
            <li>Naam van je sportschool of bedrijf</li>
            <li>De inhoud van je bericht</li>
          </ul>
          <p style={legalP}><strong style={{ color: 'var(--fg1)' }}>Doel:</strong> het beantwoorden van je vraag, het inplannen van een demo en het opvolgen van je aanvraag.<br />
            <strong style={{ color: 'var(--fg1)' }}>Grondslag:</strong> gerechtvaardigd belang (het kunnen reageren op jouw verzoek) en, waar van toepassing, het nemen van stappen voorafgaand aan het sluiten van een overeenkomst.<br />
            <strong style={{ color: 'var(--fg1)' }}>Bewaartermijn:</strong> 12 maanden na laatste contact, tenzij je klant wordt.</p>
          <h3 style={legalH3}>Klantgegevens</h3>
          <p style={legalP}>Word je klant van GymOps, dan verwerken wij aanvullend:</p>
          <ul style={legalUl}>
            <li>Bedrijfsgegevens (bedrijfsnaam, KvK-nummer, btw-nummer, adres)</li>
            <li>Contactgegevens van contactpersonen</li>
            <li>Betaalgegevens (afgehandeld via onze betaaldienstverlener Stripe; wij slaan zelf geen volledige betaalgegevens op)</li>
            <li>Accountgegevens voor toegang tot het platform</li>
          </ul>
          <p style={legalP}><strong style={{ color: 'var(--fg1)' }}>Doel:</strong> het uitvoeren van de overeenkomst, facturatie, support en accountbeheer.<br />
            <strong style={{ color: 'var(--fg1)' }}>Grondslag:</strong> uitvoering van de overeenkomst en wettelijke verplichtingen (zoals de fiscale bewaarplicht).<br />
            <strong style={{ color: 'var(--fg1)' }}>Bewaartermijn:</strong> gedurende de looptijd van de overeenkomst. Administratieve gegevens bewaren wij 7 jaar conform de fiscale bewaarplicht.</p>
          <h3 style={legalH3}>Marketing</h3>
          <p style={legalP}>Wij kunnen je e-mailadres gebruiken om je te informeren over GymOps, bijvoorbeeld via een nieuwsbrief of productupdates.</p>
          <p style={legalP}><strong style={{ color: 'var(--fg1)' }}>Grondslag:</strong> toestemming, of gerechtvaardigd belang wanneer je al klant bent. Je kunt je bij elk bericht afmelden via de afmeldlink.</p>
          <h3 style={legalH3}>Cookies en tracking</h3>
          <p style={legalP}>Onze website gebruikt uitsluitend functionele cookies die noodzakelijk zijn voor het goed functioneren van de website.</p>

          <h2 style={legalH2}>3. Met wie delen wij je gegevens?</h2>
          <p style={legalP}>Wij verkopen je gegevens nooit aan derden. Wij delen gegevens alleen met partijen die ons helpen onze dienst te leveren (subverwerkers), waaronder:</p>
          <ul style={legalUl}>
            <li><strong style={{ color: 'var(--fg1)' }}>HighLevel Inc. (LeadConnector):</strong> het platform waarop de GymOps omgeving draait, inclusief e-mail, sms en telefonie</li>
            <li><strong style={{ color: 'var(--fg1)' }}>Sportbit:</strong> ledenadministratiesysteem waarmee GymOps koppelt</li>
            <li><strong style={{ color: 'var(--fg1)' }}>Stripe:</strong> betalingsverwerking</li>
            <li><strong style={{ color: 'var(--fg1)' }}>Meta Platforms:</strong> WhatsApp Business berichten</li>
          </ul>
          <p style={legalP}>Met deze partijen hebben wij afspraken gemaakt over de beveiliging en verwerking van persoonsgegevens.</p>

          <h2 style={legalH2}>4. Hoe beveiligen wij je gegevens?</h2>
          <p style={legalP}>Wij nemen passende technische en organisatorische maatregelen om je gegevens te beschermen tegen verlies, misbruik en ongeautoriseerde toegang. Denk aan versleutelde verbindingen (TLS), toegangsbeheer en het beperken van toegang tot gegevens tot medewerkers die deze nodig hebben voor hun werk.</p>

          <h2 style={legalH2}>5. Jouw rechten</h2>
          <p style={legalP}>Op grond van de AVG heb je de volgende rechten:</p>
          <ul style={legalUl}>
            <li><strong style={{ color: 'var(--fg1)' }}>Inzage:</strong> opvragen welke gegevens wij van je hebben</li>
            <li><strong style={{ color: 'var(--fg1)' }}>Rectificatie:</strong> onjuiste gegevens laten corrigeren</li>
            <li><strong style={{ color: 'var(--fg1)' }}>Verwijdering:</strong> je gegevens laten wissen, voor zover er geen wettelijke bewaarplicht geldt</li>
            <li><strong style={{ color: 'var(--fg1)' }}>Beperking:</strong> de verwerking van je gegevens laten beperken</li>
            <li><strong style={{ color: 'var(--fg1)' }}>Bezwaar:</strong> bezwaar maken tegen verwerking op grond van gerechtvaardigd belang, waaronder direct marketing</li>
            <li><strong style={{ color: 'var(--fg1)' }}>Overdraagbaarheid:</strong> je gegevens in een gangbaar formaat ontvangen</li>
            <li><strong style={{ color: 'var(--fg1)' }}>Toestemming intrekken:</strong> gegeven toestemming op elk moment intrekken</li>
          </ul>
          <p style={legalP}>Je kunt een verzoek indienen via {legalMail}. Wij reageren binnen één maand. Om je identiteit te verifiëren kunnen wij om aanvullende informatie vragen.</p>
          <p style={legalP}>Ben je het niet eens met hoe wij met je gegevens omgaan? Dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens via <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--mint-deep)', fontWeight: 600 }}>autoriteitpersoonsgegevens.nl</a>.</p>

          <h2 style={legalH2}>6. Wijzigingen</h2>
          <p style={legalP}>Wij kunnen deze privacyverklaring aanpassen. De meest actuele versie staat altijd op gymops.nl. Bij ingrijpende wijzigingen informeren wij onze klanten actief.</p>

          <h2 style={legalH2}>Contact</h2>
          <p style={legalP}>GymOps BV<br />Alkmaar<br />KvK: 42079442<br />E-mail: {legalMail}</p>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ---- Page assemblies (Nav + content + CtaFooter), faithful to the prototype html ---- */
function Home() {
  useReveal();
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <PromiseCards />
      <PinnedFeature num={1} eyebrow="GymOps Flow · Leadopvolging" title="Verander je leads in leden."
        items={[
          { icon: 'zap', title: 'Binnen 1 minuut reactie', body: 'Elke nieuwe lead krijgt direct een WhatsApp én e-mail. Snelheid is de grootste factor in conversie.' },
          { icon: 'inbox', title: 'Elk kanaal automatisch binnen', body: 'Website, Meta Ads, QR-code of een DM: alles komt op één plek binnen, gekoppeld aan dezelfde lead.' },
          { icon: 'repeat', title: 'Opvolging tot er reactie is', body: 'Geen reactie? GymOps blijft opvolgen in een natuurlijk ritme, op het juiste moment van de dag.' },
        ]}
        link={{ label: 'meer over leadopvolging', href: 'leadopvolging.html' }}
        steps={5}
        renderGraphic={(step) => <LeadFlowStage step={step} />} />
      <LedenervaringHome />
      <PinnedFeature num={3} eyebrow="GymOps Flow · Team-aansturing" title="Je team draait, jij houdt de regie."
        items={[
          { icon: 'circle-check-big', title: 'Elke taak naar de juiste coach', body: 'GymOps maakt automatisch een taak aan en wijst die toe. Geen losse WhatsApp-groepjes meer.' },
          { icon: 'clock', title: 'Niet opgepakt blijft staan', body: 'Een taak verdwijnt niet. Hij komt morgen terug tot hij is afgehandeld.' },
          { icon: 'users', title: 'Uitval? Collega neemt over', body: 'Openstaande taken neem je in één klik over. Het werk loopt door, ook bij ziekte of vakantie.' },
        ]}
        link={{ label: 'meer over team-aansturing', href: 'team-aansturing.html' }}
        steps={(GO.product.memberTasks.length) + 1}
        renderGraphic={(step) => <Phone w={258} className="gfx-warm"><StaffScreen step={step} tasks={GO.product.memberTasks} /></Phone>} />
      <PinnedFeature soft eyebrow="GymOps Flow · Jouw website" title="Een website die werkt voor jouw gym."
        items={[
          { icon: 'search', title: 'Gevonden in Google én AI', body: 'Technisch geoptimaliseerd voor zoekmachines en AI. Wie zoekt naar een gym in jouw plaats, vindt jou.' },
          { icon: 'palette', title: 'Op maat, in jouw merk', body: 'Geen standaard thema. Een site op maat in dezelfde techniek als grote merken: snel, strak en helemaal van jou.' },
          { icon: 'ticket', title: 'Op maat gemaakte eventpagina\'s', body: 'Voor Bring-a-Friend events, hyrox-simulaties of wedstrijden. Inclusief betaling en berichtenflows.' },
        ]}
        link={{ label: 'meer over je website', href: 'website.html' }}
        staticStep={0}
        renderGraphic={(step) => <EventFlowStage step={step} />} />
      <PlatformStrip />
      <Integrations />
      <Testimonials />
      <CtaFooter />
    </React.Fragment>
  );
}

function LeadopvolgingPage() { return (<React.Fragment><Nav current="leadopvolging.html" /><Leadopvolging /><CtaFooter /></React.Fragment>); }
function LedenervaringPage() { return (<React.Fragment><Nav current="ledenervaring.html" /><Ledenervaring /><CtaFooter /></React.Fragment>); }
function TeamAansturingPage() { return (<React.Fragment><Nav current="team-aansturing.html" /><TeamAansturing /><CtaFooter /></React.Fragment>); }
function WebsitePage() { return (<React.Fragment><Nav current="website.html" /><Website /><CtaFooter /></React.Fragment>); }
function PrijzenPage() { return (<React.Fragment><Nav current="prijzen.html" /><Prijzen /><CtaFooter /></React.Fragment>); }
function KlantenPage() { return (<React.Fragment><Nav current="klanten.html" /><Klanten /><CtaFooter /></React.Fragment>); }
function OverOnsPage() { return (<React.Fragment><Nav current="over-ons.html" /><OverOns /><CtaFooter /></React.Fragment>); }
function PrivacyPage() { return (<React.Fragment><Nav /><Privacy /><CtaFooter noCta /></React.Fragment>); }

export { Home, LeadopvolgingPage, LedenervaringPage, TeamAansturingPage, WebsitePage, PrijzenPage, KlantenPage, OverOnsPage, PrivacyPage };
