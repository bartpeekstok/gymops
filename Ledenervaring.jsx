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

      <MiniGrid eyebrow="En verder" title="De hele ledenervaring, geregeld." items={[
        { icon: 'sparkles', title: 'Welkomstflow voor nieuwe leden', body: 'De eerste weken zijn cruciaal. GymOps stuurt berichten op de juiste momenten en zet taken klaar voor je coach.' },
        { icon: 'mail', title: 'Branded, geen leverancier-template', body: 'Mails, kaarten en agenda-uitnodigingen komen uit jouw gym, niet uit een GymOps-template.' },
        { icon: 'party-popper', title: 'Events in 5 minuten live', body: 'Bring-a-Friend, Hyrox-simulaties of een open dag: eventpagina, betaling, bevestiging en team-taak in één.' },
        { icon: 'calendar-check', title: 'Slim afspraken plannen', body: 'Leden zien alleen tijden die jullie het best uitkomen. Scheelt uren per week aan mailtjes.' },
        { icon: 'bell', title: 'Show-rate omhoog met reminders', body: 'Reminders via WhatsApp en e-mail tot iemand in je gym staat. Niet te veel, net genoeg.' },
        { icon: 'rotate-ccw', title: 'Ex-leden terughalen', body: 'Kant-en-klare reactivatie-flows op een toon die past bij jouw gym. Een uitnodiging, geen spam.' },
      ]} />
    </React.Fragment>
  );
}
window.Ledenervaring = Ledenervaring;
