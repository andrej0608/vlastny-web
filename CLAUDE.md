@AGENTS.md

# andrejweb.be

Andrej Juriga's business site: websites and business automation for small and
medium businesses in Belgium and the Netherlands. Bilingual (`/nl`, `/en`),
Dutch is primary. Next.js App Router, CSS Modules, no UI framework, no state
library. Deployed on Vercel; a push to `main` deploys to production.

Scripts: `dev`, `build`, `start`, `lint`, `typecheck`. **There is no test
suite** — verification means `npm run typecheck && npm run lint && npm run
build`, plus driving the dev server when a change is visible.

## Where things live

| What | Where |
| --- | --- |
| Every visitor-facing string | `content/translations/{nl,en}.ts` |
| The shape both must implement | `content/translations/dictionary.ts` |
| Contact details, business identity, privacy facts | `content/site.ts` |
| Portfolio entries and case studies | `content/projects.ts` |
| Colours, spacing, type, motion | `styles/tokens.css` |
| Localised URL segments | `lib/routes.ts` |

Two rules follow from that table, and most mistakes here are a breach of one:

- **Never hardcode text in a component.** Add the key to `dictionary.ts` and
  TypeScript will name every language file still missing it, which is what
  keeps Dutch and English from drifting apart.
- **Never hardcode a colour, radius or duration.** Components read tokens.

## Things that look fine and are not

- **The header creates a containing block.** `.header` carries
  `backdrop-filter`, which per Filter Effects makes it the containing block for
  its `position: fixed` descendants. The mobile drawer must stay a *sibling* of
  `<header>`. As a child it sized itself against the 72px header and collapsed
  to an invisible sliver — the icon toggled, the panel was there, and nothing
  appeared.
- **Reveals animate with a keyframe, never a transition.** A `transition`
  shorthand on a card overwrites the one the card declares for its own hover
  state, and file order in the bundle decides the winner.
  `animation-fill-mode` is `backwards`, not `forwards`: forwards freezes
  `transform: none` in place and kills every card's hover lift. See
  `components/ui/Reveal.tsx`.
- **The contact form answers 200 when it discards a submission as spam.** That
  is deliberate — a bot learns nothing — but it means a silent drop and a
  successful send are indistinguishable from outside. If mail goes missing,
  that branch is the first suspect.
- **The honeypot is called `contact_reference` and labelled "Reference"** for a
  reason. Named `website`, password managers filled it, and a filled honeypot
  throws the enquiry away. Do not give it a meaningful name.
- **The spam timing check measures a duration, not two timestamps.** The
  browser sends `elapsedMs`; it must never send a start time for the server to
  subtract from its own clock, or a device running fast gets rejected as "too
  fast" however long the person really took.

## House style

- **Claim only what is true.** No invented clients, testimonials, statistics or
  measurable results. Portfolio entries are labelled `concept` or `client`
  honestly, and structured data describes only what exists — no rating, no
  review count, no company number until there is one.
- **Copy is for a non-technical business owner** — a cleaning company, a
  garage, a builder. Say what happens and what it is worth to them, never what
  the technology is called. Words like *workflow*, *digital solution* and
  *process automation* were deliberately removed once already.
- **Server logs never carry visitor data.** No name, address, phone or message
  — not in a success path, not in an error object. Provider error *codes* are
  fine; provider error *messages* quote back what the visitor typed.
- **No secrets in the repository.** `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and
  `CONTACT_TO_EMAIL` live in Vercel only. `CONTACT_FROM_EMAIL` must sit on the
  Resend-verified domain `mail.andrejweb.be`.
- **`siteConfig.privacy` must track reality.** It names Resend as the delivery
  processor; if delivery is switched off or moved, change that and
  `privacy.lastUpdated` in the same commit, or the notice starts describing
  something the site does not do.

## Open thread

`app/api/contact/route.ts` carries a block of temporary `[contact-debug]`
logging, marked as such. It was added to find out why submissions were being
discarded silently and can be removed once a few real enquiries have arrived.
The legacy `renderedAt` fallback beside it goes at the same time.
