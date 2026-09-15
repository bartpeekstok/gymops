#!/usr/bin/env node
// Test van de beslisregels zonder API-aanroepen: node scripts/budget-agent.test.js

const a = require('./budget-agent.js');
let pass = 0, fail = 0;
function check(label, got, want) {
  const ok = got === want;
  ok ? pass++ : fail++;
  console.log(`${ok ? 'OK  ' : 'FOUT'}  ${label}  -> ${got}${ok ? '' : ` (verwacht ${want})`}`);
}
const base = { learningStatus: 'SUCCESS', daysSinceChange: null, roas: 4, previousRoas: 4, frequency: 2, purchases: 4, currentBudgetCents: 1000, retargeting: false };
const d = (o) => a.decide({ ...base, ...o });

console.log('\n-- volgorde van de regels --');
check('leerfase wint van alles', d({ learningStatus: 'LEARNING', roas: 0.5, daysSinceChange: 99 }).action, 'SKIP');
check('cooldown wint van escalatie', d({ daysSinceChange: 3.9, roas: 1.0 }).action, 'SKIP');
check('cooldown precies 4 dagen laat door', d({ daysSinceChange: 4.0, roas: 1.0 }).action, 'ESCALATE');
check('nooit eerder gewijzigd = geen cooldown', d({ daysSinceChange: null, roas: 1.0 }).action, 'ESCALATE');

console.log('\n-- drempels --');
check('ROAS 1.99 escaleert', d({ roas: 1.99 }).action, 'ESCALATE');
check('ROAS 2.0 escaleert niet', d({ roas: 2.0, purchases: 3 }).action, 'LOWER');
check('ROAS 2.5 met 3 aankopen verlaagt', d({ roas: 2.5, purchases: 3 }).action, 'LOWER');
check('ROAS 2.5 met 2 aankopen houdt vast', d({ roas: 2.5, purchases: 2 }).action, 'HOLD');
check('ROAS 3.0 verlaagt niet', d({ roas: 3.0, purchases: 9 }).action, 'HOLD');
check('ROAS 5.0 verhoogt niet', d({ roas: 5.0, purchases: 9 }).action, 'HOLD');
check('ROAS 5.1 met 5 aankopen verhoogt', d({ roas: 5.1, purchases: 5 }).action, 'RAISE');
check('ROAS 5.1 met 4 aankopen houdt vast', d({ roas: 5.1, purchases: 4 }).action, 'HOLD');
check('ROAS 5.1 maar frequentie 3.0 houdt vast', d({ roas: 5.1, purchases: 5, frequency: 3.0 }).action, 'HOLD');

console.log('\n-- frequentieregel --');
check('freq 3.1 + dalende ROAS verlaagt', d({ roas: 3.5, previousRoas: 4.0, frequency: 3.1 }).action, 'LOWER');
check('freq 3.1 + stijgende ROAS houdt vast', d({ roas: 4.5, previousRoas: 4.0, frequency: 3.1 }).action, 'HOLD');
check('freq 3.1 + gelijke ROAS houdt vast', d({ roas: 4.0, previousRoas: 4.0, frequency: 3.1 }).action, 'HOLD');
check('freq 3.1 zonder vorige run houdt vast', d({ roas: 3.5, previousRoas: null, frequency: 3.1 }).action, 'HOLD');
check('freq 2.9 + dalende ROAS houdt vast', d({ roas: 3.5, previousRoas: 4.0, frequency: 2.9 }).action, 'HOLD');
check('ROAS-regel gaat voor frequentieregel', d({ roas: 2.5, purchases: 3, previousRoas: 9, frequency: 5 }).reason.includes('onder 3'), true);

console.log('\n-- bedragen, cap en vloer --');
check('-30% van 1000', a.lowerBudget(1000), 700);
check('+30% van 1000', a.raiseBudget(1000), 1300);
check('cap op 5000 cent', a.raiseBudget(4500), 5000);
check('cap blokkeert boven 50 euro', a.raiseBudget(9000), 5000);
check('vloer op 500 cent', a.lowerBudget(600), 500);
check('afronding op hele centen', a.raiseBudget(333), 433);

