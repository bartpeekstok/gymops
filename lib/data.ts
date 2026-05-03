export const navLinks = [
  { label: "Producten", href: "/producten", hasDropdown: true },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Klanten", href: "/klanten" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Bronnen", href: "#", hasDropdown: true },
];

export const trustedLogos = [
  { name: "CrossFit Alkmaar", src: "/logo-cfa.png" },
  { name: "CrossFit Naarden", src: "/logo-cfn.png", larger: true },
  { name: "CrossFit Capelle", src: "/logo-cfc.png", larger: true },
  { name: "CrossFit Leiden", src: "/logo-cfl.png", larger: true },
  { name: "GymBox", src: "/logo-gymbox.png" },
];

export const dashboardStats = [
  { label: "Nieuwe aanmeldingen", value: "24", sub: "Deze maand", color: "white" as const },
  { label: "Jaaromzet", value: "€37.228", sub: "Jaar tot heden", color: "accent" as const },
  { label: "Gem. looptijd", value: "8 mnd", sub: "Gem. betrokkenheid", color: "white" as const },
  { label: "Retentie", value: "96%", sub: "Levenslange waarde", color: "white" as const },
];

export const atRiskMembers = [
  { name: "Sander V.", days: "10 dagen" },
  { name: "Lisa de B.", days: "20 dagen" },
  { name: "Mark P.", days: "28 dagen" },
];

export const everythingCards = [
  {
    icon: "users",
    title: "Betere ledenervaring",
    body: "GymOps signaleert wat jij anders pas laat op de bank thuis bedenkt: Jeroen is al drie weken niet geweest, is Lisa nou morgen jarig? Mark heeft vandaag zijn 100ste les meegedaan, heeft hij wel een cadeautje gekregen?\n\nEr wordt automatisch een taak aangemaakt bij de coach voor wie dit is. Zo blijft al het ledencontact persoonlijk en oprecht. Een persoonlijk bericht doet zoveel meer dan weer een geautomatiseerd mailtje.",
  },
  {
    icon: "gear",
    title: "Automatische leadopvolging",
    body: "Verlies geen lead meer uit het oog. Iemand die z'n gegevens achterlaat op social media, je website of via een QR code krijgt automatisch een WhatsApp bericht en e-mail. Daarnaast worden er gelijk taken aangemaakt bij het personeel om zo snel mogelijk contact op te nemen.\n\nKrijg je iemand niet gelijk te pakken? Dan blijft GymOps automatisch berichten sturen en meldingen bij coaches maken zodat je nooit meer leads vergeet.",
  },
  {
    icon: "chart",
    title: "Custom website",
    body: "Bij GymOps bouwen we websites met dezelfde professionele technologie die wordt gebruikt door bedrijven als Netflix, Nike, Uber en Spotify. We gebruiken geen standaard WordPress-thema's of page builders, we bouwen maatwerk software die is geoptimaliseerd voor snelheid, veiligheid en conversie.\n\nSimpel gezegd: jouw website is gebouwd als een app, niet als een document. Dat maakt het sneller, veiliger en een stuk professioneler dan wat de meeste gyms gebruiken.",
  },
];

