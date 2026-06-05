# GymOps site (statisch)

De complete site als platte HTML/CSS/JS. `index.html` is de homepage (teal V1-stijl).
Geen build-stap nodig.

## Op je bestaande Vercel-URL zetten
De Vercel-URL hangt aan je GitHub-repo. Zo wordt dit de nieuwe live versie op dezelfde URL:

1. In de repo die aan je Vercel-project hangt: **verwijder de oude bestanden** —
   ook `package.json`, `next.config.*` en de Next.js-mappen (`app/`, `pages/`, `components/` enz.).
2. **Kopieer de volledige inhoud van deze map** in de repo
   (`index.html`, alle `*.html`, de `.jsx` / `.js` / `.css` bestanden, de map `assets/` en deze `vercel.json`).
3. **Commit & push.**
4. Vercel ziet een statische site (dankzij `vercel.json` geen build) en deployt 'm op je bestaande URL.

## Lokaal bekijken
Open `index.html` via een mini-server (bijv. VS Code "Live Server"-extensie), niet met dubbelklik —
de pagina laadt losse scripts in die een server nodig hebben.

## Pagina's
- `index.html` — home (teal V1)
- `leadopvolging-v1.html` · `ledenervaring-v1.html` · `team-aansturing-v1.html`
- `prijzen-v1.html` · `klanten-v1.html` · `over-ons-v1.html`
- (de niet-`-v1` varianten + `index-warm.html` / `index-cool.html` zijn alternatieve stijlen; mag je weglaten)
