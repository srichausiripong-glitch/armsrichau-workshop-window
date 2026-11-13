import { describe, expect, it } from "vitest";
import { BOOKS, SHOP_LINKS, STORE_ORDER } from "./sabai-cat";

const [streetFood, meowody] = BOOKS as [(typeof BOOKS)[number], (typeof BOOKS)[number]];

const allLinks = () => [
  ...BOOKS.flatMap((book) => book.editions.flatMap((edition) => Object.values(edition.links))),
  ...Object.values(SHOP_LINKS),
];

describe("Sabai Cat catalogue", () => {
  it("lists both books with the agreed editions and prices", () => {
    expect(BOOKS.map((book) => book.id)).toEqual(["thai-street-food", "meowody"]);
    expect(streetFood.editions.map((e) => [e.pages, e.priceUsd])).toEqual([
      [12, "3.50"],
      [40, "5.99"],
    ]);
    expect(meowody.editions.map((e) => [e.pages, e.priceUsd])).toEqual([
      [30, "4.99"],
      [30, "2.99"],
    ]);
  });

  it("uses https store links only", () => {
    for (const link of allLinks()) expect(link).toMatch(/^https:\/\//);
  });

  it("sells the Thai Meowody only on Payhip", () => {
    const thai = meowody.editions[1]!;
    expect(Object.keys(thai.links)).toEqual(["payhip"]);
    expect(thai.links.payhip).toBe("https://payhip.com/b/9lMSs");
  });

  it("gives every edition at least one store", () => {
    for (const edition of BOOKS.flatMap((book) => book.editions)) {
      expect(STORE_ORDER.some((store) => edition.links[store])).toBe(true);
    }
  });

  it("keeps the exact store links", () => {
    expect(streetFood.editions[0]!.links).toEqual({
      payhip: "https://payhip.com/b/qQyB4",
      etsy: "https://www.etsy.com/listing/4615639252",
      gumroad: "https://sabaicat.gumroad.com/l/sabai-cat-mini",
    });
    expect(streetFood.editions[1]!.links).toEqual({
      payhip: "https://payhip.com/b/PH3Np",
      etsy: "https://www.etsy.com/listing/4615628891",
      gumroad: "https://sabaicat.gumroad.com/l/sabai-cat-full",
    });
    expect(meowody.editions[0]!.links).toEqual({
      payhip: "https://payhip.com/b/DOpuB",
      etsy: "https://www.etsy.com/listing/4615655065",
      gumroad: "https://sabaicat.gumroad.com/l/meowody",
    });
    expect(SHOP_LINKS).toEqual({
      etsy: "https://sabaicatcoloring.etsy.com",
      gumroad: "https://sabaicat.gumroad.com",
      pinterest: "https://www.pinterest.com/sabaicatcoloring/",
    });
  });
});
