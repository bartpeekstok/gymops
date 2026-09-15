#!/usr/bin/env node
'use strict';

/**
 * Budget-agent voor Meta ads - Hyrox sim oktober '26 verkoop
 *
 * Leest 7-daagse resultaten per adset, past de beslisregels toe en verhoogt of
 * verlaagt het dagbudget. Draait standaard in dry-run: er wordt niets gewijzigd,
 * alleen getoond en gelogd.
 *
 * Gebruik:
 *   node scripts/budget-agent.js              # dry-run (default)
 *   node scripts/budget-agent.js --dry-run    # idem, expliciet
 *   node scripts/budget-agent.js --live       # voert de wijzigingen echt door
 *   node scripts/budget-agent.js --help
 *
 * Config in .env (naast dit bestand of in de projectroot):
 *   META_TOKEN      systeemgebruiker-token met ads_read + ads_management
 *   AD_ACCOUNT_ID   met of zonder act_-prefix
 *   ADSET_IDS       komma-gescheiden, alleen de verkoop-adsets
 *
 * Bestanden:
 *   scripts/budget-agent-state.json   stand per adset (laatste wijziging, ROAS)
 *   scripts/budget-agent-log.jsonl    append-only logregel per adset per run
 *
 * Geen externe dependencies. Vereist Node 18+ (global fetch).
 */

const fs = require('fs');
const path = require('path');

// --- Instellingen ------------------------------------------------------------

const API_VERSION = 'v21.0';
const GRAPH = `https://graph.facebook.com/${API_VERSION}`;

const DATE_PRESET = 'last_7d';

// Beslisdrempels (7-daags venster)
const ROAS_ESCALATE_BELOW = 2; // daaronder: geen actie, wel escalatie
const ROAS_LOWER_BELOW = 3; // daaronder, met >= 3 aankopen: verlagen
const ROAS_LOWER_MIN_PURCHASES = 3;
const ROAS_RAISE_ABOVE = 5; // daarboven, met lage frequentie: verhogen
const ROAS_RAISE_MIN_PURCHASES = 5;
const FREQUENCY_CEILING = 3.0; // boven deze frequentie geen verhoging

const BUDGET_STEP_DOWN = 0.30; // -30%
const BUDGET_STEP_UP = 0.30; // +30%

// Harde cap op het dagbudget per adset bij een verhoging.
const MAX_DAILY_BUDGET_EUR = 50;
// Veiligheidsvloer van onszelf, niet van Meta. Voorkomt dat herhaald verlagen
// een adset richting een budget duwt dat Meta weigert of dat niets meer levert.
const MIN_DAILY_BUDGET_EUR = 5;

// Minimaal aantal dagen tussen twee wijzigingen van dezelfde adset.
const COOLDOWN_DAYS = 4;

// Harde grenzen in de campagnekalender. "Na 14 okt" betekent: vanaf 15 okt.
const PROSPECTING_FREEZE_AFTER = '2026-10-14'; // hierna mag prospecting alleen omlaag of hold
const ALL_CHANGES_FREEZE_AFTER = '2026-10-21'; // hierna alleen nog melden
const CAMPAIGN_TIMEZONE = 'Europe/Amsterdam';

// Adsets waarvan de naam hierop matcht gelden als retargeting, de rest als prospecting.
const RETARGETING_NAME_PATTERN = /(retarget|remarketing|\bRT\b|\bRTG\b)/i;

// Optimalisatiedoelen die op aankopen sturen. Een adset met een ander doel,
// bijvoorbeeld LANDING_PAGE_VIEWS voor opwarming, heeft geen ROAS en valt
// buiten het bereik van deze agent. Vul aan als je andere doelen gaat gebruiken.
const SALES_OPTIMIZATION_GOALS = new Set(['OFFSITE_CONVERSIONS', 'VALUE']);

const STATE_FILE = path.join(__dirname, 'budget-agent-state.json');
const LOG_FILE = path.join(__dirname, 'budget-agent-log.jsonl');

// --- Kleine helpers ----------------------------------------------------------

