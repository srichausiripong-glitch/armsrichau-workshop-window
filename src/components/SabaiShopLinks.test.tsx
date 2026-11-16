import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SHOP_LINKS } from "../lib/sabai-cat";
import { SabaiShopLinks } from "./SabaiShopLinks";

describe("SabaiShopLinks", () => {
  it("labels the Etsy and Gumroad shops in English and Thai", () => {
    const { container } = render(<SabaiShopLinks />);
    expect(container.querySelectorAll(".en")).toHaveLength(2);
    expect([...container.querySelectorAll(".th")].map((el) => el.textContent)).toEqual([
      "ร้านบน Etsy",
      "ร้านบน Gumroad",
    ]);
  });

  it("links to the three shops in a new tab", () => {
    render(<SabaiShopLinks />);
    const links = screen.getAllByRole("link");
    expect(links.map((a) => a.getAttribute("href"))).toEqual([
      SHOP_LINKS.etsy,
      SHOP_LINKS.gumroad,
      SHOP_LINKS.pinterest,
    ]);
    for (const a of links) expect(a).toHaveAttribute("target", "_blank");
  });
});
