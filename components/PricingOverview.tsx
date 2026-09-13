import type { MouseEventHandler, ReactNode } from 'react';
import { ArrowRight, Heart, ListChecks, MessageCircle } from 'lucide-react';
import { STARTEN } from '@/lib/start-content';

type Props = {
  background: ReactNode;
  price: string;
  period: string;
  terms: string;
  yearly: string;
  demoUrl: string;
  onDemoClick: MouseEventHandler<HTMLAnchorElement>;
  mentorExtra: string;
  mentorTotal: string;
  additionalCosts?: ReactNode;
};

export default function PricingOverview({ background, price, period, terms, yearly,
  demoUrl, onDemoClick, mentorExtra, mentorTotal, additionalCosts }: Props) {
  return <>
    <header className="pricing-overview" aria-labelledby="pricing-overview-title">
      {background}
      <div className="wrap pricing-overview-grid">
        <div className="pricing-overview-intro">
          <div className="eyebrow eyebrow-dark">GymOps · Prijzen</div>
          <h1 id="pricing-overview-title">Ledenbehoud, geregeld met je team.</h1>
          <p>Eén abonnement voor je software, website, inrichting en begeleiding.</p>
        </div>
        <div className="pricing-offer" aria-label="GymOps abonnement">
          <div className="eyebrow">Je abonnement</div>
          <p className="pricing-offer-price"><strong>{price}</strong><span>{period}</span></p>
          <p className="pricing-offer-terms">{terms}</p>
          <p className="pricing-offer-yearly">{yearly}</p>
          <a className="btn btn-primary" href={demoUrl} onClick={onDemoClick}>Plan een demo<ArrowRight size={18} aria-hidden="true" /></a>
          {additionalCosts && <div className="pricing-additional-costs">{additionalCosts}</div>}
          <a className="pricing-included-link" href="#wat-je-krijgt">Bekijk wat je krijgt <ArrowRight size={16} aria-hidden="true" /></a>
        </div>
        <ul className="pricing-highlights">
          <li><Heart size={22} aria-hidden="true" /><div><strong>Leden langer behouden</strong><span>Een klantreis, aandacht voor mijlpalen en een taak bij je coach als iemand wegzakt.</span></div></li>
          <li><ListChecks size={22} aria-hidden="true" /><div><strong>Je team weet wat er moet gebeuren</strong><span>Taken voor je coaches en overzicht voor jou, ook zonder SportBit.</span></div></li>
          <li><MessageCircle size={22} aria-hidden="true" /><div><strong>Nieuwe aanvragen krijgen opvolging</strong><span>Je website, berichten en afspraken werken samen in één systeem.</span></div></li>
        </ul>
      </div>
    </header>

    <section className="pricing-mentor" aria-labelledby="pricing-mentor-title">
      <div className="wrap">
        <div className="pricing-mentor-card">
          <div>
            <div className="eyebrow">Optioneel · 1-op-1 mentorschap</div>
            <h2 id="pricing-mentor-title">Een mentor die met je meekijkt.</h2>
            <p>Bart en Jeroen kijken mee in jouw GymOps: je leden, je team en je cijfers. Samen bepaal je waar je aan werkt.</p>
            <a className="btn-ghost" href="/mentorschap">Meer over mentorschap<ArrowRight size={17} aria-hidden="true" /></a>
          </div>
          <div className="pricing-mentor-price">
            <p><strong>+ {mentorExtra}</strong><span>/ maand excl. btw</span></p>
            <p className="pricing-mentor-total">Samen met GymOps: <strong>{mentorTotal} per maand excl. btw.</strong></p>
            <p className="pricing-mentor-terms">Mentorschap: minimaal 6 maanden.<br />Voor GymOps geldt de looptijd van 12 maanden.</p>
          </div>
        </div>
      </div>
    </section>
  </>;
}

export function PricingStart() {
  return <ol className="pricing-start">
    {STARTEN.steps.map((step, index) => <li key={step.title}>
      <span className="pricing-start-number" aria-hidden="true">{index + 1}</span>
      <h3>{step.title}</h3><p>{step.body}</p>
    </li>)}
  </ol>;
}
