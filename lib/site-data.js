/* GymOps V2 — copy + asset references for the marketing-site kit.
   Copy is lifted verbatim from the brief / V1 lib/data.ts. */
export const GO = {
  A: '/assets/',

  nav: [
    { label: 'Leads', href: 'leadopvolging.html' },
    { label: 'Leden', href: 'ledenervaring.html' },
    { label: 'Team', href: 'team-aansturing.html' },
    { label: 'Website', href: 'website.html' },
    { label: 'Prijzen', href: 'prijzen.html' },
    { label: 'Klanten', href: 'klanten.html' },
    { label: 'Over ons', href: 'over-ons.html' },
  ],

  hero: {
    eyebrow: 'Hét CRM systeem voor gym owners',
    headline: ['Elke lead opgevolgd.', 'Elk lid gezien.', 'Elke taak gedaan.'],
    sub: 'Het CRM voor leadopvolging, ledenbehoud en team-aansturing, naadloos gekoppeld aan SportBit.\n\nGebouwd voor en door gym-owners.',
    primary: 'Plan een demo',
  },

  trusted: [
    { name: 'CrossFit Alkmaar', src: 'logo-cfa.png' },
    { name: 'CrossFit Naarden', src: 'logo-cfn.png' },
    { name: 'CrossFit Capelle', src: 'logo-cfc.png' },
    { name: 'CrossFit Leiden', src: 'logo-cfl.png' },
    { name: 'Gymbox Noordwijk', src: 'logo-gymbox.png' },
    { name: 'Unscared', src: 'logo-unscared.png' },
    { name: 'CrossFit TX', src: 'logo-cftx.png' },
    { name: 'CrossFit Willemsoord', src: 'logo-willemsoord-w.png' },
  ],

  pillars: [
    {
      icon: 'zap', step: '01', tag: 'Lead',
      title: 'Geen lead meer kwijt',
      body: 'Iedere lead via website, social of QR-code krijgt binnen één minuut een WhatsApp én e-mail. Coach krijgt direct een taak om persoonlijk contact op te nemen.',
    },
    {
      icon: 'heart', step: '02', tag: 'Lid',
      title: 'Geen lid meer vergeten',
      body: 'GymOps signaleert wie even niet geweest is, jarig is of een mijlpaal nadert. Persoonlijk bericht of handgeschreven kaart gaat op het juiste moment de deur uit. Custom eventpagina\u2019s met communicatieflows zijn ook inbegrepen.',
    },
    {
      icon: 'circle-check-big', step: '03', tag: 'Taak',
      title: 'Geen taak vergeten',
      body: 'Elke taak gaat automatisch naar de juiste coach. Niet opgepakt? Morgen staat-ie er weer. Valt iemand uit, dan neemt een collega in één klik over.',
    },
  ],

  leden: {
    eyebrow: 'GymOps Flow · Ledenervaring',
    title: 'Automatisering doet het werk. Jij maakt het persoonlijk.',
    items: [
      { icon: 'pen-line', title: 'Handgeschreven kaarten in 15 seconden', body: 'Via de app of je laptop. Een echte kaart in de bus valt op tussen het werk en de pakketten.' },
      { icon: 'route', title: 'Een klantreis die leden bindt', body: 'Van eerste les tot trouw lid: GymOps zet automatisch de juiste contactmomenten klaar, zodat ieder lid zich gezien voelt en langer blijft.' },
      { icon: 'trophy', title: 'Vergeet geen mijlpaal meer', body: '100ste les, verjaardag, PR. Gesignaleerd via de SportBit-koppeling, nooit meer gemist.' },
    ],
    card: {
      meta: 'Handgeschreven · 09:14 verstuurd',
      hi: 'Hey Lisa,',
      body: 'Wat ben jij goed bezig. Je werkt hard en het resultaat mag er zijn. Wij zijn trots op je!',
      sig: 'Team CF Zuidlaren',
      foot: 'Automatisch verstuurd na een mijlpaal',
    },
  },

  integrations: {
    eyebrow: 'Eén systeem, alles verbonden',
    title: 'GymOps praat met de tools die je al gebruikt.',
    primary: [
      { name: 'SportBit', desc: 'ledenbeheer & rooster', src: 'integ-sportbit.png' },
      { name: 'WhatsApp', desc: 'ledencommunicatie', src: 'integ-whatsapp.avif' },
    ],
    secondary: [
      { name: 'Google', src: 'integ-google.webp' },
      { name: 'Meta Ads', src: 'integ-meta.png' },
      { name: 'Stripe', src: 'integ-stripe.png' },
      { name: 'iDEAL', src: 'integ-ideal.svg' },
      { name: 'Writify', src: 'integ-writify.jpg' },
      { name: 'Slack', src: 'integ-slack.png' },
      { name: 'Zapier', src: 'integ-zapier.png' },
      { name: 'Facebook', src: 'integ-facebook.png' },
      { name: 'Instagram', src: 'integ-instagram.jpg' },
    ],
    flow: ['Leadcapture', 'Kennismaking', 'Welkomstflow', 'Reviews'],
  },

  testimonials: [
    { quote: 'In drie maanden van 22% naar 61% leadconversie. Elke lead wordt nu automatisch opgevolgd. Ik hoef er niet meer aan te denken.', name: 'Jeroen van Duijn', company: 'CrossFit Leiden', initials: 'JD', metric: '22% → 61%' },
    { quote: 'Mijn coaches werken eindelijk consistent. Iedereen weet wat er moet gebeuren.', name: 'Bart Peekstok', company: 'CrossFit Alkmaar', initials: 'BP' },
    { quote: 'Twee maanden na de start al 8 nieuwe leden direct uit de automatisering.', name: 'Kees Houwaart', company: 'Gymbox Noordwijk', initials: 'KH', metric: '+8 leden' },
    { quote: 'De ledenervaring is echt uitstekend. Niemand voelt zich nog vergeten.', name: 'Hannah C.', company: 'Unscared', initials: 'HC' },
    { quote: 'Bespaart mij echt uren per week. Ik kan weer coachen in plaats van administreren.', name: 'Matthijs H.', company: 'CrossFit Naarden', initials: 'MH' },
    { quote: 'De handgeschreven kaarten zijn een schot in de roos. Leden praten erover.', name: 'Trina K.', company: 'CrossFit Capelle', initials: 'TK' },
    { quote: 'Intuïtief en compleet. Ze denken echt aan alles wat een gym nodig heeft.', name: 'Theresa S.', company: 'GymBox', initials: 'TS' },
    { quote: 'Ze geven echt om kleine gym owners. Support van mensen die het zelf doen.', name: 'Shad W.', company: 'CrossFit Leiden', initials: 'SW' },
  ],

  pricing: {
    eyebrow: 'GymOps Flow',
    title: 'Eén product. Alles inbegrepen.',
    price: '€450',
    period: '/ maand ex BTW',
    disclaimer: '12 maanden commitment, daarna maandelijks opzegbaar. Geen setupkosten. SMS, WhatsApp en calls apart op gebruik.',
    cta: 'Plan een demo',
    features: [
      'Custom website (SEO + AI search)',
      'Leadcapture & opvolging via WhatsApp en e-mail',
      'Handgeschreven kaarten via app of laptop',
      'Google reviews op het juiste moment',
      'Mijlpaal-signalering (verjaardag, 100ste les, PR)',
      'Onboarding-flow voor nieuwe leden',
      'SportBit-integratie',
      'Onbeperkt flows & campagnes',
      '4 onboarding-calls + 1 fysiek bezoek',
    ],
  },

  cta: {
    title: 'Klaar om geen lead, lid of taak meer te missen?',
    sub: 'Plan een demo van 30 minuten. We laten je zien hoe het systeem kan werken voor jouw gym.',
    primary: 'Plan een demo',
  },

  dashboard: {
    persona: 'Eva D.', gym: 'CrossFit Zuidlaren',
    atRisk: [
      { name: 'Sander V.', initial: 'S', days: '10 dagen' },
      { name: 'Lisa de B.', initial: 'L', days: '20 dagen' },
      { name: 'Mark P.', initial: 'M', days: '28 dagen' },
    ],
  },

  /* ---- Product mockups: rebranded to our flow (CrossFit Leiden) ---- */
  product: {
    workspace: 'CrossFit Zuidlaren',
    location: 'Zuidlaren, Drenthe',
    initials: 'CZ',
    coach: 'Sanne de Wit',
    owner: 'Stefan Bakker',

    // Desktop dashboard — opportunity status + funnel
    oppTotal: 88,
    oppStatus: [
      { label: 'Open', value: 52, color: '#34D399' },
      { label: 'Verlaten', value: 23, color: '#CBD5E1' },
      { label: 'Gewonnen', value: 12, color: '#10B981' },
      { label: 'Verloren', value: 1, color: '#0A0A0F' },
    ],
    conversion: 61,
    funnel: [
      { label: 'Nieuwe lead', pct: 100 },
      { label: 'Belafspraak gepland', pct: 72 },
      { label: 'Kennismaking gepland', pct: 61 },
      { label: 'Kennismaking geweest', pct: 48 },
      { label: 'Lid geworden', pct: 34 },
    ],

    // Mobile dashboard — metric cards (this month)
    mobileRange: '1 mei – 31 mei',
    metrics: [
      { label: 'Nieuwe leads', value: 24, delta: '+31%' },
      { label: 'Kennismakingen gepland', value: 9, delta: '+20%' },
      { label: 'Kennismakingen geweest', value: 7, delta: '+100%' },
      { label: 'Lid geworden', value: 4, delta: '+33%' },
    ],

    // Mobile task manager — pending tasks
    tasks: [
      { who: 'Lisa de Boer', when: '6 jun · 09:00', title: 'Lisa: nieuwe lead via website', body: 'Bel binnen het uur even op om haar te verwelkomen en een kennismaking in te plannen.', coach: 'Sanne de Wit', badge: 'Nieuw' },
      { who: 'Mark Jansen', when: '6 jun · 08:30', title: 'Mark: kennismaking gehad', body: 'Bel op hoe de kennismaking beviel en help hem naar een besluit.', coach: 'Tim Bakhuis', badge: 'Vandaag' },
      { who: 'Sophie Bakker', when: '5 jun · 17:10', title: 'Sophie: nog geen reactie', body: 'Tweede keer contact opnemen, ze reageerde nog niet op het eerste appje.', coach: 'Noa Vermeer', badge: 'Opvolgen' },
    ],

    // Mobile task manager — member-experience tasks (leden page)
    memberTasks: [
      { who: 'Lisa de Boer', when: '6 jun · 09:00', title: 'Lisa: twee weken lid', body: 'Neem contact op hoe de eerste weken bevallen en of ze nog vragen heeft.', coach: 'Sanne de Wit', badge: 'Check-in' },
      { who: 'Mark Jansen', when: '6 jun · 08:30', title: 'Mark: 100ste workout', body: 'Leg een cadeautje klaar en feliciteer hem na de training.', coach: 'Tim Bakhuis', badge: 'Vandaag' },
      { who: 'Sophie Bakker', when: '5 jun · 17:10', title: 'Sophie: interesse personal training', body: 'Neem contact op over de mogelijkheden voor personal training.', coach: 'Noa Vermeer', badge: 'Opvolgen' },
    ],

    // Mobile owner overview — open vs done tasks + per-coach breakdown
    taskOverview: {
      open: 6,
      done: 23,
      coaches: [
        { name: 'Sanne de Wit', done: 9, total: 10 },
        { name: 'Tim Bakhuis', done: 6, total: 7 },
        { name: 'Noa Vermeer', done: 4, total: 8, flag: '2 verlopen' },
      ],
    },

    // Mobile contact card
    contact: {
      name: 'Linda Verhoeven', initials: 'LV',
      phone: '+31 6 82 78 03 34', email: 'verhoeven@gmail.com',
      tags: 'long term client', tagMore: '+1',
      task: {
        title: '!Afwezig!',
        body: 'Linda Verhoeven is al een week niet komen trainen. Check bij haar in om te vragen of je iets kunt betekenen.',
        due: '31 mei 2026 · 07:00',
      },
    },
  },
};

