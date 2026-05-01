export const navLinks = [
  { label: "Producten", href: "/producten", hasDropdown: true },
  { label: "Prijzen", href: "/prijzen" },
  { label: "Klanten", href: "/klanten" },
  { label: "Over ons", href: "/over-ons" },
  { label: "Bronnen", href: "#", hasDropdown: true },
];

export const trustedLogos = [
  "DEMO GYM A",
  "DEMO GYM B",
  "DEMO GYM C",
  "DEMO GYM D",
  "DEMO GYM E",
  "DEMO GYM F",
  "DEMO GYM G",
  "DEMO GYM H",
  "DEMO GYM I",
];

export const dashboardStats = [
  { label: "Statistiek 1", value: "00", sub: "Sublabel", color: "white" as const },
  { label: "Statistiek 2", value: "€0", sub: "Sublabel", color: "accent" as const },
  { label: "Statistiek 3", value: "0 mnd", sub: "Sublabel", color: "white" as const },
  { label: "Statistiek 4", value: "0%", sub: "Sublabel", color: "white" as const },
];

export const atRiskMembers = [
  { name: "Demo Naam 1", days: "0 dagen" },
  { name: "Demo Naam 2", days: "0 dagen" },
  { name: "Demo Naam 3", days: "0 dagen" },
];

export const everythingCards = [
  {
    icon: "users",
    title: "Placeholder Titel 1",
    body: "Placeholder beschrijving voor de eerste kaart. Vervang met je eigen tekst over wat dit feature doet voor de eindgebruiker.",
  },
  {
    icon: "gear",
    title: "Placeholder Titel 2",
    body: "Placeholder beschrijving voor de tweede kaart. Vervang met je eigen tekst over hoe dit gymeigenaren helpt.",
  },
  {
    icon: "chart",
    title: "Placeholder Titel 3",
    body: "Placeholder beschrijving voor de derde kaart. Vervang met je eigen tekst over data en analyses.",
  },
];

export const coreFeatureTabs = [
  {
    icon: "credit-card",
    title: "Placeholder feature 1",
    body: "Korte placeholder tekst over feature 1. Vul aan met eigen content.",
  },
  {
    icon: "users",
    title: "Placeholder feature 2",
    body: "Korte placeholder tekst over feature 2. Vul aan met eigen content.",
  },
  {
    icon: "calendar",
    title: "Placeholder feature 3",
    body: "Korte placeholder tekst over feature 3. Vul aan met eigen content.",
  },
];

export const growColumns = [
  {
    title: "Placeholder kolom 1",
    body: "Korte placeholder tekst over groei-onderwerp 1. Vervang met eigen content.",
  },
  {
    title: "Placeholder kolom 2",
    body: "Korte placeholder tekst over groei-onderwerp 2. Vervang met eigen content.",
  },
  {
    title: "Placeholder kolom 3",
    body: "Korte placeholder tekst over groei-onderwerp 3. Vervang met eigen content.",
  },
];

export const trainTabs = [
  {
    icon: "smartphone",
    title: "Placeholder training 1",
    body: "Korte placeholder tekst over training-feature 1.",
  },
  {
    icon: "dumbbell",
    title: "Placeholder training 2",
    body: "Korte placeholder tekst over training-feature 2.",
  },
  {
    icon: "star",
    title: "Placeholder training 3",
    body: "Korte placeholder tekst over training-feature 3.",
  },
];

export const whyCards = [
  {
    title: "Placeholder reden 1",
    body: "Korte placeholder tekst over waarom dit platform onderscheidend is. Vervang met eigen content.",
  },
  {
    title: "Placeholder reden 2",
    body: "Korte placeholder tekst over waarom dit platform onderscheidend is. Vervang met eigen content.",
  },
  {
    title: "Placeholder reden 3",
    body: "Korte placeholder tekst over waarom dit platform onderscheidend is. Vervang met eigen content.",
  },
  {
    title: "Placeholder reden 4",
    body: "Korte placeholder tekst over waarom dit platform onderscheidend is. Vervang met eigen content.",
  },
];

export const successQuotes = [
  {
    quote: "Placeholder klant-quote nummer een. Vervang met een echte testimonial.",
    name: "Demo Klant 1",
    company: "Demo Gym 1",
  },
  {
    quote: "Placeholder klant-quote nummer twee. Vervang met een echte testimonial.",
    name: "Demo Klant 2",
    company: "Demo Gym 2",
  },
  {
    quote: "Placeholder klant-quote nummer drie. Vervang met een echte testimonial.",
    name: "Demo Klant 3",
    company: "Demo Gym 3",
  },
];

