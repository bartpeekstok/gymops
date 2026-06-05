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
          <h2 style={{ fontSize: 'clamp(32px,4.6vw,56px)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.04, color: 'var(--ink)' }}>Niks valt nog tussen wal en schip</h2>
          <p style={{ fontSize: m ? 17 : 19, lineHeight: 1.6, color: 'var(--fg3)', maxWidth: 560, margin: '20px auto 0' }}>GymOps koppelt naadloos met SportBit en alle tools die je al gebruikt. Drie beloftes, volledig geautomatiseerd.</p>
        </div>
      </div>
    </section>
  );
}
window.PromiseCards = PromiseCards;
