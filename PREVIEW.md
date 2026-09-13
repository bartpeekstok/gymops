# GymOps — review vóór publicatie

De gebruiker heeft de conversieaanpassingen stap voor stap beoordeeld en op 13 september 2026 expliciet opdracht gegeven de huidige versie live te zetten. De eerdere beperking tot previews geldt niet meer voor deze publicatie.

## Publicatie op 13 september 2026

Jeroens instructie: “kan jij de versie die we nu hebben gemaakt ook live zetten?” Publicatie wordt voorbereid vanuit `/Users/jeroenvanduijn/gymops-publicatie`, branch `release/conversie-20260913`. De beoordeelde preview is samengevoegd met `origin/main` op `c56b62b`, inclusief Barts nieuwe mentorschapkop. De merge bevat uitsluitend die extra kopwijziging bovenop de preview.

De bestaande productieroute loopt via `bartpeekstok/gymops` op GitHub en Vercel-project `cross-fit-alkmaar/gymops`. De huidige productieversie is gekoppeld aan commit `c56b62b`; de live mentorschappagina is hiermee vergeleken. Het aparte previewproject in scope `gymops` wordt niet gebruikt om het live domein te publiceren. De previewconfig met `noindex` wordt niet meegepubliceerd.

Productiebuild met lint/typechecks geslaagd. De samengevoegde versie is op desktop, mobiel en kleine mobiel gecontroleerd: retentie- en leadvoorbeelden, podcast, prijzen, bestaande rekentool, routekaart en de demo-popup met systeemkeuze. Formulierverzendingen zijn onderschept; er zijn geen testleads of afspraken aangemaakt.

De CRM-opslag van `booking_system` blijft een expliciet open punt. De website verstuurt het veld correct; de live workflowmapping is nog niet bevestigd of gewijzigd. Dit is aan Jeroen gemeld en wordt afzonderlijk bijgehouden. De overige open verbeteringen worden niet stilzwijgend als afgerond aangemerkt.

## Historie van de previewronde

- Werkmap: `/Users/jeroenvanduijn/gymops-preview`
- Branch: `preview/conversie-stap-1`
- Uitgangspunt: `df6a480` op `origin/main`, inclusief Barts nieuwe Willemsoord-logo.
- Afzonderlijk Vercel-project: `gymops/gymops-conversie-preview`.
- Deze werkmap is niet gekoppeld aan het live Vercel-project of domein.
- Deploy dit project uitsluitend als preview: `vercel deploy --target preview --yes --scope gymops --archive=tgz --local-config .vercel/review.json`.
- `.vercel/review.json` voegt `X-Robots-Tag: noindex, nofollow` toe. De deelbare link staat lokaal in `.vercel/review-access.json` en heeft een geldigheid van 30 dagen vanaf 11 september 2026.
- Publicatie naar main is inmiddels expliciet opgedragen. Er is geen opdracht om Bart een bericht te sturen.

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

## Stap 4 — prijzen en routekaart, klaar voor beoordeling

De prijzenpagina begint nu met ledenbehoud en toont het abonnement van €450 per maand, de bestaande looptijd en de jaarbetaling direct bovenaan. De demoknop is op desktop en mobiel zichtbaar in het eerste scherm. Mentorschap staat als optionele aanvulling met €600 extra en het totaal van €1.050 per maand. Drie stappen maken concreet wat de klant aanlevert, wat GymOps inricht en hoe het team start. De bestaande rekentool is alleen in de paginavolgorde verplaatst; teksten, aannames, berekeningen en bedragen zijn ongewijzigd.

Jeroen vraagt expliciet om `https://gymops.nl/routekaart` mee te nemen. De homepage krijgt naast de demo een tweede knop “Maak mijn routekaart” en na het overzicht met drie vragen een uitlegblok. Hetzelfde blok staat op de prijzenpagina na de bestaande rekentool. De uitleg begint bij ledenbehoud, gevolgd door instroom en omzet per lid. De bestaande routekaart, formulieren, berekeningen en redirects zijn niet aangepast.

Besluit van Jeroen op 12 september 2026: de voorgestelde toelichting over verbruikskosten en maatwerk nu niet noemen, omdat die verwarrend is. Deze tekst was nog niet aan de preview toegevoegd en blijft voor deze ronde achterwege. De vraag is daarmee gesloten voor deze conversiereview; niet opnieuw als open punt opvoeren zonder een nieuwe gebruikersinstructie. Dit besluit bevestigt of wijzigt de onderliggende prijsafspraken niet.

Validatie: productiebuild inclusief lint/typechecks geslaagd. Homepage en prijzenpagina gecontroleerd op 1440×1000, 390×844 en 320×740, inclusief prijsweergave, looptijden, ankerlinks, demo openen/sluiten, beide productvoorbeelden en podcast. Routekaartknoppen openen het bestaande formulier; assets laden en de eerste stap verschijnt. Geen horizontale overloop of paginafouten. Bestaande calculatoruitkomsten blijven gelijk; formulier en kalender niet ingestuurd. Deze stap is een voorstel voor de preview, nog geen akkoord op publicatie.

## Stap 5 — overstap en begeleiding, voorstel voor de preview