export const pricingPlans = [
  {
    name: "Gratis",
    price: "€0",
    period: "",
    description: "Korte placeholder beschrijving voor het instaptarief.",
    processing: "0,00% + €0,00",
    support: "Placeholder support-omschrijving.",
    cta: "Gratis starten",
    ctaVariant: "outline" as const,
    note: "Geen maandelijkse kosten",
    highlighted: false,
    features: [
      "Placeholder feature 1",
      "Placeholder feature 2",
      "Placeholder feature 3",
      "Placeholder feature 4",
      "Placeholder feature 5",
      "Placeholder feature 6",
    ],
  },
  {
    name: "Pro",
    price: "€149",
    period: "/maand",
    description: "Korte placeholder beschrijving voor het middelste tarief.",
    processing: "0,00% + €0,00",
    support: "Placeholder support-omschrijving.",
    cta: "Plan een Demo",
    ctaVariant: "primary" as const,
    note: "Meest Populair",
    highlighted: true,
    features: [
      "Alles uit Gratis",
      "Placeholder pro feature 1",
      "Placeholder pro feature 2",
      "Placeholder pro feature 3",
      "Placeholder pro feature 4",
      "Placeholder pro feature 5",
      "Placeholder pro feature 6",
    ],
  },
  {
    name: "Max",
    price: "€219",
    period: "/maand",
    description: "Korte placeholder beschrijving voor het hoogste tarief.",
    processing: "0,00% + €0,00",
    support: "Placeholder support-omschrijving.",
    cta: "Plan een Demo",
    ctaVariant: "outline" as const,
    note: "",
    highlighted: false,
    features: [
      "Alles uit Pro",
      "Placeholder max feature 1",
      "Placeholder max feature 2",
      "Placeholder max feature 3",
      "Placeholder max feature 4",
      "Placeholder max feature 5",
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
      { label: "Placeholder feature A", values: ["✓", "✓", "✓"] },
      { label: "Placeholder feature B", values: ["✓", "✓", "✓"] },
      { label: "Placeholder feature C", values: ["✓", "✓", "✓"] },
      { label: "Placeholder feature D", values: ["—", "✓", "✓"] },
      { label: "Placeholder feature E", values: ["—", "✓", "✓"] },
      { label: "Placeholder feature F", values: ["—", "—", "✓"] },
      { label: "Placeholder feature G", values: ["—", "—", "✓"] },
    ],
  },
  {
    name: "Externe integraties",
    rows: [
      { label: "Integratie A", values: ["✓", "✓", "✓"] },
      { label: "Integratie B", values: ["—", "✓", "✓"] },
      { label: "Integratie C", values: ["—", "✓", "✓"] },
    ],
  },
];

export const faqs = [
  {
    question: "Placeholder vraag 1?",
    answer:
      "Placeholder antwoord op vraag 1. Vervang met je eigen FAQ-content over prijzen en abonnementen.",
  },
  {
    question: "Placeholder vraag 2?",
    answer:
      "Placeholder antwoord op vraag 2. Vervang met je eigen FAQ-content over ondersteunde betaalmethoden.",
  },
  {
    question: "Placeholder vraag 3?",
    answer:
      "Placeholder antwoord op vraag 3. Vervang met je eigen FAQ-content over installatie en onboarding.",
  },
  {
    question: "Placeholder vraag 4?",
    answer:
      "Placeholder antwoord op vraag 4. Vervang met je eigen FAQ-content over ondersteunde gym-types.",
  },
  {
    question: "Placeholder vraag 5?",
    answer:
      "Placeholder antwoord op vraag 5. Vervang met je eigen FAQ-content over rapportage.",
  },
  {
    question: "Placeholder vraag 6?",
    answer:
      "Placeholder antwoord op vraag 6. Vervang met je eigen FAQ-content over contracten en opzegging.",
  },
];

export const shortQuotes = [
  { quote: "Placeholder korte quote 1", name: "Demo K. 1" },
  { quote: "Placeholder korte quote 2", name: "Demo K. 2" },
  { quote: "Placeholder korte quote 3", name: "Demo K. 3" },
  { quote: "Placeholder korte quote 4", name: "Demo K. 4" },
  { quote: "Placeholder korte quote 5", name: "Demo K. 5" },
  { quote: "Placeholder korte quote 6", name: "Demo K. 6" },
  { quote: "Placeholder korte quote 7", name: "Demo K. 7" },
  { quote: "Placeholder korte quote 8", name: "Demo K. 8" },
];

export const customerStories = [
  {
    title: "Placeholder verhaal 1",
    body: "Korte placeholder samenvatting van het eerste klantverhaal.",
  },
  {
    title: "Placeholder verhaal 2",
    body: "Korte placeholder samenvatting van het tweede klantverhaal.",
  },
  {
    title: "Placeholder verhaal 3",
    body: "Korte placeholder samenvatting van het derde klantverhaal.",
  },
];

export const supportQuotes = [
  { quote: "Placeholder support quote 1", name: "Demo K. A" },
  { quote: "Placeholder support quote 2", name: "Demo K. B" },
  { quote: "Placeholder support quote 3", name: "Demo K. C" },
  { quote: "Placeholder support quote 4", name: "Demo K. D" },
  { quote: "Placeholder support quote 5", name: "Demo K. E" },
  { quote: "Placeholder support quote 6", name: "Demo K. F" },
  { quote: "Placeholder support quote 7", name: "Demo K. G" },
  { quote: "Placeholder support quote 8", name: "Demo K. H" },
];

export const founders = [
  {
    initials: "AA",
    name: "Naam Oprichter 1",
    role: "CEO",
    bio: "Korte placeholder bio voor de eerste oprichter. Vervang met de echte achtergrond.",
    history: "Placeholder ervaring / vorige rollen.",
  },
  {
    initials: "BB",
    name: "Naam Oprichter 2",
    role: "Product Directeur",
    bio: "Korte placeholder bio voor de tweede oprichter. Vervang met de echte achtergrond.",
    history: "Placeholder ervaring / vorige rollen.",
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
