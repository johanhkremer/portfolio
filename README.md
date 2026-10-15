# Portfolio – Johan Kremer

Personlig portfolio byggd med **TanStack Start**, **Tailwind CSS v4** och **Motion**.

## Kom igång

```bash
npm install
cp .env.example .env.local   # fyll i RESEND_API_KEY
npm run dev                  # http://localhost:3000
```

## Struktur

- `src/content.ts` – all text på sidan (ändra här)
- `src/components/` – sektionerna: Hero, MafCase, Teaching, About, Contact
- `src/server/contact.ts` – server function som skickar kontaktformuläret via Resend
- `src/styles.css` – färgtema (dov plommonpalett med gult, aprikos och rosa), typsnitt
  (Outfit, Anton för etiketter) och gradienttext
- `e2e/` – Playwright-tester (desktop och mobil); `public/` – bilder, favicon, robots och sitemap

## Tester

```bash
npm run test:e2e   # Playwright, startar dev-servern om den inte körs
npm test           # Vitest
```

Playwright kontrollerar att inget horisontellt scroll finns (375 och 1440 px) och fotar
varje sektion i `test-results/`, med och utan reducerad rörelse.

## Bildkrediter

Hero-bilden är "Sunset over the rooftops" av Maria Eklind, CC BY-SA 2.0
([Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sunset_over_the_rooftops.jpg)).
Attributionen visas i sidfoten och ligger i `credits` i `src/content.ts`. Skärmdumpen av
m-a-f.org används med tillstånd.

## Bygge och drift

Sidan förrenderas till statisk HTML vid `npm run build`. Kontaktformuläret körs som
en serverless-funktion. Deployas på Vercel. Sätt `RESEND_API_KEY` (och eventuellt
`CONTACT_TO_EMAIL`) som miljövariabler där. Byter du domän: uppdatera `site.url` i
`src/content.ts` samt adressen i `public/robots.txt` och `public/sitemap.xml`.