export const coreFeatureTabs = [
  {
    icon: "pen",
    title: "Handgeschreven kaarten",
    body: "Via ons systeem stuur je een handgeschreven kaart met persoonlijke tekst binnen 15 seconden. Makkelijk via de mobiele app of vanachter je laptop.\n\nHeeft iemand al erg lang geen kaartje meer gehad? Dan kan GymOps je daar ook even aan herinneren.",
  },
  {
    icon: "mail",
    title: "Geen onpersoonlijke mailtjes uit het systeem van je leverancier",
    body: "Elke omgeving krijgt jouw branding. Mails, kaarten, agenda-uitnodigingen, alles komt uit jouw gym, niet uit een GymOps-template.",
  },
  {
    icon: "party",
    title: "Bring a Friend events, Hyrox simulaties, open dag, allemaal in 5 minuten live.",
    body: "Eventpagina, inschrijfformulier met directe betaling, bevestigingsmail, taak voor je team, en een after-event flow naar abonnement.",
  },
  {
    icon: "calendar-check",
    title: "Slim afspraken plannen, zonder heen-en-weer.",
    body: "We koppelen jouw beschikbaarheid en die van je team aan het systeem. Leads en leden krijgen alleen tijden te zien die jullie het best uitkomen. Scheelt uren per week aan mailtjes.",
  },
  {
    icon: "trophy",
    title: "Vergeet geen mijlpaal meer",
    body: "GymOps zorgt ervoor dat je belangrijke momenten voor je leden nooit vergeet. Iemand die z'n 100ste les heeft meegedaan bijvoorbeeld. Maar ook verjaardagen, persoonlijk records en andere speciale momenten worden nooit meer overgeslagen.",
  },
  {
    icon: "heart",
    title: "Oog voor nieuwe en oudere leden",
    body: "Bij nieuwe leden is het belangrijk om ze minstens de eerste 90 dagen veel aandacht te geven. In GymOps vind je meerdere customer journeys met veel contactmomenten voor nieuwe leden.\n\nBestaande leden verdienen ook aandacht: GymOps signaleert wanneer iemand even niet geweest is en zorgt ervoor dat jij persoonlijk contact kan opnemen. Ben je nu even te druk? Dan blijft deze taak open staan zodat het niet wordt vergeten.",
  },
];

export const growColumns = [
  {
    icon: "megaphone",
    title: "Leadgeneratie",
    body: "Onze websites zijn ingericht op goede vindbaarheid door zoekmachines en, misschien nog belangrijker, ingericht om goed door AI search gevonden te worden.\n\nVia GymOps draai je gerichte campagnes op je doelgroepen via Meta ads, maar ook campagnes via WhatsApp en e-mail staan al voor je klaar. Wist je dat je ex-leden soms maar een klein duwtje nodig hebben om weer terug te komen? Ook hier heeft GymOps kant en klare processen voor, zonder dat mensen zich gespamd voelen.",
  },
  {
    icon: "send",
    title: "Leadconversie",
    body: "Nadat een lead z'n gegevens heeft achtergelaten, is het belangrijk dat er snel gereageerd wordt. Binnen één minuut ontvangen leads WhatsApp berichten en/of e-mails en spoort GymOps jou aan om snel persoonlijk contact op te nemen.\n\nZodra een proefles of intake is geboekt, zorgt GymOps ervoor dat leads herinneringsberichten krijgen totdat ze in je gym staan. Niet te veel berichten, maar wel genoeg om jouw show rate hoog te houden.",
  },
  {
    icon: "star",
    title: "Reviews",
    body: "Google reviews zijn belangrijk voor kleine gyms. Via GymOps vraag je leden precies op het juiste moment of ze een Google review willen achterlaten.\n\nJe leden willen dit vaak graag doen, maar denken daar simpelweg niet aan. De meeste GymOps gebruikers hebben meer dan 250 Google reviews!",
  },
];

export const trainTabs = [
  {
    icon: "smartphone",
    title: "Alles-in-één app voor trainingen",
    body: "Houd leden betrokken door een plek te bieden om trainingen te loggen, lessen te reserveren en prestaties te delen op sociale feeds binnen de app.",
  },
  {
    icon: "dumbbell",
    title: "Krachtige trainingsplanner",
    body: "Maak aangepaste trainingen, programma's, benchmarks en video's en lever ze direct aan je leden via één eenvoudig te gebruiken app.",
  },
  {
    icon: "star",
    title: "Premium trainingen van partners",
    body: "Leden kunnen genieten van trainingen van gecertificeerde partners die naadloos zijn geïntegreerd in de GymOps app — zonder extra abonnement.",
  },
];

