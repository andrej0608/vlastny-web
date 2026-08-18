# Andrej Juriga — personal website

Bilingual (Dutch / English) business website presenting website development and
business automation services for small and medium-sized businesses in Belgium
and the Netherlands.

Built with Next.js (App Router) and plain CSS Modules. No CSS framework, no UI
library, no database, no analytics — nothing that is not actually used.

---

## Quick start

```bash
npm install
```

```bash
npm run dev
```

Then open <http://localhost:3000>. You will be redirected to `/nl`.

| Command             | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Development server with hot reload             |
| `npm run build`     | Production build                               |
| `npm run start`     | Serve the production build locally             |
| `npm run lint`      | ESLint, including accessibility rules          |
| `npm run typecheck` | TypeScript check without emitting files        |

---

## Where the content lives

**You should almost never need to edit a component to change text.** Content is
separated from presentation on purpose.

```
content/
├── site.ts                    ← e-mail, LinkedIn, phone, location
├── projects.ts                ← portfolio projects
└── translations/
    ├── dictionary.ts          ← the shape every language must fill in
    ├── nl.ts                  ← ALL Dutch text
    ├── en.ts                  ← ALL English text
    └── index.ts               ← language registry
```

### 1. Your real e-mail, LinkedIn and phone number

Open **`content/site.ts`**. Every contact channel starts as `null`:

```ts
contact: {
  email: null,      // ← e.g. 'andrej@yourdomain.be'
  linkedin: null,   // ← e.g. 'https://www.linkedin.com/in/andrej-juriga'
  phone: null,      // ← e.g. '+32 470 00 00 00'
  whatsapp: null,   // ← e.g. '32470000000' (no + or spaces)
},
```

**All four are opt-in.** A channel that is `null` is not rendered at all — no
dummy address is ever shown to a visitor, and nothing is written into the
site's structured data. Set a value and the link appears in the contact
section and footer automatically. Set none and the contact block collapses,
leaving the form to carry the section on its own.

> ⚠️ **Set at least an e-mail address before going live**, or configure form
> delivery (below). With neither, a visitor has no way to reach you: the form
> tells them sending is not active, and there is no address to fall back to.

### 2. Page text

Edit `content/translations/nl.ts` and `content/translations/en.ts`. The two
files implement the same TypeScript interface, so if you add something to one
and forget the other, `npm run typecheck` tells you exactly which key is
missing. Dutch and English can never silently drift apart.

### 3. Portfolio projects

Add an entry to the `projects` array in **`content/projects.ts`**:

```ts
{
  slug: 'bakkerij-janssens',        // URL-safe and stable
  name: 'Bakkerij Janssens',
  description: {
    nl: 'Nieuwe website met openingstijden en bestelformulier.',
    en: 'New website with opening hours and an order form.',
  },
  type: { nl: 'Lokale winkel', en: 'Local shop' },

  // Optional closing line: what the project achieves for the business.
  value: {
    nl: 'Klanten bestellen online in plaats van telefonisch.',
    en: 'Customers order online instead of by phone.',
  },

  status: 'client',                 // 'client' = real paid work
                                    // 'concept' = your own demo project

  image: {
    src: '/projects/bakkerij-janssens.jpg',   // put the file in public/projects/
    width: 1600,                              // real pixel size, so the page
    height: 1000,                             // never jumps while loading
    alt: {
      nl: 'Homepage van de website van Bakkerij Janssens',
      en: 'Homepage of the Bakkerij Janssens website',
    },
  },

  url: 'https://bakkerijjanssens.be',   // or null if not published yet
  order: 1,                             // lower numbers appear first
}
```

Only `slug`, `name`, `description`, `type`, `status`, `image`, `url` and
`order` are required. Set `image: null` to show a neutral placeholder instead.

Each card is written to answer three questions in order — `type` (what kind of
business or problem), `description` (what was created) and `value` (what it
achieves). Describe outcomes, not tooling: the `technologies` field exists for
your own notes and is deliberately never rendered.

**About `status`:** please keep this honest. `concept` marks a project you built
yourself as a demonstration; `client` marks real work delivered for a real
client. The badge on each card shows this to visitors, and the whole site
depends on that distinction being true.

**Case-study media.** A `detail` block can also carry a screenshot gallery and
a short demo recording. Both are optional; a project renders whatever it has.

