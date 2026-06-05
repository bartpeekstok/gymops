/* Shared helpers for the GymOps marketing kit. Exposes to window. */
const { useEffect, useRef, useState } = React;

// Re-render Lucide icons after React commits.
function useLucide(dep) {
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
}

// Scroll-driven reveal. Adds .in when an element scrolls into view.
// Uses getBoundingClientRect (reliable across preview iframes) rather than
// IntersectionObserver.
function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let els = Array.from(document.querySelectorAll('[data-reveal],[data-reveal-stagger],.split-line'));
    if (reduce) { els.forEach(e => e.classList.add('in')); return; }
    let raf = 0;
    const check = () => {
      const h = window.innerHeight;
      els = els.filter(e => {
        const r = e.getBoundingClientRect();
        if (r.top < h * 0.9 && r.bottom > 0) { e.classList.add('in'); return false; }
        return true;
      });
      if (!els.length) window.removeEventListener('scroll', onScroll);
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(check); };
    window.addEventListener('scroll', onScroll, { passive: true });
    // initial passes (in case layout/fonts settle after mount)
    check();
    setTimeout(check, 120);
    setTimeout(check, 500);
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);
}

// Headline with word-level stagger fade-in.
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

function Icon({ name, ...rest }) {
  return <i data-lucide={name} {...rest}></i>;
}

// Viewport breakpoint hook. Returns true at/below `bp` px (default 820).
function useIsMobile(bp) {
  bp = bp || 820;
  const [m, setM] = useState(typeof window !== 'undefined' && window.innerWidth <= bp);
  useEffect(() => {
    const on = () => setM(window.innerWidth <= bp);
    window.addEventListener('resize', on, { passive: true });
    on();
    return () => window.removeEventListener('resize', on);
  }, [bp]);
  return m;
}

Object.assign(window, { useLucide, useReveal, SplitHeadline, Icon, useIsMobile });
