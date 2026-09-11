'use client';

import { useState, type MouseEventHandler } from 'react';
import { ArrowRight, Check, ClipboardList, LayoutDashboard, MessageCircle, UserRound } from 'lucide-react';

const steps = [
  { title: 'Een aanvraag', summary: 'Lisa wil komen trainen', icon: UserRound },
  { title: 'Direct een reactie', summary: 'GymOps stuurt een bericht', icon: MessageCircle },
  { title: 'Een taak bij je coach', summary: 'Sanne weet wie ze moet bellen', icon: ClipboardList },
  { title: 'Overzicht voor jou', summary: 'Je ziet wat nog openstaat', icon: LayoutDashboard },
];

export default function ProductVoorbeeld({ demoUrl, onDemoClick }: {
  demoUrl: string;
  onDemoClick: MouseEventHandler<HTMLAnchorElement>;
}) {
  const [active, setActive] = useState(0);
  const StepIcon = steps[active].icon;

  return (
    <section className="section product-example" id="zo-werkt-gymops" aria-labelledby="product-example-title">
      <div className="wrap">
        <div className="product-example-heading">
          <div className="eyebrow">Zo werkt GymOps</div>
          <h2 id="product-example-title">Van aanvraag naar actie.</h2>
          <p>GymOps zet de opvolging in gang. Je coach maakt het contact. Jij ziet wat er gebeurt.</p>
        </div>

        <div className="product-example-layout">
          <div className="product-example-steps" role="group" aria-label="Bekijk de vier stappen van een aanvraag">
            {steps.map((step, index) => (
              <button key={step.title} type="button" className="product-example-step"
                aria-pressed={active === index} aria-controls="product-example-screen"
                onClick={() => setActive(index)}>
                <span className="product-example-number" aria-hidden="true">{index + 1}</span>
                <span><strong>{step.title}</strong><span>{step.summary}</span></span>
                <ArrowRight className="product-example-step-arrow" size={18} aria-hidden="true" />
              </button>
            ))}
          </div>

          <div className="product-example-screen" id="product-example-screen" role="region" aria-label="Voorbeeld met Lisa" aria-live="polite" aria-atomic="true">
            <div className="product-example-screen-bar">
              <span>GymOps <span className="product-example-preview-label">· Voorbeeld met Lisa</span></span>
              <span className="product-example-counter">{active + 1} / 4</span>
            </div>
            <div className="product-example-screen-content">
              <div className="product-example-screen-title"><StepIcon size={21} aria-hidden="true" /><h3>{steps[active].title}</h3></div>

              {active === 0 && <>
                <div className="product-example-card">
                  <div className="product-example-contact"><span className="product-example-avatar" aria-hidden="true">L</span><div><strong>Lisa</strong><span>Wil graag kennismaken</span></div><span className="product-example-badge">Nieuw</span></div>
                  <dl className="product-example-details"><div><dt>Binnengekomen via</dt><dd>Je website</dd></div><div><dt>Aanvraag</dt><dd>Kennismaking</dd></div></dl>
                </div>
                <p className="product-example-explanation">Lisa vult het formulier op je website in. Haar aanvraag staat meteen in GymOps, klaar voor opvolging.</p>
              </>}

              {active === 1 && <>
                <div className="product-example-card">
                  <div className="product-example-message-label"><MessageCircle size={17} aria-hidden="true" /><strong>Een WhatsApp vanuit jouw gym</strong></div>
                  <div className="product-example-message">Hoi Lisa, leuk dat je wilt komen trainen! Via deze link kun je een kennismaking plannen.</div>
                  <div className="product-example-sent"><Check size={15} aria-hidden="true" /> Automatisch verstuurd</div>
                </div>
                <p className="product-example-explanation">Lisa krijgt direct een reactie en kan een moment kiezen. De berichten richten we in met de naam en toon van jouw gym.</p>
              </>}

              {active === 2 && <>
                <div className="product-example-card">
                  <span className="product-example-badge">Taak voor coach Sanne</span>
                  <h4 className="product-example-task-title">Bel Lisa voor een kennismaking</h4>
                  <p className="product-example-task-copy">Vraag naar haar doelen en help haar de eerste stap te zetten.</p>
                  <dl className="product-example-details"><div><dt>Toegewezen aan</dt><dd>Coach Sanne</dd></div><div><dt>Status</dt><dd>Open</dd></div></dl>
                </div>
                <p className="product-example-explanation">GymOps zet de beltaak bij je coach. Sanne voert het gesprek; jij hoeft de aanvraag niet zelf door te sturen.</p>
              </>}

              {active === 3 && <>
                <div className="product-example-card">
                  <div className="product-example-contact"><span className="product-example-avatar" aria-hidden="true">L</span><div><strong>Lisa</strong><span>Opvolging door coach Sanne</span></div></div>
                  <dl className="product-example-details product-example-progress">
                    <div><dt>Aanvraag</dt><dd><Check size={15} aria-hidden="true" /> Ontvangen</dd></div>
                    <div><dt>WhatsApp</dt><dd><Check size={15} aria-hidden="true" /> Verstuurd</dd></div>
                    <div><dt>Beltaak Sanne</dt><dd className="product-example-open">Open</dd></div>
                  </dl>
                </div>
                <p className="product-example-explanation">Je ziet wat is verstuurd, wie opvolgt en welke taak nog openstaat. Ook als je zelf op de vloer staat.</p>
              </>}
            </div>
          </div>
        </div>

        <div className="product-example-footer">
          <p>Dit is één aanvraag. In de demo laten we zien hoe de opvolging voor jouw gym werkt.</p>
          <a href={demoUrl} onClick={onDemoClick} className="btn btn-primary">Plan een demo<ArrowRight size={18} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