```ts
gallery: [
  {
    src: '/projects/<name>/hero.webp',
    width: 1600, height: 776,
    alt: { nl: '…', en: '…' },        // required, describes the screenshot
    caption: { nl: 'Startsectie', en: 'Hero section' },  // optional
  },
  // …the first image spans the full width, the rest share the row below it
],
video: {
  src: '/projects/<name>/demo.mp4',
  poster: '/projects/<name>/demo-poster.webp',
  width: 1440, height: 684,
  description: { nl: '…', en: '…' },  // visible caption, see below
},
outcome: { nl: '…', en: '…' },        // closing "Result" block
```

Media lives under `public/projects/<project-name>/`. Encode screenshots as
WebP around 1600px wide, and the video as H.264 MP4 with
`-movflags +faststart` so it streams rather than downloading whole. Strip the
audio track unless the recording genuinely has narration — the `video.description`
is what carries the content for anyone who cannot or does not watch it, so keep
it accurate rather than decorative.

A `detail` block can also carry, all optional:

- `blocks` — titled prose sections such as "The problem" / "The solution".
  The heading lives with the project, not in the language files, because the
  wording belongs to that project's story.
- `workflow` — a short process shown as numbered, connected steps. Reads left
  to right on a wide screen and stacks on a narrow one.
- `note` — a quiet notice at the foot of the page. Used on the quotation tool
  to state that the demo data is fictional.
- `videoHeading` / `outcomeHeading` — override the generic headings when a
  project's own wording reads better.

**Optional detail page.** Add a `detail` block to a project and it
automatically gets its own page at `/nl/werk/<slug>` and `/en/work/<slug>`, a
link appears on its card, and it is added to the sitemap:

```ts
detail: {
  paragraphs: {
    nl: ['Eerste alinea.', 'Tweede alinea.'],
    en: ['First paragraph.', 'Second paragraph.'],
  },
  highlights: {                      // optional bullet list
    nl: ['Online bestelformulier', 'Koppeling met Google Maps'],
    en: ['Online order form', 'Google Maps integration'],
  },
},
```

### 4. FAQ, services, automation examples, process steps, locations

All of these live inside the language files (`nl.ts` / `en.ts`) under
`faq.items`, `services.items`, `automation.useCases`, `process.steps` and
`areas.locations`. Add or remove entries and the page follows — no component
changes.

---

## How the multilingual system works

- **Dutch is the primary language.** English is a full, manually written
  translation. No machine translation is used anywhere.
- **Real URLs per language:** `/nl` and `/en`. Search engines index them as two
  separate pages, each with its own title, description and canonical URL.
- **One set of components.** Components receive a dictionary object and render
  whichever language they are given, so there is no duplicated NL/EN logic.
- **The bare domain redirects.** `proxy.ts` sends a visitor arriving at `/` to
  `/nl` or `/en` based on a saved cookie, falling back to their browser
  language, falling back to Dutch.
- **The choice is remembered.** Clicking a flag stores `NEXT_LOCALE` for a year,
  so a returning visitor lands in the language they picked last time.
- **The switcher keeps your place.** Switching language on a project detail page
  takes you to that same project in the other language, not back to the
  homepage.
- **hreflang and canonical** are emitted on every page and in the sitemap, so
  `/nl` and `/en` are understood as language versions of one page rather than
  duplicate content.

### Adding a third language later

1. Add the code to `locales` in `lib/i18n.ts`, plus its entries in
   `localeHtmlLang` and `localeLabels`.
2. Create `content/translations/<code>.ts`. Run `npm run typecheck` — it lists
   every key you still need to write.
3. Register it in `content/translations/index.ts`.
4. Add the language to the per-locale fields in `content/projects.ts`.
5. Add its localised URL segment in `lib/routes.ts`.

No component needs to change.

---

## Design and styling

The site uses a **dark navy / near-black theme with one electric blue accent**.
Colours, typography, spacing, radii, shadows and glow are all defined as custom
properties in one file:

```
styles/tokens.css
```

No component hard-codes a colour or a font. To restyle the site, change the
values in that file.

Two ramps drive everything: `--color-base-*` (950 = page background through to
0 = white) and `--color-accent-*` (a single blue). Components never reference
those directly — they use the semantic roles below them (`--color-surface`,
`--color-text-muted`, `--color-border-input`, and so on), so a palette change
does not require touching a single component.