export const whyCards = [
  {
    title: "We weten hoe het is",
    body: "Als gym owners weten we hoe het is om een gym te runnen. We hebben de afgelopen jaren zelf meerdere software pakketten gebruikt, maar geen één was echt ingericht op het runnen van een coaching gym als de onze. Daarom hebben we GymOps gebouwd, onze eigen gyms draaien er ook op.",
  },
  {
    title: "Geen weken wachten. Geen offertes.",
    body: "Nieuwe abonnementsvorm? Tariefswijziging? Een nieuwe coach in het team? Wij passen je website binnen een werkweek aan. Inbegrepen.",
  },
  {
    title: "Gedreven door een rebel spirit",
    body: "Wij weigeren de status quo van software die “alles doet maar niets goed”. Jij krijgt een set functies die je daadwerkelijk gebruikt omdat ze werken. Dat weten we, want we gebruiken ze zelf ook.",
  },
  {
    title: "Snelle support, in je eigen taal",
    body: "Heb je vragen of wil je zaken gewijzigd hebben? Dan heb je snel contact. Niet met iemand in een andere tijdzone, maar met een gym owner uit Nederland die snapt wat je wilt.",
  },
];

export const successQuotes = [
  {
    quote: "Letterlijk alles is verdubbeld dankzij GymOps — van ons ledenbestand tot onze maandelijkse omzet.",
    name: "Robert de Vries",
    company: "eigenaar CrossFit Oost",
  },
  {
    quote: "Het platform is met ons meegegroeid en alle integraties maken ons leven zo veel makkelijker. Van 20 naar bijna 400 leden.",
    name: "Sandra Bakker",
    company: "Dominion MMA Rotterdam",
  },
  {
    quote: "GymOps heeft ons gered tijdens de pandemie. Het zag eruit alsof we veel investeerden in technologie, en dat was gratis.",
    name: "Tim van den Berg",
    company: "BC-Fit Utrecht",
  },
];

export const pricingPlans = [
  {
    productLabel: "GymOps Flow",
    status: "beschikbaar",
    name: "Flow",
    price: "€450",
    period: "/ maand",
    disclaimer: "Excl. BTW · 12 maanden commitment, daarna maandelijks opzegbaar.",
    yearlyOption: "Of jaarbetaling: 11 × €450 = €4.950 (1 maand gratis).",
    cta: "Plan een demo",
    ctaVariant: "primary" as const,
    highlighted: true,
    comingSoon: false,
    features: [
      "Volledig ingericht platform",
      "Custom website (SEO + AI search)",
      "Leadcapture & opvolging via WhatsApp en e-mail",
      "Handgeschreven kaarten via app of laptop",
      "Google reviews op het juiste moment",
      "Mijlpaal-signalering (verjaardagen, 100ste les, PR's)",
      "Onboarding-flow voor nieuwe leden (eerste 90 dagen)",
      "Event-pagina's (Bring-a-Friend, Hyrox, open dag)",
      "Slim afspraken plannen",
      "Branded e-mails, kaarten en agenda-uitnodigingen",
      "SportBit-integratie",
      "Onbeperkt flows & campagnes",
      "4 onboarding-calls + bezoek",
      "Snelle support van gym owners die snappen wat je wilt",
    ],
  },
  {
    productLabel: "GymOps Pro",
    status: "binnenkort",
    name: "Flow + Pulse",
    price: "—",
    period: "Prijs volgt",
    disclaimer: "Pulse komt later dit jaar. Upgrade dan zonder setupkosten, vanuit je bestaande Flow-account.",
    yearlyOption: "",
    cta: "Houd me op de hoogte",
    ctaVariant: "outline" as const,
    highlighted: false,
    comingSoon: true,
    features: [
      "Alles van GymOps Flow",
      "Pulse Staff App",
      "Management Dashboard",
      "Onbeperkt medewerkers",
      "Incidentregistratie + audit",
    ],
  },
];

export type FeatureRow = {
  label: string;
  values: [string, string, string];
};