const eurToCents = (eur) => Math.round(eur * 100);
const centsToEur = (cents) => (cents / 100);
const fmtEur = (cents) => `EUR ${centsToEur(cents).toFixed(2)}`;
const fmtNum = (n, digits = 2) => (n === null || n === undefined || Number.isNaN(n) ? 'n/b' : Number(n).toFixed(digits));

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Kalenderdatum (YYYY-MM-DD) in de campagnetijdzone, niet in UTC. */
function campaignDate(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: CAMPAIGN_TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now);
}

// --- .env inlezen ------------------------------------------------------------

/**
 * Minimalistische .env-parser: KEY=VALUE per regel, # is commentaar, optionele
 * quotes rond de waarde. Bestaande process.env wint, zodat je kunt overrulen
 * met ADSET_IDS=... node scripts/budget-agent.js
 */
function loadEnv() {
  const candidates = [
    path.join(__dirname, '.env'),
    path.join(__dirname, '..', '.env'),
    path.join(process.cwd(), '.env'),
  ];

  for (const file of candidates) {
    if (!fs.existsSync(file)) continue;
    const raw = fs.readFileSync(file, 'utf8');
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      if (!(key in process.env)) process.env[key] = value;
    }
    break; // eerste gevonden .env wint
  }
}

function readConfig() {
  loadEnv();

  const token = (process.env.META_TOKEN || '').trim();
  const rawAccount = (process.env.AD_ACCOUNT_ID || '').trim();
  const rawAdsets = (process.env.ADSET_IDS || '').trim();

  const missing = [];
  if (!token) missing.push('META_TOKEN');
  if (!rawAccount) missing.push('AD_ACCOUNT_ID');
  if (!rawAdsets) missing.push('ADSET_IDS');
  if (missing.length) {
    throw new Error(
      `Ontbrekende configuratie: ${missing.join(', ')}. Zet deze in .env (zie .env.example).`
    );
  }

  const accountId = rawAccount.startsWith('act_') ? rawAccount.slice(4) : rawAccount;
  const adsetIds = rawAdsets.split(',').map((s) => s.trim()).filter(Boolean);

  if (!adsetIds.length) throw new Error('ADSET_IDS bevat geen bruikbare ids.');

  return { token, accountId, adsetIds };
}

// --- Graph API ---------------------------------------------------------------

/** Fetch met retry op netwerkfouten, 429 en 5xx. */
async function apiFetch(url, options = {}, attempt = 1) {
  const MAX_ATTEMPTS = 4;
  let response;
  try {
    response = await fetch(url, options);
  } catch (err) {
    if (attempt >= MAX_ATTEMPTS) throw new Error(`Netwerkfout na ${attempt} pogingen: ${err.message}`);
    await sleep(2 ** attempt * 1000);
    return apiFetch(url, options, attempt + 1);
  }

  if ((response.status === 429 || response.status >= 500) && attempt < MAX_ATTEMPTS) {
    await sleep(2 ** attempt * 1000);
    return apiFetch(url, options, attempt + 1);
  }

  const text = await response.text();
  let body;
  try {
    body = text ? JSON.parse(text) : {};
  } catch {
    throw new Error(`Onleesbaar antwoord van de API (status ${response.status}): ${text.slice(0, 300)}`);
  }

  if (!response.ok || body.error) {
    const e = body.error || {};
    const detail = [e.message, e.error_user_msg].filter(Boolean).join(' | ') || `status ${response.status}`;
    throw new Error(`Meta API-fout: ${detail}`);
  }

  return body;
}

/** Haalt alle insights-pagina's op voor het advertentieaccount. */
async function fetchInsights(token, accountId) {
  const params = new URLSearchParams({
    level: 'adset',
    fields: 'adset_id,adset_name,spend,purchase_roas,actions,frequency',
    date_preset: DATE_PRESET,
    limit: '200',
    access_token: token,
  });

  let url = `${GRAPH}/act_${accountId}/insights?${params.toString()}`;
  const rows = [];

  while (url) {
    const page = await apiFetch(url);
    if (Array.isArray(page.data)) rows.push(...page.data);
    url = page.paging && page.paging.next ? page.paging.next : null;
  }

  return rows;
}

