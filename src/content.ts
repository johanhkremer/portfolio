// All text på sidan samlad på ett ställe. Ändra här i stället för i komponenterna.
// Rader markerade med TODO är platshållare som behöver fyllas i.

export const site = {
  name: 'Johan Kremer',
  role: 'Webbutvecklare & YH-lärare',
  location: 'Malmö',
  email: 'johan.h.kremer@gmail.com',
  github: 'https://github.com/johanhkremer',
  linkedin: 'https://www.linkedin.com/in/johan-kremer',
  description:
    'Johan Kremer – webbutvecklare och YH-lärare i Malmö. Bygger tillgängliga webbplatser med React och TypeScript.',
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
  // TODO: byt till dina faktiska kurser och skola
  courses: [
    {
      tag: 'Kurs',
      title: 'JavaScript',
      text: 'Grunderna i språket, DOM och asynkron kod. Från första variabeln till en fungerande app.',
    },
    {
      tag: 'Kurs',
      title: 'React & TypeScript',
      text: 'Komponenter, state och typer. Hur man bygger gränssnitt som går att underhålla.',
    },
    {
      tag: 'Kurs',
      title: 'Backend & API:er',
      text: 'Node, databaser och autentisering. Hur frontend och backend pratar med varandra.',
    },
    {
      tag: 'Handledning',
      title: 'LIA & examensarbete',
      text: 'Stöd till studenter under praktik och slutprojekt, från idé till färdig produkt.',
    },
  ],
}

export const about = {
  label: 'Om mig',
  title: 'Lärare som blev utvecklare',
  paragraphs: [
    'Jag var lärare i över tio år. Jag utvecklade kurser och tog in 3D-utskrifter i klassrummet långt innan det var självklart. Nyfikenheten på teknik tog till slut över, och jag utbildade mig till frontendutvecklare.',
    'I dag kombinerar jag båda: jag bygger webbplatser och undervisar blivande utvecklare. Erfarenheten från klassrummet märks i hur jag samarbetar, kommunicerar och löser problem.',
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
  ],
}

export const contact = {
  label: 'Kontakt',
  title: 'Hör av dig',
  lead: 'Har du ett projekt, en tjänst eller vill du bara säga hej? Skriv en rad så återkommer jag.',
}