/* GymOps V2 — copy for the inner marketing pages (Producten, Prijzen,
   Klanten, Over ons). Lifted from the live site (bartpeekstok/gymops lib/data.ts)
   and restyled to the V2 white/black/mint direction. */
export const GOP = {

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
        featureGroups: [
          {
            title: 'Leads & opvolging', icon: 'target',
            items: [
              { icon: 'globe', text: 'Custom website (SEO + AI search)' },
              { icon: 'message-circle', text: 'Leadcapture & opvolging via WhatsApp en e-mail' },
              { icon: 'calendar-check', text: 'Slim afspraken plannen' },
              { icon: 'calendar-days', text: 'Event-pagina\u2019s (Bring-a-Friend, Hyrox, open dag)' },
            ],
          },
          {
            title: 'Ledenervaring', icon: 'heart',
            items: [
              { icon: 'sparkles', text: 'Onboarding-flow voor nieuwe leden (eerste 90 dagen)' },
              { icon: 'trophy', text: 'Mijlpaal-signalering (verjaardagen, 100ste les, PR\u2019s)' },
              { icon: 'pen-line', text: 'Handgeschreven kaarten via app of laptop' },
              { icon: 'star', text: 'Google reviews op het juiste moment' },
            ],
          },
          {
            title: 'Platform & merk', icon: 'layout-dashboard',
            items: [
              { icon: 'check-circle', text: 'Volledig ingericht platform' },
              { icon: 'mail', text: 'Branded e-mails, kaarten en agenda-uitnodigingen' },
              { icon: 'plug', text: 'SportBit-integratie' },
              { icon: 'repeat', text: 'Onbeperkt flows & campagnes' },
            ],
          },
          {
            title: 'Onboarding & support', icon: 'life-buoy',
            items: [
              { icon: 'phone-call', text: '4 onboarding-calls + bezoek op locatie' },
              { icon: 'graduation-cap', text: 'Toegang tot GymOps Academy' },
              { icon: 'headphones', text: 'Snelle support van gym owners' },
            ],
          },
        ],
      },
    ],
    rating: 'Beoordeeld met 4.9 van 5 op basis van 169 reviews.',
    onboarding: {
      eyebrow: 'Van nul naar live',
      title: 'Binnen vier weken volledig live',
      sub: '4 begeleide calls, een bezoek op locatie en wij richten alles in. Jij hoeft alleen je gym te runnen.',
      steps: [
        { n: '1', title: 'Week 1 \u00b7 Kick-off', body: 'Kennismakingsgesprek, we importeren je ledendata uit SportBit en zetten je account klaar.' },
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
      { icon: 'monitor-smartphone', title: 'Op je laptop én in de app', body: 'Beheer je gym vanaf het volledige dashboard in je browser, terwijl je team taken oppakt via de GymOps-app op de telefoon. Één systeem, overal bij de hand.' },
    ],
  },
};
