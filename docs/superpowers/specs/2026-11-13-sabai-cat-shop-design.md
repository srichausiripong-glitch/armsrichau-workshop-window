# Sabai Cat shop page — short design

**Date:** 2026-11-13 · **Size:** small change

## Why
Arm sells two Sabai Cat colouring books (Thai Street Food, Meowody) on Payhip, Etsy and Gumroad and wants people to come and buy. Buyers mostly arrive from Pinterest, Etsy and Gumroad and read English; the portfolio home page is written for health and rights employers and funders.

## Goals
- One page where a buyer sees both books, every edition, its price, and a button to each store that sells it.
- A link Arm can put on Pinterest and store profiles.

## Non-goals
- No checkout on the site: buying happens on Payhip, Etsy or Gumroad.
- No cart, accounts, stock or payments.
- No change to the portfolio home page beyond one small link.

## Anti-goals
- Prices or buy buttons mixed into the portfolio sections.
- A price on the page that differs from the store.

## Approaches
- **A. Separate page `armsrichau.com/sabai-cat` — picked.** Fastest: reuses the site's bilingual setup, fonts and Lovable deploy. Downside: the address carries Arm's name, not the brand.
- B. Separate Sabai Cat site (own domain, new Lovable project): strongest brand, more time and credits. Move there later if the books take off.
- C. Section on the home page: rejected, it mixes shop and portfolio audiences.

## The design
- New route `src/routes/sabai-cat.tsx`, same page shell as `/apply` (portfolio CSS, EN/TH toggle, English first since buyers mostly read English).
- Top: "Sabai Cat Coloring", one line on what the books are, links to the Etsy shop, Gumroad shop and Pinterest.
- Book 1, Thai Street Food: cover image, short description, two editions —
  Mini Pack (12 pages) $3.50 and Full Collection (40 pages) $5.99, each with Payhip, Etsy and Gumroad buttons.
- Book 2, Meowody: cover, description, English edition $4.99 (Payhip, Etsy, Gumroad) and Thai edition $2.99 (Payhip only).
- Paperbacks: a "Paperback coming soon on Amazon" note per book, no link, until Amazon approves (ISBNs 9798141978265 and 9798142092946). Arm adds the links later.
- All store links open in a new tab. Product and price data live in one list in the route file so a new book or the Amazon links is a one-place edit.
- Indexed and in the sitemap (the sitemap picks up routes on its own); own title, description and social preview image.
- Home page: one small "Sabai Cat shop" link in the footer.

- Each book says, like the store listings do, that the illustrations were made with AI tools and checked page by page for print (Arm's listing notes say every channel must disclose this), that files are a digital download and for personal use.

## Sources (found in `~/Desktop/05_Coloring-Book`)
- Covers: `cover/Sabai-Cat-01_cover-art-v1.png` (Thai Street Food, cat at a street-food cart) and `Meowody-Book02/build/sale/listing-images/meowody_en_01_cover.png`; converted to webp in `public/img/`.
- Copy: `listing/etsy.md` and `listing/meowody.md` (EN and TH), shortened to two lines per book.
- Page counts: Mini 12, Full 40, Meowody 30.

## Left to the builder
- Button order per edition: Payhip first (lowest fees, direct to Arm, matches the note in `listing/gumroad.md`), then Etsy, Gumroad. Arm's call to change.
