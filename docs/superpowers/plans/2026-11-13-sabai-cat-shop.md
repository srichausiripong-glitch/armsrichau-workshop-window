# Sabai Cat Shop Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** A bilingual page at `/sabai-cat` that lists both Sabai Cat colouring books with every edition, price and store button, plus one footer link from the home page.

**Architecture:** Product data lives in one typed list (`src/lib/sabai-cat.ts`); a new TanStack route renders it with the portfolio's existing EN/TH pattern (`<span className="en">` / `<span className="th" lang="th">`, pre-paint language script as in `/apply`). Stores are external links only; no checkout.

**Tech Stack:** TanStack Start + React, Vitest + Testing Library (jsdom), plain CSS beside `portfolio.css`.

**Spec:** `docs/superpowers/specs/2026-11-13-sabai-cat-shop-design.md`

## Global Constraints

- Prices and links exactly as given: Thai Street Food Mini Pack (12 pages) $3.50 — payhip.com/b/qQyB4, etsy.com/listing/4615639252, sabaicat.gumroad.com/l/sabai-cat-mini; Full Collection (40 pages) $5.99 — payhip.com/b/PH3Np, etsy.com/listing/4615628891, sabaicat.gumroad.com/l/sabai-cat-full; Meowody English (30 pages) $4.99 — payhip.com/b/DOpuB, etsy.com/listing/4615655065, sabaicat.gumroad.com/l/meowody; Meowody Thai (30 pages) $2.99 — payhip.com/b/9lMSs only. All `https://`, `www.` for Etsy listings.
- Shop links: Etsy https://sabaicatcoloring.etsy.com, Gumroad https://sabaicat.gumroad.com, Pinterest https://www.pinterest.com/sabaicatcoloring/.
- Store button order in every edition: Payhip, Etsy, Gumroad.
- Paperbacks: "Paperback coming soon on Amazon" / "เล่มกระดาษ เร็ว ๆ นี้บน Amazon", no link.
- Every book states: illustrations made with AI tools and checked page by page for print; digital download, no physical product; personal use only.
- English is the default language; Thai copy has no ครับ/ค่ะ.
- Store links open in a new tab with `rel="noopener"`.
- Push only to `lovable-sync` (Lovable's branch); never force-push.

## Review Focus

- Phone width (375px): edition rows and three buttons wrap; no horizontal page scroll.
- Thai toggle: every visible string has a Thai span; nothing disappears when switching.
- Meowody Thai edition shows only a Payhip button, no empty or dead buttons.
- A store link mistyped or `http://` would send buyers to the wrong place — pinned by the data test.
- Slow images: covers carry `width`/`height` so the layout does not jump.

---

### Task 1: Product data

**Files:**
- Create: `src/lib/sabai-cat.ts`
- Test: `src/lib/sabai-cat.test.ts`

**Interfaces:**
- Produces:
  ```ts
  export type Store = "payhip" | "etsy" | "gumroad";
  export type Edition = { id: string; en: string; th: string; pages: number; priceUsd: string; links: Partial<Record<Store, string>> };
  export type Book = { id: "thai-street-food" | "meowody"; title: string; tagEn: string; tagTh: string; blurbEn: string; blurbTh: string;
    cover: { src: string; width: number; height: number; altEn: string }; editions: Edition[]; isbn: string };
  export const STORE_ORDER: Store[]; // ["payhip", "etsy", "gumroad"]
  export const STORE_LABEL: Record<Store, string>; // "Payhip" | "Etsy" | "Gumroad"
  export const SHOP_LINKS: { etsy: string; gumroad: string; pinterest: string };
  export const BOOKS: Book[];
  ```

- [ ] **Step 1: Write the failing test** — `describe("Sabai Cat catalogue")` with:
  - `it("lists both books with the agreed editions and prices")`: expect `BOOKS.map(b => b.id)` toEqual `["thai-street-food", "meowody"]`; expect editions as `[pages, priceUsd]` toEqual `[[12,"3.50"],[40,"5.99"]]` and `[[30,"4.99"],[30,"2.99"]]`.
  - `it("uses https store links only")`: every link in every edition and in `SHOP_LINKS` matches `/^https:\/\//`.
  - `it("sells the Thai Meowody only on Payhip")`: `Object.keys(thaiEdition.links)` toEqual `["payhip"]` and the link is `"https://payhip.com/b/9lMSs"`.
  - `it("gives every edition at least one store")`.
  - `it("keeps the exact Gumroad and Etsy links")`: spot-check `sabai-cat-full` and `etsy.com/listing/4615655065` from Global Constraints.
- [ ] **Step 2: Run** `npx vitest run src/lib/sabai-cat.test.ts` — Expected: FAIL, module not found.
- [ ] **Step 3: Implement `src/lib/sabai-cat.ts`** with the values from Global Constraints. Blurbs, two lines each, from `~/Desktop/05_Coloring-Book/listing/etsy.md` and `listing/meowody.md` (Kati the street cat and Thai street food; a Thai prime-time soap opera starring cats). Cover entries point at Task 2's files: `/img/sabai-cat-street-food.webp` 1254×1254, `/img/sabai-cat-meowody.webp` 2000×2000 (use the real converted size). ISBNs 9798141978265 and 9798142092946.
- [ ] **Step 4: Run** the same command — Expected: PASS.
- [ ] **Step 5: Commit** `feat: add Sabai Cat catalogue data`.

### Task 2: The `/sabai-cat` page

**Files:**
- Create: `src/routes/sabai-cat.tsx`, `src/sabai-cat.css`, `src/components/SabaiBook.tsx`
- Create: `public/img/sabai-cat-street-food.webp`, `public/img/sabai-cat-meowody.webp`
- Test: `src/components/SabaiBook.test.tsx`

**Interfaces:**
- Consumes: `Book`, `STORE_ORDER`, `STORE_LABEL` from Task 1.
- Produces: `export function SabaiBook({ book }: { book: Book }): JSX.Element`.

- [ ] **Step 1: Write the failing test** — render `<SabaiBook book={BOOKS[1]} />`:
  - English edition row has links named Payhip, Etsy, Gumroad in that order, each with `target="_blank"` and `rel` containing `noopener`.
  - Thai edition row has exactly one link (Payhip).
  - Text includes "$4.99", "$2.99", "AI" and "Paperback coming soon on Amazon".
  - Cover `<img>` has `width` and `height` attributes.
- [ ] **Step 2: Run** `npx vitest run src/components/SabaiBook.test.tsx` — Expected: FAIL.
- [ ] **Step 3: Implement `SabaiBook`**: article with cover, title, EN/TH tag and blurb, one row per edition (edition name, page count, `$price`, buttons in `STORE_ORDER`, skipping missing stores), paperback note, small print (AI tools, digital download, personal use) in EN and TH.
- [ ] **Step 4: Run** the test — Expected: PASS.
- [ ] **Step 5: Convert covers** from `~/Desktop/05_Coloring-Book/cover/Sabai-Cat-01_cover-art-v1.png` and `.../Meowody-Book02/build/sale/listing-images/meowody_en_01_cover.png` to webp (Pillow, quality 82, Meowody resized to 1200px), into `public/img/`. Update Task 1's sizes if they differ.
- [ ] **Step 6: Implement the route** `createFileRoute("/sabai-cat")`, head modelled on `/apply` minus `noindex`: title "Sabai Cat Coloring — Thai street food and soap-opera cat colouring pages", description, `og:image` the street-food cover, stylesheets `portfolio.css` + `sabai-cat.css`, same `PRE_PAINT` script. Page: back link to `/`, EN/TH toggle, heading "Sabai Cat Coloring", one-line intro, shop links row (Etsy shop, Gumroad shop, Pinterest), then `BOOKS.map(b => <SabaiBook book={b} />)`.
- [ ] **Step 7: Style** `sabai-cat.css`: two-column book card (cover left) from 760px up, stacked below; buttons wrap with `flex-wrap`; reuse portfolio tokens (`--accent`, `.btn`).
- [ ] **Step 8: Run** `npm test` and `npm run build` — Expected: all tests pass, build succeeds.
- [ ] **Step 9: Commit** `feat: add Sabai Cat shop page`.

### Task 3: Home footer link and live check

**Files:**
- Modify: `src/routes/index.tsx:798-801` (`footer.foot`)

- [ ] **Step 1:** Add a third `<p>` to the footer: link to `/sabai-cat`, "Sabai Cat Coloring shop" / "ร้านสมุดระบายสี Sabai Cat".
- [ ] **Step 2: Verify in the preview** (`npm run dev`): `/sabai-cat` in EN and TH, at 375px and desktop, no console errors; every store button href matches Global Constraints; `/sitemap.xml` lists `/sabai-cat`; home footer link works.
- [ ] **Step 3: Commit** `feat: link the Sabai Cat shop from the footer`.
- [ ] **Step 4: Ship** — push the commits to `lovable-sync` (fast-forward, no force). If git push is still refused (repo moved to `srichausiripong-glitch`), upload the changed files through GitHub's web upload to `lovable-sync` in Chrome, then copy them to `main` the same way. Arm presses Publish in Lovable; check https://armsrichau.com/sabai-cat afterwards.
