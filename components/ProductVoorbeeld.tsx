'use client';

import { useState, type MouseEventHandler } from 'react';
import { ArrowRight, Check, ClipboardList, HeartPulse, LayoutDashboard, MessageCircle, PartyPopper, UserRound } from 'lucide-react';

const leadSteps = [
  { title: 'Een aanvraag', summary: 'Lisa wil komen trainen', icon: UserRound },
  { title: 'Direct een reactie', summary: 'GymOps stuurt een bericht', icon: MessageCircle },
  { title: 'Een taak bij je coach', summary: 'Sanne weet wie ze moet bellen', icon: ClipboardList },
  { title: 'Overzicht voor jou', summary: 'Je ziet wat nog openstaat', icon: LayoutDashboard },
];

const examples = {
  retention: {
    label: 'Leden behouden',
    intro: 'Volg Lisa als lid: van een goede start tot aandacht op het moment dat ze die nodig heeft. In dit voorbeeld gebruiken we de directe SportBit-koppeling.',
    steps: [
      { title: 'Een goede start', summary: 'Je coach checkt hoe het gaat', icon: UserRound },
      { title: 'Mijlpalen vieren', summary: 'Aandacht voor haar 50e les', icon: PartyPopper },
      { title: 'Vroeg bijsturen', summary: 'Lisa komt twee weken niet', icon: HeartPulse },
      { title: 'Overzicht voor jou', summary: 'Je ziet welke aandacht nog nodig is', icon: LayoutDashboard },
    ],
  },
  leads: {
    label: 'Aanvragen opvolgen',
    intro: 'Nog vóór het lidmaatschap: zo krijgt een nieuwe aanvraag van Lisa een volgende stap.',
    steps: leadSteps,
  },
};