async function fetchAdset(token, adsetId) {
  const params = new URLSearchParams({
    fields: 'id,name,learning_stage_info,daily_budget,lifetime_budget,status,effective_status,optimization_goal,campaign{id,name,objective}',
    access_token: token,
  });
  return apiFetch(`${GRAPH}/${adsetId}?${params.toString()}`);
}

async function updateDailyBudget(token, adsetId, newBudgetCents) {
  const body = new URLSearchParams({
    daily_budget: String(newBudgetCents),
    access_token: token,
  });
  return apiFetch(`${GRAPH}/${adsetId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });
}

// --- Insights uitlezen -------------------------------------------------------

/**
 * Aankopen uit het actions-blok. Meta rapporteert "purchase" (pixel/site) en
 * "omni_purchase" (alle kanalen samen) apart; omni bevat de purchase-conversies
 * meestal al. Optellen zou dus dubbeltellen, daarom nemen we de hoogste.
 */
function readPurchases(actions) {
  if (!Array.isArray(actions)) return 0;
  let best = 0;
  for (const a of actions) {
    if (a.action_type === 'purchase' || a.action_type === 'omni_purchase') {
      const value = Number(a.value);
      if (Number.isFinite(value) && value > best) best = value;
    }
  }
  return best;
}

/** ROAS uit purchase_roas. Voorkeur voor omni_purchase, anders purchase. */
function readRoas(purchaseRoas) {
  if (!Array.isArray(purchaseRoas) || !purchaseRoas.length) return null;
  const pick = (type) => purchaseRoas.find((r) => r.action_type === type);
  const entry = pick('omni_purchase') || pick('purchase') || purchaseRoas[0];
  const value = Number(entry && entry.value);
  return Number.isFinite(value) ? value : null;
}

function isRetargeting(adsetName) {
  return RETARGETING_NAME_PATTERN.test(adsetName || '');
}

/**
 * Stuurt deze adset op aankopen?
 *
 * Dit is geen cosmetisch onderscheid. Meta laat het veld purchase_roas
 * helemaal weg zodra er nul aankopen zijn, in plaats van een ROAS van 0 terug
 * te geven. Zonder dit onderscheid zijn twee totaal verschillende situaties
 * niet uit elkaar te houden:
 *   - een opwarm-adset die op landingspaginaweergaven stuurt en per definitie
 *     geen ROAS heeft, daar mag de agent niets mee
 *   - een verkoop-adset die budget opmaakt en niets verkoopt, en dat is juist
 *     het geval waarvoor de escalatie bestaat
 */
function isSalesAdset(adset) {
  const objective = (adset.campaign && adset.campaign.objective) || '';
  if (objective === 'OUTCOME_SALES') return true;
  return SALES_OPTIMIZATION_GOALS.has(adset.optimization_goal);
}

// --- State -------------------------------------------------------------------

function loadState() {
  if (!fs.existsSync(STATE_FILE)) return {};
  try {
    const parsed = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (err) {
    throw new Error(
      `${STATE_FILE} is geen geldige JSON (${err.message}). Repareer of verwijder het bestand voordat je verder gaat.`
    );
  }
}

function saveState(state) {
  fs.writeFileSync(STATE_FILE, `${JSON.stringify(state, null, 2)}\n`, 'utf8');
}

function daysSince(isoDate, now) {
  if (!isoDate) return null;
  const then = new Date(isoDate);
  if (Number.isNaN(then.getTime())) return null;
  return (now.getTime() - then.getTime()) / 86400000;
}

// --- Logging en escalatie ----------------------------------------------------

function appendLog(entry) {
  fs.appendFileSync(LOG_FILE, `${JSON.stringify(entry)}\n`, 'utf8');
}

/**
 * Escalatie bij ROAS onder de ondergrens. Voor nu: alleen loggen en prominent
 * op de console. Wil je later een bericht naar Slack, Telegram of mail, dan is
 * dit de enige plek die je hoeft aan te passen.
 */
function sendNotification(subject, lines) {
  console.error('');
  console.error('!!! ESCALATIE !!!');
  console.error(`    ${subject}`);
  for (const line of lines) console.error(`    ${line}`);
  console.error('');
}

// --- Beslisregels ------------------------------------------------------------

const MAX_BUDGET_CENTS = eurToCents(MAX_DAILY_BUDGET_EUR);
const MIN_BUDGET_CENTS = eurToCents(MIN_DAILY_BUDGET_EUR);

function lowerBudget(currentCents) {
  const target = Math.round(currentCents * (1 - BUDGET_STEP_DOWN));
  return Math.max(target, MIN_BUDGET_CENTS);
}

function raiseBudget(currentCents) {
  const target = Math.round(currentCents * (1 + BUDGET_STEP_UP));
  return Math.min(target, MAX_BUDGET_CENTS);
}

/**
 * Pure beslisfunctie. Eerste match wint, in de volgorde uit de opdracht.
 * Geeft terug: { action, reason, newBudgetCents }
 * action: SKIP | ESCALATE | LOWER | RAISE | HOLD
 */
function decide(ctx) {
  const { learningStatus, daysSinceChange, roas, previousRoas, frequency, purchases, currentBudgetCents } = ctx;

  // 1. Leerfase: niet aankomen, elke wijziging reset de learning phase.
  if (learningStatus === 'LEARNING') {
    return { action: 'SKIP', reason: 'adset staat in de leerfase (learning_stage_info.status = LEARNING)' };
  }

  // 2. Cooldown na een eerdere wijziging.
  if (daysSinceChange !== null && daysSinceChange < COOLDOWN_DAYS) {
    return {
      action: 'SKIP',
      reason: `nog geen ${COOLDOWN_DAYS} dagen sinds de vorige wijziging (${fmtNum(daysSinceChange, 1)} dagen)`,
    };
  }

  // 3. ROAS onder de ondergrens: bewust geen automatische ingreep, wel escaleren.
  if (roas !== null && roas < ROAS_ESCALATE_BELOW) {
    return {
      action: 'ESCALATE',
      reason: `ROAS ${fmtNum(roas)} ligt onder ${ROAS_ESCALATE_BELOW} over ${DATE_PRESET}, dit vraagt een menselijke beslissing`,
    };
  }

  // 4. Matige ROAS met voldoende aankopen: budget terug.
  if (roas !== null && roas < ROAS_LOWER_BELOW && purchases >= ROAS_LOWER_MIN_PURCHASES) {
    return {
      action: 'LOWER',
      reason: `ROAS ${fmtNum(roas)} onder ${ROAS_LOWER_BELOW} bij ${purchases} aankopen`,
      newBudgetCents: lowerBudget(currentBudgetCents),
    };
  }

  // 5. Te hoge frequentie en dalende ROAS: publiek raakt op, budget terug.
  if (frequency !== null && frequency > FREQUENCY_CEILING && roas !== null && previousRoas !== null && roas < previousRoas) {
    return {
      action: 'LOWER',
      reason: `frequentie ${fmtNum(frequency)} boven ${fmtNum(FREQUENCY_CEILING, 1)} en ROAS daalt (${fmtNum(previousRoas)} naar ${fmtNum(roas)})`,
      newBudgetCents: lowerBudget(currentBudgetCents),
    };
  }

  // 6. Sterke ROAS, publiek nog niet op, genoeg aankopen: opschalen.
  if (
    roas !== null &&
    roas > ROAS_RAISE_ABOVE &&
    frequency !== null &&
    frequency < FREQUENCY_CEILING &&
    purchases >= ROAS_RAISE_MIN_PURCHASES
  ) {
    return {
      action: 'RAISE',
      reason: `ROAS ${fmtNum(roas)} boven ${ROAS_RAISE_ABOVE}, frequentie ${fmtNum(frequency)} onder ${fmtNum(FREQUENCY_CEILING, 1)}, ${purchases} aankopen`,
      newBudgetCents: raiseBudget(currentBudgetCents),
    };
  }

  return { action: 'HOLD', reason: 'geen enkele regel matcht, budget blijft staan' };
}

/**
 * Harde grenzen uit de campagnekalender bovenop de beslisregels.
 * Geeft terug: { action, reason, newBudgetCents, reportOnly }
 */
function applyDateGuards(decision, ctx, today) {
  // Na 21 okt doet het script niets meer, het meldt alleen nog.
  if (today > ALL_CHANGES_FREEZE_AFTER) {
    return {
      ...decision,
      reportOnly: true,
      reason: `${decision.reason} | na ${ALL_CHANGES_FREEZE_AFTER} wordt er niets meer gewijzigd, alleen gemeld`,
    };
  }

  // Na 14 okt mag prospecting alleen nog omlaag of blijven staan.
  if (today > PROSPECTING_FREEZE_AFTER && decision.action === 'RAISE' && !ctx.retargeting) {
    return {
      action: 'HOLD',
      reason: `${decision.reason} | maar na ${PROSPECTING_FREEZE_AFTER} mag prospecting niet meer omhoog`,
      reportOnly: false,
    };
  }

  return { ...decision, reportOnly: false };
}

// --- Uitvoering per adset ----------------------------------------------------

async function processAdset({ adsetId, token, insights, state, now, today, live }) {
  const runAt = now.toISOString();
  const entry = state[adsetId] || {};
  const previousRoas = typeof entry.lastRoas === 'number' ? entry.lastRoas : null;

  const adset = await fetchAdset(token, adsetId);
  const name = adset.name || (insights && insights.adset_name) || adsetId;
  const learningStatus = (adset.learning_stage_info && adset.learning_stage_info.status) || null;
  const currentBudgetCents = Number(adset.daily_budget);

  const salesAdset = isSalesAdset(adset);
  let roas = insights ? readRoas(insights.purchase_roas) : null;
  const frequency = insights && insights.frequency !== undefined ? Number(insights.frequency) : null;
  const purchases = insights ? readPurchases(insights.actions) : 0;
  const spend = insights ? Number(insights.spend) : null;

  // Meta laat purchase_roas weg bij nul aankopen. Voor een verkoop-adset die
  // wel geld uitgeeft is dat geen ontbrekende meting maar een ROAS van 0, en
  // dat hoort te escaleren in plaats van stilletjes op HOLD te blijven staan.
  const roasReadAsZero = roas === null && salesAdset && Number.isFinite(spend) && spend > 0;
  if (roasReadAsZero) roas = 0;

  const base = {
    timestamp: runAt,
    mode: live ? 'live' : 'dry-run',
    adsetId,
    adsetName: name,
    type: isRetargeting(name) ? 'retargeting' : 'prospecting',
    roas,
    frequency: Number.isFinite(frequency) ? frequency : null,
    purchases,
    spend: Number.isFinite(spend) ? spend : null,
    oldBudgetCents: Number.isFinite(currentBudgetCents) ? currentBudgetCents : null,
    newBudgetCents: null,
  };

  // Blokkades die losstaan van de beslisregels.
  if (!insights) {
    return finish({ ...base, action: 'SKIP', reason: `geen insights over ${DATE_PRESET}, adset heeft niet gedraaid of niets uitgegeven` });
  }
  if (!salesAdset) {
    const goal = adset.optimization_goal || 'onbekend';
    const objective = (adset.campaign && adset.campaign.objective) || 'onbekend';
    return finish({
      ...base,
      action: 'SKIP',
      reason: `adset stuurt niet op aankopen (doel ${goal}, campagne ${objective}), heeft dus geen ROAS en valt buiten het bereik van deze agent`,
    });
  }
  if (adset.status !== 'ACTIVE') {
    return finish({ ...base, action: 'SKIP', reason: `adset-status is ${adset.status}, budget van een niet-actieve adset raken we niet aan` });
  }
  if (!Number.isFinite(currentBudgetCents) || currentBudgetCents <= 0) {
    const cause = adset.lifetime_budget && Number(adset.lifetime_budget) > 0
      ? 'adset gebruikt een lifetime budget'
      : 'budget staat waarschijnlijk op campagneniveau (CBO)';
    return finish({ ...base, action: 'SKIP', reason: `geen dagbudget op de adset, ${cause}` });
  }

  const ctx = {
    learningStatus,
    daysSinceChange: daysSince(entry.lastChange, now),
    roas,
    previousRoas,
    frequency: Number.isFinite(frequency) ? frequency : null,
    purchases,
    currentBudgetCents,
    retargeting: isRetargeting(name),
  };

  const decision = applyDateGuards(decide(ctx), ctx, today);

  // Een wijziging die op hetzelfde bedrag uitkomt is geen wijziging.
  if ((decision.action === 'RAISE' || decision.action === 'LOWER') && decision.newBudgetCents === currentBudgetCents) {
    const edge = decision.action === 'RAISE'
      ? `budget zit al op de cap van ${fmtEur(MAX_BUDGET_CENTS)} per dag`
      : `budget zit al op de ondergrens van ${fmtEur(MIN_BUDGET_CENTS)} per dag`;
    return finish({ ...base, action: 'HOLD', reason: `${decision.reason} | ${edge}` });
  }

  const result = {
    ...base,
    roas,
    roasAfgeleidAlsNul: roasReadAsZero,
    action: decision.action,
    reason: decision.reason,
    newBudgetCents: decision.newBudgetCents || null,
  };

  if (decision.action === 'ESCALATE') {
    sendNotification(`${name} draait onder ROAS ${ROAS_ESCALATE_BELOW}`, [
      `ROAS ${fmtNum(roas)} over ${DATE_PRESET}, ${purchases} aankopen, frequentie ${fmtNum(frequency)}`,
      `Uitgaven ${fmtNum(spend)}, dagbudget ${fmtEur(currentBudgetCents)}`,
      'Het script wijzigt hier bewust niets, beoordeel dit zelf.',
    ]);
    return finish(result);
  }

  const wantsChange = decision.action === 'RAISE' || decision.action === 'LOWER';

  if (wantsChange && decision.reportOnly) {
    return finish({ ...result, action: `${decision.action}_GEMELD`, newBudgetCents: decision.newBudgetCents });
  }

  if (wantsChange && live) {
    await updateDailyBudget(token, adsetId, decision.newBudgetCents);
    state[adsetId] = {
      ...entry,
      lastChange: runAt,
      lastChangeFromCents: currentBudgetCents,
      lastChangeToCents: decision.newBudgetCents,
      roasAtLastChange: roas,
      lastRunAt: runAt,
      lastRoas: roas,
    };
    return finish({ ...result, applied: true }, true);
  }

  return finish(result);

  function finish(logEntry, stateAlreadyWritten = false) {
    // Ook in dry-run leggen we de ROAS-stand vast, anders heeft de regel
    // "frequentie hoog en ROAS daalt" niets om mee te vergelijken. lastChange
    // blijft in dry-run ongemoeid: er is immers niets gewijzigd.
    if (!stateAlreadyWritten) {
      const updated = { ...(state[adsetId] || {}), lastRunAt: runAt };
      // Zonder cijfers de vorige ROAS niet wissen, die hebben we nog nodig.
      if (roas !== null) updated.lastRoas = roas;
      state[adsetId] = updated;
    }
    appendLog(logEntry);
    return logEntry;
  }
}

// --- Console-uitvoer ---------------------------------------------------------

function printResult(r) {
  const budget = r.newBudgetCents && r.newBudgetCents !== r.oldBudgetCents
    ? `${fmtEur(r.oldBudgetCents)} -> ${fmtEur(r.newBudgetCents)}`
    : r.oldBudgetCents !== null ? `${fmtEur(r.oldBudgetCents)} (ongewijzigd)` : 'geen dagbudget';

  console.log('');
  console.log(`${r.adsetName}  [${r.adsetId}] (${r.type})`);
  console.log(`  actie     ${r.action}${r.applied ? ' (doorgevoerd)' : ''}`);
  console.log(`  budget    ${budget}`);
  console.log(`  cijfers   ROAS ${fmtNum(r.roas)} | frequentie ${fmtNum(r.frequency)} | ${r.purchases} aankopen | uitgaven ${fmtNum(r.spend)}`);
  console.log(`  reden     ${r.reason}`);
}

function printHelp() {
  console.log(`
Budget-agent voor Meta ads

  node scripts/budget-agent.js            dry-run, toont alleen wat er zou gebeuren
  node scripts/budget-agent.js --live     voert de budgetwijzigingen echt door
  node scripts/budget-agent.js --help     deze uitleg

Config komt uit .env: META_TOKEN, AD_ACCOUNT_ID, ADSET_IDS.
Beslissingen komen in scripts/budget-agent-log.jsonl, de stand in scripts/budget-agent-state.json.
`);
}

// --- Main --------------------------------------------------------------------

async function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    printHelp();
    return 0;
  }

  const unknown = args.filter((a) => !['--live', '--dry-run'].includes(a));
  if (unknown.length) {
    console.error(`Onbekende optie: ${unknown.join(', ')}`);
    printHelp();
    return 1;
  }

  const live = args.includes('--live');
  if (live && args.includes('--dry-run')) {
    console.error('Kies --live of --dry-run, niet allebei.');
    return 1;
  }

  const config = readConfig();
  const now = new Date();
  const today = campaignDate(now);

  console.log(`Budget-agent  ${today} (${CAMPAIGN_TIMEZONE})  modus: ${live ? 'LIVE, wijzigingen worden doorgevoerd' : 'DRY-RUN, er wordt niets gewijzigd'}`);
  console.log(`Venster: ${DATE_PRESET}  |  adsets: ${config.adsetIds.length}  |  cap ${fmtEur(MAX_BUDGET_CENTS)}/dag, vloer ${fmtEur(MIN_BUDGET_CENTS)}/dag`);

  if (today > ALL_CHANGES_FREEZE_AFTER) {
    console.log(`Let op: na ${ALL_CHANGES_FREEZE_AFTER} wijzigt dit script niets meer, het meldt alleen nog.`);
  } else if (today > PROSPECTING_FREEZE_AFTER) {
    console.log(`Let op: na ${PROSPECTING_FREEZE_AFTER} mag prospecting alleen nog omlaag of blijven staan, retargeting mag nog omhoog.`);
  }

  const insightRows = await fetchInsights(config.token, config.accountId);
  const insightsById = new Map(insightRows.map((row) => [String(row.adset_id), row]));

  const state = loadState();
  const results = [];
  const failures = [];

  for (const adsetId of config.adsetIds) {
    try {
      const result = await processAdset({
        adsetId,
        token: config.token,
        insights: insightsById.get(String(adsetId)) || null,
        state,
        now,
        today,
        live,
      });
      results.push(result);
      printResult(result);
    } catch (err) {
      failures.push({ adsetId, message: err.message });
      console.error(`\n${adsetId}\n  FOUT      ${err.message}`);
      appendLog({
        timestamp: now.toISOString(),
        mode: live ? 'live' : 'dry-run',
        adsetId,
        action: 'ERROR',
        reason: err.message,
      });
    }
  }

  saveState(state);

  const tally = results.reduce((acc, r) => {
    acc[r.action] = (acc[r.action] || 0) + 1;
    return acc;
  }, {});

  console.log('');
  console.log('Samenvatting');
  for (const [action, count] of Object.entries(tally)) console.log(`  ${action}: ${count}`);
  if (failures.length) console.log(`  FOUT: ${failures.length}`);
  if (!live) console.log('\nDit was een dry-run. Draai met --live zodra je de beslissingen vertrouwt.');
  console.log(`Log: ${LOG_FILE}`);

  return failures.length ? 1 : 0;
}

if (require.main === module) {
  main()
    .then((code) => process.exit(code))
    .catch((err) => {
      console.error(`\nAfgebroken: ${err.message}`);
      process.exit(1);
    });
}

// Geexporteerd zodat de beslislogica los van de API te testen is.
module.exports = { decide, applyDateGuards, readPurchases, readRoas, isRetargeting, isSalesAdset, lowerBudget, raiseBudget };
