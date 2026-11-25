import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FREE_PAGES } from "../lib/sabai-cat";
import { SabaiFreePages } from "./SabaiFreePages";

describe("SabaiFreePages", () => {
  it("links every free pack in a new tab", () => {
    render(<SabaiFreePages />);
    const links = screen.getAllByRole("link");
    expect(links.map((a) => a.getAttribute("href"))).toEqual(FREE_PAGES.map((page) => page.href));
    for (const a of links) {
      expect(a).toHaveAttribute("target", "_blank");
      expect(a.getAttribute("rel")).toContain("noopener");
    }
  });

  it("has a heading in English and Thai", () => {
    render(<SabaiFreePages />);
    expect(screen.getByRole("heading").textContent).toContain("Free pages to try");
    expect(screen.getByRole("heading").textContent).toContain("ภาพแจกฟรี");
  });
});
