'use client';

import { useEffect, useRef, useState } from 'react';

const BOOKING_ORIGIN = 'https://links.gymops.nl';
const BOOKING_URL = `${BOOKING_ORIGIN}/widget/booking/9peD9aOwQ1sN9F4gOhev`;
const LOCATION_ID = '5o3lAbdsLNLtkKEcTJYU';

type Contact = { first_name: string; last_name: string; email: string; phone: string };

export default function BookingCalendar({ contact, onClose }: { contact: Contact; onClose: () => void }) {
  const iframe = useRef<HTMLIFrameElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [attempt, setAttempt] = useState(0);
  const [ready, setReady] = useState(false);
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    closeButton.current?.focus();
    const receive = (event: MessageEvent) => {
      const calendar = iframe.current?.contentWindow;
      if (event.origin !== BOOKING_ORIGIN || event.source !== calendar || !Array.isArray(event.data)) return;

      // HighLevel's native embed handshake. Keep contact details out of URLs and
      // persistent browser storage; query-prefill corrupts email '+' characters.
      if (event.data[0] === 'fetch-query-params') {
        calendar?.postMessage(['query-params', {}, window.location.origin + window.location.pathname, ''], BOOKING_ORIGIN);
      } else if (event.data[0] === 'fetch-sticky-contacts' && event.data[1] === LOCATION_ID) {
        calendar?.postMessage(['sticky-contacts', { ...contact, location_id: LOCATION_ID }], BOOKING_ORIGIN);
        setReady(true);
      }
    };
    window.addEventListener('message', receive);
    return () => window.removeEventListener('message', receive);
  }, [contact]);

  useEffect(() => {
    if (ready) return;
    const timer = window.setTimeout(() => setSlow(true), 15000);
    return () => window.clearTimeout(timer);
  }, [attempt, ready]);

  return (
    <div className="lead-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="lead-modal booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <div className="lead-modal-head booking-head">
          <h2 id="booking-title">Kies een moment voor je demo</h2>
          <p>Je contactgegevens staan alvast ingevuld. Je kunt ze bij het boeken nog aanpassen.</p>
          <button ref={closeButton} type="button" className="lead-close" aria-label="Sluiten" onClick={onClose}>✕</button>
        </div>
        {!ready && <div className="booking-status" role="status">
          {slow ? <><span>Het laden van de agenda duurt langer dan verwacht.</span>{' '}
            <button type="button" onClick={() => { setSlow(false); setAttempt((value) => value + 1); }}>Opnieuw laden</button></>
            : 'De agenda wordt geladen…'}
        </div>}
        <iframe key={attempt} ref={iframe} className="booking-frame" title="Plan je GymOps-demo"
          src={BOOKING_URL} referrerPolicy="strict-origin-when-cross-origin" />
      </div>
    </div>
  );
}
