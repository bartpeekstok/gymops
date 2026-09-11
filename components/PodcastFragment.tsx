export default function PodcastFragment() {
  return (
    <section className="section podcast-proof" aria-labelledby="podcast-proof-title">
      <div className="wrap">
        <div className="podcast-proof-layout">
          <div>
            <div className="eyebrow">Uit de praktijk · SportBazen</div>
            <h2 id="podcast-proof-title">Elke lead bellen.<br />Elke lead een video.</h2>
            <p className="podcast-proof-intro">
              In SportBazen vertelt Jeroen hoe hij bij CrossFit Leiden aanvragen
              persoonlijk opvolgde: bellen, een video sturen en contact houden.
            </p>
            <p className="podcast-proof-bridge">
              Met GymOps organiseer je die aandacht samen met je team.
              Het systeem zet de taak klaar, je coach maakt het contact.
            </p>
            <p className="podcast-proof-meta">Jeroen van Duijn · Eigenaar CrossFit Leiden en mede-oprichter GymOps</p>
            <a className="btn-ghost" href="https://www.youtube.com/watch?v=ekUdKW3g28A" target="_blank" rel="noopener noreferrer">
              Bekijk de hele aflevering · 46 min <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure className="podcast-proof-media">
            <video controls playsInline preload="none" poster="/media/sportbazen-elke-lead-bellen.jpg"
              aria-label="Bekijk het podcastfragment: Elke lead bellen, 36 seconden, met Nederlandse ondertiteling">
              <source src="/media/sportbazen-elke-lead-bellen.mp4" type="video/mp4" />
              <track kind="captions" src="/media/sportbazen-elke-lead-bellen.vtt" srcLang="nl" label="Nederlands" />
              <a href="/media/sportbazen-elke-lead-bellen.mp4">Bekijk het fragment</a>
            </video>
            <figcaption>36 seconden · Nederlands ondertiteld</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