console.log('\n-- datumgrenzen --');
const ctxP = { ...base, retargeting: false };
const ctxR = { ...base, retargeting: true };
const raise = { action: 'RAISE', reason: 'test', newBudgetCents: 1300 };
const lower = { action: 'LOWER', reason: 'test', newBudgetCents: 700 };
check('14 okt: prospecting mag nog omhoog', a.applyDateGuards(raise, ctxP, '2026-10-14').action, 'RAISE');
check('15 okt: prospecting mag niet omhoog', a.applyDateGuards(raise, ctxP, '2026-10-15').action, 'HOLD');
check('15 okt: retargeting mag wel omhoog', a.applyDateGuards(raise, ctxR, '2026-10-15').action, 'RAISE');
check('15 okt: prospecting mag wel omlaag', a.applyDateGuards(lower, ctxP, '2026-10-15').action, 'LOWER');
check('21 okt: nog niet bevroren', a.applyDateGuards(lower, ctxP, '2026-10-21').reportOnly, false);
check('22 okt: alles alleen melden', a.applyDateGuards(lower, ctxP, '2026-10-22').reportOnly, true);
check('22 okt: retargeting ook alleen melden', a.applyDateGuards(raise, ctxR, '2026-10-22').reportOnly, true);

console.log('\n-- aankopen en ROAS uitlezen --');
check('purchase + omni_purchase telt niet dubbel', a.readPurchases([{ action_type: 'purchase', value: '5' }, { action_type: 'omni_purchase', value: '5' }]), 5);
check('hoogste van beide wint', a.readPurchases([{ action_type: 'purchase', value: '3' }, { action_type: 'omni_purchase', value: '7' }]), 7);
check('andere action_types tellen niet mee', a.readPurchases([{ action_type: 'link_click', value: '99' }]), 0);
check('geen actions = 0 aankopen', a.readPurchases(undefined), 0);
check('ROAS pakt omni_purchase', a.readRoas([{ action_type: 'purchase', value: '2' }, { action_type: 'omni_purchase', value: '4.5' }]), 4.5);
check('lege purchase_roas geeft null', a.readRoas([]), null);

console.log('\n-- stuurt de adset op aankopen? --');
check('verkoopcampagne telt als verkoop', a.isSalesAdset({ campaign: { objective: 'OUTCOME_SALES' }, optimization_goal: 'OFFSITE_CONVERSIONS' }), true);
check('conversiedoel telt als verkoop', a.isSalesAdset({ campaign: { objective: 'OUTCOME_TRAFFIC' }, optimization_goal: 'OFFSITE_CONVERSIONS' }), true);
check('opwarming op landingspaginas telt niet', a.isSalesAdset({ campaign: { objective: 'OUTCOME_TRAFFIC' }, optimization_goal: 'LANDING_PAGE_VIEWS' }), false);
check('bereik-doel telt niet', a.isSalesAdset({ campaign: { objective: 'OUTCOME_AWARENESS' }, optimization_goal: 'REACH' }), false);
check('zonder campagneveld valt terug op het doel', a.isSalesAdset({ optimization_goal: 'LANDING_PAGE_VIEWS' }), false);

console.log('\n-- ontbrekende ROAS --');
check('ontbrekend purchase_roas geeft null', a.readRoas(undefined), null);
check('ROAS 0 escaleert', d({ roas: 0, purchases: 0 }).action, 'ESCALATE');
check('ROAS 0 in leerfase escaleert niet', d({ roas: 0, purchases: 0, learningStatus: 'LEARNING' }).action, 'SKIP');
check('ROAS 0 binnen cooldown escaleert niet', d({ roas: 0, purchases: 0, daysSinceChange: 2 }).action, 'SKIP');
check('ROAS null raakt geen enkele regel', d({ roas: null, previousRoas: null, purchases: 0 }).action, 'HOLD');

console.log('\n-- prospecting of retargeting --');
check('Retarget sim bezoekers website', a.isRetargeting('Retarget sim bezoekers website'), true);
check('Nieuwe advertentieset voor Verkoop', a.isRetargeting('Nieuwe advertentieset voor Verkoop'), false);
check('remarketing in de naam', a.isRetargeting('Hyrox remarketing 30d'), true);
check('RT als los woord', a.isRetargeting('Hyrox RT 30d'), true);
check('start-woord bevat geen rt-match', a.isRetargeting('Hyrox start verkoop'), false);

console.log(`\n${pass} geslaagd, ${fail} mislukt`);
process.exit(fail ? 1 : 0);
