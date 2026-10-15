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
- `src/styles.css` – färgtema (neonsolnedgång), typsnitt och effekter

## Bygge och drift

Sidan förrenderas till statisk HTML vid `npm run build`. Kontaktformuläret körs som
en serverless-funktion. Deployas på Vercel. Sätt `RESEND_API_KEY` (och eventuellt
`CONTACT_TO_EMAIL`) som miljövariabler där.
