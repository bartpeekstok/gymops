import { ArrowRight, Map } from 'lucide-react';

export default function RoutekaartTeaser() {
  return (
    <section className="routekaart-teaser" aria-label="Gratis routekaart voor jouw gym">
      <div className="wrap">
        <div className="routekaart-teaser-card">
          <div className="routekaart-teaser-copy">
            <div className="eyebrow"><Map size={18} aria-hidden="true" />Gratis routekaart naar €1 miljoen omzet</div>
            <h2>Waar kan jouw gym groeien?</h2>
            <p>Bekijk met je eigen cijfers wat ledenbehoud, instroom en omzet per lid betekenen voor je groei. Je krijgt direct een persoonlijke routekaart op je scherm.</p>
          </div>
          <div className="routekaart-teaser-action">
            <a className="btn btn-primary" href="/routekaart">Maak mijn routekaart<ArrowRight size={18} aria-hidden="true" /></a>
            <p>Gratis · contactgegevens + 6 vragen</p>
          </div>
        </div>
      </div>
    </section>
  );
}
