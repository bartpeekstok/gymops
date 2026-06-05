/* GymOps V2 — copy + asset references for the marketing-site kit.
   Copy is lifted verbatim from the brief / V1 lib/data.ts. */
window.GO = {
  A: 'assets/',

  nav: [
    { label: 'Leads', href: 'leadopvolging.html' },
    { label: 'Leden', href: 'ledenervaring.html' },
    { label: 'Team', href: 'team-aansturing.html' },
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
      { icon: 'star', title: 'Google reviews op het juiste moment', body: 'Na een PR of mijlpaal vraagt GymOps automatisch om een review. De meeste gyms staan op meer dan 250 reviews.' },
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
    flow: ['Leadcapture', 'Proefles', 'Welkomstflow', 'Reviews'],
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
    title: 'Klaar om geen lead meer kwijt te raken?',
    sub: 'Plan een demo van 30 minuten. We laten je het systeem zien op jouw gym.',
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
      { label: 'Proefles gepland', pct: 61 },
      { label: 'Proefles geweest', pct: 48 },
      { label: 'Lid geworden', pct: 34 },
    ],

    // Mobile dashboard — metric cards (this month)
    mobileRange: '1 mei – 31 mei',
    metrics: [
      { label: 'Nieuwe leads', value: 24, delta: '+31%' },
      { label: 'Proeflessen gepland', value: 9, delta: '+20%' },
      { label: 'Proeflessen geweest', value: 7, delta: '+100%' },
      { label: 'Lid geworden', value: 4, delta: '+33%' },
    ],

    // Mobile task manager — pending tasks
    tasks: [
      { who: 'Ed Kool', when: '30 mei · 12:01', title: 'Ed Kool: website lead', body: 'Neem contact op!', coach: 'Sanne de Wit', badge: 'Nieuw' },
      { who: 'Tom', when: '30 mei · 12:00', title: 'Tom: vorige week proefles', body: 'Is hij al gesproken over starten aan de on ramp?', coach: 'Tim Bakhuis', badge: 'Opvolgen' },
      { who: 'Ruby Henselmans', when: '29 mei · 16:20', title: 'Ruby moest nog nadenken', body: 'Ze gaf aan dat ze vandaag gebeld wilde worden.', coach: 'Noa Vermeer', badge: 'Vandaag' },
    ],

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