export const featureGroups: { name: string; rows: FeatureRow[] }[] = [
  {
    name: "Gebruikers",
    rows: [
      { label: "Leden", values: ["Onbeperkt", "Onbeperkt", "Onbeperkt"] },
      { label: "Admins", values: ["Onbeperkt", "Onbeperkt", "Onbeperkt"] },
      { label: "Medewerkers", values: ["Onbeperkt", "Onbeperkt", "Onbeperkt"] },
    ],
  },
  {
    name: "Interne functies",
    rows: [
      { label: "AI-ondersteuning", values: ["✓", "✓", "✓"] },
      { label: "Ledenapp", values: ["✓", "✓", "✓"] },
      { label: "Medewerkers-app", values: ["✓", "✓", "✓"] },
      { label: "Wachtlijstbeheer", values: ["—", "✓", "✓"] },
      { label: "Geavanceerde rapportage", values: ["—", "✓", "✓"] },
      { label: "Multi-locatie ondersteuning", values: ["—", "—", "✓"] },
      { label: "API-toegang", values: ["—", "—", "✓"] },
    ],
  },
  {
    name: "Externe integraties",
    rows: [
      { label: "Stripe", values: ["✓", "✓", "✓"] },
      { label: "Mailchimp", values: ["—", "✓", "✓"] },
      { label: "Zapier", values: ["—", "✓", "✓"] },
    ],
  },
];

export const faqs = [
  {
    question: "Wat kost GymOps en wat is er inbegrepen?",
    answer:
      "GymOps Flow kost €450 per maand (excl. BTW). Bij jaarbetaling betaal je 11 maanden (€4.950) en is de 12e gratis. Inbegrepen: een custom website, leadgeneratie en -opvolging via WhatsApp en e-mail, handgeschreven kaarten, Google reviews op het juiste moment, mijlpaal-signalering, onboarding-flow voor nieuwe leden, event-pagina's, slim afsprakenplannen, SportBit-integratie, branded communicatie, en 4 onboarding-calls plus een bezoek bij je gym.",
  },
  {
    question: "Voor welke gyms is GymOps gemaakt?",
    answer:
      "GymOps is gebouwd door gym owners, voor coaching gyms. CrossFit-boxen, hyrox-studio's, kracht- en conditioneringsgyms en vechtsportacademies hebben we de meeste ervaring mee. Werkt jouw gym anders? Plan een demo, dan kijken we samen of GymOps past.",
  },
  {
    question: "Wie bouwt mijn website en wat als ik iets wil aanpassen?",
    answer:
      "Wij bouwen je website op maat in dezelfde technologie als bedrijven als Netflix en Spotify — geen WordPress-thema of page builder. Nieuwe abonnementsvorm? Tariefswijziging? Een nieuwe coach in het team? Wij passen je website binnen één werkweek aan. Inbegrepen, geen offertes.",
  },
  {
    question: "Hoe lang duurt de onboarding?",
    answer:
      "De meeste gyms zijn binnen vier weken live. De onboarding bestaat uit 4 begeleide calls plus een bezoek bij je gym op locatie. We importeren je bestaande ledendata, richten je customer journeys in en koppelen SportBit zodat alles vanaf dag één werkt.",
  },
  {
    question: "Zit ik vast aan een lang contract?",
    answer:
      "Je gaat een commitment van 12 maanden aan. Daarna loopt het maandelijks door en kun je op elk moment opzeggen. Geen verborgen kosten, geen uitstapboetes.",
  },
  {
    question: "Wat is Pulse en wanneer komt het beschikbaar?",
    answer:
      "Pulse is onze uitbreiding voor je team: een Staff App, Management Dashboard, onbeperkt medewerkers en incidentregistratie met audit-trail. Komt later dit jaar als 'Flow + Pulse'. Bestaande Flow-klanten upgraden zonder setupkosten vanuit hun bestaande account. Prijs volgt.",
  },
];

