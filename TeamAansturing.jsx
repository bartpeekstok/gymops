/* Team-aansturing — feature detail page (no V1 source route; built from the
   "Geen taak vergeten" pillar copy). Hero, feature rows with the task /
   contact mockups, and an "en verder" grid. */
function TeamAansturing() {
  useReveal();
  useLucide();
  return (
    <React.Fragment>
      <PageHero eyebrow="GymOps Flow · Team-aansturing" title="Geen taak meer" accent="vergeten"
        sub="Elke taak gaat automatisch naar de juiste coach. Niet opgepakt blijft staan, en bij uitval neemt een collega in één klik over. Jij houdt overzicht."
        cta={{ primary: 'Plan een demo' }} />

      <FeatureRow icon="clock" flip soft title="Niet opgepakt vandaag? Dan blijft de taak staan"
        body={'Te druk geweest? Een taak verdwijnt niet. Hij blijft openstaan en komt morgen weer onder de aandacht, tot hij is afgehandeld. Zo glipt er niemand stilletjes tussendoor.'}
        visual={<Phone w={258}><ContactScreen /></Phone>} />

      <FeatureRow icon="users" title="Valt iemand uit? Een collega neemt over in één klik"
        body={'Gaat een coach op vakantie of valt iemand ziek uit? Openstaande taken neem je in één klik over naar een collega. Het werk loopt door, ook als de bezetting verandert.'}
        visual={<ReassignMock />} />

      <FeatureRow icon="layout-dashboard" flip soft title="Overzicht voor de eigenaar, zonder micromanagen"
        body={'Jij ziet in één oogopslag wat er speelt: welke taken open staan, wat er is afgerond en waar het stokt. Je team werkt voorspelbaar, en jij houdt de regie zonder er bovenop te hoeven zitten.'}
        visual={<Phone w={258}><DashboardScreen /></Phone>} />

      <MiniGrid eyebrow="En verder" title="Een team dat voorspelbaar draait." items={[
        { icon: 'message-circle', title: 'Geen losse WhatsApp-groepjes', body: 'Alle taken en ledencontact op één plek, in plaats van verspreid over chats die niemand terugleest.' },
        { icon: 'repeat', title: 'Voorspelbaar, elke dag', body: 'Vaste flows zorgen dat dezelfde dingen op dezelfde momenten gebeuren. Niet afhankelijk van wie er toevallig aan denkt.' },
        { icon: 'shield-check', title: 'Niets glipt er tussendoor', body: 'Taken blijven staan tot ze af zijn. Geen lead, lid of moment dat ongemerkt verdwijnt.' },
      ]} />
    </React.Fragment>
  );
}
window.TeamAansturing = TeamAansturing;
