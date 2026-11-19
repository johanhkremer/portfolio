// All text på sidan samlad på ett ställe. Ändra här i stället för i komponenterna.
// Rader markerade med TODO är platshållare som behöver fyllas i.

export const site = {
  // TODO: byt till din egen domän om du skaffar en (påverkar og:url, canonical och sitemap)
  url: 'https://portfolio-johan-kremer.vercel.app',
  name: 'Johan Kremer',
  role: 'Utvecklare',
  location: 'Malmö',
  email: 'johan.h.kremer@gmail.com',
  github: 'https://github.com/johanhkremer',
  linkedin: 'https://www.linkedin.com/in/johan-kremer',
  description:
    'Johan Kremer – frontend- och fullstackutvecklare i Malmö. Bygger webbappar med React, Next.js och TypeScript, från behovsanalys till lansering.',
}

export const credits = {
  heroImage: {
    text: 'Foto: Maria Eklind, Sunset over the rooftops',
    license: 'CC BY-SA 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Sunset_over_the_rooftops.jpg',
  },
}

export const hero = {
  kicker: 'Malmö · Frontend & fullstack',
  lines: ['Från idé', 'till färdig', 'webbapp.'],
  lead: 'Jag är utvecklare och bygger med React, Next.js och TypeScript. Jag tar lösningen hela vägen, från behovsanalys och design till lansering, och ser till att de som ska använda den kan göra det.',
}

export const maf = {
  label: 'Utvalt projekt',
  title: 'MAF',
  subtitle: 'Malmö Amatörteater Forum',
  summary:
    'En ny webbplats för Malmös amatörteaterförening. Föreställningar, nyheter, medlemskap och kontakt, med ett CMS som redaktörerna själva kan sköta.',
  role: 'Jag ansvarade för hela leveransen: behovsanalys tillsammans med styrelsen, MVP, design efter grafisk profil, utveckling, lansering och utbildning av redaktörerna.',
  url: 'https://m-a-f.org',
  facts: [
    { label: 'Ramverk', value: 'Next.js (App Router)' },
    { label: 'CMS', value: 'Sanity Studio' },
    { label: 'Data', value: 'Drizzle + Neon Postgres' },
  ],
  highlights: [
    {
      title: 'Redaktörerna äger innehållet',
      text: 'Sanity Studio på /studio och en egen redaktionsmanual, så att föreningen kan uppdatera sajten utan en utvecklare.',
    },
    {
      title: 'Boka via formulär',
      text: 'Besökare bokar föreställningar och kurser direkt via formulär. Anmälan skickas server-side, och mottagaren styrs från CMS:et.',
    },
    {
      title: 'Profil och tillgänglighet',
      text: 'Typografi och hierarki enligt föreningens grafiska manual, responsiv layout och fokus på tillgänglighet.',
    },
  ],
}

export const approach = {
  label: 'Arbetssätt',
  title: 'Så jobbar jag',
  lead: 'Jag bryr mig om hela vägen: att förstå behovet, bygga något som håller och se till att det faktiskt används.',
  items: [
    {
      tag: 'Behov',
      title: 'Från behov till lansering',
      text: 'Jag börjar med frågorna: vem ska använda det och vad måste fungera? Sedan en MVP, och därefter förbättringar i små steg tillsammans med kunden.',
    },
    {
      tag: 'Kvalitet',
      title: 'Tester och tillgänglighet',
      text: 'Typsäker kod, semantisk HTML och automatiska tester. Den här sajten testas med Playwright i mobil- och desktopläge, med och utan reducerad rörelse.',
    },
    {
      tag: 'Kommunikation',
      title: 'Teknik som går att förstå',
      text: 'Tio år som lärare har gjort mig van att förklara tekniska val för kunder och kollegor, dokumentera tydligt och utbilda dem som ska ta över.',
    },
    {
      tag: 'AI',
      title: 'AI som verktyg',
      text: 'Jag använder AI-verktyg som Claude och ChatGPT dagligen för att utveckla snabbare, och granskar alltid resultatet med egna ögon.',
    },
  ],
}

export const about = {
  label: 'Om mig',
  title: 'Utvecklare med lärarbakgrund',
  paragraphs: [
    'Jag är utbildad frontendutvecklare från Medieinstitutet och har gjort två LIA-perioder på Omegapoint, där jag byggde gränssnitt i Next.js och TypeScript i ett agilt team. Sedan dess har jag bland annat byggt MAF:s nya webbplats från idé till lansering.',
    'Innan dess var jag lärare i över tio år, tills nyfikenheten på teknik tog över. Det märks i hur jag samarbetar, kommunicerar och löser problem, och jag undervisar fortfarande i webbutveckling på yrkeshögskola.',
    'Nu söker jag en roll som utvecklare i ett team där jag får bygga, lära mig av andra och ha nytta av att jag är bra på att få teknik att fungera för människor.',
  ],
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'TanStack Start',
    'Tailwind CSS',
    'Node',
    'PostgreSQL',
    'Prisma / Drizzle',
    'Sanity',
    'Playwright',
    'Vitest',
    'Git & GitHub',
    'Figma',
    'Tillgänglighet',
    'AI-verktyg',
  ],
}

export const contact = {
  label: 'Kontakt',
  title: 'Hör av dig',
  lead: 'Söker ni en utvecklare till ert team, har du ett projekt eller vill du bara säga hej? Skriv en rad så återkommer jag.',
  privacy:
    'Jag använder ditt namn och din e-postadress bara för att svara på ditt meddelande. Uppgifterna sparas inte på webbplatsen och delas inte med andra.',
}