export const shortQuotes = [
  { quote: "Heeft ons leven zoveel makkelijker gemaakt", name: "Ben J." },
  { quote: "Zo eenvoudig te gebruiken!", name: "Matthijs H." },
  { quote: "Bespaart mij tijd én geld", name: "Trina K." },
  { quote: "Intuïtief, ze denken aan alles", name: "Theresa S." },
  { quote: "Ze geven echt om kleine gym-eigenaren", name: "Shad W." },
  { quote: "De ledenervaring is uitstekend", name: "Hannah C." },
  { quote: "Niet meer weg te denken uit ons bedrijf", name: "Jason L." },
  { quote: "Onmisbaar voor onze groei", name: "Sarah M." },
];

export const featuredKlantQuotes = [
  {
    quote:
      "Ik had me geen beter ondersteuningssysteem of aanmoedigingsteam kunnen voorstellen. In maand 6 hebben we elke meetbare doelstelling gehaald die we voor de eerste 12 maanden hadden gesteld. Deze software heeft daar een grote rol in gespeeld.",
    name: "Graeme McMillan, Win Fitness",
  },
  {
    quote:
      "Onze klanten zijn onder de indruk van jouw eenvoudige systeem. Jij maakt mijn werk op zakelijk vlak gemakkelijker, zodat ik me kan blijven richten op de relaties met mijn leden.",
    name: "Aaron R., Head Trainer, Konza Strength",
  },
];

export const customerStories = [
  {
    title: "GymOps Gratis — nul kosten, maximaal resultaat",
    body: "Ontdek hoe vroege gebruikers van GymOps Gratis ons toonaangevende systeem inzetten om hun gym volledig gratis te beheren en toch professioneel over te komen.",
  },
  {
    title: "Klanttevredenheid verhogen met de GymOps Open",
    body: "Ontdek hoe CrossFit Station GymOps gebruikte om de meest efficiënte en plezierige Open ooit te organiseren — tot grote vreugde van hun leden.",
  },
  {
    title: "Merchandise verkopen zonder risico via Pre-Orders",
    body: "Leer hoe een gym GymOps Pre-Orders gebruikte om fan-shirts te verkopen als fundraiser, met €0 financieel risico en volledige controle.",
  },
];

export const supportQuotes = [
  { quote: "Snelle reacties zodat ik me kan focussen op mijn bedrijf", name: "Joshua A." },
  { quote: "UX en de klantenservice zijn beiden top!", name: "Logan G." },
  { quote: "Hun klantenservice is écht van het hoogste niveau!", name: "Sarah M." },
  { quote: "Echte mensen die jouw bedrijf begrijpen.", name: "Pete G." },
  { quote: "Support altijd klaar om elk probleem op te lossen.", name: "Dawn S." },
  { quote: "De support is serieus fenomenaal.", name: "Karen H." },
  { quote: "Het team hielp ons overleven tijdens Covid-19!", name: "Brandon E." },
  { quote: "De allerbeste klantenservice, zonder twijfel.", name: "Jennifer V." },
];

export const founders = [
  {
    initials: "DU",
    name: "Daan Uijlenbroek",
    role: "CEO",
    bio: "Een levenslange fitnessliefhebber. Daan heeft zijn hele carrière in startups gewerkt. Van 2010 tot 2012 mede-eigenaar van CrossFit Amsterdam, daarna Training Lab Rotterdam dat hij runde tot 2019. Na de verkoop richtte hij zijn focus op GymOps — om andere gymeigenaren te helpen hun operaties te stroomlijnen en blijvend succes te bereiken.",
    history: "Gyms eigendom van: CrossFit Amsterdam (2010–2012) / Training Lab Rotterdam (2013–2019)",
  },
  {
    initials: "CM",
    name: "Chris Meijer",
    role: "Product Directeur",
    bio: "Als voormalig mede-eigenaar van CrossFit Amsterdam zet Chris zijn praktijkervaring in de branche in om intuïtieve tools te bouwen voor gymeigenaren, coaches en leden.",
    history: "Gyms eigendom van: CrossFit Amsterdam (2010–2012)",
  },
];

