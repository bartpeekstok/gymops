/* GymOps V2 — copy for the inner marketing pages (Producten, Prijzen,
   Klanten, Over ons). Lifted from the live site (bartpeekstok/gymops lib/data.ts)
   and restyled to the V2 white/black/mint direction. */
window.GOP = {

  /* ============================ PRODUCTEN ============================ */
  producten: {
    hero: {
      eyebrow: 'Producten',
      title: 'Eén systeem dat je hele gym laat draaien.',
      sub: 'Van het eerste leadbericht tot de 100ste les. GymOps neemt over wat jou weghoudt van je leden, en houdt het persoonlijk.',
    },
    pillars: [
      {
        icon: 'settings', tag: 'Beschikbaar', available: true,
        name: 'GymOps Flow',
        tagline: 'Het complete systeem voor je gym',
        body: 'Flow neemt over wat jou weghoudt van je leden. Van leadgeneratie tot persoonlijke kaartjes, van event-pagina\u2019s tot Google reviews. Flow handelt het op het juiste moment voor je af.',
        features: [
          'Custom website (SEO + AI search)',
          'Leadcapture & opvolging via WhatsApp en e-mail',
          'Handgeschreven kaarten via app of laptop',
          'Google reviews op het juiste moment',
          'Mijlpaal-signalering (verjaardagen, 100ste les, PR\u2019s)',
          'Onboarding-flow voor nieuwe leden (eerste 90 dagen)',
          'Event-pagina\u2019s (Bring-a-Friend, Hyrox, open dag)',
          'Slim afspraken plannen',
          'Branded e-mails, kaarten en agenda-uitnodigingen',
          'SportBit-integratie',
          'Onbeperkt flows & campagnes',
          '4 onboarding-calls + bezoek',
          'Toegang tot GymOps Academy',
        ],
        cta: 'Plan een demo',
      },
    ],
    everythingTitle: 'Drie beloftes, automatisch waargemaakt.',
    everythingSub: 'Elke lead opgevolgd. Elk lid gezien. Elke taak gedaan.',
    everything: [
      {
        icon: 'zap', title: 'Geen lead meer kwijt', href: 'leadopvolging.html',
        body: 'Iedere lead die binnenkomt via je website, social media of een QR code krijgt binnen \u00e9\u00e9n minuut een WhatsApp \u00e9n e-mail. Bij je coach komt direct een taak binnen om persoonlijk contact op te nemen.\n\nKrijg je iemand niet gelijk te pakken? Dan blijft GymOps geautomatiseerd opvolgen tot er reactie is. GymOps gyms zien hun leadconversie meetbaar omhoog gaan in het eerste kwartaal.',
      },
      {
        icon: 'heart', title: 'Geen lid meer vergeten', href: 'ledenervaring.html',
        body: 'GymOps signaleert wanneer een lid even niet geweest is, jarig is, of een mijlpaal nadert. Een persoonlijk berichtje of handgeschreven kaart vertrekt op het juiste moment.\n\nLeden voelen zich \u00e9cht gezien en blijven langer. Op diezelfde piekmomenten vraagt GymOps automatisch om een Google review.',
      },
      {
        icon: 'circle-check-big', title: 'Geen taak wordt vergeten', href: 'team-aansturing.html',
        body: 'Elke taak voor je team wordt automatisch toegewezen aan de juiste coach. Niet opgepakt vandaag? Dan blijft-ie staan en komt-ie morgen weer onder de aandacht.\n\nGaat een coach op vakantie of valt iemand uit? Een collega neemt openstaande taken in \u00e9\u00e9n klik over. Jouw team werkt voorspelbaar, en jij houdt overzicht.',
      },
    ],
    grow: [
      { icon: 'megaphone', title: 'Leadgeneratie', body: 'Onze websites zijn ingericht op goede vindbaarheid door zoekmachines en, misschien nog belangrijker, om goed door AI search gevonden te worden. Via GymOps draai je gerichte campagnes via Meta ads, WhatsApp en e-mail. Ook ex-leden hebben soms maar een klein duwtje nodig om terug te komen.' },
      { icon: 'send', title: 'Leadconversie', body: 'Nadat een lead z\u2019n gegevens heeft achtergelaten, is snel reageren cruciaal. Binnen \u00e9\u00e9n minuut ontvangen leads WhatsApp en e-mail, en GymOps spoort jou aan om persoonlijk contact op te nemen. Reminders houden je show-rate hoog tot ze in je gym staan.' },
      { icon: 'star', title: 'Reviews', body: 'Google reviews zijn belangrijk voor kleine gyms. Via GymOps vraag je leden precies op het juiste moment om een review. Ze willen het vaak best doen, maar denken er niet aan. De meeste GymOps gebruikers hebben meer dan 250 Google reviews.' },
    ],
  },

  /* ============================= PRIJZEN ============================= */
  prijzen: {
    hero: {
      eyebrow: 'Alles-in-\u00e9\u00e9n gym automation platform',
      title: 'Geen verborgen kosten. Binnen vier weken live met een systeem dat voor jou werkt.',
    },
    plans: [
      {
        productLabel: 'GymOps Flow', status: 'Beschikbaar', highlighted: true,
        name: 'Flow', price: '\u20ac450', period: '/ maand',
        disclaimer: 'Excl. btw \u00b7 12 maanden commitment, daarna maandelijks opzegbaar.',
        yearly: 'Of jaarbetaling: 11 \u00d7 \u20ac450 = \u20ac4.950 (1 maand gratis).',
        cta: 'Plan een demo', ctaIcon: 'arrow-right', comingSoon: false,
        features: [
          'Volledig ingericht platform',
          'Custom website (SEO + AI search)',
          'Leadcapture & opvolging via WhatsApp en e-mail',
          'Handgeschreven kaarten via app of laptop',
          'Google reviews op het juiste moment',
          'Mijlpaal-signalering (verjaardagen, 100ste les, PR\u2019s)',
          'Onboarding-flow voor nieuwe leden (eerste 90 dagen)',
          'Event-pagina\u2019s (Bring-a-Friend, Hyrox, open dag)',
          'Slim afspraken plannen',
          'Branded e-mails, kaarten en agenda-uitnodigingen',
          'SportBit-integratie',
          'Onbeperkt flows & campagnes',
          '4 onboarding-calls + bezoek',
          'Toegang tot GymOps Academy',
          'Snelle support van gym owners',
        ],
      },
    ],
    rating: 'Beoordeeld met 4.9 van 5 op basis van 169 reviews.',
    onboarding: {
      eyebrow: 'Van nul naar live',
      title: 'Binnen vier weken volledig live',
      sub: '4 begeleide calls, een bezoek op locatie en wij richten alles in. Jij hoeft alleen je gym te runnen.',
      steps: [
        { n: '1', title: 'Week 1 \u00b7 Kick-off', body: 'Intake-call, we importeren je ledendata uit SportBit en zetten je account klaar.' },
        { n: '2', title: 'Week 2 \u00b7 Inrichten', body: 'Customer journeys, flows en je custom website worden gebouwd op jouw gym.' },
        { n: '3', title: 'Week 3 \u00b7 Bezoek', body: 'We komen langs in je gym, trainen je team en finetunen alles samen.' },
        { n: 'check', title: 'Week 4 \u00b7 Live', body: 'Alles draait. Elke lead opgevolgd, elk lid gezien, elke taak toegewezen.' },
      ],
    },
    faqTitle: 'Veelgestelde vragen',
    faqs: [
      { q: 'Wat kost GymOps en wat is er inbegrepen?', a: 'GymOps Flow kost \u20ac450 per maand (excl. btw). Bij jaarbetaling betaal je 11 maanden (\u20ac4.950) en is de 12e gratis.' },
      { q: 'Voor welke gyms is GymOps gemaakt?', a: 'GymOps is gebouwd door gym owners, voor coaching gyms. CrossFit-gyms, hyrox-studio\u2019s, kracht- en conditioneringsgyms en vechtsportacademies hebben we de meeste ervaring mee. Werkt jouw gym anders? Plan een demo, dan kijken we samen of GymOps past.' },
      { q: 'Wie bouwt mijn website en wat als ik iets wil aanpassen?', a: 'Wij bouwen je website op maat in dezelfde technologie als bedrijven als Netflix en Spotify. Geen WordPress-thema of page builder. Nieuwe abonnementsvorm, tariefswijziging of een nieuwe coach in het team? Wij passen je website binnen \u00e9\u00e9n werkweek aan. Inbegrepen, geen offertes.' },
      { q: 'Hoe lang duurt de onboarding?', a: 'De meeste gyms zijn binnen vier weken live. De onboarding bestaat uit 4 begeleide calls plus een bezoek bij je gym op locatie. We importeren je bestaande ledendata, richten je customer journeys in en koppelen SportBit zodat alles vanaf dag \u00e9\u00e9n werkt.' },
      { q: 'Zit ik vast aan een lang contract?', a: 'Je gaat een commitment van 12 maanden aan. Daarna loopt het maandelijks door en kun je op elk moment opzeggen. Geen verborgen kosten, geen uitstapboetes.' },
    ],
  },

  /* ============================= KLANTEN ============================= */
  klanten: {
    hero: {
      eyebrow: 'Klanten',
      title: 'Gebouwd door gym owners. Vertrouwd door gym owners.',
      sub: 'Van CrossFit-gyms tot boutique studio\u2019s: gyms door heel Nederland draaien op GymOps. Dit zeggen ze erover.',
    },
    stats: [
      { value: '22% \u2192 61%', label: 'Leadconversie in 3 maanden' },
      { value: '250+', label: 'Google reviews bij de meeste gyms' },
      { value: '4.9/5', label: 'Gemiddelde beoordeling' },
      { value: '96%', label: 'Ledenretentie' },
    ],
    featured: [
      { quote: 'In drie maanden zijn we van 22% naar 61% leadconversie gegaan. Elke lead wordt nu automatisch opgevolgd. Ik hoef er niet meer aan te denken.', name: 'Jeroen van Duijn', role: 'Eigenaar CrossFit Leiden', photo: 'jeroen-van-duijn.webp', logo: 'logo-cfl.png' },
      { quote: 'Mijn coaches werken eindelijk consistent. Iedereen weet wat er moet gebeuren en ik hoef er niet meer achteraan te zitten.', name: 'Bart Peekstok', role: 'Eigenaar CrossFit Alkmaar', photo: 'bart-peekstok.webp', logo: 'logo-cfa.png' },
    ],
    wall: [
      { quote: 'Twee maanden na de start al 8 nieuwe leden direct uit de automatisering. Het systeem doet het werk terwijl wij bezig zijn met de community.', name: 'Kees Houwaart', company: 'Gymbox Noordwijk', initials: 'KH', metric: '+8 leden' },
      { quote: 'Onze leadopvolging loopt nu vanzelf. Ik zie in één oogopslag wie er binnenkwam en wie nog opvolging nodig heeft.', name: 'Daan V.', company: 'CrossFit Alkmaar', initials: 'DV' },
      { quote: 'De ledenervaring is echt uitstekend. Niemand voelt zich nog vergeten.', name: 'Hannah C.', company: 'Unscared', initials: 'HC' },
      { quote: 'Bespaart mij echt uren per week. Ik kan weer coachen in plaats van administreren.', name: 'Matthijs H.', company: 'CrossFit Naarden', initials: 'MH' },
      { quote: 'Als coach krijg ik mijn taken gewoon binnen. Bellen, een kaartje sturen, een lid checken: niets blijft meer liggen.', name: 'Sanne de Wit', company: 'Coach · CrossFit Leiden', initials: 'SW' },
      { quote: 'De handgeschreven kaarten zijn een schot in de roos. Leden praten erover.', name: 'Trina K.', company: 'CrossFit Capelle', initials: 'TK' },
      { quote: 'Sinds onze nieuwe website komen er via Google veel meer proeflessen binnen.', name: 'Rico T.', company: 'CrossFit TX', initials: 'RT', metric: 'meer proeflessen' },
      { quote: 'Ze geven echt om kleine gym owners. Support van mensen die het zelf doen.', name: 'Shad W.', company: 'CrossFit Leiden', initials: 'SW' },
      { quote: 'Ik hou nu makkelijk contact met leden die even wegblijven. Een berichtje op het juiste moment maakt het verschil.', name: 'Tim Bakhuis', company: 'Coach · CrossFit Willemsoord', initials: 'TB' },
      { quote: 'Een Bring-a-Friend event staat in vijf minuten live, inclusief betaling. Onze zaal zat helemaal vol.', name: 'Mark P.', company: 'CrossFit Willemsoord', initials: 'MP', metric: 'volle zaal' },
    ],
    shorts: [
      'Heeft ons leven zoveel makkelijker gemaakt',
      'Zo eenvoudig te gebruiken!',
      'Bespaart mij tijd \u00e9n geld',
      'Intu\u00eftief, ze denken aan alles',
      'Ze geven echt om kleine gym-eigenaren',
      'Niet meer weg te denken uit ons bedrijf',
      'Onmisbaar voor onze groei',
    ],
    trusted: [
      { name: 'CrossFit Alkmaar', src: 'logo-cfa.png' },
      { name: 'CrossFit Naarden', src: 'logo-cfn.png' },
      { name: 'CrossFit Capelle', src: 'logo-cfc.png' },
      { name: 'CrossFit Leiden', src: 'logo-cfl.png' },
      { name: 'Gymbox Noordwijk', src: 'logo-gymbox.png' },
      { name: 'Unscared', src: 'logo-unscared.png' },
      { name: 'CrossFit TX', src: 'logo-cftx.png' },
      { name: 'CrossFit Willemsoord', src: 'logo-willemsoord.png' },
    ],
  },

  /* ============================ OVER ONS ============================ */
  overons: {
    hero: {
      eyebrow: 'Over ons',
      title: 'Software van twee gym owners die het zelf doen.',
      sub: 'GymOps is gebouwd door Jeroen en Bart, eigenaren van CrossFit Leiden en CrossFit Alkmaar. Onze eigen gyms draaien er ook op.',
    },
    founders: [
      {
        initials: 'JV', photo: 'jeroen-van-duijn.webp',
        name: 'Jeroen van Duijn',
        role: 'Mede-oprichter GymOps \u00b7 Eigenaar CrossFit Leiden',
        gym: 'logo-cfl.png',
        bio: 'Als eigenaar van CrossFit Leiden weet ik als geen ander hoe het is om alles zelf te doen. Coaches aansturen via WhatsApp, leads opvolgen tussen de trainingen door, en hopen dat niemand stilletjes opzegt zonder dat je het merkt.\n\nIk was het al vrij snel zat om reactief te ondernemen. Ik wilde een systeem dat voor mij werkt, ook als ik zelf op de vloer sta. Met een achtergrond in financial controlling was ik altijd al bezig met controle via systemen en data.\n\nTwee jaar geleden raakte ik in contact met Bart van CrossFit Alkmaar. We gingen steeds meer sparren over hoe we onze systemen beter konden inrichten. Uit die samenwerking is GymOps ontstaan.\n\nVandaag draait mijn gym volledig op GymOps Flow. Elke lead wordt automatisch opgevolgd, nieuwe leden krijgen een welkomstflow van 30 dagen, en ik stuur handgeschreven kaarten zonder er zelf aan te hoeven denken. Ik kan me eerlijk gezegd niet meer voorstellen hoe het zonder was.',
      },
      {
        initials: 'BP', photo: 'bart-peekstok.webp',
        name: 'Bart Peekstok',
        role: 'Mede-oprichter GymOps \u00b7 Eigenaar CrossFit Alkmaar',
        gym: 'logo-cfa.png',
        bio: 'Ik weet hoe een gym werkt, want ik sta er zelf al meer dan 12 jaar middenin. Leads die er tussenuit glippen, opvolging die blijft liggen, een klantreis die nergens op papier staat en taken die niet worden opgepakt. Ik heb het allemaal jarenlang werkbaar geprobeerd te maken, terwijl ik alle andere ballen ook in de lucht hield. Precies daarom hebben we GymOps gebouwd.\n\nBij CrossFit Alkmaar zijn we altijd goed geweest in persoonlijk contact. Ook met meer leden lukt het ons nog goed om iemand n\u00e9t op het goede moment een berichtje te sturen of een kaartje om iets te vieren. Het systeem zorgt ervoor dat we niemand vergeten.\n\nGymOps regelt je hele leadflow en klantreis automatisch, van het eerste contactmoment tot de viering van de 100e workout. In het Nederlands, afgestemd op hoe jouw gym \u00e9cht werkt, en met mensen bereikbaar die je begrijpen.\n\nDit is wat ik zelf tien jaar geleden al had willen hebben.',
      },
    ],
    valuesTitle: 'Waar we voor staan',
    values: [
      { number: '01', title: 'Branche-ervaring die ertoe doet', body: 'We hebben de uitdagingen van gymeigenaarschap zelf meegemaakt. Die praktijkkennis vormt elke productbeslissing, zodat jij tools krijgt gebouwd door mensen die jouw wereld \u00e9cht begrijpen.' },
      { number: '02', title: 'Gyms helpen levens te veranderen', body: 'Onze missie is gymeigenaren succesvol te maken. Als zij slagen, vinden meer mensen gezondheid, community en zelfvertrouwen. Dat is impact die verder reikt dan zakelijk succes alleen.' },
      { number: '03', title: 'Snel, gefocust en efficient', body: 'We geloven dat kleine, gespecialiseerde teams de beste resultaten leveren. Met minder bureaucratie en meer verantwoordelijkheid bewegen we snel. We houden elke klant persoonlijk dichtbij, met support van mensen die zelf een gym runnen.' },
    ],
    whyTitle: 'Waarom gym owners voor GymOps kiezen',
    why: [
      { icon: 'badge-check', title: 'We weten hoe het is', body: 'Als gym owners weten we hoe het is om een gym te runnen. We hebben zelf meerdere softwarepakketten gebruikt, maar geen \u00e9\u00e9n was echt ingericht op het runnen van een coaching gym. Daarom hebben we GymOps gebouwd. Onze eigen gyms draaien er ook op.' },
      { icon: 'zap', title: 'Geen weken wachten. Geen offertes.', body: 'Nieuwe abonnementsvorm? Tariefswijziging? Een nieuwe coach in het team? Wij passen je website binnen een werkweek aan. Inbegrepen.' },
      { icon: 'flame', title: 'Gedreven door een rebel spirit', body: 'Wij weigeren de status quo van software die \u201calles doet maar niets goed\u201d. Jij krijgt een set functies die je daadwerkelijk gebruikt omdat ze werken. Dat weten we, want we gebruiken ze zelf ook.' },
      { icon: 'message-circle', title: 'Snelle support, in je eigen taal', body: 'Heb je vragen of wil je iets gewijzigd hebben? Dan heb je snel contact. Niet met iemand in een andere tijdzone, maar met een gym owner uit Nederland die snapt wat je wilt.' },
    ],
  },
};
