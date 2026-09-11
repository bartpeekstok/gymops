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

## Stap 2 — akkoord op retentie als hoofdverhaal

De gebruiker vindt het aanklikbare voorbeeld goed, maar wil retentie als belangrijkste onderdeel van GymOps laten zien. Daarom opent de sectie nu met **Leden behouden**: een check-in in de eerste week → de 50e les vieren → contact bij twee weken afwezigheid → overzicht van gegeven aandacht en openstaande taken. De mijlpalen en signalen leiden tot taken voor de coach; de coach verzorgt het persoonlijke contact. Deze voorbeelden staan al beschreven op de ledenbehoudpagina en in de bestaande Lisa-klantreis.

**Aanvragen opvolgen** blijft als tweede keuze in dezelfde sectie beschikbaar. De vier stappen van beide voorbeelden zijn aanklikbaar en werken met toetsenbord. Een ander voorbeeld kiezen zet de weergave terug naar de eerste stap. Er zijn geen automatische animaties of extra mediabestanden.

De hero begint nu met “GymOps helpt je leden langer te behouden.” Ook het overzicht met leden, leads en ex-leden begint bij ledenbehoud. Het SportBazen-fragment blijft specifiek over persoonlijke leadopvolging gaan en staat na dit overzicht, zodat het niet de eerste positionering bepaalt.

De gebruiker heeft deze richting goedgekeurd met “ok yes. laten we dan doorgaan”. Dit is akkoord op de previewrichting, geen publicatie-instructie.

De weergave is als voorbeeld gelabeld en gebruikt de functies die al op de productpagina's worden beschreven. Lisa en Sanne illustreren de werkwijze; dit is geen klantcase of resultaatclaim. De demo-knop gebruikt de bestaande demoroute. Anker voor directe review: `#zo-werkt-gymops`.

Validatie van de versie met retentie voorop: productiebuild inclusief lint/typechecks geslaagd. Op 1440×1000, 390×844 en 320×740 zijn beide voorbeelden, alle vier stappen, het terugzetten naar stap 1, toetsenbordbediening, de detailpagina-links, de demo-knop en video gecontroleerd. Geen paginafouten of horizontale overloop; de hero-CTA blijft in het eerste scherm. De demo opent en sluit zonder gegevens te versturen. Video laadt pas na bediening. Formulier en kalender niet ingestuurd.

## Stap 3 — klantbewijs geparkeerd, belangrijke to-do

Vormvoorstel in `review/klantverhaal/Voorstel-klantverhaal.html` en bijbehorende PDF, met bronbevindingen en benodigde inhoud in `review/klantverhaal/INHOUD.md`. Voorgestelde plaats is direct na het productvoorbeeld. De homepage krijgt dit blok pas met een echte, bevestigde klantcase; de vorige preview blijft daarom actueel.

Jeroen wil het echte klantverhaal nu overslaan en als belangrijke taak bewaren om bij bestaande klanten op te halen. Dit staat met hoge prioriteit en concrete ophaalvragen in `TODO.md`. Er staat hiervoor nu geen vraag meer open die de verdere siteverbeteringen blokkeert. De ongebruikte reviews uit de oude broncode worden niet als bewijs gebruikt.

Het zelfstandige vormvoorstel is op 1100, 390 en 320 px breed gecontroleerd: geen overloop of paginafouten. De PDF past op één liggende A4. Er zijn in stap 3 geen wijzigingen aan de websitecode of deployments gedaan.

## Besluit over de rekentool — ongewijzigd behouden

Jeroen wil de huidige rekentool zo laten, omdat de totale omzet over de lidduur het gewenste uitgangspunt is, ook als die over twee jaar binnenkomt. De begonnen wijziging is volledig teruggedraaid. De bestaande teksten, aannames en bedragen blijven staan. Pas dit niet opnieuw aan zonder een nieuwe gebruikersinstructie.

## Volgende stappen, nog te bespreken

- Prijzen en inbegrepen/variabele kosten verduidelijken op basis van de echte afspraken.
- Twee versus vier weken onboarding afstemmen.
- Demo: 30/45/60 minuten gelijkmaken, dubbele velden oplossen en kalender vernederlandsen. Kalenderwijzigingen kunnen de live verkooproute raken; eerst de echte duur en testaanpak vaststellen.
- Overstapvragen, toon en concrete invulling mentorschap.

Stap 3 is op gebruikersverzoek geparkeerd en de rekentool blijft ongewijzigd. De overige aanbevelingen worden afzonderlijk doorlopen.
