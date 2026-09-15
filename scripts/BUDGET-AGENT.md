# Budget-agent live zetten

De agent past het dagbudget van de Meta-verkoopadsets aan volgens vaste
beslisregels. Dit bestand beschrijft hoe je hem onbewaakt laat draaien.

## Deze repo moet prive zijn

De runlogs van GitHub Actions bevatten je ROAS, je omzet, je dagbudgetten en je
adset-ids. Op een publieke repo zijn die logs voor iedereen leesbaar, ook voor
je concurrenten. Controleer voordat je de workflow inschakelt dat de repo op
Private staat.

Twee dingen om te weten bij het omzetten:

- Er staat niets gevoeligs in de bestaande historie, dus er valt niets op te
  ruimen. De `.env` is altijd genegeerd geweest.
- De site draait op Vercel. Controleer na het omzetten eenmalig of de
  deployment nog werkt, want Vercel heeft opnieuw toegang tot de repo nodig.

De workflow commit `budget-agent-state.json` en `budget-agent-log.jsonl` na elke
run terug met `git add -f`, langs `.gitignore` heen. Zonder die stand is de
agent elke run zijn geheugen kwijt en werken de cooldown van vier dagen en de
ROAS-vergelijking niet.

## Secrets instellen

In de priverepo onder Settings, Secrets and variables, Actions:

| secret | waarde |
|---|---|
| `META_TOKEN` | systeemgebruiker-token met `ads_read` en `ads_management` |
| `AD_ACCOUNT_ID` | je advertentieaccount, met of zonder `act_`-prefix |
| `ADSET_IDS` | komma-gescheiden, alleen de verkoop-adsets |

Maak hiervoor een **nieuw** token aan. Gebruik geen token dat ooit in een chat,
een e-mail of een screenshot heeft gestaan.

## Wat de workflow doet

1. Draait eerst de testsuite. Een kapotte beslisregel mag nooit tot een
   budgetwijziging leiden.
2. Draait de agent met `--live --fail-on-escalation`.
3. Commit de stand en het logboek terug, ook als stap 2 faalde.

Schema: elke dag om 07:00 UTC, oftewel 09:00 in Amsterdam zolang het zomertijd
is. Na 25 oktober 2026 verschuift dat naar 08:00 Amsterdamse tijd.

Handmatig draaien kan via Actions, Run workflow. Daar kun je kiezen voor
`dry-run`, dat wijzigt niets.

## Hoe je een melding krijgt

De agent stuurt zelf geen berichten. In plaats daarvan eindigt de run met
foutcode 2 zodra een adset escaleert (ROAS onder 2). GitHub mailt je standaard
bij een mislukte workflow-run, dus dat is je meldkanaal.

Controleer eenmalig onder je GitHub-notificatie-instellingen dat "Actions" met
e-mail aan staat, anders merk je een escalatie niet op.

Wil je liever Slack of Telegram, dan is `sendNotification` in
`scripts/budget-agent.js` de enige plek die je hoeft aan te passen.

## Wat de agent niet doet

- hij pauzeert nooit een adset
- hij raakt alleen adsets aan die op aankopen sturen, binnen hun looptijd
  vallen, op ACTIVE staan en een eigen dagbudget hebben
- hij wijzigt niets aan je doelgroep, je advertenties of je biedstrategie
- hij komt nooit boven de cap of onder de vloer in `budget-agent.js`

Hij draait aan een knop. Hij voert je campagne niet.