De homepage beantwoordt nu vier concrete startvragen: blijf ik SportBit gebruiken, wat lever ik zelf aan, hoe snel kunnen we starten en welke hulp krijgen we daarna? Dezelfde antwoorden staan in de veelgestelde vragen op de prijzenpagina. Vanuit het nieuwe homepageblok kan de bezoeker direct naar de drie startstappen op de prijzenpagina. Beide onderdelen hebben het anker `#starten`.

Deze eerste versie sloot aan op de bestaande productuitleg en ging uit van SportBit als ledenadministratie. Jeroen heeft dat uitgangspunt in stap 6 gecorrigeerd: SportBit is niet verplicht. De eigenaar levert informatie aan en geeft feedback, GymOps verzorgt de inrichting en begeleidt het team. De vier begeleidingsgesprekken bestrijken ook de periode na de start. Bronnen voor die begeleiding: de bestaande website, het GymOps Onboarding Stappenplan en de dienstverleningsovereenkomst.

De homepage noemde twee weken, de prijzenpagina vier. Jeroen is gevraagd welke termijn klopt. Zolang zijn antwoord ontbreekt, gebruikt deze preview **vier weken na complete aanlevering als voorlopig uitgangspunt**, overeenkomstig de documenten. De tekst zegt dat we daarop mikken en de precieze startdatum samen afspreken. Dit is nog geen door Jeroen bevestigde termijn. De tweewekentekst op de homepage is vervangen door concrete uitleg over begeleiding. De gedeelde tekst staat in `lib/start-content.ts`, zodat homepage en prijzenpagina gelijk blijven.

Validatie: productiebuild inclusief lint/typechecks geslaagd. Op desktop (1440 px), mobiel (390 px) en kleine mobiel (320 px) werken alle vier vragen, het openen/sluiten met toetsenbord en de verwijzing naar de startstappen. De sectielink houdt rekening met de mobiele indeling na het laden. Antwoorden op homepage en prijzenpagina zijn gelijk; geen horizontale overloop, paginafouten of verstuurde formulieren.

De rekentool, routekaart, podcast en interactieve productvoorbeelden blijven ongewijzigd. De eerder geschrapte toelichting over verbruikskosten is niet toegevoegd. Publicatie op gymops.nl blijft afhankelijk van een aparte gebruikersinstructie.

## Stap 6 — SportBit optioneel en huidig systeem bij demo-aanvraag

Jeroen verduidelijkt dat GymOps ook zonder SportBit en zonder koppeling met een reserveringssysteem werkt. De directe SportBit-koppeling geeft extra reserverings- en bezoekgegevens. Zonder koppeling is minder reserveringsdata beschikbaar; voor andere systemen bekijken Bart en Jeroen op aanvraag welke koppeling of andere manier van gegevens aanleveren mogelijk is. De tekst belooft geen kant-en-klare koppeling met andere aanbieders.

Dit staat in de gedeelde startvragen, de startstappen, de prijzenpagina, de ledenbehoudpagina en de paginabeschrijving voor zoekmachines. De eerste startvraag is “Heb ik SportBit nodig om GymOps te gebruiken?” en begint met “Nee.” Het interactieve ledenvoorbeeld vermeldt dat het de SportBit-koppeling gebruikt.

Vervolgaanpassing op 12 september 2026: op verzoek van Jeroen vervalt “Met of zonder SportBit” uitsluitend in de ondersteunende regel van de homepagehero. Die regel luidt nu: “Ingericht en begeleid door de twee gym-eigenaren.” De uitleg over SportBit op de andere plekken blijft staan.

Alle knoppen “Plan een demo” openen het bestaande formulier met een nieuwe optionele systeemkeuze. Er zijn acht aanbieders, een optie Ander systeem met vrij tekstveld en een optie Geen reserveringssysteem. De geselecteerde of ingevulde naam gaat mee als `booking_system` in de bestaande webhook-aanvraag. Geen keuze blokkeert de aanvraag niet.

Build, lint en typechecks zijn geslaagd. Browsercontrole op 1440, 390 en 320 px: de optionele keuze, een eigen systeemnaam, een lege keuze, geen systeem, het wissen van een vorige eigen naam en de bestaande verplichte contactgegevens zijn gecontroleerd. Testverzoeken naar de webhook zijn onderschept en de kalender is vervangen door een lokale testrespons; er zijn geen echte aanvragen of afspraken verstuurd. De rekentool, routekaart en podcast blijven inhoudelijk ongewijzigd.

Het bewaren van het nieuwe veld in de live CRM-contactkaart is nog niet geverifieerd. De concrete mapping en controle voor de publicatiestap staan in `review/demo-aanvraag.md`; de live workflow is niet gewijzigd. De websitepreview blijft afzonderlijk te beoordelen.

## Volgende stappen, nog te bespreken

- Nieuwe prijzenindeling beoordelen; de toelichting over verbruikskosten blijft op verzoek van Jeroen achterwege.
- Overstapuitleg beoordelen en de voorlopige starttermijn van vier weken na complete aanlevering bevestigen of corrigeren.
- Demo: 30/45/60 minuten gelijkmaken, dubbele velden oplossen en kalender vernederlandsen. Kalenderwijzigingen kunnen de live verkooproute raken; eerst de echte duur en testaanpak vaststellen.
- Overstapvragen, toon en concrete invulling mentorschap.

Stap 3 is op gebruikersverzoek geparkeerd en de rekentool blijft ongewijzigd. De overige aanbevelingen worden afzonderlijk doorlopen.