export const investors = [
  "Investeerder 1",
  "Investeerder 2",
  "Investeerder 3",
  "Investeerder 4",
  "Investeerder 5",
  "Investeerder 6",
];

export const values = [
  {
    number: "01",
    title: "Branche-ervaring die ertoe doet",
    body: "We hebben de uitdagingen van gymeigenaarschap zelf meegemaakt. Die praktijkkennis vormt elke productbeslissing, zodat jij tools krijgt gebouwd door mensen die jouw wereld écht begrijpen.",
  },
  {
    number: "02",
    title: "Gyms helpen levens te veranderen",
    body: "Onze missie is gymeigenaren succesvol te maken. Als zij slagen, vinden meer mensen gezondheid, community en zelfvertrouwen. Dat is impact die verder reikt dan zakelijk succes alleen.",
  },
  {
    number: "03",
    title: "Snel, gefocust en efficiënt",
    body: "We geloven dat kleine, gespecialiseerde teams de beste resultaten leveren. Met minder bureaucratie en meer verantwoordelijkheid bewegen we snel — met AI als kracht om elke klant eersteklas ondersteuning te bieden.",
  },
];

export const integrations = [
  { name: "Stripe", desc: "betalingsverwerking" },
  { name: "iDEAL", desc: "Nederlandse betaalmethode" },
  { name: "Mailchimp", desc: "e-mailmarketing" },
  { name: "Slack", desc: "teamcommunicatie" },
  { name: "Facebook Ads", desc: "adverteren" },
  { name: "Google Analytics", desc: "webanalyse" },
  { name: "Zapier", desc: "workflow automatisering" },
  { name: "En meer…", desc: "" },
];

export const productPillars = [
  {
    icon: "settings",
    tag: "Flow",
    tagline: "De kern van jouw gymbeheer",
    body: "Beheer je volledige gym vanuit één dashboard. Van facturatie en roosters tot ledenbeheer en rapportage — alles geautomatiseerd, alles verbonden.",
    features: [
      "Geautomatiseerde facturatie en betalingen via iDEAL, pin en incasso",
      "CRM met volledig ledenbeheer en aanwezigheidsregistratie",
      "Klasrooster met automatische boekingen en wachtlijstbeheer",
      "QR-code check-in via kiosk of mobiel",
      "Financiële dashboards en exporteerbare rapporten",
      "Digitale waivers en documentbeheer",
    ],
    cta: "Meer over Flow →",
  },
  {
    icon: "trending-up",
    tag: "Groei",
    tagline: "Zet prospects om in betalende leden",
    body: "Mis nooit meer een potentieel lid. GymOps Groei automatiseert je leadopvolging, marketingcommunicatie en retentiestrategieën — zodat jouw gym blijft groeien.",
    features: [
      "Geautomatiseerde lead-workflows met SMS en e-mail opvolging",
      "SEO-geoptimaliseerde landingspagina's voor ledenwerving",
      "Twee-weg SMS voor persoonlijke communicatie op schaal",
      "Gedragsgestuurde retentie-alerts voor at-risk leden",
      "Integratie met Facebook Ads en Google Analytics",
      "Enquêtes en NPS-tracking voor ledentevredenheid",
    ],
    cta: "Meer over Groei →",
  },
  {
    icon: "dumbbell",
    tag: "Training",
    tagline: "Het enige trainingsvolgsysteem dat jouw gym nodig heeft",
    body: "Geef je leden een plek om te trainen, bij te houden en te groeien. GymOps Training bouwt community en betrokkenheid door workout-tracking en programmering in één app te combineren.",
    features: [
      "Dagelijkse workout-logging voor leden via de app",
      "Aangepaste programma's, benchmarks en video-instructies",
      "Sociaal feed met prestaties en community-interactie",
      "Koppeling met de ledenapp voor klassenboeking én training",
      "Trainingen van gecertificeerde partners beschikbaar in de app",
      "Coach-feedback en prestatiegeschiedenis per lid",
    ],
    cta: "Meer over Training →",
  },
];
