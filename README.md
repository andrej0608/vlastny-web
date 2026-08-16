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

Open **`content/site.ts`** and replace the placeholders:

```ts
contact: {
  email: 'hello@example.com',                              // ← your address
  linkedin: 'https://www.linkedin.com/in/your-profile',    // ← your profile
  phone: null,      // ← e.g. '+32 470 00 00 00', or leave null to hide it
  whatsapp: null,   // ← e.g. '32470000000', or leave null to hide it
},
```

`phone` and `whatsapp` are opt-in: while they are `null`, no phone or WhatsApp
line appears anywhere on the site. Set a value and the links appear in the
contact section and the footer automatically.

Until you replace the LinkedIn placeholder, it is deliberately left out of the
site's structured data so search engines are never given a fake profile URL.

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

**About `status`:** please keep this honest. `concept` marks a project you built
yourself as a demonstration; `client` marks real work delivered for a real
client. The badge on each card shows this to visitors, and the whole site
depends on that distinction being true.

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

### 4. FAQ, services, process steps, locations

All four live inside the language files (`nl.ts` / `en.ts`) under `faq.items`,
`services.items`, `process.steps` and `areas.locations`. Add or remove entries
and the page follows — no component changes.

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

The current look is a **deliberately neutral placeholder**, not a final visual
identity. Colours, typography, spacing, radii and shadows are all defined as
custom properties in one file:

```
styles/tokens.css
```

No component hard-codes a colour or a font. To restyle the site, change the
values in that file.

A few things there are load-bearing for accessibility rather than taste, and
are commented as such:

- `--color-neutral-500` is set so muted text clears WCAG AA (4.5:1) on **both**
  the white and the off-white section backgrounds. A lighter grey fails.
- `--color-border-input` gives form fields the 3:1 outline contrast they need,
  since a text field is identified by its box alone.

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

3. **Replace the placeholders in `content/site.ts`** — e-mail and LinkedIn at
   minimum.

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

Never put these values in the code. `.env.local` is git-ignored; copy
`.env.example` to start.

### Worth knowing

- **Replace the placeholder projects.** `content/projects.ts` ships with three
  clearly-labelled concept entries so the section is not empty. They are
  examples, not claims of real work.
- **No response-time promise is made.** The contact section deliberately says
  only that messages reach you directly. If you are happy to commit to
  something like "a reply within one working day", it is a good line to add —
  but that is your call to make, so it is not there by default
  (`contact.responseNote` in the language files).
- **Cookie consent.** The site sets exactly one cookie, `NEXT_LOCALE`, which
  remembers the visitor's language. Strictly-necessary cookies of this kind do
  not require a consent banner under GDPR/ePrivacy. **If you later add
  analytics or tracking, you will need one.**
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
├── sections/                   One file per homepage section
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
