import type { Project } from './types';

/**
 * Personal projects shown as a showcase on the site and as a compact list on the A4 CV.
 * Add an `image` (a file in /public) to give a card a screenshot. The section hides when empty.
 */
export const projects: Project[] = [
  {
    id: 'tredjekort',
    name: 'Tredjekort',
    eyebrow: { en: '2026 · Side project', da: '2026 · Sideprojekt' },
    description: {
      en: 'An interactive, Danish-first map of the planned 3rd Limfjord crossing in Aalborg. Search an address to see expected road noise, official design and land-requirement layers, and project documents, with an address-report API.',
      da: 'Et interaktivt, dansk-først kort over den planlagte 3. Limfjordsforbindelse i Aalborg. Søg på en adresse og se forventet vejstøj, officielle linjeføringer og arealindgreb samt projektdokumenter, med et API til adresserapporter.',
    },
    tech: ['React', 'TypeScript', 'Vite', 'MapLibre GL', 'Vercel'],
    image: 'projects/tredjekort.png',
    highlights: {
      en: [
        'Address search with expected road noise from the official 2021 noise model, with the model year and forecast year always visible.',
        'Official 2025 design centrelines and land-requirement areas as map layers, plus the municipality’s preliminary proposal for two local roads.',
        'Address-report JSON API with an OpenAPI specification and documentation.',
        'Shareable address and scenario links, and a Danish and English interface.',
      ],
      da: [
        'Adressesøgning med forventet vejstøj fra den officielle støjmodel fra 2021, hvor modelår og prognoseår altid er synlige.',
        'Officielle 2025-linjeføringer og arealindgreb som kortlag, samt kommunens foreløbige forslag for to lokalveje.',
        'JSON-API til adresserapporter med OpenAPI-specifikation og dokumentation.',
        'Delbare adresse- og scenarielinks samt dansk og engelsk grænseflade.',
      ],
    },
    href: 'https://tredjekort.scottlind.dk',
    links: [
      { label: { en: 'Live site', da: 'Live site' }, href: 'https://tredjekort.scottlind.dk' },
      {
        label: { en: 'Source code', da: 'Kildekode' },
        href: 'https://github.com/scottlinddk/Tredjekort',
      },
    ],
  },
  {
    id: 'eink',
    name: 'E-Ink Display Dashboard',
    eyebrow: { en: '2026 · Side project', da: '2026 · Sideprojekt' },
    description: {
      en: 'A glanceable home dashboard on an ESP32 e-ink display. A web app lays out widgets such as weather, calendar, electricity prices and news, renders them to a monochrome image and delivers it over Wi-Fi or Bluetooth. Includes custom firmware and browser-based flashing.',
      da: 'Et overskueligt hjemme-dashboard på et ESP32 e-ink-display. En webapp sammensætter widgets som vejr, kalender, elpriser og nyheder, renderer dem til et monokromt billede og sender det via Wi-Fi eller Bluetooth. Inkluderer egen firmware og flashing direkte fra browseren.',
    },
    tech: ['React', 'TypeScript', 'TanStack Query', 'Node.js', 'ESP32'],
    image: 'projects/eink.png',
    highlights: {
      en: [
        'Layout editor with per-device layouts, slideshows, timed layouts and quiet hours.',
        'Integrations for weather, calendars, electricity prices, news feeds, EV chargers, stocks and Home Assistant.',
        'Custom Wi-Fi firmware with browser-based USB flashing, plus manual Bluetooth push.',
        'Sharing of devices, layouts and dashboards between users, without exposing credentials.',
      ],
      da: [
        'Layouteditor med layouts pr. enhed, slideshows, tidsstyrede layouts og stilleperioder.',
        'Integrationer til vejr, kalendere, elpriser, nyhedsfeeds, ladestandere, aktier og Home Assistant.',
        'Egen Wi-Fi-firmware med flashing via USB direkte i browseren, samt manuel Bluetooth-overførsel.',
        'Deling af enheder, layouts og dashboards mellem brugere uden at afsløre loginoplysninger.',
      ],
    },
    href: 'https://esp32.scottlind.dk',
    links: [
      { label: { en: 'Live site', da: 'Live site' }, href: 'https://esp32.scottlind.dk' },
      {
        label: { en: 'Source code', da: 'Kildekode' },
        href: 'https://github.com/scottlinddk/ESP32-e-ink-system',
      },
    ],
  },
  {
    id: 'slaegt',
    name: 'Slægt',
    eyebrow: { en: '2026 · Side project', da: '2026 · Sideprojekt' },
    description: {
      en: 'A private family tree for approved family members, where you follow connections, explore places and read the stories behind the names. Access is by invitation.',
      da: 'Et privat slægtstræ for godkendte familiemedlemmer, hvor man følger forbindelser, udforsker steder og læser historierne bag navnene. Adgang sker ved invitation.',
    },
    tech: [],
    image: 'projects/slaegt.png',
    highlights: {
      en: [
        'Built around three things: connections, places and stories.',
        'Private by design: sign-in for approved family members, and requests for an invitation.',
      ],
      da: [
        'Bygget om tre ting: forbindelser, steder og fortællinger.',
        'Privat fra start: login for godkendte familiemedlemmer og mulighed for at anmode om en invitation.',
      ],
    },
    href: 'https://slaegt.scottlind.dk',
    links: [{ label: { en: 'Live site', da: 'Live site' }, href: 'https://slaegt.scottlind.dk' }],
  }
];
