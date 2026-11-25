import type React from "react";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Route } from "../routes/index";

function renderHome() {
  const Home = Route.options.component as React.ComponentType;
  return render(<Home />).container;
}

describe("Home page, November 2026 update", () => {
  it("lists RIMES as the current role at the top of Experience", () => {
    const first = renderHome().querySelector("#experience .timeline > li")!;
    expect(first.querySelector("h3")?.textContent).toContain("Project Officer");
    expect(first.querySelector(".t-org")?.textContent).toContain("RIMES");
    expect(first.textContent).toContain("SOFF");
  });

  it("keeps internal RIMES detail off the page", () => {
    const text = renderHome().textContent ?? "";
    for (const word of ["probation", "Dusadee", "ทดลองงาน", "PCA"])
      expect(text).not.toContain(word);
  });

  it("describes ArmShares as a running series, not just EP.1", () => {
    const armshares = renderHome().querySelector(".armshares")!;
    expect(armshares.textContent).toContain("30");
    expect(armshares.textContent).toContain("mpox");
    expect(armshares.textContent).not.toContain("is out in Thai and English");
  });

  it("no longer says Arm is open to new roles", () => {
    const page = renderHome();
    expect(page.querySelector(".status")).toBeNull();
    expect(page.textContent).not.toContain("Open to");
    expect(page.textContent).not.toContain("เปิดรับงาน");
  });
});
