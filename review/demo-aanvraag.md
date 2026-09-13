# Demo-aanvraag — reserveringssysteem

## Klaar in de websitepreview

De demo-popup vraagt optioneel welk reserveringssysteem de gym gebruikt. De opties zijn SportBit, ClubPlanner, Virtuagym, Trainin, Eversports, Pay n Plan, Momence, Wodify, Ander systeem en Geen reserveringssysteem. Dit is een inventarisatie van het huidige systeem van de aanvrager, geen lijst met beschikbare GymOps-integraties.

Bij Ander systeem verschijnt een optioneel tekstveld. De ingevulde naam gaat mee als `booking_system` in de bestaande JSON-aanvraag. Bij een lege eigen naam gaat “Ander systeem” mee; bij geen keuze ontbreekt het veld. Wisselen naar een andere optie wist de eerder ingevoerde eigen naam. De contactgegevens, bron en tags blijven gelijk.

Voorbeeld van het extra veld:

```json
{ "booking_system": "ClubPlanner" }
```

## Voor publicatie: opslaan op de contactkaart

De verzending vanuit de website is gecontroleerd met onderschepte verzoeken. De live HighLevel-workflow is niet gewijzigd of getest met een echte aanvraag. Het veld toevoegen aan de JSON betekent niet automatisch dat HighLevel het op de contactkaart bewaart: daarvoor moet de workflow het inkomende veld verbinden met een contactveld. Zie de [officiële uitleg over het koppelen van webhookgegevens](https://help.gohighlevel.com/support/solutions/articles/155000001183) en het [bijwerken van de mapping reference](https://help.gohighlevel.com/support/solutions/articles/48001237383).

Concrete inrichting om bij de publicatiestap uit te voeren en te controleren:

1. Open de bestaande workflow voor demo-aanvragen van gymops.nl en controleer of er al een contactveld voor het huidige reserveringssysteem is.
2. Gebruik dat veld, of maak een tekstveld “Huidig reserveringssysteem”. Een tekstveld ondersteunt ook de vrij ingevulde systeemnaam.
3. Maak `booking_system` beschikbaar in de mapping reference van de bestaande webhook-trigger en koppel het aan dat contactveld.
4. Werk dit veld alleen bij wanneer `booking_system` is meegestuurd. Een aanvraag zonder keuze mag een bestaande waarde niet wissen.
5. Neem het veld op in de bestaande interne aanvraagmelding als die wordt gebruikt voor de voorbereiding van de demo.
6. Controleer met een afgesproken testaanvraag dat de waarde werkelijk op de contactkaart en in de interne melding staat. Voorkom daarbij berichten of afspraken met echte klanten.

## Bronnen voor de systeemnamen

De aanbieders noemen zelf reserveringen, boekingen of lesplanning: [SportBit](https://www.sportbitmanager.nl/voor-wie/), [ClubPlanner](https://support.clubplanner.app/Knowledge/Article/247?lang=NL), [Virtuagym](https://business.virtuagym.com/nl/rooster-software/), [Trainin](https://www.trainin.nl/), [Eversports](https://www.eversportsmanager.com/nl-NL/faq), [Pay n Plan](https://www.paynplan.com/), [Momence](https://www.momence.com/) en [Wodify](https://www.wodify.com/). Gecontroleerd op 12 september 2026. Deze bronnen bevestigen geen koppeling met GymOps.
