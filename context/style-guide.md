# Apex Restoration (California) — Style Guide

Authoritative token + pattern reference. Every ratio below is computed, not
estimated. Pair with `context/design-principles.md`.

## Tokens

```css
:root {
  /* Brand blue — hue 216. FILL vs TYPE split is load-bearing. */
  --blue:#1f6fe5;              /* fills only. white on it = 4.70:1 */
  --blue-ink:#1858bc;          /* blue as TYPE at <=15px. on white 6.64:1, on --bg-light 6.07:1 */
  --blue-hover:var(--blue-ink);
  --blue-deep:#123e86;         /* gradient mid-stop; type on white buttons over gradients. 10.20:1 */
  --blue-on-dark:#6ba5f5;      /* blue as type on flat ink. on --ink-800 = 7.19:1 */
  --blue-light:var(--blue-on-dark);
  --blue-tint:#e9f1fe;

  /* Ink — saturation 22%, NOT neutral black. See "why 22%" below. */
  --ink-900:#0b0e13;
  --ink-800:#12161c;           /* primary dark surface. white on it = 18.15:1 */
  --ink-700:#1b212a;
  --navy:var(--ink-800);       /* alias kept: 87 var() refs across the file */
  --navy-dark:var(--ink-900);

  /* Type on light */
  --ink:#15181d;               /* 17.79:1 */
  --body:#39414c;              /* 10.32:1 */
  --muted:#59616c;             /* 6.27:1 */
  --muted-2:#6f7681;           /* 4.58:1 — was #7d8794 at 3.64, an AA failure */

  /* Type on dark */
  --on-dark:#d7dbe1;           /* 13.06:1 */
  --on-dark-2:#b6bcc6;         /* 9.50:1 */
  --on-dark-3:#828993;         /* 5.14:1 — was #6d8093 at 4.04, an AA failure */
  --footer-text:#a7aeb8;       /* 8.11:1 */

  /* Lines & light surfaces */
  --border:#dfe3e8;
  --border-strong:#c4cad3;
  --rule:#d8dce2;
  --rule-on-dark:#2a313b;
  --bg-light:#f2f5f8;
  --bg-subtle:#f7f9fb;

  /* Gradients — permitted on exactly three selectors, named below. */
  --grad-signal:linear-gradient(90deg,#1f6fe5 0%,#123e86 42%,#0b0e13 100%);
  --grad-hero:linear-gradient(100deg,#0a0d12 0%,#12161c 52%,#161b24 100%);

  /* Shadows — alphas unchanged from the previous palette, RGB re-pointed. */
  --shadow-hairline:0 1px #12161c14;
  --shadow-img:0 10px 30px #12161c26;   /* must stay NEUTRAL, never blue */
  --shadow-card:0 8px 28px #12161c0f;
  --shadow-blue:0 6px 20px #1f6fe51f;
  --focus-ring:0 0 0 3px #1f6fe529;

  /* Feedback */
  --danger:#c0392b;            /* 5.44:1 on white */
  --success:#1f7a46;           /* was #2c9e57 at 3.07:1 on its tint — a failure */
  --success-tint:#e7f4ec;      /* success on tint = 4.72:1 */
}
```

### Why the ink is 22% saturated, not neutral

`public/images/hero.jpg` is a warm interior — cream drywall, beige walls, an
orange ladder — composited at `opacity:.35` over the background. Against a true
neutral black it reads visibly yellow. The old `#14202e` was 39% saturated,
which is what made it read "corporate navy". 22% is the tested middle: reads as
black beside the white page, still neutralises the photo's warmth. **Do not
"clean this up" to `#181818`.**

## Hard rules

1. **`--blue` is frozen.** White on it is 4.70:1 against a 4.5 requirement — 4%
   headroom. Lightening it by even one step breaks AA on every button.
2. **Fill vs type split.** `--blue` for backgrounds/fills. `--blue-ink` for blue
   text at ≤15px. `--blue-on-dark` for blue text on flat dark surfaces.
3. **All text on a `--grad-signal` surface is `#fff`.** Hierarchy comes from
   size, weight and tracking — never colour. `--on-dark-2` on the gradient's
   blue end is **2.37:1**. `--blue-on-dark` is banned on gradient surfaces.
4. **Gradients are permitted on exactly three selectors**: `.footer-cta`,
   `.contact-call-card` (both `--grad-signal`), and `.hero` (`--grad-hero`).
   Everything else stays flat — buttons especially. A gradient button is the
   single most dated move available and would sink the refresh.
5. Never gradient an element under 200px wide, on a `:hover` transition, on a
   border, or via `background-clip:text`.

## Letterspacing tiers

- `.2em` — eyebrows and micro-caps (`.eyebrow`, `.header-logo-tag`).
- `.3em` — `.rule-type`, the hairline-flanked wordmark treatment.
- `.18em` — `.footer-col-title`, and `.rule-type-lg` (tracking decreases as
  size increases).

## The RESTORATION treatment

Rules use `currentColor` at `opacity:.32` so the pattern self-adapts to any
surface without variant classes.

```css
.rule-type {
  display:flex; align-items:center; gap:16px;
  font-family:var(--font-heading);
  font-size:12.5px; font-weight:700;
  letter-spacing:.3em; text-transform:uppercase; line-height:1;
}
.rule-type::before,.rule-type::after {
  content:""; flex:1 1 0; height:1px; background:currentColor; opacity:.32;
}
.rule-type::after { margin-left:-.3em; }  /* cancel trailing letter-space */
.rule-type-center { justify-content:center; max-width:460px; margin-inline:auto; }
.rule-type-start::before { display:none; }
.rule-type-start::after  { flex:0 0 clamp(24px,7vw,72px); }
```

Do **not** apply `.rule-type` to `.page-hero .eyebrow` — those sit in a
`flex-direction:column` container and the hairlines would stretch the full
1080px. Only `.rule-type-center` (with its `max-width`) is safe there.

## Display typography

Montserrat weights become `["600","700","800","900"]` — weight 500 was loaded
and never referenced, so trading it for 900 is net-zero bytes.

Weight 900 goes on **two selectors only**: `.hero h1` and `.page-hero h1`.
Negative tracking floor is 30px — below that it costs legibility.

| selector | change |
| --- | --- |
| `.hero h1` | 900, `line-height:1.06`, `letter-spacing:-.022em` |
| `.page-hero h1` | 900, `line-height:1.08`, `-.02em` |
| `.legal h1` | `-.015em` |
| `.section-head h2` | `-.012em`, `line-height:1.15` |
| `.why-us-copy h2`, `.areas-copy h2`, `.faq-intro h2` | `-.012em` |
| `.about-copy h2`, `.service-detail h2`, `.expect h2` | `-.01em` |
| `.footer-cta-title` | weight 700 → 800 |
| anything ≤26px | unchanged |

At ≤640px reduce tracking ~40% (see the media-query block in `globals.css`).

**Never** add a blanket `h1,h2,h3 {}` rule — the file applies
`var(--font-heading)` per-selector in 27 places and a blanket rule would
double-apply tracking.

## Known residual mismatch

Service icons are colour emoji (💧🧫🌊🚱⛈️). After this reskin they are the only
multi-colour objects on the site; the brand graphic uses monochrome line
glyphs. Replacing them is out of scope for a colour/logo pass — flagged as
follow-up #1.