export default function ProductVoorbeeld({ demoUrl, onDemoClick }: {
  demoUrl: string;
  onDemoClick: MouseEventHandler<HTMLAnchorElement>;
}) {
  const [example, setExample] = useState<keyof typeof examples>('retention');
  const [active, setActive] = useState(0);
  const current = examples[example];
  const steps = current.steps;
  const StepIcon = steps[active].icon;

  return (
    <section className="section product-example" id="zo-werkt-gymops" aria-labelledby="product-example-title">
      <div className="wrap">
        <div className="product-example-heading">
          <div className="eyebrow">Zo werkt GymOps</div>
          <h2 id="product-example-title">Ledenbehoud begint bij de eerste les.</h2>
          <p>GymOps zet persoonlijke aandacht op de agenda van je team: bij de start, bij mijlpalen én als iemand dreigt af te haken.</p>
        </div>

        <div className="product-example-switch" role="group" aria-label="Kies een GymOps-voorbeeld">
          {(Object.keys(examples) as Array<keyof typeof examples>).map((key) => (
            <button key={key} type="button" aria-pressed={example === key} aria-controls="product-example-journey"
              onClick={() => { setExample(key); setActive(0); }}>{examples[key].label}</button>
          ))}
        </div>
        <p className="product-example-intro">{current.intro}</p>

        <div id="product-example-journey">
        <div className="product-example-layout">
          <div className="product-example-steps" role="group" aria-label={`Bekijk de vier stappen: ${current.label}`}>
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

              {example === 'retention' && active === 0 && <>
                <div className="product-example-card">
                  <span className="product-example-badge">Lisa is één week lid</span>
                  <h4 className="product-example-task-title">Vraag Lisa hoe haar eerste week was</h4>
                  <p className="product-example-task-copy">Voelt ze zich op haar plek? Zijn er vragen of heeft ze ergens hulp bij nodig?</p>
                  <dl className="product-example-details"><div><dt>Taak voor</dt><dd>Coach Sanne</dd></div><div><dt>Aanleiding</dt><dd>7 dagen lid in SportBit</dd></div></dl>
                </div>
                <p className="product-example-explanation">Zodra Lisa een week lid is, staat een check-in klaar voor haar coach. Zo krijgt haar start persoonlijke aandacht.</p>
              </>}

              {example === 'retention' && active === 1 && <>
                <div className="product-example-card">
                  <span className="product-example-badge">50e bezoek · SportBit</span>
                  <h4 className="product-example-task-title">Vier Lisa’s mijlpaal</h4>
                  <p className="product-example-task-copy">Feliciteer haar persoonlijk en leg een kleine verrassing klaar.</p>
                  <dl className="product-example-details"><div><dt>Taak voor</dt><dd>Coach Sanne</dd></div><div><dt>Aanleiding</dt><dd>50 trainingen</dd></div></dl>
                </div>
                <p className="product-example-explanation">GymOps maakt van de mijlpaal een taak voor je team. De coach zorgt dat Lisa merkt dat haar inzet gezien wordt.</p>
              </>}

              {example === 'retention' && active === 2 && <>
                <div className="product-example-card">
                  <span className="product-example-badge">14 dagen niet getraind</span>
                  <h4 className="product-example-task-title">Bel Lisa: hoe gaat het?</h4>
                  <p className="product-example-task-copy">Vraag wat er speelt en wat haar zou helpen om weer te komen trainen.</p>
                  <dl className="product-example-details"><div><dt>Signaal uit</dt><dd>SportBit</dd></div><div><dt>Taak voor</dt><dd>Coach Sanne</dd></div></dl>
                </div>
                <p className="product-example-explanation">GymOps ziet via SportBit dat Lisa twee weken niet heeft getraind en zet een beltaak klaar. Sanne maakt het contact.</p>
              </>}

              {example === 'retention' && active === 3 && <>
                <div className="product-example-card">
                  <div className="product-example-contact"><span className="product-example-avatar" aria-hidden="true">L</span><div><strong>Lisa</strong><span>Begeleiding door coach Sanne</span></div></div>
                  <dl className="product-example-details product-example-progress">
                    <div><dt>Check-in eerste week</dt><dd><Check size={15} aria-hidden="true" /> Afgerond</dd></div>
                    <div><dt>50e les gevierd</dt><dd><Check size={15} aria-hidden="true" /> Afgerond</dd></div>
                    <div><dt>Beltaak Sanne</dt><dd className="product-example-open">Open</dd></div>
                  </dl>
                </div>
                <p className="product-example-explanation">Je ziet welke aandacht is gegeven en wat nog openstaat. Een taak blijft staan tot je team hem afhandelt.</p>
              </>}

              {example === 'leads' && active === 0 && <>
                <div className="product-example-card">
                  <div className="product-example-contact"><span className="product-example-avatar" aria-hidden="true">L</span><div><strong>Lisa</strong><span>Wil graag kennismaken</span></div><span className="product-example-badge">Nieuw</span></div>
                  <dl className="product-example-details"><div><dt>Binnengekomen via</dt><dd>Je website</dd></div><div><dt>Aanvraag</dt><dd>Kennismaking</dd></div></dl>
                </div>
                <p className="product-example-explanation">Lisa vult het formulier op je website in. Haar aanvraag staat meteen in GymOps, klaar voor opvolging.</p>
              </>}

              {example === 'leads' && active === 1 && <>
                <div className="product-example-card">
                  <div className="product-example-message-label"><MessageCircle size={17} aria-hidden="true" /><strong>Een WhatsApp vanuit jouw gym</strong></div>
                  <div className="product-example-message">Hoi Lisa, leuk dat je wilt komen trainen! Via deze link kun je een kennismaking plannen.</div>
                  <div className="product-example-sent"><Check size={15} aria-hidden="true" /> Automatisch verstuurd</div>
                </div>
                <p className="product-example-explanation">Lisa krijgt direct een reactie en kan een moment kiezen. De berichten richten we in met de naam en toon van jouw gym.</p>
              </>}

              {example === 'leads' && active === 2 && <>
                <div className="product-example-card">
                  <span className="product-example-badge">Taak voor coach Sanne</span>
                  <h4 className="product-example-task-title">Bel Lisa voor een kennismaking</h4>
                  <p className="product-example-task-copy">Vraag naar haar doelen en help haar de eerste stap te zetten.</p>
                  <dl className="product-example-details"><div><dt>Toegewezen aan</dt><dd>Coach Sanne</dd></div><div><dt>Status</dt><dd>Open</dd></div></dl>
                </div>
                <p className="product-example-explanation">GymOps zet de beltaak bij je coach. Sanne voert het gesprek; jij hoeft de aanvraag niet zelf door te sturen.</p>
              </>}

              {example === 'leads' && active === 3 && <>
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
          <p>{example === 'retention'
            ? 'Maak persoonlijke aandacht onderdeel van elke werkdag. In de demo laten we zien hoe je dit voor jouw gym inricht.'
            : 'Dit is één aanvraag. In de demo laten we zien hoe de opvolging voor jouw gym werkt.'}</p>
          <div className="product-example-actions">
            <a href={demoUrl} onClick={onDemoClick} className="btn btn-primary">Plan een demo<ArrowRight size={18} aria-hidden="true" /></a>
            <a href={example === 'retention' ? '/ledenbehoud' : '/leadopvolging'} className="btn-ghost">Meer over {example === 'retention' ? 'ledenbehoud' : 'leadopvolging'}<ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
