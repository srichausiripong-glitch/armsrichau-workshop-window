import type React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Route } from "../routes/index";

// The November open call ended on 8 November. The home page should say so in its
// markup, not only after the page script compares dates.
function renderHome() {
  const Home = Route.options.component as React.ComponentType;
  return render(<Home />).container;
}

describe("Home page after the November open call", () => {
  it("says applications are closed, in English and Thai", () => {
    const call = renderHome().querySelector("#open-call")!;
    expect(call.querySelector("#call-h")?.textContent).toContain(
      "Applications for November are closed",
    );
    expect(call.querySelector("#call-h")?.textContent).toContain("ปิดรับสมัครรอบพฤศจิกายนแล้ว");
  });

  it("no longer offers a way to apply", () => {
    const page = renderHome();
    expect(page.querySelectorAll('[data-request="apply"]')).toHaveLength(0);
    expect(page.querySelectorAll(".call-card, .nav-call")).toHaveLength(0);
    expect(page.textContent).not.toContain("Pay what you can");
    expect(page.textContent).not.toContain("Apply for a slot");
  });

  it("points people to the contact section instead", () => {
    const call = renderHome().querySelector("#open-call")!;
    expect(call.querySelector('a[href="#contact"]')).not.toBeNull();
  });
});
