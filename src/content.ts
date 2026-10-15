// All text på sidan samlad på ett ställe. Ändra här i stället för i komponenterna.
// Rader markerade med TODO är platshållare som behöver fyllas i.

export const site = {
  // TODO: byt till din egen domän om du skaffar en (påverkar og:url, canonical och sitemap)
  url: 'https://portfolio-johan-kremer.vercel.app',
  name: 'Johan Kremer',
  role: 'Webbutvecklare & YH-lärare',
  location: 'Malmö',
  email: 'johan.h.kremer@gmail.com',
  github: 'https://github.com/johanhkremer',
  linkedin: 'https://www.linkedin.com/in/johan-kremer',
  description:
    'Johan Kremer – webbutvecklare och YH-lärare i Malmö. Bygger tillgängliga webbplatser med React och TypeScript och är van vid att arbeta med AI.',
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
  kicker: 'Malmö · Webbutveckling · Undervisning',
  lines: ['Bygger', 'webben.', 'Lär ut den.'],
  lead: 'Jag är webbutvecklare och lärare på yrkeshögskolan. Jag bygger tillgängliga, snabba sajter och hjälper nya utvecklare att göra detsamma.',
}

export const maf = {
  label: 'Utvalt projekt',
  title: 'MAF',
  subtitle: 'Malmö Amatörteater Forum',
  summary:
    'En ny webbplats för Malmös amatörteaterförening. Föreställningar, nyheter, medlemskap och kontakt, med ett CMS som redaktörerna själva kan sköta.',
  role: 'Utveckling från idé till lansering: behovsanalys, MVP, design efter grafisk profil, utveckling och redaktörsutbildning.',
  url: 'https://m-a-f.org',
  facts: [
    { label: 'Ramverk', value: 'Next.js (App Router)' },
    { label: 'CMS', value: 'Sanity Studio' },
    { label: 'Data', value: 'Drizzle + Neon Postgres' },
    { label: 'Drift', value: 'Vercel, preview per PR' },
  ],
  highlights: [
    {
      title: 'Redaktörerna äger innehållet',
      text: 'Sanity Studio på /studio och en egen redaktionsmanual, så att föreningen kan uppdatera sajten utan en utvecklare.',
    },
    {
      title: 'Medlemskap och formulär',
      text: 'Ansökningsflöde och formulär som skickas server-side, med mottagare som styrs från CMS:et.',
    },
    {
      title: 'Grafisk profil och tillgänglighet',
      text: 'Typografi och hierarki enligt föreningens grafiska manual, responsiv layout och fokus på tillgänglighet.',
    },
  ],
}

export const teaching = {
  label: 'Undervisning',
  title: 'Lärare på YH',
  lead: 'Jag undervisar i webbutveckling på yrkeshögskolan. Efter över tio år som lärare vet jag att det bästa sättet att förstå något är att förklara det för någon annan.',
  courses: [
    {
      tag: 'Webbgrunder',
      title: 'HTML & CSS',
      text: 'Semantisk HTML, responsiv layout och modern CSS, från första sidan till en skalbar och tillgänglig webbplats.',
    },
    {
      tag: 'Programmering',
      title: 'JavaScript',
      text: 'Språkets grunder, DOM-manipulation och felsökning, från första variabeln till interaktiva webbsidor med formulär och validering.',
    },
    {
      tag: 'Samarbete',
      title: 'Versionshantering',
      text: 'Git och GitHub: commits, branches och pull requests, så att man kan samarbeta i kod utan att tappa kontrollen över versionerna.',
    },
    {
      tag: 'Frontend',
      title: 'React & Next.js',
      text: 'Komponenter, props, routing och formulär med React och Vite, samt Next.js App Router. Slutar i en egen app.',
    },
  ],
}

export const about = {
  label: 'Om mig',
  title: 'Lärare som blev utvecklare',
  paragraphs: [
    'Jag var lärare i över tio år. Jag utvecklade kurser och tog in 3D-utskrifter i klassrummet långt innan det var självklart. Nyfikenheten på teknik tog till slut över, och jag utbildade mig till frontendutvecklare.',
    'I dag kombinerar jag båda: jag bygger webbplatser och undervisar blivande utvecklare. Erfarenheten från klassrummet märks i hur jag samarbetar, kommunicerar och löser problem.',
    'Jag är också van vid att arbeta med AI-verktyg som Claude och ChatGPT, både i utvecklingen och i undervisningen.',
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
    'Figma',
    'Tillgänglighet',
    'Claude',
    'ChatGPT',
  ],
}

export const contact = {
  label: 'Kontakt',
  title: 'Hör av dig',
  lead: 'Har du ett projekt, en tjänst eller vill du bara säga hej? Skriv en rad så återkommer jag.',
  privacy:
    'Jag använder ditt namn och din e-postadress bara för att svara på ditt meddelande. Uppgifterna sparas inte på webbplatsen och delas inte med andra.',
}
