# CV design system: how to build with it

Editorial CV system in the Caffeine palette (neutral greys, espresso-brown primary, cream secondary). Three things are non-negotiable: **ATS-friendly** (real text in reading order, no icon-only or image-only content), **PDF-ready** (A4 print rules ship with it) and **mobile-first** (everything collapses at 48rem). Components take plain data props and know nothing about routing or i18n: pass already-translated strings.

## Setup

Load `styles.css` once (it imports the static Geist, Geist Mono and Instrument Serif fonts, all tokens, base styles and print rules). No provider is needed. Dark mode follows the OS or `<html data-theme="dark">`; `data-theme="light"` forces light. `ThemeSwitch` is a controlled sun/moon icon button (pass the scheme that is showing and an action label such as "Switch to dark mode"): the app stores the choice and sets `data-theme` (no attribute means follow the OS). The A4 `Sheet` is always paper-white.

```jsx
const { Sheet, ProfileHeader, Portrait, Section, ExperienceList, TagList } = window.CvDesignSystem;
```

## Styling idiom: components first, then `--ds-*` variables

There is no utility-class system. Compose the library components; for your own layout glue use inline styles or your own classes with the tokens below. Never hard-code colours, fonts or radii. Component classes (`ds-*`) are internal; do not restyle them.

- Colour: `--ds-color-canvas` (page background), `-paper`, `-surface`, `-surface-2`, `-ink`, `-ink-2`, `-muted`, `-line`, `-line-strong`, `-accent` (fills), `-accent-text` (accent-coloured text, AA contrast), `-on-accent`, `-card`, `-card-ink`, `-card-muted`, `-card-line`.
- Type: `--ds-font-display` (Instrument Serif, the name and nothing else), `--ds-font-sans` (Geist, body), `--ds-font-mono` (Geist Mono, labels, dates, tags, buttons, always paired with `text-transform: uppercase` for labels). Sizes: `--ds-text-label`, `-small`, `-body`, `-lead`, `-title`. Keep `letter-spacing` at or below `--ds-tracking-label` (0.04em): wide tracking breaks PDF text extraction.
- Space and shape: `--ds-space-1` to `--ds-space-8`, `--ds-radius-sm|md|lg|pill`, `--ds-hairline`, `--ds-gutter`, `--ds-page-max`.
- Utility class: `ds-no-print` hides anything in print and PDF (toolbars, buttons). `ds-theme-paper` pins the light palette on a container.

## Rules that keep it ATS and PDF safe

- Headings are real `h1`/`h2`/`h3`. `Section` is `h2`, use `headingLevel={3}` when nesting. `ProfileHeader` renders the only `h1`.
- Capitals come from CSS. Never type text in capitals; never space letters out.
- Contact and social links need visible text (`ContactList`, `LinkGrid`). `Icon` is decoration, never the label.
- Dates are pre-formatted strings ("January 2026 – Present"), put next to the role, not in an image or chart.
- Dark `Card`s become outlined in print automatically. Do not use gradients, shadows or background images for content; print uses flat colour.
- Rows that must not split across pages already carry `break-inside: avoid`. Mobile: add nothing, components stack below 48rem.

## Where the truth lives

Read `_ds/<folder>/styles.css` and its imports for the tokens, and each component's `<Name>.d.ts` and `<Name>.prompt.md` for props. Composition references: `Sheet` (A4 document), `SplitLayout` (web page with a 16rem sticky aside, keep the `Portrait` there at its default small size). Use `ProjectShowcase` for personal projects on web pages and the plain `ProjectList` inside the A4 `Sheet`.

## One build snippet (web page)

```jsx
<SplitLayout
  aside={
    <>
      <Portrait src="/photo.jpg" alt="Scott Lind">
        <strong>Scott Lind</strong>
      </Portrait>
      <ContactList
        layout="stack"
        items={[{ kind: 'email', label: 'hello@example.dk', href: 'mailto:hello@example.dk' }]}
      />
    </>
  }
>
  <ProfileHeader
    name="Scott Lind"
    role="Senior Frontend Developer"
    summary="Frontend developer with ..."
  />
  <Section title="Experience">
    <ExperienceList
      items={[
        {
          id: 'a',
          role: 'Frontend Developer',
          company: 'Norlys Energy Trading',
          period: 'January 2026 – Present',
          tech: ['React', 'TypeScript'],
        },
      ]}
    />
  </Section>
  <Section title="Skills">
    <SkillGroups
      variant="cards"
      groups={[{ id: 'fe', label: 'Frontend', items: ['TypeScript', 'React'] }]}
    />
  </Section>
</SplitLayout>
```
