# GymOps — review vóór publicatie

De gebruiker wil de conversieaanpassingen stap voor stap beoordelen en eerst aan Bart laten zien. Publicatie op gymops.nl is nog niet goedgekeurd.

- Werkmap: `/Users/jeroenvanduijn/gymops-preview`
- Branch: `preview/conversie-stap-1`
- Uitgangspunt: `df6a480` op `origin/main`, inclusief Barts nieuwe Willemsoord-logo.
- Afzonderlijk Vercel-project: `gymops/gymops-conversie-preview`.
- Deze werkmap is niet gekoppeld aan het live Vercel-project of domein.
- Deploy dit project uitsluitend als preview: `vercel deploy --target preview --yes --scope gymops --archive=tgz --local-config .vercel/review.json`.
- `.vercel/review.json` voegt `X-Robots-Tag: noindex, nofollow` toe. De deelbare link staat lokaal in `.vercel/review-access.json` en heeft een geldigheid van 30 dagen vanaf 11 september 2026.
- Geen merge naar main, productiepromotie, domeinwijziging of bericht aan Bart zonder gebruikersinstructie.

## Stap 1 — akkoord op de uitleg bovenaan

1. Concrete uitleg onder de bestaande hoofdkop: wat de software doet, SportBit en inrichting/begeleiding.
2. Bestaande SportBazen Reel C01 op de homepage. Jeroens eigen ervaring met persoonlijke leadopvolging, met link naar de hele aflevering. De volledige aflevering staat al op de mentorschappagina.

De gebruiker heeft de uitleg bovenaan geaccepteerd en gevraagd door te gaan naar het productvoorbeeld. Dit is geen akkoord voor publicatie.

Bron Reel: `Documents/GymOps Campagnes/Sportbazen Reels/Reels/01 - Elke lead bellen.mp4`, 36,3 seconden, oorspronkelijke podcast 1696,833–1733,083 s. Webversie 720×1280, circa 3,5 MB, bestaande Nederlandse ondertitels behouden. Originele bestanden zijn niet gewijzigd. Video gebruikt `preload="none"`, geen autoplay.

Validatie: productiebuild incl. lint/typechecks geslaagd. Browsercontrole op 1440×1000, 390×844 en 320×740: geen horizontale overloop of paginafouten; CTA in eerste scherm; video laadt pas bij afspelen en speelt correct. Geen formulier verzonden of afspraak geboekt.

## Stap 2 — productvoorbeeld ter beoordeling

Direct na de openingsalinea en vóór het podcastfragment staat een compact, aanklikbaar voorbeeld: aanvraag van Lisa → automatische reactie → beltaak voor coach Sanne → voortgang voor de eigenaar. Alle vier stappen blijven zichtbaar; de bezoeker bepaalt zelf welk voorbeeld verschijnt. Ook te bedienen met toetsenbord. Geen automatische animatie of extra mediabestanden.

De weergave is als voorbeeld gelabeld en gebruikt de functies die al op de productpagina's worden beschreven. Lisa en Sanne illustreren de werkwijze; dit is geen klantcase of resultaatclaim. De demo-knop gebruikt de bestaande demoroute. Anker voor directe review: `#zo-werkt-gymops`.

Validatie stap 2: productiebuild inclusief lint/typechecks geslaagd. Alle vier de stappen en toetsenbordbediening gecontroleerd op 1440×1000, 390×844 en 320×740, zonder paginafouten of horizontale overloop. De sectie begint op mobiel rond 1.068 px vanaf de paginatop (eerder stond de productuitleg rond 3.919 px). De hero-CTA blijft in het eerste scherm en de podcast speelt pas na bediening. Formulier en kalender niet ingestuurd.

## Volgende stappen, nog te bespreken

- Onafhankelijke klantcase met geverifieerde inhoud.
- Rekentool: tijdsperiode, aannames en onderscheid omzet/winst corrigeren.
- Prijzen en inbegrepen/variabele kosten verduidelijken op basis van de echte afspraken.
- Twee versus vier weken onboarding afstemmen.
- Demo: 30/45/60 minuten gelijkmaken, dubbele velden oplossen en kalender vernederlandsen. Kalenderwijzigingen kunnen de live verkooproute raken; eerst de echte duur en testaanpak vaststellen.
- Overstapvragen, toon en concrete invulling mentorschap.

Stap 2 is nog niet goedgekeurd. Itereer eerst op de feedback van de gebruiker; voer niet automatisch alle overige aanbevelingen uit.
