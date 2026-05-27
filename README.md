# The WebDudes – Firmen-Website

Next.js-Projekt für die Markenwebsite von The WebDudes (App Router, TypeScript, Tailwind, Framer Motion, GSAP, tsParticles).

**Projektordner:** `the-webdudes` (npm-Paketname: `the-webdudes`).

## Start

**Variante A – Terminal**

```bash
cd the-webdudes
npm install
npm run dev
```

Der Dev-Server lauscht fest auf **Port 3000**: [http://localhost:3000](http://localhost:3000).

**Variante B – macOS (Doppelklick)**  
`start-dev.command` im Projektordner doppelklicken – installiert bei Bedarf Abhängigkeiten, startet den Server und öffnet den Browser.

**Hinweis:** Im Repo liegt optional eine portable Node-Version unter `.tools/` (nicht in Git). Fehlt sie, brauchst du [Node.js LTS](https://nodejs.org) oder `brew install node`.

### Umgebungsvariablen

`/.env.example` nach `.env.local` kopieren und **`NEXT_PUBLIC_SITE_URL`** für Produktion setzen (ohne Slash am Ende). Wird für `sitemap.xml`, `robots.txt` und `metadataBase` genutzt.

## Deployment (Vercel, öffentlich)

**Produktions-Domain:** [https://thewebdudes.de](https://thewebdudes.de) (canonical).  
**Vercel-URL:** [https://the-webdudes.vercel.app](https://the-webdudes.vercel.app) · Projekt: `the-webdudes`.

### Domain & DNS (thewebdudes.de)

Die Domains sind im Vercel-Projekt hinterlegt. Beim **DNS-Anbieter** (z. B. GoDaddy – aktuell `ns35/ns36.domaincontrol.com`) eine der folgenden Optionen:

1. **Empfohlen (A-Records):**
   - `A` für **`thewebdudes.de`** → **`76.76.21.21`**
   - `A` für **`www.thewebdudes.de`** → **`76.76.21.21`**

   Oder bei CNAME für www: `CNAME` **`www`** → **`cname.vercel-dns.com`** (Vercel zeigt den exakten Wert im Dashboard unter Domains).

2. **Alternativ:** Nameserver auf Vercel umstellen (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`) – dann DNS in Vercel verwalten.

Nach Propagation (oft Minuten bis Stunden) zeigt Vercel die Domain als **Valid**. E-Mail von Vercel bestätigt die Verifizierung.

**Umgebung:** `NEXT_PUBLIC_SITE_URL=https://thewebdudes.de` ist für **Production** in Vercel gesetzt (Sitemap, Meta, OG). Nach DNS-Änderung ggf. **`npm run deploy`** erneut ausführen.

**Redirect:** `www.thewebdudes.de` → `https://thewebdudes.de` (siehe `next.config.ts`).

Weitere Deploys: `npm run deploy` (Production) bzw. `npm run deploy:preview` (Preview).

Optional: [Vercel MCP](https://vercel.com/docs/agent-resources/vercel-mcp) in Cursor für Deployments und Logs.

## Wichtige Pfade

- **Branding / Markenname (The WebDudes):** `lib/config.ts`
- **Rechtliche Stammdaten (Impressum, Footer, Kontakt-E-Mail):** `lib/legal-config.ts`
- **Pakete:** `lib/packages.ts`
- **Portfolio & Demo-URLs:** `lib/portfolio.ts` und `public/demos/`
- **Lokale Schriftarten:** `public/fonts/` · Einbindung `app/fonts.ts` (`next/font/local`)
- **Globale Styles:** `app/globals.css`, ergänzende Utilities unter `styles/`

## Scripts

- `npm run dev` – Entwicklung (Port 3000): **löscht standardmäßig `.next` und `node_modules/.cache` vor dem Start** (verhindert u. a. `Cannot find module './611.js'` und fehlendes CSS). Prüft, ob der Port frei ist.
- `npm run dev:clean` – dasselbe wie `dev` (Alias).
- `npm run dev:fast` – **ohne** vorherigen Clean (schneller, bei Chunk-Fehlern lieber `npm run dev`).
- `npm run dev:only` – nur `next dev`, ohne Port-Check und ohne Clean (Experten).
- `npm run build` – Produktions-Build
- `npm run verify` – **Vor „fertig“ oder Deploy:** leert `.next`, baut frisch (prüft u. a. CSS/Tailwind-Chunks) und führt ESLint aus. Bei UI-/Layout-Änderungen immer ausführen.
- `npm run start` – Produktionsserver
- `npm run lint` – ESLint

### Wenn plötzlich keine Styles mehr da sind (Development)

Das liegt fast nie an fehlendem `import "./globals.css"`, sondern an **veraltetem Build-Cache** oder **zwei Dev-Servern**. Vorgehen: alle Terminals mit `next dev` beenden, **`npm run dev`** starten (löscht `.next` automatisch), im Browser **hart neu laden** (Cmd+Shift+R). Doppelklick auf `start-dev.command` startet ebenfalls `npm run dev`.

Fehler wie **`Cannot find module './611.js'`** = kaputter/alternativer `.next`-Stand: Port 3000 freimachen, im Projektordner `npm run verify` oder zumindest `npm run clean && npm run dev`.

Zeigt die Next-Fehlerseite eine **andere Version** als `npx next --version` im Ordner `the-webdudes`? Dann `npm install` dort ausführen und nicht einen globalen/alten `next`-Aufruf nutzen.

## DSGVO- und Rechts-Checkliste vor Launch

Die folgenden Punkte sind technisch vorbereitet; **rechtliche Verbindlichkeit** entsteht erst nach Prüfung durch eine anwaltliche Kanzlei:

1. **Stammdaten** sind in `lib/legal-config.ts` hinterlegt – nur bei echten Änderungen anpassen.
2. **Impressum** (`/impressum`) und **Datenschutz** (`/datenschutz`) sowie **AGB** (`/agb`) sind als übliche Vorlagen umgesetzt – **vor Go-Live anwaltlich prüfen** lassen.
3. **Schriftarten** werden lokal ausgeliefert (kein Google Fonts beim Seitenaufruf). Eingebettete Demos unter `public/demos/` nutzen System-Schriftarten, damit beim Laden im iframe keine Anfragen an Google Fonts nötig sind.
4. **Portfolio/iframes:** Vorschau lädt erst nach Klick („Vorschau laden“); Hinweis im Datenschutztext.
5. **Analytics:** Kein Tracking aktiv. Optionaler Hinweis im `app/layout.tsx` (auskommentiert) – erst nach Rechtsprüfung und ggf. Consent aktivieren.
6. **Hosting / Deployment:** Region, Auftragsverarbeitung mit dem gewählten Anbieter und ggf. weitere Dienstleister (E-Mail-Versand, Formulare) vertraglich klären.
7. **Security Headers** sind in `next.config.ts` gesetzt. Bei Problemen mit eingebetteten Inhalten ggf. anpassen (kein striktes CSP-Default, um Next.js nicht zu brechen).

**Disclaimer:** Die bereitgestellten Texte (insbesondere AGB und Datenschutz) sind **keine Rechtsberatung**. Vor produktivem Einsatz **anwaltliche Prüfung** einplanen.

## Rechtliche Routen

| Pfad            | Inhalt              |
|-----------------|---------------------|
| `/impressum`    | Impressum (TMG)     |
| `/datenschutz`  | Datenschutzerklärung |
| `/agb`          | Allgemeine Geschäftsbedingungen |

`robots.txt` und `sitemap.xml` werden per App Router generiert (`app/robots.ts`, `app/sitemap.ts`).
