# GymOps — review vóór publicatie

De gebruiker wil de conversieaanpassingen stap voor stap beoordelen en eerst aan Bart laten zien. Publicatie op gymops.nl is nog niet goedgekeurd.

- Werkmap: `/Users/jeroenvanduijn/gymops-preview`
- Branch: `preview/conversie-stap-1`
- Uitgangspunt: `df6a480` op `origin/main`, inclusief Barts nieuwe Willemsoord-logo.
- Afzonderlijk Vercel-project: `gymops/gymops-conversie-preview`.
- Deze werkmap is niet gekoppeld aan het live Vercel-project of domein.
- Deploy dit project uitsluitend als preview: `vercel deploy --target preview --yes --scope gymops`.
- Geen merge naar main, productiepromotie, domeinwijziging of bericht aan Bart zonder gebruikersinstructie.

## Eerste versie ter beoordeling

1. Concrete uitleg onder de bestaande hoofdkop: wat de software doet, SportBit en inrichting/begeleiding.
2. Bestaande SportBazen Reel C01 op de homepage, na de openingsalinea. Jeroens eigen ervaring met persoonlijke leadopvolging, met link naar de hele aflevering. De volledige aflevering staat al op de mentorschappagina.

Bron Reel: `Documents/GymOps Campagnes/Sportbazen Reels/Reels/01 - Elke lead bellen.mp4`, 36,3 seconden, oorspronkelijke podcast 1696,833–1733,083 s. Webversie 720×1280, circa 3,5 MB, bestaande Nederlandse ondertitels behouden. Originele bestanden zijn niet gewijzigd. Video gebruikt `preload="none"`, geen autoplay.

Validatie: productiebuild incl. lint/typechecks geslaagd. Browsercontrole op 1440×1000, 390×844 en 320×740: geen horizontale overloop of paginafouten; CTA in eerste scherm; video laadt pas bij afspelen en speelt correct. Geen formulier verzonden of afspraak geboekt.

## Volgende stappen, nog te bespreken

- Productvoorbeeld en volgorde van de homepage.
- Onafhankelijke klantcase met geverifieerde inhoud.
- Rekentool: tijdsperiode, aannames en onderscheid omzet/winst corrigeren.
- Prijzen en inbegrepen/variabele kosten verduidelijken op basis van de echte afspraken.
- Twee versus vier weken onboarding afstemmen.
- Demo: 30/45/60 minuten gelijkmaken, dubbele velden oplossen en kalender vernederlandsen. Kalenderwijzigingen kunnen de live verkooproute raken; eerst de echte duur en testaanpak vaststellen.
- Overstapvragen, toon en concrete invulling mentorschap.

De eerste review is nog niet goedgekeurd. Itereer eerst op de feedback van de gebruiker; voer niet automatisch alle overige aanbevelingen uit.