### Images

| What | Where | Notes |
| --- | --- | --- |
| Portrait | `public/images/about/andrej-juriga.webp` | Path and dimensions in `content/portrait.ts`. Roughly 4:5 works best. |
| Service illustrations | `public/images/services/*.webp` | Mapped to services by id in `content/service-images.ts`. Keep 4:3. |

All are WebP and served through `next/image`, which converts to AVIF where the
browser supports it. To replace one, drop in a new file, update the path and
intrinsic size in the matching content file, and update the `imageAlt` in both
language files.

A few things there are load-bearing for accessibility rather than taste, and
are commented as such:

- `--color-base-400` is the quietest grey that still clears WCAG AA (4.5:1) on
  the page, section **and** card backgrounds. Anything dimmer fails on cards.
- `--color-border-input` gives form fields the 3:1 outline contrast they need,
  since a text field is identified by its box alone.

Motion is deliberately restrained: a 1px lift on cards and buttons, a slight
image scale on service cards, and nothing else. Every transform is disabled
under `prefers-reduced-motion`, leaving the colour change to carry the state.

Typography currently uses a system font stack — nothing to download, no layout
shift. When a typeface is chosen, load it with `next/font` in `app/layout.tsx`
and point `--font-sans` at the generated CSS variable.

---

## Contact form

The form works today: it validates, reports errors accessibly, filters spam,
and shows loading, success and error states.

**E-mail delivery is not configured yet, and no credentials were invented.**
With no provider set up, a valid submission returns a clear message asking the
visitor to e-mail directly, and the enquiry is written to the server log. To
switch delivery on, see *Before deploying* below.

How it is built:

- **An optional service-type selector** lets the visitor say what the enquiry
  is about (new website / redesign / automation / something else). It is never
  required, so nobody is blocked by a category that does not quite fit. The
  submitted value is a stable, language-independent key; the server rejects
  anything it does not recognise and translates the valid ones back into words
  for the notification e-mail and its subject line.
- **Validation runs twice.** `lib/contact-validation.ts` is shared by the
  browser and the server, so the two can never disagree. The server re-checks
  everything, because client-side validation can be bypassed.
- **Errors are accessible.** A summary appears above the form and receives
  focus, each field gets `aria-invalid` and `aria-describedby`, every field has
  a real `<label>`, and errors are never signalled by colour alone.
- **Two spam filters, no CAPTCHA.** A honeypot field hidden from humans, and a
  timing check that rejects submissions completed implausibly fast. Both return
  a normal-looking success response, so a bot learns nothing.
- **Header injection is blocked** — CR/LF is stripped from anything reaching a
  mail header, and all values are escaped in the HTML body.

---

## SEO

Already in place:

- Per-language `<title>` and meta description
- Canonical URLs, `hreflang` and `x-default`
- Open Graph and Twitter card metadata
- A social preview image generated per language (`app/[lang]/opengraph-image.tsx`)
- `sitemap.xml` with per-URL language alternates, and `robots.txt`
- Semantic HTML with exactly one `<h1>` per page and no skipped heading levels
- Structured data: `Person`, `ProfessionalService`, `WebSite` and `FAQPage`

The structured data claims **only what is actually true**. There is no
registered company number, VAT number, opening hours, rating or review count,
because none was provided — and fake ratings in particular violate Google's
structured data policies.

---

## Before deploying to Vercel

### Required

