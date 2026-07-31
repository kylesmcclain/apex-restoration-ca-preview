# Apex Restoration (California) — Design Principles

The single source of truth for design review on this site. A reviewer with no
other context should be able to judge any screen against this document.

## Who this is for

Someone whose home is actively flooding, or who found mold this morning. They
are stressed, often on a phone, often at night. Every screen is judged by one
question: **does this look like a real, competent company that will pick up the
phone right now?**

Design implications:
- The phone number is the most important element on every screen. It is never
  more than one thumb-reach away.
- Credibility beats delight. No playful illustration, no whimsical motion, no
  trendy asymmetry.
- Speed of comprehension over cleverness. A scannable hierarchy always wins.

## Brand DNA — derived from the owner's brand graphic

The California brand is **deliberately distinct** from the parent company's
site (apexrestoration.com). Do not drift back toward that identity.

| Attribute | This brand | Not this |
| --- | --- | --- |
| Blue | Royal, hue 217, zero red channel — `#1F6FE5` | Sky/cyan blue `#2E8FD8` (parent company) |
| Dark | Near-black ink, neutral | Blue-navy `#14202e` (parent company) |
| Type | Heavy, wide, confident display weights | Light/airy or condensed |
| Micro-type | Uppercase, wide tracking, hairline rules flanking | Sentence-case labels |
| Depth | Restrained blue→dark gradients on key CTAs only | Flat everywhere, or gradients everywhere |

Signature devices from the brand graphic, in priority order:
1. **The RESTORATION treatment** — uppercase, heavily letterspaced, flanked by
   thin horizontal rules. The brand's most recognizable gesture.
2. **The emergency bar** — blue→near-black horizontal gradient carrying the
   phone number in oversized numerals with `24/7` accented in blue.
3. **Blue accent slash** — the diagonal cut on the wordmark's X. Use sparingly;
   it is a logo device, not a page decoration.

## Non-negotiables

- **Contrast**: WCAG 2.1 AA. Body text ≥4.5:1, large display ≥3:1. Note that
  `#1F6FE5` on near-black is only 4.02:1 — on dark surfaces the blue must be
  `--blue-on-dark` (`#4B94F2`, 6.14:1). Never use the primary blue for small
  text on dark, and never on the `--bg-light` tint (4.33:1).
- **The phone number is always tappable** (`tel:` link) and never truncated,
  wrapped mid-number, or hidden behind an accordion.
- **No placeholder content ships.** No license numbers, no fake addresses, no
  lorem. If a real value is unknown, the element is removed, not faked.
- **Touch targets ≥44×44px** on mobile.
- **Focus states are visible** on every interactive element.

## Layout rhythm

- Container max-width 1160px, 40px side padding (20px ≤640px).
- Section vertical rhythm 84px (56px ≤640px). Do not invent new spacing values;
  reuse the existing scale.
- Two breakpoints only: 1000px and 640px. Everything must survive both.

## What "worse" looks like — reject on sight

- Gradients on more than the designated surfaces. This reads as dated Web 2.0
  and destroys the heavy-duty credibility the brand needs.
- The primary blue used as a large background field behind small body copy.
- Display headings that lose their weight — the brand's confidence lives in
  heavy type.
- Any element that recalls the parent company's cyan-blue palette.
- Decorative motion. The only motion on this site is smooth anchor scrolling.

## Review triage

Report findings in this order and label them exactly:
- `[Blocker]` — breaks the page, fails AA contrast, hides the phone number,
  or ships placeholder content.
- `[High-Priority]` — clear brand-fidelity or hierarchy failure a visitor would
  notice.
- `[Medium-Priority]` — noticeable inconsistency, worth fixing this pass.
- `[Nitpick]` — subjective polish. **Prefix with `Nit:` and do not block on it.**

Flag only what affects correctness, accessibility, or the stated brand
direction. A reviewer asked to find problems will always find some; resist
manufacturing them. If a screen is sound, say so.
