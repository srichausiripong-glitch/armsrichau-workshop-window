import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BOOKS } from "../lib/sabai-cat";
import { SabaiBook } from "./SabaiBook";

const meowody = BOOKS[1]!;

describe("SabaiBook", () => {
  it("shows Payhip, Etsy and Gumroad in order for the English edition, opening in a new tab", () => {
    render(<SabaiBook book={meowody} />);
    const row = screen.getByTestId("edition-meowody-en");
    const links = within(row).getAllByRole("link");
    expect(links.map((a) => a.textContent)).toEqual(["Payhip", "Etsy", "Gumroad"]);
    for (const a of links) {
      expect(a).toHaveAttribute("target", "_blank");
      expect(a.getAttribute("rel")).toContain("noopener");
    }
  });

  it("shows only a Payhip button for the Thai edition", () => {
    render(<SabaiBook book={meowody} />);
    const links = within(screen.getByTestId("edition-meowody-th")).getAllByRole("link");
    expect(links.map((a) => a.getAttribute("href"))).toEqual(["https://payhip.com/b/9lMSs"]);
  });

  it("states prices, the AI note and the paperback note", () => {
    const { container } = render(<SabaiBook book={meowody} />);
    const text = container.textContent ?? "";
    expect(text).toContain("$4.99");
    expect(text).toContain("$2.99");
    expect(text).toContain("AI");
    expect(text).toContain("Paperback coming soon on Amazon");
  });

  it("gives the cover a fixed size so the layout does not jump", () => {
    render(<SabaiBook book={meowody} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("width", "1200");
    expect(img).toHaveAttribute("height", "1200");
  });
});
