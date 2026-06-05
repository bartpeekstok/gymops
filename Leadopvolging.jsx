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
        body={'Open GymOps en je ziet in één oogopslag wie er nieuw binnenkwam, wie wacht op een proefles en wie nog opvolging nodig heeft. Per lead het kanaal, de status en het laatste contactmoment.'}
        visual={<Phone w={258}><DashboardScreen /></Phone>} />

      <FeatureRow icon="user-check" flip soft title="Persoonlijk contact blijft bij jouw coach"
        body={'Automatisering doet het werk, jouw coach maakt het persoonlijk. Bij elke nieuwe lead komt direct een taak binnen bij de juiste coach: bel of app deze persoon even op.'}
        visual={<Phone w={258}><StaffScreen /></Phone>} />

      <FeatureRow icon="calendar-check" title="Direct een proefles boeken zonder heen-en-weer"
        body={'Leads krijgen een persoonlijke link naar de beschikbaarheid van jou en je coaches en kiezen zelf een slot. Geen mailtjes over en weer, geen dubbele afspraken, geen lege agenda\u2019s.'}
        visual={<SlotsMock />} />

      <FeatureRow icon="repeat" flip soft title="Persistente opvolging tot er reactie is"
        body={'Krijg je iemand niet meteen te pakken? Dan stopt GymOps niet bij één poging. Opvolgberichten in een natuurlijk ritme, op het juiste tijdstip van de dag. Nooit spammerig, wel net genoeg om bovenop de stapel te blijven.'}
        visual={<FollowupMock />} />

      <MiniGrid eyebrow="En verder" title="Alles wat opvolging compleet maakt." items={[
        { icon: 'bell', title: 'Show-rate omhoog met reminders', body: 'Reminders via WhatsApp en e-mail tot je lead daadwerkelijk in je gym staat. Minder no-shows.' },
        { icon: 'tag', title: 'Jouw branding, niet die van GymOps', body: 'Elke mail, WhatsApp en agenda-uitnodiging komt uit jouw gym. Met jouw logo, toon en kleuren.' },
        { icon: 'trending-up', title: 'Na de intake gaat het door', body: 'GymOps begeleidt de lead na de proefles richting een besluit en start automatisch de welkomstflow.' },
        { icon: 'rotate-ccw', title: 'Verloren leads opnieuw in beeld', body: 'Niet elke lead is meteen klaar. GymOps brengt ze later weer in beeld met een passend bericht.' },
        { icon: 'pen-line', title: 'Handgeschreven kaarten', body: 'Stuur met één klik een kaart met persoonlijke tekst naar een ex-lid of koude lead. Fysiek en onverwacht.' },
        { icon: 'message-circle', title: 'WhatsApp én e-mail', body: 'Mensen reageren niet altijd op een mail, maar wel op WhatsApp. Of andersom. GymOps stuurt beide.' },
      ]} />
    </React.Fragment>
  );
}
window.Leadopvolging = Leadopvolging;