1. **Push to GitHub**, then import the repository at
   [vercel.com/new](https://vercel.com/new). Framework detection, build command
   and output settings need no changes.

2. **Set `NEXT_PUBLIC_SITE_URL`** in *Project → Settings → Environment
   Variables*, e.g. `https://www.jurigadigital.be` (no trailing slash).

   This matters: canonical URLs, hreflang tags, the sitemap and social preview
   links are all built from it. Until it is set they point at
   `https://www.example.com`, the placeholder in `content/site.ts`.

3. **Fill in `content/site.ts`** — an e-mail address at minimum. Every contact
   channel starts as `null` and stays hidden until you set it, so right now the
   contact section shows the form and nothing else.

### To make the contact form actually deliver mail

Optional, and the site works without it.

1. Create an account at [resend.com](https://resend.com) and verify your
   sending domain.
2. Add three environment variables in Vercel:

   | Variable             | Example                                            |
   | -------------------- | -------------------------------------------------- |
   | `RESEND_API_KEY`     | `re_...`                                            |
   | `CONTACT_FROM_EMAIL` | `website@yourdomain.be` (on your verified domain)   |
   | `CONTACT_TO_EMAIL`   | your own inbox                                      |

3. Redeploy.

Prefer a different provider? Only one `fetch` call in
`app/api/contact/route.ts` needs changing — everything around it stays.

**Basic server protection is already in place**, independent of which
provider you use: a per-IP rate limit (5 submissions per 10 minutes,
`lib/rate-limit.ts`), a honeypot field, a minimum-fill-time check, request
size and field-length caps, and header-injection sanitising on every value
that reaches an e-mail header. Server logs never contain a visitor's name,
e-mail address or message — only that an enquiry arrived or failed, and why.

Never put these values in the code. `.env.local` is git-ignored; copy
`.env.example` to start.

### Worth knowing

- **The portfolio holds two concept entries.** `content/projects.ts` contains
  an automotive service website concept and an automated quotation tool, both
  labelled `concept` and neither claiming a client or a live URL. Add a
  screenshot (`image`) and a link (`url`) to each as they become available —
  cards with real screenshots are considerably more persuasive than the
  neutral placeholder.
- **No response-time promise is made.** The contact section deliberately says
  only that messages reach you directly. If you are happy to commit to
  something like "a reply within one working day", it is a good line to add —
  but that is your call to make, so it is not there by default
  (`contact.responseNote` in the language files).
- **Cookie consent.** The site sets exactly one cookie, `NEXT_LOCALE`, which
  remembers the visitor's language. Functional cookies of this kind do not
  require a prior-consent banner, so none is implemented. **If you later add
  analytics, tracking, embedded maps or videos, that changes** — those must not
  load before consent, and a banner becomes necessary.
- **Business identification.** `siteConfig.business` is empty. Once you
  register a Belgian business, fill in `legalName`, `companyNumber`
  (ondernemingsnummer), `vatNumber` and `address`; they then appear in the
  footer and the privacy notice automatically. Nothing renders while unset.
- **Privacy notice accuracy.** `siteConfig.privacy` drives the wording of the
  privacy pages. Set `hostingProvider` once the site is deployed and
  `emailDeliveryProvider` once form delivery is switched on, and update
  `lastUpdated` whenever you change the notice. While those are `null` the
  notice states plainly that no such processor is in use — do not leave them
  stale once that stops being true.
- **Favicon.** `app/icon.svg` is a simple placeholder monogram; replace it when
  the visual identity is decided.

---

## Project structure

```
app/
├── layout.tsx                  Root shell (thin — language layout does the work)
├── not-found.tsx               404 for unmatched URLs
├── icon.svg                    Favicon (placeholder)
├── robots.ts                   robots.txt
├── sitemap.ts                  sitemap.xml, with language alternates
├── api/contact/route.ts        Contact form endpoint
└── [lang]/
    ├── layout.tsx              <html lang>, header, footer, skip link
    ├── page.tsx                Homepage — composes every section
    ├── not-found.tsx           404 inside a language
    ├── opengraph-image.tsx     Social preview, generated per language
    └── [section]/[slug]/       Optional project detail pages

components/
├── layout/                     Header, Footer, LanguageSwitcher
├── sections/                   One file per homepage section, in page order:
│                               Hero, Services, Automation, WhyWebsite, Work,
│                               Process, About, Areas, Faq, Contact
└── ui/                         Container, Section, Button, Accordion

content/                        ← all editable text and data (see above)

lib/
├── i18n.ts                     Languages, cookie, browser-language detection
├── routes.ts                   Localised URL segments, path translation
├── seo.ts                      Metadata, canonical and hreflang builders
├── structured-data.ts          schema.org JSON-LD
├── contact-validation.ts       Shared browser + server validation
└── locale-cookie.ts            Stores the language choice

styles/
├── tokens.css                  ← the whole visual identity
└── globals.css                 Reset, focus styles, reduced-motion guard

proxy.ts                        Redirects / to the right language
```

---

## Built to extend

The following are **not** implemented, but the structure does not get in their
way: real client projects, testimonials, case studies, a quotation workflow,
a blog, per-region landing pages, CRM integration, scheduling, analytics, a
cookie banner, and additional languages.
